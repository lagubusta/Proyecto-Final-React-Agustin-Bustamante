import './CartItem.css';

const CartItem = ({ id, name, img, category, description, price, stock }) => {



    return (
        <div className='cart-container'>
            <article className="arti-contenedor">
                <picture>
                    <img src={img} alt={name} className="cart-img" />
                    x CANTIDAD
                </picture>
                <header className="">
                    <h2 className=""> {name} </h2>
                </header>
                <section>
                    <p className="">
                        Categoria: {category}
                    </p>
                    <p className="">
                        Price: ${price}
                    </p>
                </section>
            </article>
        </div>
    )
}

export default CartItem;