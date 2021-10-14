const { Model, DataTypes } = require('sequelize');

class Servico extends Model {
    static init(sequelize) {
        super.init({
            local: DataTypes.STRING,
            usuario_id: DataTypes.INTEGER,
            finalizado: DataTypes.BOOLEAN,
            obs: DataTypes.STRING,
        }, { sequelize, underscored: true, })
    }
}

module.exports = Servico;