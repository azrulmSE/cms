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
    <toolbar v-on:sidebar="sidebar" ></toolbar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    </div>
</template>

<script>
import toolbar from '~/components/toolbar'

export default {
  components:{
        "toolbar":toolbar
    },
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
    }
  },
  methods:{
    sidebar(drawer,miniVariant){
      this.drawer = drawer
      this.miniVariant = miniVariant
    },
    updateURL(toUrl){
      this.$store.dispatch('loadPage',toUrl)
    }
  },
  computed:{
    loadPage:()=>{
      return this.$store.getters.loadPage;
    }
  },
  created(){
    this.$store.commit('updatePage')
    if(this.$store.getters.loadPage=='') this.$router.push('/')
  }
}
</script>

