<template>
    <v-container fluid>
    <v-row dense>
      <v-col cols="12" class="mx-auto">
        <v-card>
          <v-img
            :src="work.src"
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="200px"
          >
          <v-card-title id="title" v-text="work.title"></v-card-title>
          </v-img>
          <v-card-text v-text="work.about"></v-card-text>
          <v-card-actions>
           
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
          <v-col>
        <router-link to="/works">
        <v-btn dark>
          Go back
        </v-btn>
        </router-link>
      </v-col>
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