const uuidv4 = require('uuid/v4');

module.exports = (sequelize, DataTypes) => {
    const Sala = sequelize.define("Sala", {
        uuid: DataTypes.UUID,
        nome: DataTypes.STRING,
    }, {
        underscored: true,
        freezeTableName: true,
        tableName: 'sala',
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        hooks: {
            beforeSave: async sala => {
                sala.uuid = uuidv4();
            }
        }
    });

    Sala.associate = function (models) {
        Sala.belongsToMany(models.Curso, {
            through: 'curso_sala',
            as: 'curso'
        });
    }

    return Sala;
};