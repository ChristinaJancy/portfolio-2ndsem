<template>
  <v-container fluid class="work primary" style="margin-top:-80px; padding-top:50px;">
    <v-row>
      <v-col cols="12" md="6" sm="12" class="mx-auto" align="center">
        <br />
        <br />
        <br />
        <v-card flat color="transparent" width="auto">
          <v-img :src="work.src" height="auto" max-height="550" contain></v-img>
        </v-card>
      </v-col>

      <v-col cols="12" md="6" sm="12" class="my-auto">
        <v-row>
          <v-card-title
          v-text="work.title"
          class="text--text"
          style="font:500 60px 'Baloo Da 2', cursive;"
        ></v-card-title>
        </v-row>
        
        <v-row>
          <br />
          <div style="padding-right:200px;">
            <v-card-text class="text--text" v-text="work.about"></v-card-text>
          </div>
        </v-row>
        <v-row class="my-12" align="left">
          <router-link to="/works">
            <v-btn class="button mx-5">Go back</v-btn>
          </router-link>
        </v-row>
     
      </v-col>
    </v-row>
       <br><br><b></b>
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