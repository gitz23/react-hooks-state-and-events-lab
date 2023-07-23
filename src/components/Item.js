import React from "react";
import { useState } from "react";

function Item({ name, category }) {
  const [className, setClassName] = useState("")

  function handleClick(){
    return(
      setClassName("in-cart")
    )
  }

  return (
    <li className={className}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick} className="add">Add to Cart</button>
    </li>
  );
}

export default Item;
