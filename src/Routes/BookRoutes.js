const bookRoutes = require('express').Router();
const BookController = require('../Controller/BookController');
const authMiddleware = require("../Helpers/AuthMiddleware");


bookRoutes.get("/",authMiddleware.checkLogin, BookController.getAllBook)

module.exports = bookRoutes;