import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        userInstance: JSON.parse(localStorage.getItem('userObj'))
    },
    mutations: {
        editProfile(state, payload) {
            this.userInstance = payload
        }
    },
    getters: {
        getUserData: (state) => {
            return state.userInstance
        }
    }
});