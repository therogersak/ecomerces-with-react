import React, { useState, useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../Firebase";
import Item from "./Item";

function Collection() {
  const [items, setItems] = useState([]);

  useEffect(
    () =>
      onSnapshot(
        collection(db, "flipkart", "computers-and-accessories", "products"),
        (snapshot) => {
          setItems(snapshot.docs);
        }
      ),
    [db]
  );

  console.log(items)
  return (
    <>
      <div className="my-5">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5">
          {
            items && items.map((item) => (
              <Item count={item.data().count} imgURL={item.data().imgUrl} price={item.data().price} rate={item.data().rate} title={item.data().title} />
            ))
          }
        </div>
      </div>
    </>
  );
}

export default Collection;
