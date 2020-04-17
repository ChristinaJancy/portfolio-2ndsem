<template>
  <v-container fluid class="work primary" style="margin-top:-80px; padding-top:50px;">
    <v-row dense>
      <v-col cols="12" md="6" sm="12" class="mx-auto" align="center">
        <br />
        <br />
        <br />
        <v-card flat color="white" width="auto" max-width="500">
          <v-img :src="work.src" height="auto" max-height="550" contain></v-img>
        </v-card>
      </v-col>
      <v-col cols="12" md="6" sm="12">
        <v-card-title
          v-text="work.title"
          class="text--text"
          style="font:500 5vw 'Baloo Da 2', cursive;"
        ></v-card-title>
        <div style="padding: 0 200px 0 0;" class="my-5">
          <v-card-text class="text--text" v-text="work.about"></v-card-text>
            <br><br><br><br>         
          <router-link to="/works">
            <v-btn class="button mx-5">Go back</v-btn>
          </router-link>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>



<script>
export default {
  data() {
    var work = this.$route.params;
    return {
      work: {
        title: work.title,
        src: work.src,
        flex: work.flex,
        aboutHover: work.aboutHover,
        about: work.about,
        id: work.id
      }
    };
  }
};
</script>