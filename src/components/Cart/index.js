const Cart = ({ items }) => {
    return (
        <div className={"absolute bottom-10 right-20 font-serif "}>
            <h3>Корзина</h3>
            {items.map((item, index) => (
                <div key={`cart-item-${index}`}>
                    {items.reduce((sum, item) => {
                        sum += item.name;
                        return sum;
                    }, 0)} {""}
                    шт
                </div>
            ))}
            <div>
                {items.reduce((sum, item) => {
                    sum += item.price;
                    return sum;
                }, 0)} {""}
                руб
            </div>
            <div>{item.count}</div>
            <div>{item.price * item.count}</div>
        </div>
    );
};

export default Cart;