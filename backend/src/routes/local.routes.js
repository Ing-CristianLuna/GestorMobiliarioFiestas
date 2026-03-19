const express = require("express")
const router = express.Router();
const localController = require("../controllers/local.controller")

router.get("/", localController.getLocales);
router.post("/", localController.createLocal);
router.delete("/:id", localController.deleteLocal);
router.put("/:id", localController.updateLocal);//Data va en el req.body, no es necesario ponerlo en la ruta

module.exports = router;