const express = require('express');
const router = express.Router();

const userRoutes = require('./Users.Routes');
const shoesRoutes = require('./Shoes.Routes');

router
    .use('/users', userRoutes)
    .use('/shoes', shoesRoutes);

module.exports = router;