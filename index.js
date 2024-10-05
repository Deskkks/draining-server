const express = require('express')
const app = express()
const http = require('http')
const routes = require('./routes/route')
const sequelize = require('./database/database')
const cors = require('cors')

app.use(express.json())
app.use(cors())

app.use('/', routes);

sequelize.sync({force: false}).then( () => {
  const port = 3003;
  app.set("port", port);
  const server = http.createServer(app);
  server.listen(port);
});