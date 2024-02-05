import React, {useContext, useState} from "react"
import { CartContext } from "../../context/CartContext"
import { useForm } from "react-hook-form"
import { collection, addDoc } from "firebase/firestore"
import { db } from '../../firebase/config'

const Checkout = () => {

    const { cart, clearCart, totalQuantity, total } = useContext(CartContext)

    const { register, handleSubmit } = useForm()

    const [pedidoId, setPedidoId] = useState("")

    const comprar = (data) => {
        const pedido = {
            cliente: data,
            productos: cart,
            total: total
        }

        const pedidosRef = collection(db, "pedidos")

        addDoc(pedidosRef, pedido)
            .then((doc) => {
                setPedidoId(doc.id)
                clearCart()
            })
    }

    if(pedidoId){
        return(
            <div>
                <h2>Muchas Gracias por tu compra!</h2>
                <p>Tu numero de pedido es: {pedidoId}</p>
            </div>
        )
    }

    return (
        <div className="formContainer">
            <h2 className="tituloForm">Terminar Compra</h2>
            <form className="formulario" onSubmit={handleSubmit(comprar)}>
                <input type="text" placeholder="Ingresa tu nombre" {...register("nombre")} />
                <input type="email" placeholder="Ingresa tu email" {...register("email")} />
                <input type="telefono" placeholder="Ingresa tu telefono" {...register("consulta")} />
                <button type="submit">Comprar</button>
            </form>
        </div>
    )
}

export default Checkout