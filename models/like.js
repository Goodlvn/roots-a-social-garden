module.exports = (sequelize, DataTypes) => {

    const Like = sequelize.define("like", {
        like: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    });

    return Like;
};