'use strict';

const express =require('express');
const userController = require('../controllers/userCcontroller');
const router= express.Router();

const {Auth} = userController;

router.get('/Auth',Auth);

module.exports={
    routes:router
}