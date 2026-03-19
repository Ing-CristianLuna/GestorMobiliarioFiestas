import { api } from "./axios";

export const getProductos = () => api.get("/productos");
export const createProducto = (data) => api.post("/productos", data);
export const deleteProducto = (id) => api.delete(`/productos/${id}`);
export const updateProducto = (id, data) => api.put(`/productos/${id}`, data);