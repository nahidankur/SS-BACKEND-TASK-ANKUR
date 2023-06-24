const express = require('express');
const {createMovie, getAllMovies, getMovieById} = require('../controllers/movieController');
const authMiddleware =  require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', getAllMovies )
router.get('/:id', getMovieById )
router.post('/', authMiddleware, createMovie);

module.exports = router;
