var bcrypt = require('bcryptjs')
var db = require("../models/")
const saltRounds = 10;

//Register p2
exports.register = (req,res) =>{
    bcrypt.hash(req.body.password, saltRounds, function (err,hash) {
        db.user.create({
          username: req.body.username,
          email: req.body.email,
          password: hash
          }).then(user => {
              req.session.user = user.dataValues;
              res.json(user)
          }).catch(err => {
            console.log(err);
            res.status(500).json({msg: "error", details: err});
          });
    });
};
// Login p2
exports.login = (req,res) =>{
    db.user.findOne({
        where: {
          username: req.body.username
        }
      }).then(user => {
        if(!user){
          res.redirect("/login");
        } else {
          bcrypt.compare(req.body.password, user.password, function (err,result) {
            if(result == true) {
                req.session.user = user.dataValues;
                res.json(user)
              res.redirect('/blog');
            } else {
              res.redirect('/login')
            }
          });
        }
      });
    };

//Logout
exports.logout = (req,res) => {
  if (req.session.user && req.cookies.user_sid) {
    res.clearCookie('user_sid');
    res.redirect('/');
} else {
    res.redirect('/login');
}
};

