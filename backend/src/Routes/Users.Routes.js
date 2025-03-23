const UserController = require("../Controllers/Users.Controller");
const userController = new UserController();
const express = require("express");
const router = express.Router();

router
    .get("/:dni", userController.getUserById)
    .post("/", userController.createUser)
    .put("/:dni", userController.updateUser)
    .delete("/:dni", userController.deleteUser);

module.exports = router;

