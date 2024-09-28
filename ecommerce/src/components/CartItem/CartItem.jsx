import './CartItem.css';
import { CartContext } from '../../context/CartContext.jsx'
import { useContext } from 'react';


const CartItem = ({ id, name, img, price, stock }) => {

    const { cart, addItem, quantity, increaseQuantity, decreaseQuantity, removeItem } = useContext(CartContext);
    const item = cart.find(item => item.id === id);

    return (
        <div className='cart-container'>
            <article className="arti-contenedor">
                <picture className='box'>
                    <img src={img} alt={name} className="cart-img" />
                </picture>
                <span className='box-texto'>
                    <p className="titu"> {name} </p>
                    <button onClick={() => decreaseQuantity(id)} className='Button-carro'>-</button>
                    <p className="valores"> {item ? item.quantity : 1} </p>
                    <button onClick={() => increaseQuantity(id)} className='Button-carro'>+</button>
                    <span className='box-price'>
                        <p>$ {price}</p>
                        <p>=</p>
                        <p>$ {price * (item ? item.quantity : 1)}</p>
                    </span>
                    <button onClick={() => removeItem(id)} className='Button-carro'>Eliminar</button>
                </span>
            </article>
        </div>
    )
}

export default CartItem;