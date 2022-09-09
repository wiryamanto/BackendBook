const mainRoutes = require('express').Router();
const BookRoutes = require ('./BookRoutes');
const authRoutes = require('./authRoutes');

mainRoutes.use('/auth',authRoutes);
mainRoutes.use('book',BookRoutes);

module.exports=mainRoutes;