const Movie = require('../models/Movie');

class MovieService {
    static async getAllMovies() {
        return await Movie.findAll();
    }

    static async getMovieById(movieId) {
        return await Movie.findByPk(movieId);
    }

    static async createMovie({ title, genre, releaseYear }) {
        return await Movie.create({ title, genre, releaseYear });
    }

    static async updateMovie(movieId, { title, genre, releaseYear }) {
        const movie = await Movie.findByPk(movieId);

        if (!movie) {
            return null;
        }

        movie.title = title;
        movie.genre = genre;
        movie.releaseYear = releaseYear;

        await movie.save();

        return movie;
    }

    static async deleteMovie(movieId) {
        const movie = await Movie.findByPk(movieId);

        if (!movie) {
            return null;
        }

        await movie.destroy();

        return movie;
    }
}

module.exports = MovieService;
