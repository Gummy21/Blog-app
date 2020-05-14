module.exports = app => {
var router = require("express").Router();
const blog = require('../controller/blog.controller');

    //Index/all
    router.get('/', blog.findAll);
    
    //Create
    router.post('/', blog.create);
     
    //Show
    router.get('/:id', blog.findById);
    
    //Update
    router.put('/:id', blog.update);
    
    //Delete
    router.delete('/:id', blog.delete);
    
    //Search
    router.get('/results', blog.search)

    app.use('/api/blog', router);

};