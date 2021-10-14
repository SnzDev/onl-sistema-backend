const { Model, DataTypes } = require('sequelize');

class Veiculo extends Model {

    static init(sequelize) {
        super.init({
            usuario_id: DataTypes.INTEGER,
            modelo: DataTypes.STRING,
            placa: DataTypes.STRING,
            tamanho_tanque: DataTypes.STRING,
        }, { sequelize });
    }
}

module.exports = Veiculo;