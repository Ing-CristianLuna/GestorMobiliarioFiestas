const express = require("express");
const cors = require("cors");

const localRoutes = require("./routes/local.routes"); //trae todas las rutas(app) de local
const localRegisterRoutes = require("./routes/localRegister.routes")
const empleadoRoutes = require("./routes/empleado.routes");
const contratosRoutes = require("./routes/contrato.routes");
const clienteRoutes = require("./routes/cliente.routes");
const productoRoutes = require("./routes/producto.routes");
const inventarioRoutes = require("./routes/inventario.routes")
const detallesContratoRoutes = require("./routes/contrato_producto.routes");
const chatRoute = require("./routes/chat.routes");
const userRoutes = require("./routes/user.routes");
const userLoginRoutes = require("./routes/userLogin.routes");
const mensajeRoutes = require("./routes/mensaje.routes")
const { auth } = require("./middlewares/auth.middleware");


const app = express();

app.use(cors());
app.use(express.json());
app.use("/locales", auth, localRoutes); //crea como tal la ruta  principal
app.use("/localesRegister", localRegisterRoutes);
app.use("/empleados", auth, empleadoRoutes);
app.use("/contratos", auth, contratosRoutes);
app.use("/clientes", auth, clienteRoutes);
app.use("/productos", auth, productoRoutes);
app.use("/inventarios", auth, inventarioRoutes);
app.use("/detallesContratos", auth, detallesContratoRoutes);
app.use("/chat", auth, chatRoute);
app.use("/mensajes", auth, mensajeRoutes);

app.use("/registerUser", userRoutes);
app.use("/loginUser", userLoginRoutes);


module.exports = app;