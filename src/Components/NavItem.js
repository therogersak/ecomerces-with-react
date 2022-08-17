import React from "react";
import { ChevronDownIcon } from "@heroicons/react/outline";
function NavItem({ title, show }) {
  return (
    <>
      <div className="flex items-center space-x-2 cursor-pointer whitespace-nowrap">
        <span className="font-bold text-sm">{title}</span>
        {show && <ChevronDownIcon className="h-3" />}
      </div>
    </>
  );
}

export default NavItem;
