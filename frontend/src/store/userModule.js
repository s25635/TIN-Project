const state = {
    users: [],
    currentUser: null,
};

const getters = {
    getAllUsers: (state) => state.users,
    getCurrentUser: (state) => state.currentUser,
};

const mutations = {
    setUsers: (state, users) => (state.users = users),
    setCurrentUser: (state, user) => (state.currentUser = user),
};

const actions = {
    fetchUsers: ({ commit }) => {
        const fakeUsers = [
            { id: 1, username: 'user1', email: 'user1@example.com' },
            { id: 2, username: 'user2', email: 'user2@example.com' },
        ];
        commit('setUsers', fakeUsers);
    },

    login: ({ commit }, userData) => {
        const fakeCurrentUser = { id: 1, username: userData.username, email: userData.email };
        commit('setCurrentUser', fakeCurrentUser);
    },

    logout: ({ commit }) => {
        commit('setCurrentUser', null);
    },
};

export default {
    state,
    getters,
    mutations,
    actions,
};
