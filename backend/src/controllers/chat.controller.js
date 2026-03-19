import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export const chat = async (req, res) => {
    try {
        const { mensaje } = req.body;

        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

        const result = await model.generateContent(mensaje);
        const respuesta = result.response.text();

        res.json({ respuesta });
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Error al comunicar con la ia" });
    }
}