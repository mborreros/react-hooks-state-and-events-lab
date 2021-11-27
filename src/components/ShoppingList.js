import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const [ selectedCategory, setState ] = useState(items)

  function handleChange(event) {
    let filteredList = items.filter((item) => (item.category === event.target.value || event.target.value === "All"))
    setState(filteredList)
  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={(event) => handleChange(event)}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {selectedCategory.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
