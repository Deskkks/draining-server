const bueiroModel = require('../models/bueiro')
const status = require('http-status')

exports.SeachAll = (req, res, next) => {
  bueiroModel.findAll().then(bueiro => {
    if(bueiro) {
      res.status(status.OK).send(bueiro)
    }
  }).catch(error => next(error))
}