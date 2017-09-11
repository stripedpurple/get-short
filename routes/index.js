var express = require('express');
var router = express.Router();
var db = require('level')('/opt/dev/shortendb');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/:id', function(req, res){
  db.get(req.params.id, function(err, data){
    if (err) {
      res.status(404).send('error', err); 
    }else{
      res.redirect(data);
    }
  });
});

router.post('/shorten', function(req, res, next) {
  let shortURL = req.body.shortURL;
  if (shortURL.slice(0,4) != "http"){
    shortURL = "http://" + shortURL;
  }
  console.log(shortURL);

  let key = randomString(6, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
  db.get(key, function(err, data){
    if (err) {
      db.put(key, shortURL, function(err){
        if (err) {
          res.status(500).send();
          return -1;
        }
        res.send(key);
      });
    }
  });
});

function randomString(length, chars) {
  var result = '';
  for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
  return result;
}


module.exports = router;
