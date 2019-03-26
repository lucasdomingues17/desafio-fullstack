module.exports = (sequelize, DataTypes) => {
    const CursoProfessor = sequelize.define("CursoProfessor", {
        curso_id: DataTypes.INTEGER,
        professor_id: DataTypes.INTEGER
    }, {
        underscored: true,
        freezeTableName: true,
        tableName: 'curso_professor',
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    });

    return CursoProfessor;
};