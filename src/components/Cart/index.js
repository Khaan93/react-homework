const Cart = ({ items }) => {
    return (
        <div className={"absolute bottom-10 right-20 font-serif "}>
            <h3>Корзина</h3>
            {items.map((item, index) => (
                <div key={`cart-item-${index}`}>{item.name}</div>
            ))}
            <div>
                {items.reduce((sum, item) => {
                    sum += item.price;
                    return sum;
                }, 0)} {""}
                руб
            </div>
        </div>
    );
};

export default Cart;