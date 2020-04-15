<template>
  <v-container fluid class="work primary" style="margin-top:-80px; padding-top:50px;">
    <v-row dense class="mx-12">
      <v-col cols="12" class="mx-auto">
        <v-card flat
         class="white">
          <v-img
            :src="work.src"
            height="auto"
            max-height="550"
            contain
            class="align-end justify-center"
          >
            <v-card-title v-text="work.title"></v-card-title>
          </v-img>
        </v-card>
      </v-col>
      <v-col cols="12">
        <router-link to="/works">
          <v-btn dark>Go back</v-btn>
        </router-link>
      </v-col>
    </v-row>
    <v-row width="100%" class="text" fluid>
      <v-col cols="6">
        <v-card-text v-text="work.about"></v-card-text>
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
        about: work.about,
        id: work.id
      }
    };
  }
};
</script>