const express = require('express');
const bodyParser = require('body-parser');
const mongoPratice = require('./mongoose');


const app = express();

app.use(bodyParser.json());

app.post('/products', mongoPratice.createProducts);

app.get('/products', mongoPratice.getProducts);

app.listen(3000);