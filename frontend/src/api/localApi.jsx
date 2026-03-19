import { api } from "./axios";

export const getLocales = () => api.get("/locales");
export const createLocal = (data) => api.post('/locales', data);
export const deleteLocal = (id) => api.delete(`/locales/${id}`);
export const updateLocal = (id, data) => api.put(`/locales/${id}`, data);