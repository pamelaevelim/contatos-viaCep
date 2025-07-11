const mongoose = require('mongoose');

const ContatoSchema = new mongoose.Schema(
    {
        nome: {type: String},
        email: {type: String},
        telefone: {type: String},
        cep: {type: String},
        logradouro: {type: String}, 
        bairro: {type: String},
        localidade: {type: String}, 
        uf: {type: String},
        numero: {type: String},
        complemento: {type: String}
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Contatos', ContatoSchema)