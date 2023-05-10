const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

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

export default Book;
