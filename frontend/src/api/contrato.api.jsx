import { api } from "./axios";

export const getContratos = () => api.get("/contratos");
export const createContrato = (data) => api.post('/contratos', data);
export const deleteContrato = (id) => api.delete(`/contratos/${id}`);
export const updateContrato = (id, data) => api.put(`/contratos/${id}`, data);