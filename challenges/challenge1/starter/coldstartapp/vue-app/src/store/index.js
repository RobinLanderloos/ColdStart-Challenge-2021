import Vue from 'vue';
import Vuex from 'vuex';
import catalogModule from './modules/catalog';
import authModule from './modules/auth';
import ordersModule from './modules/orders';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    catalog: catalogModule,
    auth: authModule,
    orders: ordersModule,
  },
  state: {
    isAuthenticated: Boolean,
  },
});
