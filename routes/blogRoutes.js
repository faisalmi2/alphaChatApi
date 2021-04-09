'use strict';

const express =require('express');
const blogController = require('../controllers/blogsContoller');
const router= express.Router();

const {AddBlog,GetBlogs} = blogController;

router.get('/Blogs',GetBlogs);

router.post('/Blogs/AddBlog',AddBlog);


module.exports={
    routes:router
}