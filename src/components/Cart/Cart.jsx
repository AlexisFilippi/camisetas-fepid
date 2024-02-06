import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"
import './Cart.css'



const Cart = () => {
    const { cart, clearCart, totalQuantity, total } = useContext(CartContext)


    if (totalQuantity === 0) {
        return (
            <div>
                <h1 className="carritoVacio">El carrito esta vacio</h1>
                <Link to='/' className="inicio">Volver a Inicio</Link>
            </div>
        )

    }



    // const calcularTotal = () => {
    //     return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    // }

    // const total = calcularTotal()

    return (
        <div className="cartContenedor">
            {cart.map(p => <CartItem key={p.id} {...p} />)}

            <h3>Total = ${total}</h3>
            <button onClick={() => clearCart()} className="botonLimpiar">Limpiar</button>
            <button className="botonCheckout"><Link to='/checkout' className="checkout">Terminar Compra</Link>
            </button>
        </div>
    )
}



export default Cart