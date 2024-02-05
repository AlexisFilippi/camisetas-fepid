import { NavLink, Link } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'
const NavBar = () => {
    return (
        <nav className="NavBar">
            <Link to='/'>
            <h1 className="tituloNavBar">CAMISETAS FEPID</h1>
            </Link>

            <div className="categoriaNavBar">
             <NavLink to={`/category/futbol`} className="categorias">FÚTBOL</NavLink>
             <NavLink to={`/category/nba`} className="categorias">NBA</NavLink>
             <NavLink to={`/category/nfl`} className="categorias">NFL</NavLink>
             <NavLink to={`/contacto`} className="categorias">Contacto</NavLink>
                
            </div>
            <CartWidget />


        </nav>
    )
}

export default NavBar