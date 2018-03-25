<template>
  <!-- <v-app > -->
    <div>
    <v-navigation-drawer
      :clipped="clipped"
      :temporary="temporary"
      :mini-variant="miniVariant"
      fixed
      app
      dark
      class="secondary text--white"
    >
      <v-list>
        <v-list-tile
          router
          :to="item.to"
          :key="i"
          v-for="(item, i) in items"
          active-class="quinary  text--white"
          exact
          @click="updateURL(item.title)"
        >
          <v-list-tile-action @click="updateURL(item.title)" >
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content @click="updateURL(item.title)">
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar fixed app dark :clipped-left="clipped" class="primary" style="padding-left:12px;">
      <v-toolbar-side-icon @click="sidebar(!drawer,!miniVariant,!temporary)" ></v-toolbar-side-icon>
      <v-toolbar-title >{{title}}</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    
    </div>
</template>

<script>
export default {
  data() {
    return {
      clipped: true,
      drawer: false,
      fixed: true,
      temporary: false,
      items: [
        { icon: "apps", title: "Dashboard", to: "/dashboard" },
        { icon: "bubble_chart", title: "Inspire", to: "/inspire" },
        { icon: "exit_to_app", title: "Logout", to: "/" },
      ],
      miniVariant: true,
      title: this.$store.state.loadPage
    }
  },
  methods:{
    sidebar(drawer,miniVariant,temporary){
      this.drawer = drawer
      this.miniVariant = miniVariant
      // this.temporary = temporary
    },
    updateURL(toUrl){
      this.$store.dispatch('loadPage',toUrl)
    }
  },
  computed:{
    currentUrl:()=>{
      // console.log('test:',this.$route.params.id)
      return 2
    },
    loadPage:()=>{
      // return this.$store.getters.loadPage;
      return this.$store.state.loadPage;
    }
  },
  created(){
    if(this.$store.state.loadPage=='') this.$router.push('/')
  }
};
</script>

