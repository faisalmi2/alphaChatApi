'use strict';

const express =require('express');
const userController = require('../controllers/userCcontroller');
const router= express.Router();

const {Auth} = userController;

<<<<<<< HEAD
router.post('/Auth',Auth);
=======
router.get('/Auth',Auth);
>>>>>>> 62622b814a630661f9763565a31810ce2fe48436

module.exports={
    routes:router
}