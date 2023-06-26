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

const getMovieById = async (req, res) => {
    try {
    //   if (!req.user) {
    //     return res.status(401).json({ error: 'Unauthorized' });
    //   } for authenticated user only. But this time we want to show each movie to the guests as well, so this part is commented
      const movie = await Movie.findById(req.params.id);
      if (!movie) {
        return res.status(404).json({ error: 'Movie not found' });
      }
      res.json(movie);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Something went wrong' });
    }
  };

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

const updateMovie = async (req, res) => {
  try {
    const { title, actors, crews, runtime } = req.body;
    const movieId = req.params.id;

    // Check if the user is an admin
    if (!req.user.isAdmin) {
      return res.status(403).json({ error: 'Unauthorized' });
    }

    // Find the movie by ID and update its details
    const updatedMovie = await Movie.findByIdAndUpdate(
      movieId,
      { title, actors, crews, runtime },
      { new: true }
    );

    if (!updatedMovie) {
      return res.status(404).json({ error: 'Movie not found' });
    }

    res.json(updatedMovie);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong' });
  }
};

const deleteMovie = async (req, res) => {
  try {
    const movieId = req.params.id;

    // Check if the user is an admin
    if (!req.user.isAdmin) {
      return res.status(403).json({ error: 'Unauthorized' });
    }

    // Find the movie by ID and delete it
    const deletedMovie = await Movie.findByIdAndDelete(movieId);

    if (!deletedMovie) {
      return res.status(404).json({ error: 'Movie not found' });
    }

    res.json({ message: 'Movie deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong' });
  }
};

module.exports = { getAllMovies, getMovieById, createMovie, updateMovie, deleteMovie };
