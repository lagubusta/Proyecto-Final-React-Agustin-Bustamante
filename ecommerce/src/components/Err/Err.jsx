import './Err.css';
import { Link } from 'react-router-dom';

const Err = () => {
    return(
        <div className="box-error">
            <h3>
                Información no encontrada
            </h3>
            <Link to='/' ><button className='Button'>Seguir comprando</button> </Link>
        </div>
    )
}

export default Err;