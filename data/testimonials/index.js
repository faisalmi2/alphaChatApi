'use strict';

const utils=require('../utils');
const config =  require('../../config');
const { Pool } = require('pg');

const AddTestimonial = async (testimonial)  =>{
   
   try {
        let pool = new Pool(config.sql);        
        const sqlQueries = await utils.loadSQLQueries('testimonials');

        let para=[testimonial.TestimonialTitle,testimonial.TestimonialDescription, testimonial.ClientName,testimonial.Rating,testimonial.AddedBy, new Date(),testimonial.ClientPosition];

        const result = await pool.query(sqlQueries.addTestimonial,para);          
        const row=result.rows[0];
      
        if(!row) return {success:false, message:"Error while adding testimonial"};
      
        if(row.TestimonialId <= 0) return {success:false, message:"Error while adding testimonial"};
        
        return {success:true,TestimonialId:row.TestimonialId};
   } catch (err) {
        console.log(err.message);
        return 'user index: '+ err.message;
   } 
}


const GetTestimonials = async ()  =>{
   
    try {
         let pool = new Pool(config.sql);        
         const sqlQueries = await utils.loadSQLQueries('testimonials');
         
         const result = await pool.query(sqlQueries.getTestimonials);          
         
         const rows=result.rows;        
         if(!rows) return {success:false, message:"Error while fetching testimonials"};
        
         return {success:true,testimonials:rows};
    } catch (err) {
         console.log(err.message);
         return 'Testimonials data index: '+ err.message;
    } 
 }

module.exports ={GetTestimonials,AddTestimonial}