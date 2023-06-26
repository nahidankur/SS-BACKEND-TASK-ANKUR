const express = require('express');
const {createMovie, getAllMovies, getMovieById, updateMovie, deleteMovie} = require('../controllers/movieController');
const authMiddleware =  require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', getAllMovies )
router.get('/:id', getMovieById )
router.post('/', authMiddleware, createMovie);
router.put('/:id', authMiddleware, updateMovie);
router.delete('/:id', authMiddleware, deleteMovie);

module.exports = router;
