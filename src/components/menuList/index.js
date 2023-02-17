const MenuList = ({ items }) => {
    return items.map((item) => <div className="bg-yellow-500 border-0 "><div className="">{item.name}</div><br></br>
        стоимость блюда: {item.price} руб.</div>);
};

export default MenuList;
