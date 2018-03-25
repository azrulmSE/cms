<template>
  <v-app class="senary">
    <v-toolbar-title class="primary --white-text"></v-toolbar-title>
    <v-spacer></v-spacer>
     <nuxt />
    <v-footer :fixed="fixed" class="primary white--text" app>
      <span>&copy; 2018 &nbsp;Multimedia Development Corporation</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data() {
      return {
        fixed: true,
      }
    },
    // layout: 'login'
  }
</script>
