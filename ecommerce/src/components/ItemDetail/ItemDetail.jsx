import './ItemDetail.css';
import { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom';

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {

    const [quantityAdded, setQuatityAdded] = useState(0)
    const handleOnAdd = (quantity) => {
        setQuatityAdded(quantity)
    }
    return (
        <main>
            <article className="d-CardItem">
                <header className="Header">
                    <h2 className="d-ItemHeader"> {name} </h2>
                </header>
                <picture>
                    <img src={img} alt={name} className="d-ItemImg" />
                </picture>
                <section>
                    <p className="d-Info">
                        Categoria: {category}
                    </p>
                    <p className="d-Info">
                        Descripción: {description}
                    </p>
                    <p className="d-Info">
                        Price: ${price}
                    </p>
                </section>
                <footer className="d-ItemFooter">
                    {
                        quantityAdded > 0 ? (
                            <Link to='/cart' className='Option'>Terminar Compra </Link>
                                ) : (
                                <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
                                )
                }
                            </footer>
                {/* <ItemCount initial={1} stock={stock} onAdd={(quantity) =>console.log("Cantidad:", quantity)}  /> */}
            </article>
        </main>
    )
}

export default ItemDetail;