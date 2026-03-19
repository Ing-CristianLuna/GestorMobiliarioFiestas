import { api } from "./axios";

export const getMensajes = () => api.get("/mensajes");
export const createMensaje = (data) => api.post("/mensajes", data);