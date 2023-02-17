const MenuList = ({ items }) => {
    return items.map((item) => (
        <div className="bg-violet-500 border-0">
            <h2>{item.name}</h2>
            <div>Cтоимость блюда: {item.price} руб.</div>
        </div>));
};

export default MenuList;
