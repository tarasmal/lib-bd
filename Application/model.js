const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const Application = sequelize.define('Application', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    return_date: {
        type: DataTypes.STRING
    },
    date_of_issue: {
        type: DataTypes.STRING
    }
}, {

});

export default Application;
