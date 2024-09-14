import carrito from './assets/carrito.png'

import './CartWidget.css'

const CartWidget = () =>{
    return(
        <div className="Cart-d">
            <img src= {carrito} alt="Img Carrito" className="img-carrito" />
            <h5 className="Valor">0</h5>
        </div>
    )
}

export default CartWidget;