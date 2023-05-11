const { DataTypes, Sequelize} = require('sequelize');
const sequelize = require('./db')

const Application = sequelize.define('Application', {
    id_application: {
        type: DataTypes.STRING(36),
        primaryKey: true,
        defaultValue: Sequelize.literal('uuid()'),
    },
    return_date: {
        type: DataTypes.STRING
    },
    date_of_issue: {
        type: DataTypes.STRING
    }
}, {
    tableName: "Application",
    freezeTableName: true,
    createdAt: false,

    // If don't want updatedAt
    updatedAt: false,
    timestamps: false, // Disable automatic timestamps
    underscored: false,

});

const Book = sequelize.define('Book', {
    id_book: {
        type: DataTypes.STRING(36),
        primaryKey: true,
        defaultValue: Sequelize.literal('uuid()')
    },
    book_title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    authors_book: {
        type: DataTypes.STRING
    },
    year_of_publication: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: "Book",
    freezeTableName: true,
    createdAt: false,

    // If don't want updatedAt
    updatedAt: false,
    timestamps: false, // Disable automatic timestamps
    underscored: false,
});
const Student = sequelize.define('Student', {
    id_student: {
        type: DataTypes.STRING(36),
        primaryKey: true,
        defaultValue: Sequelize.literal('uuid()'),
    },
    full_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    count_book: {
        type: DataTypes.INTEGER
    }
}, {
    tableName: "Student",
    freezeTableName: true,
    createdAt: false,

    // If don't want updatedAt
    updatedAt: false,
    timestamps: false, // Disable automatic timestamps
    underscored: false,

});

Student.hasMany(Application, { foreignKey: 'id_student' });
Application.belongsTo(Student, { foreignKey: 'id_student' });

Book.hasOne(Application, { foreignKey: 'id_book' });
Application.belongsTo(Book, { foreignKey: 'id_book' });

module.exports = {Student, Application, Book}

