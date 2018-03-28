<template>
   <div >
       <sidebar></sidebar>
       <h1>TEST</h1>
    </div>
</template>

<script>
import sidebar from '~/components/sidebar'

export default {
    components:{
        sidebar:sidebar
    },
    data: () => ({
        
    }),
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

<style>

</style>
