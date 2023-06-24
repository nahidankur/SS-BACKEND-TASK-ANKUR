const Movie = require('../models/Movie');


// anyone who dosn't have an account can also see the movie list (Guest Users are allowed)
const getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong' });
  }
};

// only authenticated Users are allowed to see the movies
// const getAllMovies = async (req, res) => {
//   try {
//     // Check if the user is authenticated
//     if (!req.user) {
//       return res.status(401).json({ error: 'Unauthorized' });
//     }

//     const movies = await Movie.find();
//     res.json(movies);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Something went wrong' });
//   }
// };

const createMovie = async (req, res) => {
  try {
    const { title, actors, crews, runtime } = req.body;

    // Check if the user is an admin
    if (!req.user.isAdmin) {
      return res.status(403).json({ error: 'Unauthorized' });
    }

    // Create a new movie
    const movie = new Movie({
      title,
      actors,
      crews,
      runtime,
    });
    await movie.save();

    res.status(201).json(movie);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong' });
  }
};

module.exports = { getAllMovies, createMovie };
