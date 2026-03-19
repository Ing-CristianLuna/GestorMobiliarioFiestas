const express = require("express");
const router = express.Router();
const inventarioRouter = require("../controllers/inventario.controller");

router.get("/", inventarioRouter.getInventariosPrisma);
router.post("/", inventarioRouter.createInventarioPrisma);
router.delete("/:id/", inventarioRouter.deleteInventarioPrisma);
router.put("/:id/", inventarioRouter.updateInventarioPrisma);

module.exports = router;