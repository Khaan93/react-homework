import logo from './logo.svg';
import './App.css';
import MenuList from "./components/MenuList";

let menu = [{ name: "Щи", price: 240 }, { name: "Шашлык", price: 330 }, { name: "Чикенбургер", price: 200 }];

function App() {
  return (
    <div className="App">
      <header></header>
      <div className='container mx-auto mt-2.5'>
        <div className='grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
          <MenuList items={menu} />
        </div>
      </div>
    </div>
  );
}

export default App;
