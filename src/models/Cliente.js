import mongoose from 'mongoose';

const clienteSchema = new mongoose.Schema({
    id: {type: String},
    nome: {type: String, required: true},
    cpf: {type: Number},
    endereco: {type: String}
});

const cliente = mongoose.model('clientes', clienteSchema);

export default cliente;