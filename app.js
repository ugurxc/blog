const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const path = require("path")
const port = 3000
const hostname = "127.0.0.1"
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const fileUpload = require("express-fileupload")
const {generateDate, limit , truncate,paginate} = require("./helpers/hbs")

const expressSession = require("express-session")
const connectMongo = require("connect-mongo")
const methodOverride = require("method-override")

mongoose.connect('mongodb://127.0.0.1/nodeblog_db')

const mongoStore = require('connect-mongo')

app.use(expressSession({

  secret: "testotesto",
  resave: false,
  saveUninitialized: true,
  store: mongoStore.create({ mongoUrl: 'mongodb://127.0.0.1/nodeblog_db' })

}))

// flash messega middilware


app.use(fileUpload())
app.use(express.static('public'))
app.use(methodOverride("_method"))






//handlebars helpers

const hbs =exphbs.create({
  helpers:{
    generateDate: generateDate,
    limit:limit,
    truncate:truncate,
    paginate:paginate
  }

})
app.engine('handlebars',hbs.engine )
app.set('view engine', 'handlebars')




app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// display link middilware

app.use((req, res, next) => {
  const { userId } = req.session
  if (userId) {
    res.locals = {
      displayLink: true
    }
  }
  else {
    res.locals = {
      displayLink: false
    }
  }
  next()
})

app.use((req, res, next) => {
  res.locals.sessionFlash = req.session.sessionFlash
  delete req.session.sessionFlash
  next()
})

const users = require("./routes/users")
const posts = require("./routes/posts")
const main = require("./routes/main")
const admin =require("./routes/admin/index")
const contact = require("./routes/contact")

app.use("/", main)
app.use("/posts", posts)
app.use("/users", users)
app.use("/admin", admin)
app.use("/contact", contact)



app.listen(port, hostname, () => {
  console.log(`server çalışıyor, http://${hostname}:${port}/`)
})






