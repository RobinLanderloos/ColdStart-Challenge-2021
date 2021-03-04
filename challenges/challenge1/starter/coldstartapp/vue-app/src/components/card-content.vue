<script>
import { mapMutations, mapGetters } from 'vuex';

export default {
  name: 'CardContent',
  props: {
    id: {
      type: Number,
      default: () => 0,
    },
    name: {
      type: String,
      default: () => '',
    },
    description: {
      type: String,
      default: () => '',
    },
    imageurl: {
      type: String,
      default: () => '',
    },
  },
  methods: {
    ...mapMutations(['preOrder']),
    onPreOrder() {
      this.preOrder(this.id);
    },
  },
  computed: mapGetters(['isAuthenticated']),
};
</script>

<template>
  <div class="card-content">
    <header class="card-header">
      <p class="card-header-title">{{ name }}</p>
    </header>
    <div class="content">
      <div class="catalog-image">
        <img v-bind:src="imageurl" />
      </div>
      <p class="description">{{ description }}</p>
    </div>
    <button v-if="isAuthenticated" @click="onPreOrder">Pre-Order</button>
  </div>
</template>

<style scoped>
  .card-content button{
    background: #33C5F3;
    border: none;
    width: 100%;
    height: 40px;
    font-size: 18px;
    color: white;
    cursor: pointer;
    border-radius: 50px;
  }
</style>
