import React, { useState, useEffect } from "react";
import { StarIcon, HeartIcon } from "@heroicons/react/outline";
import { HeartIcon as HeartFill } from "@heroicons/react/solid";
import { useDispatch, useSelector } from "react-redux";
import { like } from "../features/likeSlice";
import { Link, Router } from "react-router-dom";
function Item({ count, imgURL, title, rate, price, id }) {
  const dispatch = useDispatch();
  const value = false;
  

  return (
    <>
      <div className="relative select-none" key={id}>
        <Link to={`/products/${id}`} onClick={(e) => {window.scrollTo(0,0)}}>
          <div className="space-y-3 m-2">
            <div className="w-[200px] h-[200px] mx-auto">
              <img
                src={imgURL}
                alt={title}
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="text-center">{title}</h3>
            <div className="flex items-center space-x-2 justify-center">
              <div className="flex items-center bg-green-500 text-white px-1 shadow-lg rounded-sm">
                <span>{rate}</span> <StarIcon className="h-4" />{" "}
              </div>
              <span>({count})</span>
            </div>
            <div className="flex items-center justify-center">
              <span className="font-bold flex items-center">
                ${price}{" "}
                <p className="text-sm text-gray-500 pl-3 line-through">
                  {price - 10}
                </p>
              </span>
            </div>
          </div>
        </Link>
        {value ? (
          <div>
            <HeartFill
              onClick={() => {
                dispatch(like(false));
              }}
              className="h-5 absolute scale-125 duration-200  text-blue-500 top-0 right-0 cursor-pointer"
            />
          </div>
        ) : (
          <div>
            <HeartIcon
              onClick={() => {
                dispatch(like(true));
              }}
              className="h-5 absolute  text-gray-400 top-0 right-0 cursor-pointer"
            />
          </div>
        )}
      </div>
    </>
  );
}

export default Item;
