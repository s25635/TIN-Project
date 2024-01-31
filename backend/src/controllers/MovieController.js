const express = require('express');
const router = express.Router();
const MovieService = require('../services/MovieService');

router.get('/movies', async (req, res) => {
    try {
        const movies = await MovieService.getAllMovies();
        res.json(movies);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/movies/:id', async (req, res) => {
    const movieId = req.params.id;

    try {
        const movie = await MovieService.getMovieById(movieId);

        if (!movie) {
            return res.status(404).json({ error: 'Movie not found' });
        }

        res.json(movie);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.post('/movies', async (req, res) => {
    const { title, genre, releaseYear } = req.body;

    try {
        const newMovie = await MovieService.createMovie({ title, genre, releaseYear });
        res.status(201).json(newMovie);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.put('/movies/:id', async (req, res) => {
    const movieId = req.params.id;
    const { title, genre, releaseYear } = req.body;

    try {
        const updatedMovie = await MovieService.updateMovie(movieId, { title, genre, releaseYear });

        if (!updatedMovie) {
            return res.status(404).json({ error: 'Movie not found' });
        }

        res.json(updatedMovie);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.delete('/movies/:id', async (req, res) => {
    const movieId = req.params.id;

    try {
        const deletedMovie = await MovieService.deleteMovie(movieId);

        if (!deletedMovie) {
            return res.status(404).json({ error: 'Movie not found' });
        }

        res.json({ message: 'Movie deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
