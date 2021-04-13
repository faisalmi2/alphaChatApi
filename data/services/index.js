'use strict';

const utils=require('../utils');
const config =  require('../../config');
const { Pool } = require('pg');

const AddService = async (service)  =>{
   
   try {
        let pool = new Pool(config.sql);        
        const sqlQueries = await utils.loadSQLQueries('services');
       
        const result = await pool.query(sqlQueries.addService,[service.ServiceName,1]);          
        const row=result.rows[0];
      
        if(!row) return {success:false, message:"Error while adding service"};
      
        if(row.BlogId <= 0) return {success:false, message:"Error while adding service"};
        
        return {success:true,service:row.ServiceId};
   } catch (err) {
        console.log(err.message);
        return 'user index: '+ err.message;
   } 
}


const GetServices = async ()  =>{
   
    try {
         let pool = new Pool(config.sql);        
         const sqlQueries = await utils.loadSQLQueries('services');
        
         const result = await pool.query(sqlQueries.getServices);          
                
         const rows=result.rows;        
         if(!rows) return {success:false, message:"Error while fetching services"};
        
         return {success:true,services:rows};
    } catch (err) {
         console.log(err.message);
         return 'Services data index: '+ err.message;
    } 
 }

module.exports ={GetServices,AddService}