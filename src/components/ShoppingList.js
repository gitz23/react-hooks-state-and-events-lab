import React from "react";
import Item from "./Item";
import { useState } from "react";

function ShoppingList({ items }) {
  //declares a state variable and its alterFunction
  const [selectedCategory, setSelectedCategory] = useState("All")

  //function that gets the value of  the selected option
  function filterList(e){
    setSelectedCategory(e.target.value)
  }

  //filters the items in the array by which is selcted by the category
  //returns the item.category value if false 
  const newList = items.filter((item) =>{
    if(selectedCategory === "All"){
      return true;
    }else{
      return item.category === selectedCategory;
    }
  })

  //iterates through all items of newList and passes them as props for the 
  //item component
  function newItems(){
   return( newList.map((item) => (
      <Item key={item.id} name={item.name} category={item.category} />
  )))
  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={filterList}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {newItems}
      </ul>
    </div>
  );
}

export default ShoppingList;
