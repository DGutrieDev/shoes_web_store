const UsersModel = require("../Models/Users.model");
const bcrypt = require("bcrypt");

class ServiceUser {
  async createUser(data) {
    try {
      data.password = await bcrypt.hash(data.password, 10);
      if (!data.role_id) {
        data.role_id = 1;
      }
      const user = await UsersModel.create(data);
      return user;
    } catch (error) {
        throw new Error(error);
    }
  }

  async getUsers() {
    try {
      const users = await UsersModel.findAll();
      return users;
    } catch (error) {
      throw new Error(error);
    }
  }

  async getUserById(dni) {
    try {
      const user = await UsersModel.findByPk(dni);
      return user;
    } catch (error) {
      throw new Error(error);
    }
  }

  async getUserByEmail(email) {
    try {
      const user = await UsersModel.findOne({ where: { email } });
      return user;
    } catch (error) {
      throw new Error(error);
    }
  }

  async updateUser(dni, data) {
    try {
      const user = await UsersModel.findByPk(dni);
      if (!user) {
        return null;
      }
      await user.update(data);
      return user;
    } catch (error) {
      throw new Error(error);
    }
  }

  async deleteUser(dni) {
    try {
      const user = await UsersModel.findByPk(dni);
      if (!user) {
        return null;
      }
      await user.destroy();
      return user;
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = ServiceUser;
