import { api } from "./axios";

export const registerUser = (data) => api.post("/registerUser", data);
export const loginUser = (data) => api.post("/loginUser", data);