const uuidv4 = require('uuid/v4');

module.exports = (sequelize, DataTypes) => {
    const Professor = sequelize.define("Professor", {
        uuid: DataTypes.UUID,
        nome: DataTypes.STRING,
    }, {
        underscored: true,
        freezeTableName: true,
        tableName: 'professor',
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        hooks: {
            beforeSave: async professor => {
                professor.uuid = uuidv4();
            }
        }
    });

    Professor.associate = function (models) {
        Professor.belongsToMany(models.Curso, {
            through: 'curso_professor',
            as: 'curso',
            foreignKey: 'professor_id',
        });
    }

    return Professor;
};