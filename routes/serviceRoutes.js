'use strict';

const express =require('express');
const ServicesController = require('../controllers/ServicesController');
const router= express.Router();

const {AddService,GetServices,GetServicePrerequisites} = ServicesController;

router.get('/Services',GetServices);

router.post('/Services/AddService',AddService);

router.get('/Services/ServicePrerequisites/:id',GetServicePrerequisites);


module.exports={
    routes:router
}