import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'
const NavBar = () => {
    return (
        <nav>
            <div className="NavBar">
                <h1 className="tituloNavBar">Camisetas Fepid</h1>

                <div className="categoriaNavBar">
                    <button>Futbol</button>
                    <button>NBA</button>
                    <button>NFL</button>
                    <CartWidget />
                </div>

                
            </div>
        </nav>
    )
}

export default NavBar