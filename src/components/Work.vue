<template>
  <v-container fluid class="work primary" style="margin-top:-80px; padding-top:50px;">
    <v-row>
      <v-col align="center">
        <h1
          v-text="work.title"
          class="text--text"
          style="font:500 60px 'Crimson Pro', serif, cursive;"
        ></h1>
        <br />
        <br />
        <br />
      </v-col>
    </v-row>
    <v-row>
      <v-col md="6" sm="12">
        <v-card flat color="transparent" width="auto">
          <v-img :src="work.src" height="auto" max-height="550" contain></v-img>
        </v-card>
      </v-col>
      <v-col cols="12" md="6" sm="12" class="my-auto" align="end">
        <br />
        <div class="mx-12" align="left">
          <v-card-text id="worktext" class="text--text" v-text="work.about"></v-card-text>
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
        link: work.link,
        id: work.id
      }
    };
  }
};
</script>

<style scoped>
#worktext {
  line-height: 40px;
  font: 400 4vh "Baloo Da 2", cursive;
}
</style>