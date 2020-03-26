<template>
  <v-container fluid>
    <!-- Floating navigation button -->

    <v-row class="primary" style="margin-top:-20px; padding-top:50px;" fluid>
      <v-col cols="12" class="text-center text--text">
        <h1 style="font-size:3rem;line-height:30px;">
          <span style="font-size:4rem">I am a</span>
          <br />
          <Textclip></Textclip>
          <span style="font-size:4rem;">Designer</span>
        </h1>
        <br />
        <br />
        <br />
        <br />
      </v-col>
      <v-row justify="center" align="center">
        <v-col cols="12" sm="12" md="6" class="text--text">
          <p class="text--text" justify="center" align="center" id="text_designer">
            I am a multimedia design student at
            <br />
            <span style="margin-left:-35px;">Esbjerg Business Academy EASV.</span>
            <br />
            <span style="margin-left:-10px;">Experience in content creation, UX,</span>
            <br />
            <span style="margin-left:-45px;">business and web development</span>
            <br />
            <router-link to="/works">
              <v-btn
                outlined
                color="button"
                class="my-4"
                style="font-decoration:none;"
                x-large
              >my work</v-btn>
            </router-link>
          </p>
        </v-col>
        <v-col cols="12" sm="12" md="6" justify="center" align="center">
          <v-img src="../assets/png_head.png" width="auto" height="auto" max-width="400"></v-img>
        </v-col>
      </v-row>
    </v-row>
    <h1 class="my-5 text-center">Selected work.</h1>

    <v-row style="background-color:white;" id="selected_work">
      <v-col md="4" sm="12">
        <v-img src="https://via.placeholder.com/150" max-height="500" contain></v-img>
      </v-col>
      <v-col md="4" sm="12">
        <v-img src="https://via.placeholder.com/150" max-height="500" contain></v-img>
      </v-col>
      <v-col md="4" sm="12">
        <v-img src="https://via.placeholder.com/150" max-height="500" contain></v-img>
      </v-col>
    </v-row>

    <v-row class="primary">
      <v-img src="../assets/Christina.jpg" height="auto" width="400" fill>
        <v-col md="6" sm="12"></v-col>
      </v-img>
      <v-col md="6" sm="12">
        <v-row justify="center" align="center">
          <v-col cols="12">
            <h1 class="text-center text--text">All about me.</h1>
          </v-col>
          <v-col style="padding: 0 100px 0 100px;" class="my-5" cols="12">
            <p class="text--text" justify="center" align="center">
              <span>My name is Christina Jancy Pedersen,</span>
              <br />
              <span style="margin-left:-51px;">and I live in Esbjerg, Denmark.</span>
              <br />
              <span style="margin-right: -20px;">I'm a coffeeholic and I love photography.</span>
              <br />
              <span style="margin-right: -20px;">I am passionate about web development</span>
              <br />
              <span style="margin-right: -12px;">and design, and I work hard to make my</span>
              <br />
              <span style="margin-left: -90px;">imaginations come true.</span>
              <br />
              <span style="margin-left: -120px;">Thanks for looking!</span>
            </p>

            <v-btn outlined color="button">All about me</v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-row class="mx-auto" justify="center" align="center">
          <v-col cols="12">
            <h1 class="text-center">Come find me.</h1>
          </v-col>
          <v-col cols="12" style="padding: 0 100px 0 100px;" justify="center">
            <p class="text-center" justify="center" align="center">
              I am an active member of differet social medias.
              <br />Feel free to follow me, comment, or message me.
              <br />Looking forward to hear from you.
              <br />My mail:
              <a
                href="mailto:chri91eq@easv360.dk"
                class="secondary--text font-weight-bold"
              >chri91eq@easv360.dk</a>
            </p>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" md="3" sm="6" xs="6" class="text-center">
        <v-btn dark class="mx-4 black--text pa-10" icon>
          <v-icon size="60px">mdi-facebook</v-icon>
        </v-btn>
      </v-col>
      <v-col cols="12" md="3" sm="6" xs="6" class="text-center">
        <v-btn dark class="mx-4 black--text pa-10" icon>
          <v-icon size="60px">mdi-twitter</v-icon>
        </v-btn>
      </v-col>
      <v-col cols="12" md="3" sm="6" xs="6" class="text-center">
        <v-btn dark class="mx-4 black--text pa-10" icon>
          <v-icon size="60px">mdi-linkedin</v-icon>
        </v-btn>
      </v-col>
      <v-col cols="12" md="3" sm="6" xs="6" class="text-center">
        <v-btn dark class="mx-4 black--text pa-10" icon>
          <v-icon justify-center size="60px">mdi-instagram</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
import Textclip from "../components/Textclip";

export default {
  name: "Home",
  components: {
    Textclip
  },
  data: () => ({
    show: true,
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
    shouldStick: true
  })
};
</script>

<style lang="scss" scoped>
#text_designer {
  font-size: 25px;
}

@media screen and (max-width: 450px) {
  #text_designer {
    font-size: 15px;
  }
}
@media screen and (max-width: 260px) {
  #text_designer {
    font-size: 10px;
  }
}

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