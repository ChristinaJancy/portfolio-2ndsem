<template>
  <v-content>
    <v-row class="mx-auto" style="background-color:#c34aff">
      <v-col cols="12" class="text-center text--primary">
        <h1 style="font-size:4rem">
          <span>I am a</span>
          <br />
          <Textclip></Textclip>
          <span>Designer</span>
        </h1>
        <br />
        <br />
        <br />
        <br />
      </v-col>
      <v-col sm="12" md="6" lg="6" class="mx-5">
        <h3 class="text-left">
          I am a multimedia design student at Esbjerg Business Academy EASV.
          <br />Experience in content creation, UX, business and web development
        </h3>

        <router-link to="/work">
          <v-btn
            class="my-2"
            style="font-decoration:none; background-color: black;"
            dark
            x-large
          >my work</v-btn>
        </router-link>
      </v-col>
      <v-col cols="auto">
        <v-img src="../assets/Astro.png" width="500"></v-img>
      </v-col>
    </v-row>
    <v-row style="background-color:white;">
      <v-col md="4" sm="12">
        <v-img
        src="../assets/leafroof.jpg">

        </v-img>
      </v-col>
      <v-col md="4" sm="12">
        <v-img
        src="../assets/leafroof.jpg">

        </v-img>
      </v-col>
      <v-col md="4" sm="12">
        <v-img
        src="../assets/leafroof.jpg">

        </v-img>
      </v-col>
    </v-row>
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