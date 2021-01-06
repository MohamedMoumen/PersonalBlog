var express = require('express');
var router = express.Router();
const Blog = require('../models/posts');

//RESTful Routes
router.get('/', function(req, res) {
    res.redirect('/blogs');
});

//Index
router.get('/blogs', function(req, res) {
    Blog.find({}, function(err, blogs) {
        if(err) {
            console.log(err);
        } else {
            res.render('index', {blogs: blogs});
        }
    });
});

//New
router.get('/blogs/new', function(req, res){
    res.render('new');
});

//Create
router.post('/blogs', function(req, res) {
    Blog.create(req.body.blog, function(err, newBlog) {
        if(err) {
            res.render('new');
        } else {
            res.redirect('/blogs');
        }
    });
});

//Show
router.get('/blogs/:id', function(req, res){
    Blog.findById(req.params.id, function(err, foundBlog) {
        if(err) {
            res.redirect("/blogs");
        } else {
            res.render('show',{blog: foundBlog});
        }
    })
});

//Edit
router.get('/blogs/:id/edit', function(req, res) {
    Blog.findById(req.params.id, function(err, foundBlog) {
        if(err) {
            res.redirect('/blogs');
        } else {
            res.render('edit', {blog: foundBlog});
        }
    });
});

//Update
router.put('/blogs/:id', function(req, res) {
    Blog.findByIdAndUpdate(req.params.id, req.body.blog,function(err, updatedBlog){
        if(err) {
            res.redirect('/blogs');
        } else {
            res.redirect('/blogs/' + req.params.id);
        }
    });
});

//Delete
router.delete('/blogs/:id', function(req, res) {
    Blog.findByIdAndRemove(req.params.id, function(err) {
        if(err) {
            res.redirect('/blogs');
        } else {
            res.redirect('/blogs');
        }
    });
});

module.exports = router;