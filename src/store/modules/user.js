import axios from 'axios'
import { apiHost } from '../../api/config'
const config = {
    timeout: 60 * 2 * 1000,
    baseURL: apiHost
}
const instance = axios.create(config)


export default {
  state: {
    currentUser: localStorage.getItem("user")!=null ?JSON.parse(localStorage.getItem("user")):null,
    loginError: null,
    processing: false
  },
  getters: {
    currentUser: state => state.currentUser,
    processing: state => state.processing,
    loginError: state => state.loginError,
  },
  mutations: {
    setUser(state, payload) {
      state.currentUser = payload;
      state.processing = false;
      state.loginError = null;
    },
    setLogout(state) {
      state.currentUser = null;
      state.processing = false;
      state.loginError = null;

    },
    setProcessing(state, payload) {
      state.processing = payload;
      state.loginError = null;
    },
    setError(state, payload) {
      state.loginError = payload;
      state.currentUser = null;
      state.processing = false;
    },
    clearError(state) {
      state.loginError = null;
    }
  },
  actions: {
        login({ commit }, payload) {
      commit("clearError");
      commit("setProcessing", true);
            instance.post('/login', payload)
                .then((response) => {
                    const item = { user: response.data.user };
                    localStorage.setItem('token', response.data.token)
                    localStorage.setItem("user", JSON.stringify(item));
                    commit("setUser", { user: response.data.user });
                }).catch((error) => {
                localStorage.removeItem("user")
                commit("setError", error.response.data.message);
            })
    },
      checkToken({ commit }){
          commit("clearError");
          commit("setProcessing", true);
          const token = localStorage.getItem('token')
          Object.assign(instance.defaults, {headers: {Authorization: token}})
          instance.get('/user/me')
              .then((response) => {
                  commit("setProcessing", false);
              }).catch((error) => {
              localStorage.removeItem("user")
              commit("setError", error.response.data.message);
          })
      },
      register ({ commit }, payload) {
          commit("clearError");
          commit("setProcessing", true);
          instance.post('/register', payload)
              .then((response) => {
                  const item = { user: response.data.user};
                  localStorage.setItem('token', response.data.token)
                  localStorage.setItem("user", JSON.stringify(item));
                  commit("setUser", { user: response.data.user });
              }).catch((error) => {
              localStorage.removeItem("user")
              commit("setError", error.response.data.message);
          })
      },
    signOut({ commit }) {
        localStorage.removeItem("user")
        localStorage.removeItem("token")
        commit("setLogout")
    }
  }
};
