const db = require('../models');
const { QueryTypes } = require('sequelize');
// {include: [{model: db.user}]}
// {user: req.session.user}
//INDEX
exports.findAll = (req,res) => { 
   db.blog.findAll().then(blogs => {
       res.json(blogs.sort(function(b1,b2){return b1.id - b2.id}));
    }).catch(err => {
        console.log(err);
        res.status(500).json({msg: "error", details: err});
    })
};

//Create
exports.create = (req,res) => {
   const title = req.body.title;
   const content = req.body.content;
   const userId    = req.session.user.id
   const newBlog = { title: title, content: content, userId: userId};
  db.blog.create(newBlog).then(blog => {
    res.json(blog);
   }).catch(err => {
       console.log(err);
       res.status(500).json({msg: "error", details: err});
   })
};

//SHOW
exports.findById = (req,res) => {
    var id = req.params.id;
    db.blog.findAll({where: {id}, attributes: ['title','content', 'userId', 'id']}).then(blog => {
        res.json(blog,{currentUser: req.user})
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
