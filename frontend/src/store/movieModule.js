const state = {
    movies: [],
    selectedMovie: null,
};

const getters = {
    getAllMovies: (state) => state.movies,
    getSelectedMovie: (state) => state.selectedMovie,
};

const mutations = {
    setMovies: (state, movies) => (state.movies = movies),
    setSelectedMovie: (state, movie) => (state.selectedMovie = movie),
};

const actions = {
    fetchMovies: ({ commit }) => {
        const fakeMovies = [{ id: 1, title: 'Movie 1' }, { id: 2, title: 'Movie 2' }];
        commit('setMovies', fakeMovies);
    },

    selectMovie: ({ commit }, movieId) => {
        const fakeSelectedMovie = { id: movieId, title: `Movie ${movieId}` };
        commit('setSelectedMovie', fakeSelectedMovie);
    },
};

export default {
    state,
    getters,
    mutations,
    actions,
};
