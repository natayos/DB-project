const express = require("express")
var cors = require('cors')
const path = require("path")

const app = express();
app.use(cors())
// Statics
app.use(express.static('static'))

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// routers
const indexRouter = require('./routes/index')
const detailRouter = require('./routes/detail')
const loginRouter = require('./routes/login')
const buyticketRouter = require('./routes/buyticket')
const completeBuyRouter = require('./routes/completeBuy')
// const registerRouter = require('./routes/register')

app.use(indexRouter.router)
app.use(detailRouter.router)
app.use(loginRouter.router)
app.use(buyticketRouter.router)
app.use(completeBuyRouter.router)
// app.use(registerRouter.router)


app.listen(3000, () => {
  console.log(`Example app listening at http://localhost:3000`)
})