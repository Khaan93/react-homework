const MenuList = ({ items }) => {
    return items.map((item) => <div>{item.name}</div>);
};

export default MenuList;
