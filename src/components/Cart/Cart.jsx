import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"
import './Cart.css'



const Cart = () => {
    const { cart, clearCart, totalQuantity } = useContext(CartContext)


    if (totalQuantity === 0) {
        return (
            <div>
                <h1>No hay items en el carrito</h1>
                <Link to='/'>Inicio</Link>
            </div>
        )

    }



    const calcularTotal = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    }

    const total = calcularTotal()

    return (
        <div className="cartContenedor">
            {cart.map(p => <CartItem key={p.id} {...p} />)}

            <h3>Total = ${total}</h3>
            <button onClick={() => clearCart()}>Limpiar</button>
            <button className="botonCheckout"><Link to='/checkout' className="checkout">Checkout</Link>
            </button>
        </div>
    )
}



export default Cart