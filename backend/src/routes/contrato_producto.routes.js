const express = require("express");
const router = express.Router();
const detallesContratoRoutes = require("../controllers/contrato_producto.controller");

router.get("/:id", detallesContratoRoutes.getDetallesContrato);
router.post("/", detallesContratoRoutes.createDetallesContrato);
router.delete("/:id", detallesContratoRoutes.deleteDetallesContrato);
router.put("/:id", detallesContratoRoutes.updateDetalleContrato);

module.exports = router;