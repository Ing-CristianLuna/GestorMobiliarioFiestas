import { api } from "./axios";

export const getInventarios = () => api.get("/inventarios");
export const createInventario = (data) => api.post("/inventarios", data);
export const deleteInventario = (id) => api.delete(`/inventarios/${id}`);
export const updateInventario = (id, data) => api.put(`/inventarios/${id}`, data);