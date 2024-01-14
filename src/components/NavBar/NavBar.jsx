import { NavLink, Link } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'
const NavBar = () => {
    return (
        <nav className="NavBar">
            <Link to='/'>
            <h1 className="tituloNavBar">Camisetas Fepid</h1>
            </Link>

            <div className="categoriaNavBar">
             <NavLink to={`/category/futbol`} >Futbol</NavLink>
             <NavLink to={`/category/nba`}>NBA</NavLink>
             <NavLink to={`/category/nfl`}>NFL</NavLink>
                
            </div>
            <CartWidget />


        </nav>
    )
}

export default NavBar