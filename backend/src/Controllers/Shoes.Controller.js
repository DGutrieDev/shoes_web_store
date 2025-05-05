const ShoesService = require('../Services/Shoes.Service');
const shoesService = new ShoesService();

class ShoesController {
    async createShoes(req, res) {
        try {
            const shoes = await shoesService.createShoes(req.body);
            res.status(201).json(shoes);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async getShoes(req, res) {
        try {
            const shoes = await shoesService.getShoes();
            res.status(200).json(shoes);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async getShoesById(req, res) {
        try {
            const shoes = await shoesService.getShoesById(req.params.id);
            if (!shoes) {
                res.status(404).json({ message: "Shoes not found" });
            }
            res.status(200).json(shoes);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async updateShoes(req, res) {
        try {
            const shoes = await shoesService.updateShoes(req.params.id, req.body);
            if (!shoes) {
                res.status(404).json({ message: "Shoes not found" });
            }
            res.status(200).json(shoes);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async deleteShoes(req, res) {
        try {
            const shoes = await shoesService.deleteShoes(req.params.id);
            if (!shoes) {
                res.status(404).json({ message: "Shoes not found" });
            }
            res.status(200).json(shoes);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async getShoesByBrand(req, res) {
        try {
            const shoes = await shoesService.getShoesByBrand(req.params.brand);
            res.status(200).json(shoes);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async getShoesByCategory(req, res) {
        try {
            const shoes = await shoesService.getShoesByCategory(req.params.category);
            res.status(200).json(shoes);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async getShoesByPrice(req, res) {
        try {
            const shoes = await shoesService.getShoesByPrice(req.params.price);
            res.status(200).json(shoes);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async getShoesBySize(req, res) {
        try {
            const shoes = await shoesService.getShoesBySize(req.params.size);
            res.status(200).json(shoes);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async getShoesByGender(req, res){
        try{
            const shoes = await shoesService.getShoesByGender(req.params.gender);
            res.status(200).json(shoes);
        }catch(error){
            res.status(400).json({message: error.message});
        }
    }

    async getShoesByStock(req, res) {
        try {
            const shoes = await shoesService.getShoesByStock(req.params.stock);
            res.status(200).json(shoes);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async getShoesByCategory(req, res) {
        try {
            const shoes = await shoesService.getShoesByCategory(req.params.category);
            res.status(200).json(shoes);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
}

module.exports = ShoesController;