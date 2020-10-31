

module.exports = (sequelize, DataTypes) => {

    const User = sequelize.define("user", {
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
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
            allowNull: false,
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

    return User;
};


