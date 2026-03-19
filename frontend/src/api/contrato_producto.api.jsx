import { api } from "./axios";

export const getDetallesContratos = (id) => api.get(`/detallesContratos/${id}`);
export const createDetallesContrato = (data) => api.post("/detallesContratos", data);
export const deleteDetallesContrato = (id) => api.delete(`/detallesContratos/${id}`);
export const updateDetallesContrato = (id, data) => api.put(`/detallesContratos/${id}`, data); 