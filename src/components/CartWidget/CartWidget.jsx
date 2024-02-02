import { useContext } from 'react'

import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import './CartWidget.css'

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)
    return (
        <Link to="/cart" >

            <div className='cartWidgetContainer'>
            <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/FFFFFF/shopping-cart--v1.png" alt="shopping-cart--v1"/>
            {totalQuantity}  
            </div>
           

        </Link>
        
    )
    
}

export default CartWidget