import { createContext, useState, useContext } from "react"

export const CartContext = createContext(null)

export const useCart = () => {
  const cart = useContext(CartContext)
  return cart
}

export const CartProvider = (props) => {
  const [items, setItems] = useState([])
  return (
    <CartContext.Provider value={{ items, setItems }}>
      {props.children}
    </CartContext.Provider>
  )
}
//jab bhi ham cartprovider ko use karenege toh isko automatically cartcontext provider se wrap kardega taki voh hamarii state ko read kar sake!
