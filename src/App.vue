<template>
  <v-app id="app">
    
    <Navigation></Navigation>
      <router-view />
      
  </v-app>
</template>

<script>
import * as easings from 'vuetify/es5/services/goto/easing-patterns'
import Navigation from '@/components/Navigation'

  export default {
    components: {
      Navigation,
    },
    data () {
      return {
        drawer: null,
        type: 'number',
        number: 0,
        selector: '#scroll-with-options',
        duration: 950,
        offset: 0,
        easing: 'easeInOutCubic',
        easings: Object.keys(easings),
        //for scroll
        home: '#home',
        aboutMe: '#aboutMe',
        skills: '#skills',
        //Colorchange appbar
        dynamic: '#00000096'
      }
    },
  }
</script>

<style>
#app{
  margin:auto;
}
h1{
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
</style>
