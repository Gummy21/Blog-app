var express = require('express');
var router = express.Router();
const blog = require('../controller/blog.controller');

    //Index/all
    router.get('/api/blog', blog.findAll);
    
    //Create
    router.post('/api/blog', blog.create);
     
    //Show
    router.get('/api/blog/:id', blog.findById);
    
    //Update
    router.put('/api/blog/:id', blog.update);
    
    //Delete
    router.delete('/api/blog/:id', blog.delete);
    
    //Search
    router.get('/api/blog/results', blog.search)

module.exports = router;