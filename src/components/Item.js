import React, { useState } from "react";

// when the user clicks the <button> element, the item should be added to their virtual cart. The way we'll show the user that the item is in the cart is by changing the className on the <li> element

function Item({ name, category }) {

  const [ inCart, setState ] = useState(false)

  let cartStatus = inCart ? "in-cart" : ""

  let buttonText = inCart ? "Remove from " : "Add to "

  let buttonClass = inCart ? "remove" : "add"

  function addToCart() {       
    setState(!cartStatus)
  };

  return (
    <li className={cartStatus}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={buttonClass} onClick={() => addToCart()}>{buttonText}Cart</button>
    </li>
  );
}

export default Item;
