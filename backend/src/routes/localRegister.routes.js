const express = require("express");
const router = express.Router();
const localRegisterRoutes = require("../controllers/localRegister.controller");

router.get("/", localRegisterRoutes.getLocalesRegister);

module.exports = router;