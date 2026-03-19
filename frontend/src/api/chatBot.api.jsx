import { api } from "./axios";

export const enviarMensaje = (mensaje) => api.post("/chat", { mensaje: mensaje });