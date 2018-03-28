<template>
  <v-toolbar fixed app dark :clipped-left="clipped" class="primary" style="padding-left:12px;">
      <v-toolbar-side-icon  @click="$emit('sidebar',!drawer,!miniVariant),updateDrawer(!drawer,!miniVariant)"></v-toolbar-side-icon>
      <v-toolbar-title >{{title}}</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
</template>

<script>

export default {
    data(){
        return{
            title: this.$store.getters.loadPage,
            drawer:true,
            miniVariant: true,
            clipped: true,
        }
    },
    methods:{
        updateDrawer(drawer,miniVariant){
            this.drawer = drawer
            this.miniVariant = miniVariant
        }
    }
}
</script>

<style scoped>

</style>
