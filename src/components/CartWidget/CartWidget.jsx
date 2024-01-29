import { useContext } from 'react'
import cart from './assets/cart.svg'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)
    return (
        <Link to="/cart" >

            <img  src={cart} alt="cart-widget"  />
            {totalQuantity}  
            
           

        </Link>
        
    )
    
}

export default CartWidget