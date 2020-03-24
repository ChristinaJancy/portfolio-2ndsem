<template>
    <v-container fluid class="work">
                <v-col>
        <router-link to="/works">
        <v-btn dark>
          Go back
        </v-btn>
        </router-link>
      </v-col>
    <v-row dense class="mx-12">
      <v-col cols="12" class="mx-auto">
        <v-card>
          <v-img
            :src="work.src"
            class="white--text align-end"
            height="auto"
            max-height="550"
            contain
          >
          <v-card-title id="title" v-text="work.title"></v-card-title>
          </v-img>
          <v-card-text class ="text--primary" v-text="work.about"></v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>



<script>
export default {
    data(){
        var work = this.$route.params
    return{
        work:{
        title: work.title,
        src: work.src,
        flex: work.flex,
        about: work.about,
        id: work.id,
        }
    }
        
    }
}
</script>