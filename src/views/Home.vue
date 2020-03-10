<template>
  <v-content>
    <v-card id="home" tile style="margin-top:-50px;">
      <!--   -->
      <v-img :src="require('../assets/Me.jpg')" max-height="600">
        <Textclip></Textclip>
      </v-img>
    </v-card>
    <v-card tile>
      <v-col>
        <h2 class="text-center">Portfolio</h2>
        <v-row class="mx-auto my-auto">
          
          <v-col cols="auto">
            <div id="div1">
              <kinesis-container>
                <kinesis-element :strength="10">
                  <v-img width="100" height="100" src="../assets/Astro.png"></v-img>
                </kinesis-element>
                <kinesis-element :strength="60">
                  <h2>wooo!</h2>
                </kinesis-element>
              </kinesis-container>
            </div>
          </v-col>

          <v-col cols="auto">
            <div width="100" height="100">
              <button v-on:click="show = !show">
                <h3>click me!</h3>
              </button>
              <transition name="fade">
                <div v-if="show"
                id="div2" class="text-center">
                <p class="my-8">
                  Hello
                </p>
                </div>
              </transition>
            </div>
          </v-col>

          <v-col cols="auto">
            <div width="100" height="100">
              <kinesis-container>
                <kinesis-element
                  tag="img"
                  :src="require('../assets/Astro.png')"
                  :strength="-10"
                  width="50"
                  transformOrigin="50% 300%"
                  axis="x"
                  type="rotate"
                />
                <kinesis-element
                  tag="img"
                  width="50"
                  :src="require('../assets/Astro.png')"
                  :strength="10"
                  transformOrigin="50% 300%"
                  axis="x"
                  type="rotate"
                />
                <kinesis-element
                  tag="img"
                  width="50"
                  :src="require('../assets/Astro.png')"
                  :strength="10"
                  type="depth"
                  transformOrigin="50% 300%"
                />
              </kinesis-container>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-card>
  </v-content>
</template>

<script>
import Textclip from "../components/Textclip";

export default {
  name: "Home",
  components: {
    Textclip
  },
  data: () => ({
    show: true
  })
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
#div1{
  width: 100px;
  height: 100px;
  background-color: red;
  animation-name: example;
  animation-duration: 4s;
  animation-iteration-count: infinite;
}
@keyframes example {
  0%   {background-color:red; left:0px; top:0px;}
  25%  {background-color:yellow; left:200px; top:0px;}
  50%  {background-color:blue; left:200px; top:200px;}
  75%  {background-color:green; left:0px; top:200px;}
  100% {background-color:red; left:0px; top:0px;}
}

#div2{
width: 100px;
  height: 100px;
  border-radius: 25px;
  border: 2px solid #73AD21;
  position: relative;
  animation-name: example2;
  animation-duration: 4s;
  animation-iteration-count: infinite;
}
@keyframes example2 {
  0%   {border-color:red; }
  25%  {border-color:yellow;}
  50%  {border-color:blue;}
  75%  {border-color:green;}
  100% {border-color:red;}
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