const ShoesController = require("../Controllers/Shoes.Controller");
const shoesController = new ShoesController();
const express = require("express");
const router = express.Router();

router
  .post("/", shoesController.createShoes)
  .get("/", shoesController.getShoes)
  .get("/:id", shoesController.getShoesById)
  .put("/:id", shoesController.updateShoes)
  .delete("/:id", shoesController.deleteShoes)
  .get("/brand/:brand", shoesController.getShoesByBrand)
  .get("/category/:category", shoesController.getShoesByCategory)
  .get("/size/:size", shoesController.getShoesBySize)
  .get("/gender/:gender", shoesController.getShoesByGender);
  
module.exports = router;
