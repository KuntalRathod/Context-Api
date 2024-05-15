import React from "react"
import { useCart } from "../context/Cart"

const Item = ({ name, price }) => {
  const cart = useCart()

  console.log("Cart", cart)
  return (
    <div className="item-card">
      <h4>{name} </h4>
      <p>Price: ${price}</p>
      <button
        onClick={() =>
          cart.setItems([...cart.items, { name: name, price: price }])
        }
      >
        Add To cart
      </button>
    </div>
  )
}

export default Item
