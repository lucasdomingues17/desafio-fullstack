module.exports = (sequelize, DataTypes) => {
    const CursoSala = sequelize.define("CursoSala", {
        curso_id: DataTypes.INTEGER,
        sala_id: DataTypes.INTEGER
    }, {
        underscored: true,
        freezeTableName: true,
        tableName: 'curso_sala',
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    });

    return CursoSala;
};