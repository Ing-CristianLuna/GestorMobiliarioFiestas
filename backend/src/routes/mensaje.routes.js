const express = require("express");
const router = express.Router();
const mensajesRoutes = require("../controllers/mensaje.controller");

router.get("/", mensajesRoutes.getMensajes);
router.post("/", mensajesRoutes.createMensaje);
router.delete("/", mensajesRoutes.deleteMensajes);

module.exports = router;