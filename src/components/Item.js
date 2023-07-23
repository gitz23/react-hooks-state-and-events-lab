import React from "react";
import { useState } from "react";

function Item({ name, category }) {
  const [className, setClassName] = useState("")
  const [addCart, setChangeCart] = useState("Add to Cart")

  function handleClick(){
    return(
      setClassName("in-cart")
    )
  }

  function changeText(){
    return(
      setChangeCart("Remove From Cart")
    )
  }

  function changeAll (){
    return changeText(), handleClick()
  }
  
  return (
    <li className={className}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={changeAll} className="add">{addCart}</button>
    </li>
  );
}

export default Item;
