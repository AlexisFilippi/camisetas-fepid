import { useForm } from "react-hook-form"
import './Contact.css'
import { addDoc, collection } from "firebase/firestore"
import { db } from "../../firebase/config"

const Contacto = () => {




    const { register, handleSubmit, reset } = useForm()

    const enviar = (data) => {
        const consulta = {

            consultas: data

        }

        const consultasRef = collection(db, "consultas")
        addDoc(consultasRef, consulta)
        reset()

    }





    return (
        <div className="formContainer">
            <h2 className="tituloForm">Contacto</h2>
            <form className="formulario" onSubmit={handleSubmit(enviar)}>
                <input type="text" placeholder="Ingresa tu nombre" {...register("nombre")} />
                <input type="email" placeholder="Ingresa tu email" {...register("email")} />
                <input type="consulta" placeholder="Ingresa tu consulta" {...register("consulta")} />
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default Contacto