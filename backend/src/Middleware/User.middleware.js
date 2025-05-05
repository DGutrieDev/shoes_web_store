const UserModel = require("../Models/Users.model");

class UserMiddleware {

    async UserExists(req, res, next) {
        const dni = req.params.dni;
        const user = await UserModel.findByPk(dni);
        if (!user) {
            res.status(404).json({
                message: "User not found by dni",
            });
            return;
        }
        next();
    }

    async UserExistsByEmail(req, res, next) {
        const email = req.body.email;
        const user = await UserModel.findOne({ where: { email } });
        if (user) {
            res.status(400).json({
                message: "The email already exists in the database",
            });
            return;
        }   
        next();
    }

    async dniExists(req, res, next) {
        const dni = req.body.dni;
        const user = await UserModel.findByPk(dni);
        if (user) {
            res.status(404).json({
                message: "The dni already exists in the database",
            });
            return;
        }
        next();
    }

}

module.exports = UserMiddleware;
