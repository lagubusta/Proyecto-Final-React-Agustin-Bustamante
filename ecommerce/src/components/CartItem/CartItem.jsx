const CartItem = ({ id, name, img, category, description, price, stock }) => {

    
    
    return( 
        <div>
          <article className="">
                <header className="">
                    <h2 className=""> {name} </h2>
                </header>
                <picture>
                    {/* <img src={img} alt={name} className="d-ItemImg" /> */}
                </picture>
                <section>
                    <p className="">
                        Categoria: {category}
                    </p>
                    <p className="">
                        Descripción: {description}
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