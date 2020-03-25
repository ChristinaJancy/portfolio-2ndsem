<template>
  <v-container fluid class="work">
    <v-col>
      <router-link to="/works">
        <v-btn dark>Go back</v-btn>
      </router-link>
    </v-col>
    <v-row dense class="mx-12">
      <v-col cols="12" class="mx-auto">
        <v-card style="background-color:transparent;" flat>
          <v-img
            :src="work.src"
            height="auto"
            max-height="550"
            contain
            class="align-end"
            
          >
            <v-card-title v-text="work.title"></v-card-title>
          </v-img>
          
        </v-card>
        
          <v-card-text class="subtitle-1" v-text="work.about"></v-card-text>
        
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