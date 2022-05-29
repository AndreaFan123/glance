import React, { useRef, useEffect } from "react";

export default function DropDown(props) {
  // Use useRef to get reference of dom element
  const dropdownRef = useRef();
  // {current: undefined}
  console.log(dropdownRef);

  const handleClick = (event) => {
    if (dropdownRef && !dropdownRef.current.contains(event.target))
      props.onClose ? props.onClose() : "";
    // It will show dom node
    console.log(dropdownRef.current);
    // if (
    //   dropdownRef &&
    //   !dropdownRef.current?.contains(event.target) &&
    //   props.onClose
    // )
    //   props.onClose();
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);
    // console.log("Added");

    return () => {
      document.removeEventListener("click", handleClick);
      // console.Console("Removed");
    };
  });

  return <div ref={dropdownRef}> {props.children} </div>;
}
