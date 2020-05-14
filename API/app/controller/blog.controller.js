const db = require('../models');
const { QueryTypes } = require('sequelize');


//INDEX
exports.findAll = (req,res) => { 
   db.blog.findAll({include: [{model: db.user}]}).then(blogs => {
       res.send(blogs);
    }).catch(err => {
        console.log(err);
        res.status(500).json({msg: "error", details: err});
    })
};

//Create
exports.create = (req,res) => {
   const title = req.body.title;
   const content = req.body.content;
   const userId   = req.body.userId
   const newBlog = { title: title, content: content,userId: userId};
  db.blog.create(newBlog).then(blog => {
    res.send(blog);
   }).catch(err => {
       console.log(err);
       res.status(500).json({msg: "error", details: err});
   })
};

//SHOW
exports.findById = (req,res) => {
    var id = req.params.id;
    db.blog.findAll({where: {id}, attributes: ['title','content', 'id']}).then(blog => {
        res.json(blog)
    })
};
//UPDATE
exports.update = (req,res) =>{
    var id = req.params.id;
    var updatedValues = {title:req.body.title, content: req.body.content};
    db.blog.update(updatedValues,{where: {id}}).then(() => {
            res.redirect("/blog/" + id);
        }).catch(err => {
            console.log(err);
            res.status(500).json({msg: "error", details: err});
          });
};

// DELETE
exports.delete = (req,res) =>{
    var id = req.params.id
    db.blog.destroy({where: {id}}).then(() =>{
     res.redirect("/blog")
    }).catch(err => {
        console.log(err);
        res.status(500).json({msg: "error", details: err});
      });
};
// SEARCH
exports.search = (req,res) => {
    var query = req.body.searchData
    db.sequelize.query('SELECT * FROM blog WHERE title LIKE :search_title',
    {
        replacements: {search_title: query + "%"},
        type: QueryTypes.SELECT
    }).then(userSD =>{
        res.json({results: userSD})
    })
    
};
