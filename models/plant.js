module.exports = (sequelize, DataTypes) => {

    const Plant = sequelize.define("plant", {

        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [2, 45]
            }
        },
        type: {
            type: DataTypes.STRING,
            alllowNull: true,
        },
        age: {
            type: DataTypes.INTEGER,
            alllowNull: true,
        },
        plantBio: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [10, 140],
            }
        }
    });

    return Plant;
};