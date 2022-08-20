import React from "react";
import {
  SearchIcon,
  ShoppingCartIcon,
  ChevronDownIcon,
} from "@heroicons/react/outline";
import {Link} from 'react-router-dom';

function Header() {
  return (
    <>
      <div className="bg-blue-500">
        <div className=" py-2 max-w-7xl space-x-12 mx-auto flex items-center justify-between px-3">
          <Link to="/"><div className="w-[70px] cursor-pointer">
            <img
              src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png"
              className="w-full h-full"
            />
            <p className="text-sm italic flex  text-white">Expore <span className="text-yellow-500 pl-1">Plus</span></p>
          </div></Link>

          <div className="bg-gray-50 shadow-xl py-2 flex-1 px-3 rounded-sm flex items-center space-x-3">
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent border-none outline-none w-full h-full"
            />
            <SearchIcon className="h-6" />
          </div>

          <div className="flex">
            <ul className="flex items-center space-x-6 text-white font-bold">
              <li className="flex items-center ">
                Flipkart <ChevronDownIcon className="h-3 pl-1" />
              </li>
              <li className="flex items-center ">Become a Seller</li>
              <li className="flex items-center ">
                More <ChevronDownIcon className="h-3 pl-1" />
              </li>
              <li className="flex items-center ">
                <ShoppingCartIcon className="h-6" />
                Cart
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
