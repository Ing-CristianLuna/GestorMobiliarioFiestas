const express = require("express");
const router = express.Router();
const contratoRouter = require("../controllers/contrato.controller");

router.get('/', contratoRouter.getContratosPrisma);
router.post('/', contratoRouter.createContratoPrisma);
router.delete('/:id', contratoRouter.deleteContratoPrisma);
router.put('/:id', contratoRouter.updateContrato);

module.exports = router;