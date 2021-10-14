const Sequelize = require('sequelize');
const dbConfig = require('../config/config')

const Usuario = require('./model/Usuario');
const Servico = require('./model/Servico');
const Veiculo = require('./model/Veiculo');

const connection = new Sequelize(dbConfig);

Usuario.init(connection);
Servico.init(connection);
Veiculo.init(connection);

//ASSOCIATION OFF Usuario AND Servico
Usuario.hasMany(Servico);
Servico.belongsTo(Usuario);

//ASSOCIATION OFF Usuario AND Veiculo
Usuario.hasMany(Veiculo);
Veiculo.belongsTo(Usuario);

module.exports = connection;