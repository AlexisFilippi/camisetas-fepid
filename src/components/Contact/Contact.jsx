import { useForm } from "react-hook-form"
import './Contact.css'

const Contacto = () => {

const { register, handleSubmit} = useForm()

const enviar = (data) =>{
console.log(data);


}

    return (
        <div className="formContainer">
            <h2 className="tituloForm">Contacto</h2>
            <form className="formulario" onSubmit={handleSubmit(enviar)}>
                <input type="text" placeholder="Ingresa tu nombre" {...register("nombre")}/>
                <input type="email" placeholder="Ingresa tu email" {...register("email")} />
                <input type="consulta" placeholder="Ingresa tu consulta" {...register("consulta")}/>
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default Contacto