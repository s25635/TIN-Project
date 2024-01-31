import Vue from 'vue';
import Vuex from 'vuex';
import movieModule from './movieModule';
import userModule from './userModule';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        movies: movieModule,
        users: userModule,
    },
});
