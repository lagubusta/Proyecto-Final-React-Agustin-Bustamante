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
                <span className='box-texto'>
                <p className="titu"> {name} </p>
                <p>-</p>
                <p className="valores"> {item ? item.quantity : 1} </p> 
                <p>+</p>
                <p>x</p>
                <p> ${price}</p>
                <p>=</p>
                <p>$ {price * (item ? item.quantity : 1)}</p>
                </span>
            </article>
        </div>
    )
}

export default CartItem;