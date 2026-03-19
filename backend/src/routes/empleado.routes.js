const express = require("express");
const router = express.Router();
const empleadoController = require("../controllers/empleado.controller");

router.get("/", empleadoController.getEmpleados);
router.post("/", empleadoController.createEmpleado);
router.delete("/:id", empleadoController.deleteEmpleado);
router.put("/:id", empleadoController.updateEmpleado);

module.exports = router; 