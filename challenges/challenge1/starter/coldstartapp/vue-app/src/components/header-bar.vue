<script>
import HeaderBarBrand from '@/components/header-bar-brand.vue';
import AuthLogout from '@/components/auth-logout.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'HeaderBar',
  components: {
    HeaderBarBrand,
    AuthLogout,
  },
  data() {
    return {
      authenticated: Boolean,
    };
  },
  computed: mapGetters(['isAuthenticated']),
  methods: {
    ...mapActions(['checkAuthentication']),
  },
  created() {
    this.checkAuthentication();
  },
};
</script>

<template>
  <header>
    <nav class="navbar is-white" role="navigation" aria-label="main navigation">
      <HeaderBarBrand></HeaderBarBrand>
      <div class="navbar-menu">
        <div class="navbar-start">
          <router-link class="navbar-item nav-home" to="/">Home</router-link>
        </div>
        <div v-if="!isAuthenticated">
          <router-link class="navbar-item" to="/login">Login</router-link>
        </div>
        <div v-else>
          <AuthLogout class="navbar-item" />
        </div>
      </div>
    </nav>
  </header>
</template>
