var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var samplebooks=req.app.get('samplebooks');
  res.render('index',{books:samplebooks});
});

//end point to return all available books
router.get('/books', function(req, res, next) {
  var samplebooks=req.app.get('samplebooks');
  res.status(200).json(samplebooks);
});

//end point to search a book by id
router.get('/books/:id', function(req, res, next) {
  var samplebooks=req.app.get('samplebooks');
  var result= samplebooks.find(book => book.id == req.params.id);
  if(result)
    return res.status(200).json(result);
  res.status(404).send("Sorry, book not found");
});

/* app health end point. */
router.get('/health', function(req, res, next) {
  return res.status(200).json("I'm Healthy");
});

module.exports = router;
