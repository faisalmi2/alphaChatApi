'use strict';

const utils=require('../utils');
const config =  require('../../config');
const { Pool } = require('pg');


const GetBlogs = async ()=>{
   
    
    try {
        let pool = new Pool(config.sql);
        
        const sqlQueries = await utils.loadSQLQueries('blogs');
      
        const result = await pool.query(sqlQueries.getBlogs);              
        const rows=result.rows;        
        if(!rows) return {success:false, message:"Error while fetching blogs"};
       
        return {success:true,blogs:rows};

    } catch (err) {
        console.log(err.message);
        return 'user index: '+ err.message;
    }
}

const AddBlog = async (blog)=>{
   
    try {
        let pool = new Pool(config.sql);
        const sqlQueries = await utils.loadSQLQueries('blogs');
        
        
         let para=[blog.BlogTitle,blog.BlogDescription, new Date(),'Faisal Ali'];
        
        const result = await pool.query(sqlQueries.addBlog,para);       
       
        const row=result.rows[0];
      
        if(!row) return {success:false, message:"Error while adding blog"};
      
        if(row.BlogId <= 0) return {success:false, message:"Error while adding blog"};
        console.log('result',{success:true,blog:row.BlogId});
        return {success:true,blog:row.BlogId};

    } catch (err) {
        return 'user index: '+ err.message;
    }
}

module.exports ={AddBlog,GetBlogs}