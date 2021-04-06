'use strict'

const userData =require('../data/users');
const Auth = async(req,res,next)=>{
    try {
        const user = await userData.Auth();
        if(!user.success) return res.status(400).send(user.message);
        res.send(user);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports ={
    Auth
}