'use strict'

const testimonialsData =require('../data/testimonials');

const GetTestimonials = async(req,res,next)=>{
    try {        
        const testimonials = await testimonialsData.GetTestimonials();
        if(!testimonials.success) return res.status(400).send(testimonials.message);
        res.send(testimonials);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const AddTestimonial = async(req,res,next)=>{
    try {        
        const { TestimonialTitle, TestimonialDescription, ClientName, Rating, AddedBy, Tags } = req.body;

        const testimonial = await testimonialsData.AddTestimonial({ TestimonialTitle, TestimonialDescription, ClientName, Rating, AddedBy,Tags  });
        if(!testimonial.success) return res.status(400).send(testimonial.message);
        res.send(testimonial);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports ={
    GetTestimonials,AddTestimonial
}