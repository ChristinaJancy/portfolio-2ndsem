<template>
  <v-container fluid class="work primary" style="margin-top:-80px; padding-top:50px;">
    <v-row dense>
      <v-col cols="12" md="6" sm="12" class="mx-auto" align="center">
        <br />
        <br />
        <br />
        <v-card flat color="text" width="auto" max-width="500">
          <v-img :src="work.src" height="auto" max-height="550" contain>
             <v-card-title v-text="work.title"></v-card-title>
          </v-img>
        </v-card>
      </v-col>
      <v-col cols="12" md="6" sm="12" class="my-auto">
        <div style="padding: 0 100px 0 100px;">
          <v-card-text class="text--text" v-text="work.about">
          </v-card-text>
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
        about: work.about,
        id: work.id
      }
    };
  }
};
</script>