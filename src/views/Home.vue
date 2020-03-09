<template>
  <v-content>
    <v-row fluid>
      <v-col id="home" cols="12" fill>
        <v-img :src="require('../assets/leaffloor.jpg')" style="margin-top:-110px; max-height:700px">
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <Textclip></Textclip>
        </v-img>
      </v-col>
      <v-col id="aboutMe" sm="12" md="8" style="margin-top:-25px;">
        <v-img :src="require('../assets/Christina.jpg')" fill></v-img>
        <v-subheader>Student at Business Academy SouthWest (EASV)</v-subheader>
      </v-col>
      <v-col sm="12" md="4" class="text-left">
        <aboutMeCarousel></aboutMeCarousel>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="mx-auto" style="background-color:black;">
        <h1 id="skills">
          My skills
          <br />
          <v-subtitle class="subheading font-weight-regular">Multimedia Designer</v-subtitle>
          <br />
        </h1>
      </v-col>
    </v-row>
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
    aboutMeCarousel,
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
  lightred: #Fc766AFF,
  lightblue: #5BB4B1FF,
  darkgrey: #00203fff,
  mint: #ADEFD1FF,
  

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