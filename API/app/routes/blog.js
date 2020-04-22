var express = require('express');
var router = express.Router();
const blog = require('../controller/blog.controller');

    //Index/all
    router.get('/blog/', blog.findAll);
    
    //Create
    router.post('/blog/', blog.create);
     
    //Show
    router.get('/blog/:id', blog.findById);
    
    //Update
    router.put('/blog/:id', blog.update);
    
    //Delete
    router.delete('/blog/:id', blog.delete);
    
    //Search
    router.get('blog/results', blog.search)

module.exports = router;