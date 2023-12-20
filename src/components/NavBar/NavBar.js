import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav>
            <h1>Camisetas Fepid</h1>
            <div>
                <button>Futbol</button>
                <button>NBA</button>
                <button>NFL</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar