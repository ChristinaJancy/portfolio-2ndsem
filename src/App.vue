<template>
  <v-app id="app">
    <Navigation></Navigation>
      <v-content>
      <router-view />
      </v-content>
      
      <Footer></Footer>
  </v-app>
</template>

<script>
import * as easings from 'vuetify/es5/services/goto/easing-patterns'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

  export default {
    components: {
      Navigation,
      Footer,
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

<style lang="scss">


router-link-exact-active {
      color: rgb(255, 238, 0);
    text-decoration: none;
    }
  
#app{
  margin:0 auto; 
  padding: 0 auto;
}
h1{
  font-family: 'Crimson Pro', serif;
}
h2{
  font-family: 'Chakra Petch', sans-serif;
}
p{
  font-family: 'Baloo Da 2', cursive;
}
</style>
