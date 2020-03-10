<template>
  <v-content app>
    <v-card id="home" tile style="margin-top:-50px;">
      <!--  :src="require('../assets/leaffloor.jpg')" -->
      <v-img src="../assets/leaffloor.jpg" max-height="600">
        <br /><br /><br /><br /> <br />
      
      
     
        
        <Textclip></Textclip>
      </v-img>
    </v-card>
    <v-card id="aboutMe" tile>
        <v-img src="../assets/Christina.jpg" fill></v-img>
        <v-subheader>Student at Business Academy SouthWest (EASV)</v-subheader>
        <v-card-actions>
        <aboutMeCarousel></aboutMeCarousel>
     </v-card-actions>
    </v-card>
  </v-content>
</template>

<script>
//import Stretch from '../components/Stretch'
import Textclip from "../components/Textclip";
import aboutMeCarousel from "../components/AboutMeCarousel";

export default {
  name: "Home",
  components: {
    //Stretch,
    Textclip,
    aboutMeCarousel
  },
  data: () => ({})
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

.mixin {
  @include infobox_mixin(
    5px,
    map-get($colorz, white),
    10px,
    1px,
    map-get($colorz, white)
  );
  background-color: rgba(0, 0, 0, 0.521);
  color: rgb(255, 255, 255);
  font-family: "Oxanium", cursive;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 1px rgb(255, 255, 255);
  font-size: 3rem;
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