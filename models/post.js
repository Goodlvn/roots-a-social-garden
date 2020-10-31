module.exports = (sequelize, DataTypes) => {

    const Post = sequelize.define("post", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len:[1, 25],
            }
        },
        body: {
            type: DataTypes.STRING,
            allowNull: false, 
            validate: {
                len: [1,140]
            }
        }
    });  

    return Post;
}