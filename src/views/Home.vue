<template> 
<v-img :src="require('../assets/Christina.jpg')">
  <v-content>
   
    <container class="fill-height" fluid>
      
        <Textclip></Textclip>

        <v-card-actions>
          <v-row>
            <v-col offset="2" cols="10">
          <v-btn dark>
            <h1 class="white--text">About me</h1>
          </v-btn>
          </v-col>

          <v-col offset="2" cols="10">
          <v-btn dark>
            <h1 class="white--text">My skills</h1>
          </v-btn>
          </v-col>

                <v-col offset="2" cols="10">
          <v-btn dark>
            <h1 class="white--text">Portfolio</h1>
          </v-btn>
          </v-col>
          </v-row>
    </v-card-actions>
     

  <!--  
    <v-card tile>

<Parallax></Parallax>

      <v-col>
        <h2 class="text-center">Portfolio</h2>
        <v-row class="mx-auto my-auto">
         
          <v-col cols="auto">
            <Div1></Div1>
          </v-col>

          <v-col cols="auto">
             <Div2></Div2>
          </v-col>

          <v-col cols="auto">
            <Div3></Div3> 
          </v-col>

          <v-col cols="auto">
            <Div4></Div4>
          </v-col>

          <v-col cols="12">
            <h2 v-anime="{ rotate: '1turn', backgroundColor: '#FFF', duration: 2000, loop: true }">
             Hello
            </h2>
          </v-col>
          
        </v-row>
      </v-col>
    </v-card> -->
    </container>
    
  </v-content> </v-img>
</template>

<script>
import Textclip from "../components/Textclip";
//import Parallax from "../components/Parallax";
//import Div1 from "../components/Div1"
//import Div2 from "../components/Div2"
//import Div3 from "../components/Div3"
//import Div4 from "../components/Div4"

export default {
  name: "Home",
  components: {
    Textclip,
    //Parallax,
    //Div1,
    //Div2,
    //Div3,
    //Div4,
  },
  data: () => ({
    show: true
  }),
  mounted() {
    this.$anime(/* ... animate something ... */)
    
  },
};
</script>

<style lang="scss" scoped>
$colorz: (
  primary: #333333,
  secondary: #2b2b2b,
  white: #ffffff,
  black: #000000,
  complete: #2bfc83,
  inprogress: #ffb936,
  incomplete: #ff1212,
  lightgrey: #cacaca,
  lightred: #fc766aff,
  lightblue: #5bb4b1ff,
  darkgrey: #00203fff,
  mint: #adefd1ff
);

@mixin infobox_mixin(
  $border-radius,
  $border-color,
  $padding,
  $margin-bottom,
  $color
) {
  border: $border-radius solid $border-color;
  padding: $padding;
  margin-bottom: $margin-bottom;
  color: $color;
}
// code start here //
#div1 {
  width: 100px;
  height: 100px;
  background-color: red;
  animation-name: example;
  animation-duration: 4s;
  animation-iteration-count: infinite;
}
@keyframes example {
  0% {
    background-color: red;
    left: 0px;
    top: 0px;
  }
  25% {
    background-color: yellow;
    left: 200px;
    top: 0px;
  }
  50% {
    background-color: blue;
    left: 200px;
    top: 200px;
  }
  75% {
    background-color: green;
    left: 0px;
    top: 200px;
  }
  100% {
    background-color: red;
    left: 0px;
    top: 0px;
  }
}

#div2 {
  width: 100px;
  height: 100px;
  border-radius: 25px;
  border: 2px solid #73ad21;
  position: relative;
  animation-name: example2;
  animation-duration: 4s;
  animation-iteration-count: infinite;
}
@keyframes example2 {
  0% {
    border-color: red;
  }
  25% {
    border-color: yellow;
  }
  50% {
    border-color: blue;
  }
  75% {
    border-color: green;
  }
  100% {
    border-color: red;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.mixin {
  @include infobox_mixin(
    2px,
    map-get($colorz, rgb(0, 0, 0)),
    5px,
    0px,
    map-get($colorz, black)
  );
  background-color: rgba(255, 255, 255, 0.267);
  color: rgb(0, 0, 0);
  font-family: "Oxanium", cursive;
}

h2 {
  /*
  @include infobox_mixin(
    2px,
    map-get($colorz, black),
    10px,
    1px,
    map-get($colorz, black)
  );
  */
  font-family: "Chakra Petch", sans-serif;
}
</style>