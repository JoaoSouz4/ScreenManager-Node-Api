const mongoose = require('mongoose');

async function startDb(){
    console.log('Conectando ao banco de dados...');
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/components-data');
        console.log('Conectado a base de dados');
    } catch (error) {
        console.log('Falha na conexão');  
    }
}

module.exports = startDb;