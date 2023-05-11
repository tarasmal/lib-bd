const { Book } = require('../models');

// Create a new book
async function createBook(req, res) {
    try {
        const { book_title, authors_book, year_of_publication } = req.body;
        const book = await Book.create({
            book_title,
            authors_book,
            year_of_publication,
        });
        res.status(201).json(book);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create book' });
    }
}

// Get all books
async function getAllBooks(req, res) {
    try {
        const books = await Book.findAll();
        res.json(books);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch books' });
    }
}

// Get a single book by ID
async function getBookById(req, res) {
    const { id } = req.params;
    try {
        const book = await Book.findByPk(id);
        if (book) {
            res.json(book);
        } else {
            res.status(404).json({ error: 'Book not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch book' });
    }
}

// Update a book by ID
async function updateBook(req, res) {
    const { id } = req.params;
    try {
        const [updatedRows] = await Book.update(req.body, {
            where: { id_book: id },
        });
        if (updatedRows === 0) {
            res.status(404).json({ error: 'Book not found' });
        } else {
            res.json({ message: 'Book updated successfully' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to update book' });
    }
}

// Delete a book by ID
async function deleteBook(req, res) {
    const { id } = req.params;
    try {
        const deletedRows = await Book.destroy({ where: { id_book: id } });
        if (deletedRows === 0) {
            res.status(404).json({ error: 'Book not found' });
        } else {
            res.json({ message: 'Book deleted successfully' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete book' });
    }
}

module.exports = {
    createBook,
    getAllBooks,
    getBookById,
    updateBook,
    deleteBook,
};
