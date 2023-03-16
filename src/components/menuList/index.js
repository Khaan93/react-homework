import styles from "./MenuList.module.css"

const MenuList = ({ items, onSelect }) => {
    return items.map((item, index) => (
        <div key={`card-${index}`}
            className={"Playfair Display " + styles.card}
        >
            <h3 className={"bg-slate-300 border-0 opacity-100 hover:opacity-90 text-lg cursor-default "}>{item.name}</h3>
            <img className={"opacity-60 hover:opacity-90 "} src="https://lifehacker.ru/wp-content/uploads/2015/10/Depositphotos_44100665_l-2015_1444918558-e1522781212599.jpg"
                alt=" Картинка Щи"></img>
            <div className={"bg-slate-100 border-0 text-sm cursor-default "}>Ингредиенты: {item.ingredients}</div>
            <div className={"bg-slate-100 border-0 text-lg cursor-default "}>{item.price} руб.</div>
            <div className={"bg-slate-300 border-0 opacity-100 hover:opacity-75 text-lg cursor-grab "}
                onClick={() => onSelect(item)}>Добавить в заказ</div>
        </div >
    ));
};

export default MenuList;
