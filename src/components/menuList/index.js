import styles from "./MenuList.module.css"

const MenuList = ({ items, onSelect }) => {
    return items.map((item, index) => (
        <div key={`card-${index}`}
            className={"font-serif " + styles.card}
        >
            <h3 className={"bg-violet-200 border-0 opacity-100 hover:opacity-90 text-lg cursor-default "}>{item.name}</h3>
            <div className={"bg-violet-100 border-0 text-sm cursor-default "}>Ингредиенты: {item.ingredients}</div>
            <div className={"bg-violet-100 border-0 text-lg cursor-default "}>{item.price} руб.</div>
            <div className={"bg-violet-300 border-0 opacity-100 hover:opacity-75 text-lg cursor-grab "}
                onClick={() => onSelect(item)}>Добавить в заказ</div>
        </div >
    ));
};

export default MenuList;
