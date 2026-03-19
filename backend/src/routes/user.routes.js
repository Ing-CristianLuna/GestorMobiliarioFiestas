const express = require("express");
const router = express.Router();
const userRouter = require("../controllers/user.controller");

router.post("/", userRouter.createUser);

module.exports = router;