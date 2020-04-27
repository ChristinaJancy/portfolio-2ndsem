<template>
  <v-container fluid class="primary" style="margin-top:-80px; padding-top:50px;">
    <v-row>
      <v-col cols="12" md="6" sm="12" class="mx-auto" align="center">
        <br />
        <br />
        <br />
        <div class="youtube_responsive_container">
          <iframe
            style="box-shadow:1px 1px 4px #000000;"
            width="auto"
            height="auto"
            src="https://www.youtube.com/embed/JeGRWA_IRzI"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </v-col>

      <v-col cols="12" md="6" sm="12" class="my-auto">
        <v-row>
          <v-title class="text--text pl-4" style="font:500 60px 'Baloo Da 2', cursive;">Climate song</v-title>
        </v-row>

        <v-row>
          <br />
          <div style="padding-right:200px;">
            <v-card-text
              class="text--text"
            >Lyrics written by me and a classmate, piano composed by me.</v-card-text>
          </div>
        </v-row>
        <v-row class="my-12" align="left">
          <router-link to="/works">
            <v-btn class="button mx-5">Go back</v-btn>
          </router-link>
        </v-row>
      </v-col>
    </v-row>
    <br />
    <br />
    <b></b>
  </v-container>
</template>



<script scoped>
export default {
  data: () => ({
    climateVideo: [
      {
        title: "climate song",
        src: require("../assets/climate_song_studio.png"),
        flex: "6",
        aboutHover:
          "Lyrics written by me and a classmate, piano composed by me.",
        about: "Lyrics written by me and a classmate, piano composed by me."
      }
    ]
  })
};
</script>


<style lang="scss" scoped>
// Youtube responsive

.youtube_responsive_container {
  position: relative;
  padding-bottom: 50%;
  padding-top: 50px;
  height: 0;
  overflow: hidden;
}

.youtube_responsive_container iframe,
.youtube_responsive_container object,
.youtube_responsive_container embed {
  top: 0;
  left: 0;
  width: 80%;
  position: absolute;
  height: 100%;
}
//Youtube responsive end
</style>