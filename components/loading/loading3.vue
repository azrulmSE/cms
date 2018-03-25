<template>
    <div class="loading-page" v-if="loading">
    <p>Loading...</p>
    </div>
</template>

<script>
export default {
    data: () => ({
        loading: false
    }),
    methods: {
    start() {
      this.loading = true
    },
    finish() {
      this.loading = false
    }
  }
}
</script>

<style scoped>
.loading-page {
  position: fixed;
  top: 50%;
  left: 50%;
  /* width: 100%;
  height: 100%; */
  background: #fbe9e8;
  /* text-align: center;
  margin-left: auto;
  margin-right: auto; */
  font-size: 30px;
  font-family: sans-serif;
  text-align: center;
}
</style>
