<template>
  <v-layout>
    <sidebar></sidebar>
    <v-flex text-xs-center>
      <img src="/v.png" alt="Vuetify.js" class="mb-5">
      <blockquote class="blockquote">
        &#8220;First, solve the problem. Then, write the code.&#8221;
        <footer>
          <small>
            <em>&mdash;John Johnson</em>
          </small>
        </footer>
      </blockquote>
    </v-flex>
  </v-layout>
</template>
<script>
import sidebar from '~/components/sidebar'

export default {
  components:{
    sidebar:sidebar
  },
  mounted () {
    this.isLoading()
  },
  methods:{
    isLoading(){
        this.$nextTick(() => {
        this.$nuxt.$loading.start()
        setTimeout(() => this.$nuxt.$loading.finish(),2000)
        })
    }
  }
}
</script>
