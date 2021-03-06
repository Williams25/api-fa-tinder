const morgan = require('morgan')
const bodyParser = require('body-parser')

module.exports = app => {

  app.use(morgan('dev')) // Monitora as requisições http
  app.use(bodyParser.urlencoded({ extended: true })) // apenas dados simples
  app.use(bodyParser.json())

  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*') // configurando cors
    res.header('Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization')

    if (req.method === 'OPTIONS') {
      res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
      return res.status(200).send({})
    }

    next()
  })
}