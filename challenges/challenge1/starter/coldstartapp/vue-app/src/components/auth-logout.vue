<script>
export default {
  name: 'AuthLogout',
  methods: {
    goAuth() {
      // const { pathname } = window.location;
      const redirect = `post_logout_redirect_uri=/`;
      const url = `/.auth/logout?${redirect}`;
      window.location.href = url;
    },
  },
};
</script>

<template>
  <div class="navbar-item" @click="goAuth">Logout</div>
</template>

<style scoped>
  .navbar-item{
    cursor: pointer;
  }

  .navbar-item:hover{
    color: #33C5F3;
  }
</style>
