import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import MovieList from '../components/MovieList.vue';
import MovieDetail from '../components/MovieDetail.vue';
import UserList from '../components/UserList.vue';
import AuthPage from '../views/AuthPage.vue';

Vue.use(VueRouter);

const routes = [
    { path: '/', component: Home },
    { path: '/movies', component: MovieList },
    { path: '/movies/:id', component: MovieDetail, props: true },
    { path: '/users', component: UserList },
    { path: '/login', component: AuthPage },
    { path: '/register', component: AuthPage },
];

const router = new VueRouter({
    routes,
    mode: 'history',
});

export default router;
