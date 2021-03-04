<template>
  <div class="container">
      <ul>
          <li>
                <AuthLogin provider="Google" />
            </li>
          <li>
                <AuthLogin provider="Github" />
            </li>
          <li>
                <AuthLogin provider="Azure" />
            </li>
      </ul>
  </div>
</template>

<script>
import AuthLogin from '../components/auth-login.vue';

export default {
  name: 'Login',
  components: {
    AuthLogin,
  },
};
</script>

<style scoped>
.container{
    max-width: 500px;
    max-height: 800px;
    margin: auto;
    background: #33c6f394;
    padding: 50px;
    display: flex;
    justify-content: center;
    border-radius: 10px;
}
</style>
