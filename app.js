var express = require('express');
var app = express();

app.use(express.json())

var categoryRouter = require('./categories/routes');

app.use('/api/categories', categoryRouter);

app.get('/', (req, res) => {
    res.send('root');
});

app.listen(5000, () => {console.log('server listening')});