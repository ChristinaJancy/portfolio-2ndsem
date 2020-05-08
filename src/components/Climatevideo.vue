<template>
  <v-container fluid class="primary" style="margin-top:-80px; padding-top:50px;">
    <v-row>
      <v-col cols="12" align="center">
        <br />
        <br />
        <h1 class="text--text">Climate song</h1>
        <div align="center" justify="center" class="mx-12">
          <div class="youtube_responsive_container">
            <iframe
              src="https://www.youtube.com/embed/JeGRWA_IRzI"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <div class="mx-12" align="left">
          <v-card-text
            style="width:calc(100% -180px)"
            class="text--text"
            id="worktext"
          >Lyrics written by me and a classmate during 6th grade, where I also composed the piano. This was created as a part of a climate project, where we worked together with people from Iceland and Estonia. It was a super fun project and a great learning experience.</v-card-text>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <div align="right">
          <router-link to="/works">
            <v-btn class="button">Go back</v-btn>
          </router-link>
        </div>
      </v-col>
    </v-row>

    <br />
    <br />
  </v-container>
</template>


<style lang="scss" scoped>
// Youtube responsive
.youtube_responsive_container {
  position: relative;
  padding-bottom: 50%;
  padding-top: 30px;
  overflow: hidden;
}

.youtube_responsive_container iframe,
.youtube_responsive_container object,
.youtube_responsive_container embed {
  left: 0;
  width: 100%;
  position: absolute;
  height: 90%;
}
//Youtube responsive end

#worktext{
  line-height: 40px;
  font: 400 4vh 'Baloo Da 2', cursive;
}
</style>