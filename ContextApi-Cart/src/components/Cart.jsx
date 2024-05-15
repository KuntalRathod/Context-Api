import React from "react"
import { useCart } from "../context/Cart"

//jab bhi hamara context change hota hai jaha jaha bhi jo jo component us context par dependend hota hai voh re-render ho jata hai

const Cart = () => {
  const cart = useCart()
  const total = cart.items.reduce((a, b) => a + b.price, 0)
  //const total = cart.items.reduce((a, b) => a + Number(b.price), 0)
  return (
    <div className="cart">
      <h1> Cart </h1>
      {cart &&
        cart.items.map((item) => (
          <li>
            {item.name} - ${item.price}
          </li>
        ))}

      <h5>Total bill: ${total}</h5>
    </div>
  )
}

export default Cart
