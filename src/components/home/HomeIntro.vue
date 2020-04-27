<template>
  <v-row class="primary" justify="center" style="margin-top:-80px; padding-top:50px;">
    <!-- 
  Word carousel 
    -->
    <v-col cols="12" class="text-center text--text" justify="center">
      <h1 class="h1_intro" style="line-height:5px;">
        <span style="font: 200 8vw 'Crimson Pro', serif">I am a</span>
        <br />
        <Textclip></Textclip>
        <span style="font: 200 8vw 'Crimson Pro', serif">Designer</span>
      </h1>
      <br />
    </v-col>

    <v-col cols="auto">
      <br />
      <br />
      <br />
      <br />

      <p class="text--text text-left" id="text_designer">
        Hi I'm Christina!
        <br />A multimedia design student at
        <br />
        <span>Business Academy EASV.</span>
        <br />
        <span>I love working with Web Design, and UX.</span>
        <br />
        <span>Have a look!</span>
        <br />
        <router-link to="/works">
          <v-btn color="text" class="my-4" style="font-decoration:none;">my work</v-btn>
        </router-link>
      </p>
    </v-col>

    <v-col cols="12" sm="12" md="6" justify="center" align="center">
      <v-img src="../../assets/Jancy-logo.png" width="auto" height="auto" max-width="400"></v-img>
    </v-col>
  </v-row>
</template>

<script>
import Textclip from "../Textclip";

export default {
  name: "HomeIntro",
  components: {
    Textclip
  }
};
</script>

<style lang="scss" scoped>
//About me text//
#text_designer {
  font: 200 2vw "Baloo Da 2", cursive;
}

@media screen and (max-width: 800px) {
  #text_designer {
    font: 200 4vw "Baloo Da 2", cursive;
  }
}
</style>
