import logo from './logo.svg';
import './App.css';
import menuList from './components/menuList';

let menu = [{ name: "Щи" }, { name: "Шашлык" }, { name: "Чикенбургер" }];

function App() {
  return (
    <div className="App">
      <header></header>
      <div className='container'>
        <div className='grid-cols-1'>
          <menuList items={menu} />
        </div>
      </div>
    </div>
  );
}

export default App;
