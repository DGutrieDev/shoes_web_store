const ShoesModel = require("../Models/Shoes.Model");

class ServiceShoes {
  async createShoes(data) {
    try {
      // Si data es un array, usar bulkCreate; si es un objeto, usar create
      const shoes = Array.isArray(data)
        ? await ShoesModel.bulkCreate(data) // Guarda múltiples registros
        : await ShoesModel.create(data); // Guarda un solo registro

      return shoes;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async getShoes() {
    try {
      const shoes = await ShoesModel.findAll();
      return shoes;
    } catch (error) {
      throw new Error(error);
    }
  }

  async getShoesById(id) {
    try {
      const shoes = await ShoesModel.findByPk(id);
      return shoes;
    } catch (error) {
      throw new Error(error);
    }
  }

  async updateShoes(id, data) {
    try {
      const shoes = await ShoesModel.findByPk(id);
      if (!shoes) {
        return null;
      }
      await shoes.update(data);
      return shoes;
    } catch (error) {
      throw new Error(error);
    }
  }

  async deleteShoes(id) {
    try {
      const shoes = await ShoesModel.findByPk(id);
      if (!shoes) {
        return null;
      }
      await shoes.destroy();
      return shoes;
    } catch (error) {
      throw new Error(error);
    }
  }

  async getShoesByBrand(brand) {
    try {
      const shoes = await ShoesModel.findAll({
        where: {
          brand: brand,
        },
      });
      return shoes;
    } catch (error) {
      throw new Error(error);
    }
  }

  async getShoesByModel(model) {
    try {
      const shoes = await ShoesModel.findAll({
        where: {
          model: model,
        },
      });
      return shoes;
    } catch (error) {
      throw new Error(error);
    }
  }

  async getShoesBySize(size) {
    try {
      const shoes = await ShoesModel.findAll({
        where: {
          size: size,
        },
      });
      return shoes;
    } catch (error) {
      throw new Error(error);
    }
  }

  async getShoesByPrice(price) {
    try {
      const shoes = await ShoesModel.findAll({
        where: {
          price: price,
        },
      });
      return shoes;
    } catch (error) {
      throw new Error(error);
    }
  }

  async getShoesByStock(stock) {
    try {
      const shoes = await ShoesModel.findAll({
        where: {
          stock: stock,
        },
      });
      return shoes;
    } catch (error) {
      throw new Error(error);
    }
  }

  async getShoesByCategory(category) {
    try {
      const shoes = await ShoesModel.findAll({
        where: {
          category: category,
        },
      });
      return shoes;
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = ServiceShoes;
