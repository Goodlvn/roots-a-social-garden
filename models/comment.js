module.exports = (sequelize, DataTypes) => {

    const Comment = sequelize.define("comment", {
        text: {
            type: DataTypes.STRING,
            allowNull: false, 
            len: [1, 140]
        }
    });

    return Comment;
};