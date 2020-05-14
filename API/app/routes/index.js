module.exports = app => {
var router = require('express').Router();
const user = require('../controller/user.controller');

//Register
router.post("/register",user.register);

//Login
router.post("/login", user.login)

app.use('/api/', router);
}