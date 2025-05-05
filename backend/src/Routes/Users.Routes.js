const UserController = require("../Controllers/Users.Controller");
const UserMiddleware = require("../Middleware/User.middleware");
const express = require("express");
const router = express.Router();

const userController = new UserController();
const userMiddleware = new UserMiddleware();

router
  .post(
    "/",
    userMiddleware.UserExistsByEmail,
    userMiddleware.dniExists,
    userController.createUser
  )
  .get("/users", userController.getUsers)
  .get("/users/:dni", userMiddleware.UserExists, userController.getUserById)
  .put("/users/:dni", userMiddleware.UserExists, userController.updateUser)
  .delete("/users/:dni", userMiddleware.UserExists, userController.deleteUser);

module.exports = router;
