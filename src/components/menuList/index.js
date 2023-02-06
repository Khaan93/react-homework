const menuList = ({ items }) => {
    return items.map((item) => <div>{item.name}</div>);
};

export default menuList; 