var express = require('express');
const connection = require('./connection');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('registModule');
});

router.get('/api/regist', function(req, res, next) {
  const params = req.query;
  const query = `INSERT INTO modulelist(deviceId, location) VALUES('${params.deviceId}','${params.location}')`;

  connection.query(query,(err, rows, fields) => {
    if(!err) {
      res.send("Success");
    } else {
      res.send(err);
    }
  });
});

module.exports = router;