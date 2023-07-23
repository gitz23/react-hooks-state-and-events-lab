import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import { useState } from "react";


function App(){
  const [color, setColor] = useState(false)
  //const [clickCount, setClickCount] = useState(0)
  //const [buttonText, setButtonText] = useState("Add to Cart")

  function changeColor(){
      setColor(appClass)
  }


  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = color ? "App dark" : "App light"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={changeColor}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}


export default App;
