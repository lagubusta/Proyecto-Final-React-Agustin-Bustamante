import './ItemDetailContainer.css'
import { useState, useEffect } from 'react';
// import { getProductsById, getProductsByCategory } from '../../asyncMock'; // sacar esto
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom';

import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../services/firebase/firebaseConfig';


function ItemDetailContainer() {
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()

    useEffect(() => {
        
        setLoading(true)

        const docRef = doc(db, 'items', itemId)

        getDoc(docRef)
        .then(response => {
            const data = response.data()
            const productsAdapted = {id: response.id, ...data}
            setProduct(productsAdapted)
        })
        .catch(error => {
            console.log(error)
        })
        .finally(()=>{
            setLoading(false)
        }, [itemId])



        // getProductsById(itemId)
        //     .then(response => {
        //         setProduct(response)
        //     })
        //     .catch(error => {
        //         console.error(error)
        //     })
    }, [])

    return (
        <div className="ItemDetailContainer">
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer;