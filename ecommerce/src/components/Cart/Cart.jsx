import './Cart.css';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import CartItem from '../CartItem/CartItem';
import { Link } from 'react-router-dom';

const Cart =  () => {
    const {cart, addItem, removeItem, clearCart, numCarrito,totalQuantity, totalPrice} = useContext(CartContext)

    if(totalQuantity === 0 ) {
        return(
            <div>
                <h1>El Carrito esta vacio</h1>
                <Link to='/' className='Option'> Ir a Productos</Link>
            </div>
        )
    }

    return(
        <div className='contender-cart'>
        {cart.map(p => <CartItem key={p.id} {...p}/>)}
         
        <h3 className='total-carrito'>Total: ${totalPrice}</h3>
        <button onClick={()  => clearCart()} className='Button'> Limpiar</button>
        <Link to ='/checkout'>
         <button className='Button'> Finalizar</button>
        </Link>
        <Link to='/orderhistory'>
                <button className='Button'> Ver Historial de Compras</button>
            </Link>
        </div>
    )
}

export default Cart