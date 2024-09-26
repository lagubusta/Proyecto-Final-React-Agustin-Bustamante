import './Item.css';
import { NavLink, Link  } from 'react-router-dom';

const Item = ({id, name, img, price, stock}) =>{
    return (
        
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader"> {name}</h2>
            </header>
            <picture className='contenedor-img'>
                <img src= {img} alt= {name} className="ItemImg"/>
            </picture>
            <section>
            <p className="Info">
                    Precio: ${price}
                </p>
                <p className="Info">
                    Disponible: {stock}
                </p>
            </section>
            <footer className="ItemFooter">
                <Link to = {`/item/${id}`} className="Option2"> Ver detalle</Link>
            </footer>
        </article>
    )
}

export default Item;