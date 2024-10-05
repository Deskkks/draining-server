const bueiroModel = require('../models/bueiro')
const status = require('http-status')

exports.Insert = (req, res, next) => {

  bueiroModel.create({
      logradouro:"R. Tiers",
      numero:"184",
      cidade:"São Paulo",
      UF:"SP",
      cep:"03031-000",
      situação:"cheio",
  })
  .then(bueiro => {
      if (bueiro) {
          res.status(status.OK).send(bueiro);
      } else {
          res.status(status.NOT_FOUND).send();
      }
  })
  .catch(error => next(error));
};

exports.SeachAll = (req, res, next) => {
  bueiroModel.findAll().then(bueiro => {
    if(bueiro) {
      res.status(status.OK).send(bueiro)
    }
  }).catch(error => next(error))
}