const express = require("express");
const router = express.Router();
const userRoutes = require("../controllers/user.controller");

router.post("/", userRoutes.login);

module.exports = router;