const { Model, DataTypes } = require('sequelize');

class Usuario extends Model {

    static init(sequelize) {
        super.init({
            nome: DataTypes.STRING,
            cpf: DataTypes.STRING,
            rg: DataTypes.STRING,
            email: DataTypes.STRING,
            telefone: DataTypes.STRING,
            endereco: DataTypes.STRING,
            data_nasc: DataTypes.STRING,
            estado: DataTypes.STRING,
            cidade: DataTypes.STRING,
        }, {
            sequelize,
            underscored: true,
        })
    }

}

module.exports = Usuario;