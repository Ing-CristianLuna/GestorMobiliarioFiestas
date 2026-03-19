import { Chatbot } from "../componentes/componentesChatBot/chat";
import { useState, useEffect } from "react";
import { enviarMensaje } from "../api/chatBot.api";
import { getMensajes } from "../api/mensaje.api";
import { createMensaje } from "../api/mensaje.api";

export function ChatBotPage() {
    const [mensajesGuardados, setMensajesGuardados] = useState([]);
    //const [mensajeAEnviar, setMensajeAEnviar] = useState("");

    useEffect(() => {
        cargaMensajesGuardados();
    }, []);

    //carga los mensajes guardados si es que hay
    async function cargaMensajesGuardados() {
        const res = await getMensajes();
        setMensajesGuardados(res.data);
    }

    //Crea el json con los datos del mensaje
    function datos(contenido, rol) {
        const fechaActual = new Date();
        const datosMensaje = { "contenido": contenido, "fecha_y_hora": fechaActual, "rol": rol };
        return datosMensaje;
    }


    async function enviar(mensajeAEnviar) {
        try {
            console.log("adentro del enviar");
            console.log(mensajeAEnviar);
            await createMensaje(datos(mensajeAEnviar, "usuario"));//La pregunta que se le hara a la ia
            await cargaMensajesGuardados();
            console.log("creo el mensaje de usuario");
            const resultado = await enviarMensaje(mensajeAEnviar); //Peticion a api de ia
            console.log("ya respondio la ia");
            const respuestaIA = resultado.data.respuesta; //respuesta de la ia
            await createMensaje(datos(respuestaIA, "ia"));//La respuesta de la ia
            console.log("creo el mensaje de ia");
            await cargaMensajesGuardados();
        } catch (error) {
            console.log(error);
        }

    };



    return (
        <main className="container p-5 mx-5 mt-5">
            <Chatbot mensajesGuardados={mensajesGuardados} enviar={enviar} />
        </main>
    )
}