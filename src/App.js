import logo from './logo.svg';
import './App.css';
import MenuList from "./components/MenuList";
import Cart from './components/Cart';
import { useState } from 'react';


function App() {
  let menu = [
    { name: "Щи", price: 240, ingredients: ["говядина, ", "капуста, ", "картошка "] },
    { name: "Шашлык", price: 330, ingredients: ["свинина, ", "лук "] },
    { name: "Чикенбургер", price: 200, ingredients: ["курица, ", "помидор, ", "лук, ", "булочка "] }
  ];

  const [cartItems, setCartItems] = useState([]);

  const onItemSelect = (item) => {
    console.log(item.name);
    setCartItems([...cartItems, item]);
    console.log(cartItems);
  };

  return (
    <div className="App">
      <header>
        <Cart items={cartItems} />
      </header>
      <div className='container mx-auto mt-3.5'>
        <div className='grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
          <MenuList items={menu} onSelect={onItemSelect} />
        </div>
      </div>
    </div>
  );
}

export default App;
