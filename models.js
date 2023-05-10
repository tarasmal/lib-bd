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

const Book = sequelize.define('Book', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    bookTitle: {
        type: DataTypes.STRING,
        allowNull: false
    },
    authorsBook: {
        type: DataTypes.STRING
    },
    year_of_publication: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {

});
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

Student.hasMany(Application)
Application.belongsTo(Application)

Book.hasOne(Application)
Application.belongsTo(Book)

