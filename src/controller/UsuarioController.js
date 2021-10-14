const { reset } = require('nodemon');
const Usuario = require('../database/model/Usuario');

module.exports = {
    async insere(req, res) {
        const { nome, cpf, rg, email, telefone, endereco, data_nasc, estado, cidade } = req.body;
        const response = await Usuario.create({ nome, cpf, rg, email, telefone, endereco, data_nasc, estado, cidade });
        res.json(response);
    },
    async ler(req, res) {
        const response = await Usuario.findAll();
        res.json(response);
    },
    async altera(req, res) {
        const { id } = req.params;
        const { nome, cpf, rg, email, telefone, endereco, data_nasc, estado, cidade } = req.body;
        const response = await Usuario.update({ nome, cpf, rg, email, telefone, endereco, data_nasc, estado, cidade }, { where: { id } });
        res.json(response);
    },
    async deleta(req, res) {
        const { id } = req.params;
        const response = await Usuario.destroy({ where: { id } });
        res.json(response);
    },
    async login(req, res) {
        const { cpf } = req.body;
        const response = await Usuario.findOne({where: { cpf }});
        res.json(response);
    },

}