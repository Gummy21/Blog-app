var express = require('express');
var router = express.Router();
const user = require('../controller/user.controller');

//Register page
router.get("/register",function(req,res){
    res.render("register");
});
//Login page
router.get("/login",function(req, res){
    res.render("login");
});

//Register
router.post("/register",user.register);

//Login
router.post("/login", user.login)

//Logout
router.get("/logout" ,user.logout)

module.exports = router;