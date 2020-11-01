var bcrypt = require("bcryptjs");

module.exports = (sequelize, DataTypes) => {

    const User = sequelize.define("user", {
        first_name: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1]
            }
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1]
            }
        },
        username: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: true,
            validate: {
                len: [2]
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        bio: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [10, 140],
            }
        }
    });

    User.associate = (models) => {

        User.hasMany(models.plant, {
            onDelete: "cascade"
        });

        User.hasMany(models.post, {
            onDelete: "cascade"
        });

        User.hasMany(models.like, {
            onDelete: "cascade"
        });

        User.hasMany(models.comment, {
            onDelete: "cascade"
        });
    };

    User.prototype.validPassword = function (password) {
        return bcrypt.compareSync(password, this.password);
    };

    User.addHook("beforeCreate", function (user) {
        user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
    });

    return User;
};


