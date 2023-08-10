const express = require('express');
const routes = require('./routes.js');
const startDb = require('./config/startDb.js')
const cors = require('cors')

const app = express();
app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(8080, () => {
    console.log('Servidor aberto');
    startDb();
})