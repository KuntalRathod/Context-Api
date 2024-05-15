import "./App.css"
import Item from "./components/Item"
import Cart from "./components/Cart"
function App() {
  return (
    <>
      <div className="App">
        <Item name="Macbook pro" price={1000000} />
        <Item name="Pen drive" price={5000} />
        <Item name="i Phone 11" price={40000} />
        <Cart />
      </div>
    </>
  )
}

export default App
