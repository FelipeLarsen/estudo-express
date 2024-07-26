const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });

// 
// app.use(express.static('public'));
// app.use('/static', express.static('public'));

app.use(function (req, res, next) {
  res.status(404).send('Sorry cant find that!');
});

// app.use(function (err, req, res, next) {
//   console.error(err.stack);
//   res.status(500).send('Something broke!');
// });

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})