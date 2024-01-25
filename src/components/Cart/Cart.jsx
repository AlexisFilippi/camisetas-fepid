import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"



const Cart = () => {
    const { cart, clearCart, totalQuantity, } = useContext(CartContext)

    const calcularTotal = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
      };
    
      const total = calcularTotal();

    if(totalQuantity === 0){
        return (
            <div>
                <h1>No hay items en el carrito</h1>
                <Link to='/'>Productos</Link>
            </div>
        )

    }
     
    return (
        <div>
            { cart.map(p => <CartItem key={p.id} {...p}/>) }
            <h3>Total = ${total}</h3>
            <button onClick={() => clearCart()}>Limpiar</button>
            <Link to='/checkout'>Checkout</Link>
        </div>
    )
}

export default Cart