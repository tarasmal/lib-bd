const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const Student = sequelize.define('Student', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    fullName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    countBook: {
        type: DataTypes.INTEGER
    }
}, {

});

export default Student;
