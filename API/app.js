const  express          = require("express"), 
       app              = express(),
       cors             = require("cors"),
       flash            = require("connect-flash"),
       bodyParser       = require("body-parser"),
       methodOverride   = require("method-override"), 
       cookieParser     = require('cookie-parser');
 


db         = require("./app/models/");


db.sequelize.sync({
    force: true
});
    
var corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200 
  }



app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.set("view engine", "ejs");
app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(cookieParser());
app.use(flash());


app.use(require("express-session")({
    key: 'user_sid',
    resave: false,
    saveUninitialized: false,
    secret: 'A big snake',
    cookie:{
        expires: 600000
    }
}));

app.use((req, res, next) => {
    if (req.cookies.user_sid && !req.session.user) {
        res.clearCookie('user_sid');        
    }
    next();
});
app.use(function(req, res, next){
    res.locals.user = req.session.user;
    next();
});



app.listen(8887,function(){
    console.log("Server started on port 8887")
});


