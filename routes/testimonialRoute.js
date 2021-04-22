'use strict';

const express =require('express');
const testimonialController = require('../controllers/testimonialsController');
const router= express.Router();

const {AddTestimonial,GetTestimonials} = testimonialController;

router.get('/Testimonials',GetTestimonials);

router.post('/Testimonials/AddTestimonial',AddTestimonial);


module.exports={
    routes:router
}