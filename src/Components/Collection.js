import React, { useState, useEffect } from "react";
import {
  collection,
  collectionGroup,
  doc,
  getDocs,
  onSnapshot,
  query,
} from "firebase/firestore";
import { db } from "../Firebase";
import Item from "./Item";
import Banner from "./Banner";

function Collection({ flex, tag }) {
  const [collections, setcollections] = useState([]);
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    const featchData = async () => {
      const products = [];
      const docRef = await query(collectionGroup(db, "products"));
      const querySnapshot = await getDocs(docRef);
      querySnapshot.forEach((doc) => {
        products.push({ ...doc.data(), id: doc.id });
      });

      setItems(products);
    };
    featchData();
  }, [db]);

  useEffect(() => {
    if (tag) {
      const data = items.filter((doc) => {
        return doc?.brand.includes(tag);
      });

      console.log(data);
      setFilter(data);
    }
  }, [tag]);

  console.log(items);
  return (
    <>
      <div className="my-5 px-3">
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 shadow-2xl p-5 ${
            flex && "flex items-center overflow-x-scroll"
          }`}
        >
          { tag ? filter &&
            filter.map((item) => (
              <Item
                key={item.id}
                count={item.count}
                imgURL={item.imgUrl}
                price={item.price}
                rate={item.rate}
                title={item.title}
                id={item.id}
              />
            )) : items &&
            items.map((item) => (
              <Item
                key={item.id}
                count={item.count}
                imgURL={item.imgUrl}
                price={item.price}
                rate={item.rate}
                title={item.title}
                id={item.id}
              />
            ))}
        </div>
        <Banner center />
      </div>
    </>
  );
}

export default Collection;
