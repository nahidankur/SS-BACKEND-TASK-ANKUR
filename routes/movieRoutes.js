const express = require('express');
const {createMovie, getAllMovies} = require('../controllers/movieController');
const authMiddleware =  require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', getAllMovies )
router.post('/', authMiddleware, createMovie);

module.exports = router;
