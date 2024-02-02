import { useState } from 'react'
import './ItemCount.css'

const ItemCount = ({ stock, initial, onAdd }) => {
    const [quantity, SetQuantity] = useState(initial)

    const increment = () => {
        if (quantity < stock) {
            SetQuantity(quantity + 1)
        }
    }


    const decrement = () => {
        if (quantity > 1) {
            SetQuantity(quantity - 1)
        }
    }

    return (

        <div className='botonContenedor'>

            
            <button className='my-button' onClick={decrement}>-</button>
            <h4>{quantity}</h4>
            <button className='my-button' onClick={increment}>+</button>
            


            
            <button className='my-button' onClick={() => onAdd(quantity)} disabled={!stock}>Agregar al carrito</button>
            

        </div>
    )
}

export default ItemCount