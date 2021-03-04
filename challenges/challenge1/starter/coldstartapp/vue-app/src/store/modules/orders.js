import axios from 'axios';
import API from '../config';

export default {
  strict: process.env.NODE_ENV !== 'production',
  state: {
  },
  mutations: {
    preOrder: (state, id) => {
      try {
        axios.post(`${API}/orders`, id);
      } catch (error) {
        console.log(error);
        throw new Error(error);
      }
    },
  },
  actions: {
  },
  getters: {
  },
};
