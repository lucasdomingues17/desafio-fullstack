const uuidv4 = require('uuid/v4');

const {
    CursoSala,
    CursoProfessor
} = require('../models');

module.exports = (sequelize, DataTypes) => {
    const Curso = sequelize.define("Curso", {
        nome: {
            type: DataTypes.STRING,
            allowNull: false,
            validade: {
                notNull: {
                    msg: 'O nome é obrigatório!'
                },
                notEmpty: {
                    msg: "Este campo não pode ser vazio!"
                }
            }
        },
        uuid: DataTypes.UUID,
        horario_inicio: {
            type: DataTypes.TIME,
            allowNull: false,
            notEmpty: {
                msg: "Este campo não pode ser vazio!"
            }
        },
        horario_fim: {
            type: DataTypes.TIME,
            allowNull: false,
            notEmpty: {
                msg: "Este campo não pode ser vazio!"
            }
        }
    }, {
        underscored: true,
        freezeTableName: true,
        tableName: 'curso',
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        hooks: {
            beforeSave: async curso => {
                curso.uuid = uuidv4();
            }
        }
    });

    Curso.associate = function (models) {
        Curso.belongsToMany(models.Professor, {
            // through: CursoProfessor,
            through: 'curso_professor',
            as: 'professores',
            foreignKey: 'curso_id',
            // sourceKey: 'professor_id'
        });

        Curso.belongsToMany(models.Sala, {
            // through: CursoSala,
            through: 'curso_sala',
            as: 'salas',
            foreignKey: 'curso_id'
        });
    }

    return Curso;
};