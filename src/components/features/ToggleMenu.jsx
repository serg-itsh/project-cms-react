
import IconMenu from "../icons/IconMenu";
import React from "react";


export default function ToggleMenu({ setIsShown, isShown }) {


  return (
    <button
      type="button"
      className="  inline-flex h-8 w-8 z-[50] items-center  rounded-md text-sm transition duration-300  ease-in-out "
      aria-label="Toggle Menu"
      onClick={() => {
        setIsShown(!isShown);
        document.body.classList.toggle("lockBody");

     
      }}
    >
     
      <IconMenu />
    </button>
  );
}
