'use strict';

const express =require('express');
const ServicesController = require('../controllers/ServicesController');
const router= express.Router();

const {AddService,GetServices} = ServicesController;

router.get('/Services',GetServices);

router.post('/Services/AddService',AddService);


module.exports={
    routes:router
}