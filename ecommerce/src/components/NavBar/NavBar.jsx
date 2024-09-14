import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget';
import { NavLink, Link  } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="NavBar">
            <Link to='/' className="c-Logo">
                <h3>INICIO</h3>
            </Link>

            <div className="Cartegorias">
                <NavLink to= {`/category/celular`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'} >Celular</NavLink>
                <NavLink to= {`/category/tablet`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'} >Tablet</NavLink>
                <NavLink to= {`/category/notebook`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'} >NoteBook</NavLink>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar;