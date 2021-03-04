<script>
export default {
  name: 'AuthLogin',
  props: {
    provider: {
      type: String,
      default: () => '',
    },
  },
  methods: {
    goAuth() {
      const redirect = `post_login_redirect_uri=/`;
      const url = `/.auth/login/${this.provider}?${redirect}`;
      window.location.href = url;
    },
  },
};
</script>

<template>
  <div class="auth-link" @click="goAuth">
    <span>{{ provider }}</span>
  </div>
</template>

<style scoped>
  .auth-link{
    margin: 10px;
    padding: 5px;
    border: 0.5px solid rgba(0, 0, 0, 0.527);
    border-radius: 5px;
    font-size: 24px;
    min-width: 150px;
    text-align: center;
    cursor: pointer;
    background: rgba(0, 0, 0, 0.753);
    color: white;
  }
</style>
