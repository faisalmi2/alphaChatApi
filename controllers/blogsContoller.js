'use strict'

const blogData =require('../data/blogs');

const GetBlogs = async(req,res,next)=>{
    try {        
        const blogs = await blogData.GetBlogs();
        if(!blogs.success) return res.status(400).send(blog.message);
        res.send(blogs);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const AddBlog = async(req,res,next)=>{
    try {

        const { BlogTitle,BlogDescription,Tags } = req.body;
        
        const blog = await blogData.AddBlog({ BlogTitle,BlogDescription,Tags });
        if(!blog.success) return res.status(400).send(blog.message);
        res.send(blog);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports ={
    AddBlog,
    GetBlogs
}