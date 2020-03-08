<template>
  <div>
    <StretchScroll></StretchScroll>
    <v-row id="home" class="text-center" no-gutter>
      <v-img :src="require('../assets/leaffloor.jpg')" style="margin-top:-110px; max-height:800px;">
        <v-col no-gutter class="my-12" style="margin-bottom:-50px;">
          <br /><br /><br /><br /><br /><br />
          <h1 class="mx-auto my-12" style="width:500px;">
            Christina Jancy Pedersen
            <br />
            <v-subtitle class="subheading font-weight-regular">Multimedia Designer</v-subtitle>
            <br />
            <v-subheader style="margin-left:4em;">Student at Business Academy SouthWest (EASV)</v-subheader>
          </h1>
          <br /><br />
        </v-col>
      </v-img>
    </v-row>
    <v-row id="aboutMe">
      <v-col cols="8" style="margin-top:-12px;">
        <v-img :src="require('../assets/Christina.jpg')"></v-img>
      </v-col>

      <v-col cols="4" class="text-left">
        <v-carousel
          style="margin-left:-35px;"
          :show-arrows="false"
          touch
          height="350"
          width="200"
          light
          vertical
          vertical-delimiters
          hide-delimiter-background
        >
          <v-carousel-item
          style="padding-left:50px;">
            <h2 class="font-weight-light" style="font-size:16px;">
              Hi, I'm Christina!
              <br />I am currently studying Multimedia Design at Business Academy SouthWest (EASV) in Esbjerg.
              <br />I love being INNOVATIVE, and I’m not afraid of a challenge - equipped with a CREATIVE mindset with a toolbox full of innovative design skills!
            </h2>
          </v-carousel-item>
          <v-carousel-item text-center style="padding-left:50px;">
            <h2>About me</h2>
            <span><b>Name:</b> Christina Jancy Pedersen</span> 
            <br>
            <span><b>Age:</b> 23 years old (May 4th 1996)</span>
            <br>
             <span><b>Email:</b> christinajancy@hotmail.com</span>
            <br>
            <h2>Social links</h2>
            <span><b>LinkedIn:</b> <a href="https://www.linkedin.com/in/christinajancy/" target="_blank">christinajancy</a></span>
            <br>
            <span><b>Instagram</b> <a href="https://www.instagram.com/christinajancy/" target="_blank">christinajancy</a> </span>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
    <v-row id="skills">
      <v-col no-gutter>
        <h2>My skills</h2>
      </v-col>
    </v-row>
    <v-row>

    </v-row>
  </div>
</template>

<script>
//import Stretch from '../components/Stretch'

export default {
  name: "Home",
  components: {
    //Stretch,
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
  lightgrey: #cacaca
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

h1 {
  @include infobox_mixin(
    5px,
    map-get($colorz, white),
    10px,
    1px,
    map-get($colorz, white)
  );
  background-color: rgba(0, 0, 0, 0.521);
  color: rgb(255, 255, 255);
  font-family: 'Oxanium', cursive;
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