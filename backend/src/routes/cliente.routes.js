const express = require("express");
const router = express.Router();
const clienteController = require("../controllers/cliente.controller");

router.get("/", clienteController.getClientesPrisma);
router.post("/", clienteController.createClientePrisma);
router.delete("/:id", clienteController.deleteClientePrisma);
router.put("/:id", clienteController.updateClientePrisma);

module.exports = router;