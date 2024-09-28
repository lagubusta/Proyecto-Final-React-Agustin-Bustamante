import React, { useEffect, useState } from 'react';
import { db } from '../../services/firebase/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import './OrderHistory.css';

const OrderHistory = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [visibleOrders, setVisibleOrders] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            setLoading(true);
            try {
                const querySnapshot = await getDocs(collection(db, 'orders'));
                const fetchedOrders = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setOrders(fetchedOrders);
            } catch (error) {
                console.error("Error al obtener las órdenes: ", error);
            } finally {
                setLoading(false);
            }
        };

        fetchOrders();
    }, []);

    const toggleOrderVisibility = (orderId) => {
        setVisibleOrders((prevVisibleOrders) =>
            prevVisibleOrders.includes(orderId)
                ? prevVisibleOrders.filter((id) => id !== orderId)
                : [...prevVisibleOrders, orderId]
        );
    };

    if (loading) {
        return <h2>Cargando historial de órdenes...</h2>;
    }

    return (
        <div className='order-history'>
            <h2>Historial de Compras</h2>
            {orders.length === 0 ? (
                <h3>No hay órdenes registradas.</h3>
            ) : (
                <div>
                    <ul className='order-list'>
                        {orders.map((order) => (

                            <span key={order.id} className='order-item'>
                                <div className='order-summary'>
                                    <h3>ID de Orden: {order.id}</h3>
                                    <p>Total: ${order.total}</p>
                                    <button
                                        className='Button'
                                        onClick={() => toggleOrderVisibility(order.id)}
                                    >
                                        {visibleOrders.includes(order.id) ? 'Ocultar' : 'Ver detalle'}
                                    </button>
                                </div>

                                
                                {visibleOrders.includes(order.id) && (
                                    <div className='order-details'>
                                        <h4>Datos del Comprador:</h4>
                                        <span className='d-comprador'>
                                        <p>Nombre: {order.buyer.name}</p>
                                        <p>Teléfono: {order.buyer.phone}</p>
                                        <p>Email: {order.buyer.email}</p>
                                        </span>

                                        <h4>Productos de la Orden:</h4>
                                        <ul>
                                            {order.items.map((item) => (
                                                <li key={item.id}>
                                                    {item.name} - {item.quantity} unidad(es) - ${item.price * item.quantity}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </span>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default OrderHistory;

