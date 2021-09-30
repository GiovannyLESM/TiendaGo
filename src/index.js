const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');
const { port } = require('./config');
const { sequelize } = require('./database');
require('./models/product');
//initializations
const app = express();


//settings
app.set('port', port);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: 'hbs',
    helpers: require('./lib/handlebars')
}));
app.set('view engine', 'hbs');



//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


//global variables
app.use((req, res, next) => {
    next();
});


//routes
app.use(require('./routes/index.js'));
app.use(require('./routes/links.js'));
app.use(require('./routes/authentication.js'));


//public
app.use(express.static(path.join(__dirname, 'public')));


//starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
    sequelize.sync({ force: false })
        .then(_ => console.log("Connected to the database"))
        .catch((error) => console.log(`${error}`));
});