module.exports = (sequelize, DataTypes) => {

    const Like = sequelize.define("like", {
        like: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    });

    Like.associate = (models) => {

        Like.belongsTo(models.user, {
            foreignKey: {
                allowNull: false
            }
        });
    
        Like.belongsTo(models.post, {
            foreignKey: {
                allowNull: false
            }
        });

        Like.belongsTo(models.comment, {
            foreignKey: {
                allowNull: false
            }
        });
    }

   

    return Like;
};