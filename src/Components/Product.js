import {
  doc,
  onSnapshot,
} from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { db } from "../Firebase";
import { useParams } from "react-router-dom";
import { StarIcon, HeartIcon } from "@heroicons/react/solid";
import { HeartIcon as HeartFill } from "@heroicons/react/outline";
import Collection from './Collection'

function Product() {
  const [product, setProduct] = useState();
  const { id } = useParams();
  const [img, setImg] = useState(null);
  const [value, setValue] = useState(false);


 

  useEffect(() => {
    onSnapshot(
      doc(
        db,
        "flipkart",
        `${"camera-photo" && "clothing-shoes-accessories"}`,
        "products",
        id
      ),
      (snapshot) => setProduct(snapshot.data())
    );
  }, [id]);

  const imgHandler = (e) => {
    setValue(true);
    console.log(e.target);
    setImg(e.target.src);
  };



  return (
    <>
      <div>
        <div className="flex items-center justify-between space-x-5 flex-col md:flex-row pt-3 px-2 max-w-7xl mx-auto mt-3">
          <div className="flex gap-4 flex-row-reverse">
            <div className="flex items-center justify-center flex-col">
              <div className="w-[300px] h-[300px] border overflow-hidden border-gray-300 p-2 relative">
                <img
                  src={value ? product?.imgUrl && img : product?.imgUrl || img}
                  className="w-full h-full object-contain"
                />

                <div className="border-2 rounded-full w-8 absolute top-2 cursor-pointer right-2 h-8 flex items-center justify-center">
                  <HeartFill className="h-5 text-blue-500" />
                </div>
              </div>

              <div className=" flex items-center my-4 w-full justify-between space-x-3">
                <button className=" bg-yellow-500 hover:shadow-2xl transition-all duration-200 font-bold text-white py-3 w-full shadow-md rounded-sm">
                  Add Cart
                </button>
                <button className="bg-orange-500 transition-all duration-200 rounded-sm hover:shadow-lg font-bold text-white py-3 w-full">
                  Buy Now
                </button>
              </div>
            </div>
            <div>
              {product &&
                product.gallery.map((img) => (
                  <div className="w-[100px] border-2 p-2 mb-1 border-gray-500 cursor-pointer hover:border hover:border-blue-500">
                    <img
                      src={img.original}
                      className="w-full h-full object-contain"
                      onMouseOver={(e) => imgHandler(e)}
                    />
                  </div>
                ))}
            </div>
          </div>
          <div className="max-w-3xl my-5 md:my-0 space-y-2">
            <h3 className="font-bold text-xl">{product?.title}</h3>
            <div className="flex items-center space-x-2">
              <div className="bg-green-500 flex items-center px-2">
                <span className="text-white">{product?.rate}</span>
                <StarIcon className="h-4 text-white" />
              </div>
              <div>
                <span>{product?.count} Reviews</span>
              </div>
            </div>
            <span className="text-green-500">Special price</span>
            <div className="flex items-center space-x-2">
              <p className="text-[20px] font-bold">${product?.price}</p>
              <span className="text-gray-400 line-through text-sm font-bold">
                ${product?.price - 10}
              </span>
            </div>
            <div>
              <p>{product?.description}</p>
            </div>
            <div className="w-fit shadow-md border my-3 p-2 text-blue-500 font-bold ">
              {product?.brand}
            </div>
          </div>
        </div>
        {/* <Collection flex /> */}
      </div>
    </>
  );
}

export default Product;
