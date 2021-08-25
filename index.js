const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const connection = require('./database/database')

const CategoriesController = require('./categories/CategoriesController')
const ArticlesController = require('./articles/ArticlesControler')

const Article = require('./articles/Article')
const Categoty = require('./categories/Category')
//view engine
app.set('view engine','ejs')

//static
app.use(express.static('public'))

//body-parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//database
connection.authenticate().then(() => {
    console.log('conexão feita com sucesso')
}).catch((error) => {
    console.log(error)
})

app.get('/', (req, res) => {
    res.render('index')
})

app.use('/',CategoriesController)
app.use('/',ArticlesController)

app.listen(8080, () => {
    console.log('O servidor está rodando')
})