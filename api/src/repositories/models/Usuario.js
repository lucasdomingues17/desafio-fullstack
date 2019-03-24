const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const uuidv4 = require('uuid/v4');

module.exports = (sequelize, DataTypes) => {
    const Usuario = sequelize.define("Usuario", {
        uuid: DataTypes.UUID,
        nome: DataTypes.STRING,
        email: DataTypes.STRING,
        password_hash: DataTypes.STRING,
        password: DataTypes.VIRTUAL
    }, {
        underscored: true,
        freezeTableName: true,
        tableName: 'usuario',
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        hooks: {
            beforeSave: async usuario => {
                if (usuario.password) {
                    usuario.password_hash = await bcrypt.hash(usuario.password, 8);
                }

                usuario.uuid = uuidv4();
            }
        }
    });

    Usuario.prototype.checkPassword = function (password) {
        return bcrypt.compare(password, this.password_hash);
    };

    Usuario.prototype.generateToken = function () {
        return jwt.sign({
            id: this.id
        }, process.env.APP_SECRET);
    };

    return Usuario;
};