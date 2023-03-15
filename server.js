const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use('/login', (req, res) => {
    res.send({
      token: 'test123'
    });
  });
  var server = app.listen(8000, '127.0.1.1', function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log(' http://localhost:8000/api/Login', host, port);
});