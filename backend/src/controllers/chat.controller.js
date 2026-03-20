import { GoogleGenerativeAI } from "@google/generative-ai";
import { obtenerContratosDeHoy, obtenerCantidadTotalInventario } from "../services/chatbot.service.js";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export const chat = async (req, res) => {
    const prompt = `
        Eres un asistente para un sistema de renta de mobiliario para fiestas.
        Tu función es ayudar a empleados del local.
        Responde de forma breve, clara y útil.
        Si te preguntan sobre inventario, contratos o clientes, responde con base en la información del sistema.
        Si no tienes datos suficientes, dilo claramente y no inventes.`

    try {
        const id_local = req.user.id_local;
        const { mensaje } = req.body;
        const texto = mensaje.toLowerCase();

        if (texto.includes("cuantos contratos") && texto.includes("hoy")) {
            const total = await obtenerContratosDeHoy(id_local);
            return res.json({ respuesta: `Hoy se registraron ${total.length} contratos` });
        }

        if (texto.includes("cantidad total") && texto.includes("inventario")) {
            const respuesta = await obtenerCantidadTotalInventario(id_local);
            return res.json({
                respuesta: `El total es: \n ${respuesta.map(r => {
                    return `${r.producto} - ${r.cantidad}\n`;
                }).join('\n')}`
            });
        }

        const promtFinal = `${prompt} Pregunta del usuario: ${mensaje}`;
        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
        const result = await model.generateContent(promtFinal);
        const respuesta = result.response.text();

        return res.json({ respuesta });
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Error al comunicar con la ia" });
    }
}