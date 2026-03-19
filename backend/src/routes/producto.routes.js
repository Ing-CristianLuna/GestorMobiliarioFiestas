const express = require("express");
const router = express.Router();
const productoRouter = require("../controllers/producto.controller");

router.get("/", productoRouter.getProductosPrisma);
router.post("/", productoRouter.createProductoPrisma);
router.delete("/:id", productoRouter.deleteProductoPrisma);
router.put("/:id", productoRouter.updateProductoPrisma);

module.exports = router;