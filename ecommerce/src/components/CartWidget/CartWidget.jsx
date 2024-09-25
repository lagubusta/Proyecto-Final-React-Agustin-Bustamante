import './CartWidget.css';
import carrito from './assets/carrito.png'
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';



const CartWidget = () =>{

    const { totalQuantity } = useContext(CartContext)

    return(
        <Link to= '/cart' className='Cart-d'>
            <img className="img-carrito" src= {carrito} alt='cart-widget'/>
            <p className='cantidad-cart'>
            ${totalQuantity}
            </p>
        </Link>
    )
}

export default CartWidget;
