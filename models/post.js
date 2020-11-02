module.exports = (sequelize, DataTypes) => {

    const Post = sequelize.define("post", {
        body: {
            type: DataTypes.STRING,
            allowNull: false, 
            validate: {
                len: [1,140]
            }
        }
    });  

    Post.associate = (models) => {

        Post.belongsTo(models.user, {
            foreignKey: {
                allowNull: false
            }
        });

        Post.belongsTo(models.plant, {
            foreignKey: {
                allowNull: true
            }
        });

        Post.hasMany(models.like, {
            onDelete: "cascade"
        });
        Post.hasMany(models.comment, {
            onDelete: "cascade"
        });




    }

    return Post;
}