const express= require('express');
const express_session= require('express-session');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const router = require('./routes/routes.js');




const App = express();

//settings
App.set('port', process.env.PORT || 3000);

//express session
App.use(express_session({
    secret:'secret',
    resave: true,
    saveUninitialized: true
}));





//middlewares
App.use(bodyParser.urlencoded({extended: true})); 
App.use(morgan('dev'));
App.use(bodyParser.json());


//routes
App.use('/', router);


//static files 
App.use(express.static(path.join(__dirname,'public')));

App.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/public/index.html'));
});



App.listen(App.get('port'), function(){
    console.log("server on port "+App.get('port'));
})