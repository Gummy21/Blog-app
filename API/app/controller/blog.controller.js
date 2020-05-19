const db = require('../models');
const { Op } = require('sequelize');


//INDEX
exports.findAll = (req,res) => { 
    const title = req.query.title;
    var condition = title ? {title: { [Op.like]: `%${title}%`}} : null
   db.blog.findAll({where: condition,include: [{model: db.user}]}).then(blogs => {
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
    db.blog.findAll({where: {id}}).then(data=> {
        res.send(data)
    })
};
//UPDATE
exports.update = (req,res) =>{
    var id = req.params.id;
    var updatedValues = {title:req.body.title, content: req.body.content};
    db.blog.update(updatedValues,{where: {id}}).then(() => {
        }).catch(err => {
            console.log(err);
            res.status(500).json({msg: "error", details: err});
          });
};

// DELETE
exports.delete = (req,res) =>{
    const id = req.params.id;
    db.blog.destroy({where: {id:id}}).then(num => {
        if (num == 1) {
            res.send({
              message: "Blog was deleted successfully!"
            });
        } else {
            res.send({
              message: `Cannot delete Blog with id=${id}. Maybe Blog was not found!`
            });
          }
    }).catch(err => {
        console.log(err);
        res.status(500).json({msg: "error", details: err});
      });
};
