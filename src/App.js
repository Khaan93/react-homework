import logo from './logo.svg';
import './App.css';
import MenuList from "./components/MenuList";

let menu = [{ name: "Щи" }, { name: "Шашлык" }, { name: "Чикенбургер" }];

function App() {
  return (
    <div className="App">
      <header></header>
      <div className='container'>
        <div className='columns-1 columns-sn-3'>
          <MenuList items={menu} />
        </div>
      </div>
    </div>
  );
}

export default App;
