import axios from "axios";

export const api = axios.create({ baseURL: "http://localhost:3000/" });



api.interceptors.request.use((config) => { //config es la peticion get, post, put, etc
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});//Con esto es como se se le agregara a cada peticion un header de autorizacion, ejemplo api.get("/contratos", {headers: {Authorization: `Bearer ${token}`}})

//para que si el token en el backend ha expirado y manda error 401, lo elimine del front
api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            localStorage.removeItem("token");
            window.location.href("/loginUser");
        }
        return Promise.reject(error);
    }
)







//api.defaults.headers.common["authorization"] = `Bearer ${localStorage.getItem("token")}`;   