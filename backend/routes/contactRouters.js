const express = require("express");
const router = express.Router();
const userController = require('../controllers/userController.js');

router.post("/add-user", userController.createUser);

module.exports = router;