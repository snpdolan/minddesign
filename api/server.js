const express = require('express')
// const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const fs = require('fs');

// mongoose.connect('mongodb://localhost/psEval9', { useNewUrlParser: true })

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/public', express.static(__dirname + '/public'));  
app.use(express.static('public'));

// const mainRoutes = require('./routes/main');
// const productRoutes = require('./routes/product');
// const reviewRoutes = require('./routes/review');

// app.use('/', mainRoutes)
// app.use('/products', productRoutes);
// app.use('/reviews', reviewRoutes);

app.get('/:file', (req, res) => {

  var file = req.params.file;
  // console.log(file);
  res.sendFile('/public/' + file);
});

app.post('/:file', (req, res) => {
  var file = req.params.file;
  let path = __dirname + '/public/' + file;
  // var regex = /><\/path>/g;
  // let svgStyled = req.body.data.replace(regex, 'style="stroke-width:5></path >"');
  
  fs.writeFile(path, req.body.data, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
    res.send('yep, data passed upward.');
  });

})

app.listen(8000, () => {
  console.log('Node.js listening on port ' + 8000)
});