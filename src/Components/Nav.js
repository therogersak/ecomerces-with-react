import React from "react";
import NavItem from "./NavItem";

function Nav() {
  return (
    <>
      <div className="shadow-xl py-2">
        <div className="flex items-center justify-between overflow-x-scroll scrollbar-hide px-5 space-x-5 max-w-6xl mx-auto py-1">
          <NavItem title="Electronics" show />
          <NavItem title="Tvs Appliances" show />
          <NavItem title="Men" show />
          <NavItem title="Women" show />
          <NavItem title="Baby Kids" show />
          <NavItem title="Home Furnitures" show />
          <NavItem title="Sports, Books More" show />
          <NavItem title="Flights" />
          <NavItem title="Offer Zone" />
        </div>
      </div>
    </>
  );
}

export default Nav;
