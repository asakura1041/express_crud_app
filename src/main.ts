import Express from "express";
import router from "./routes";
import path from 'path';
import layouts from 'express-ejs-layouts';
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import methodOverride from 'method-override'

mongoose.connect('mongodb://localhost:27017/test_db')

mongoose.Promise = global.Promise

const app = Express()
const port = 3000
app.use(Express.json())
app.use(
  Express.urlencoded({
    extended: true,
  })
)

app.use(layouts)
app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, 'views'))
app.use(Express.static(__dirname + '/public'))
app.use(methodOverride('_method', {
  methods: ['POST', 'GET', 'PUT']
}))
app.use('/', router)

app.listen(port)