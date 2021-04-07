'use strict';

const utils=require('../utils');
const config =  require('../../config');
const { Pool } = require('pg');
const bcrypt = require('bcrypt');

const Auth = async ()=>{
    console.log('hi');
    try {
        let pool = new Pool(config.sql);
        console.log(pool);
        const sqlQueries = await utils.loadSQLQueries('users');
         let para=['522']
        
        const result = await pool.query(sqlQueries.auth,para);
        
        
        const user=result.rows[0];
        if(!user) return {success:false, message:"Invalid email or password"};
        console.log('result',user.Password);
        if(!await bcrypt.compare('123',user.Password)) return {success:false, message:"Invalid email or password"};
       
        return {success:true,userInfo:user};

    } catch (err) {
        return 'user index: '+ err.message;
    }
}

module.exports ={Auth}