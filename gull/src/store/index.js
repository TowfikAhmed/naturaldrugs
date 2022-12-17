import { createStore } from 'vuex'

import largeSidebar from './modules/largeSidebar'


export default  createStore({
    state: {
        user: null,
    },
    modules: {
        largeSidebar
    },
    mutations: {
        setUser(state, user) {
            state.user = user;
        },
    }
});