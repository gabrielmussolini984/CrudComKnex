// Imports
const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');

// Inicializando o APP
const app = express();
// Configurando Porta
const port = process.env.PORT || 3000;
// Public
app.use(express.static(path.join(__dirname,'public')));
// Handlebars
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
// Body-Parser
app.use(bodyParser.urlencoded({extended: 'false'}));


// Routes
const pessoas = require('./routes/pessoas');
app.use('/pessoas',pessoas(dependencies));


// Rotas
app.get('/', (req, res)=>{
  res.render('home')
})