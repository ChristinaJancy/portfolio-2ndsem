<template>
  <v-content>
    <v-card id="home" tile style="margin-top:-50px;">
      <!--   -->
      <v-img :src="require('../assets/Me.jpg')" max-height="600">
        <Textclip></Textclip>
      </v-img>
    </v-card>
  </v-content>
</template>

<script>
import Textclip from "../components/Textclip";

export default {
  name: "Home",
  components: {
    Textclip,
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
    2px,
    map-get($colorz, rgb(0, 0, 0)),
    5px,
    0px,
    map-get($colorz, black),
  );
  background-color:rgba(255, 255, 255, 0.267);
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