import axios from 'axios';

export default {
  strict: process.env.NODE_ENV !== 'production',
  state: {
    authCredentials: {
      userId: 0,
    },
  },
  mutations: {
    checkAuthentication: (state, clientPrincipal) => {
      if (clientPrincipal !== null || clientPrincipal !== undefined) {
        state.authCredentials = clientPrincipal;
      } else {
        state.authCredentials = { userId: 0 };
      }
    },
    removeAuthentication: (state) => {
      state.authCredentials = { userId: 0 };
      state.authCredentials.userId = 0;
    },
  },
  actions: {
    async checkAuthentication({ commit }) {
      const response = await axios.get('/.auth/me');
      const payload = response.data;
      const { clientPrincipal } = payload;
      commit('checkAuthentication', clientPrincipal);
    },
    async removeAuthentication({ commit }) {
      commit('removeAuthentication');
    },
  },
  getters: {
    isAuthenticated: (state) => (state.authCredentials !== null
      && state.authCredentials.userId !== 0),
    credentials: (state) => state.authCredentials,
  },
};
