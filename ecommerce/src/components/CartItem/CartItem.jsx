import './CartItem.css';
import { CartContext } from '../../context/CartContext.jsx'
import { useContext } from 'react';

const CartItem = ({ id, name, img, category, description, price, stock }) => {

    const { cart, addItem } = useContext(CartContext);
    const item = cart.find(item => item.id === id);


    return (
        <div className='cart-container'>
            <article className="arti-contenedor">
                <picture className='box'>
                    <img src={img} alt={name} className="cart-img" />
                </picture>
                <header className="">
                    <h3 className=""> {name} </h3>
                </header>
                <p className="">
                    ${price} x {item ? item.quantity : 1} =
                </p>
                <h3>$ {price * (item ? item.quantity : 1)}</h3>
            </article>
        </div>
    )
}

export default CartItem;