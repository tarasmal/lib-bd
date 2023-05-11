const express = require('express')
const router = express.Router()
const {getAllBooks, createBook, deleteBook, getBookById, updateBook} = require('./controller')

router.get('/', getAllBooks)
router.get('/:id', getBookById)
router.put('/', createBook)
router.post('/', updateBook)
router.delete('/', deleteBook)

module.exports = router
