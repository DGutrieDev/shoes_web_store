const ServiceUsers = require("../Services/Users.Service");
const usersService = new ServiceUsers();

class UserController {
  async createUser(req, res) {
    try {
      const data = req.body;
      const existingUser = await usersService.getUserById(data.dni);
      if (existingUser) {
        res.status(400).json({
          message: "The user already exists",
        });
        return;
      }
      const user = await usersService.createUser(data);
      res.status(201).json(user);
    } catch (error) {
      res.status(400).json({
        message: "Failed to create the user. Please check the provided data.",
        error: error.message,
      });
    }
  }

  async getUsers(req, res) {
    try {
      const users = await usersService.getUsers();
      res.status(200).json(users);
    } catch (error) {
      res.status(400).json({
        message: "Failed to get the users.",
        error: error.message,
      });
    }
  }

  async getUserById(req, res) {
    try {
      const dni = req.params.dni;
      const user = await usersService.getUserById(dni);
      if (!user) {
        res.status(404).json({
          message: "User not found",
        });
        return;
      }
      res.status(200).json(user);
    } catch (error) {
      res.status(400).json({
        message: "Failed to get the user.",
        error: error.message,
      });
    }
  }

  async updateUser(req, res) {
    try {
      const dni = req.params.dni;
      const data = req.body;
      const user = await usersService.updateUser(dni, data);
      if (!user) {
        res.status(404).json({
          message: "User not found",
        });
        return;
      }
      res.status(200).json(user);
    } catch (error) {
      res.status(400).json({
        message: "Failed to update the user. Please check the provided data.",
        error: error.message,
      });
    }
  }

  async deleteUser(req, res) {
    try {
      const dni = req.params.dni;
      const user = await usersService.deleteUser(dni);
      if (!user) {
        res.status(404).json({
          message: "User not found",
        });
        return;
      }
      res.status(200).json(user);
    } catch (error) {
      res.status(400).json({
        message: "Failed to delete the user.",
        error: error.message,
      });
    }
  }
}

module.exports = UserController;
