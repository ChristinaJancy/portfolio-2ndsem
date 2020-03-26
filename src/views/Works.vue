<template>
  <v-container fluid class="primary">
      <h1 class="text-center text--text">All <span class="button--text">projects.</span></h1>
    <v-row class="mx-5">
      <v-col v-for="work in works" :key="work.title" :cols="work.flex">
        <v-hover
          v-slot:default="{ hover }"
          >
        <v-card :elevation="hover ? 16 : 2"  class="white" flat width="auto">
          <v-img
          :src="work.src"
          class="white--text align-end"
          height="350"
          contain
          >
         
          <router-link id="header-link" v-bind:to="{
          name: 'Work', params: 
          {
          title:work.title,
          src:work.src,
          flex:work.flex,
          about:work.about,
          id:work.id
          }}">
          <v-card-title id="title" v-text="work.title"></v-card-title></router-link>
          </v-img>
          
        </v-card>
         </v-hover>
      </v-col>
    </v-row>
  </v-container>
  
</template>


<script>
export default {
  data: () => ({
    works: [
      {
        title: "Flowergirl",
        src: require('../assets/Flowergirl.jpg'),
        flex: 6,
        about: 'Made during my first semester as a multimedia designer at Business Academy EASV in Esbjerg. I created this in adobe photoshop',
        id:1,
      },
      {
        title: "Mini me",
        src: require('../assets/minimechristina.png'),
        flex: 6,
        about: '"Mini me" project',
        id:2,
        },
        {
        title: "Pizza",
        src: require('../assets/pizza_cropped.png'),
        flex: 4,
        about: 'A slice of pizza made in Adobe Illustrator, during my 1st semester as a multimedia designer.',
        id:2,
      },
      {
        title: "project 3",
        src: "https://via.placeholder.com/150",
        flex: 8,
        about: 'I am also a project',
        id:3,
      },
    ]
  })
};
</script>

<style>

#title {
  color: #000000;
  font-size: 18px;
  font-weight: 300;
  padding: 5px 10px;
  text-decoration: none;
}

.about_text{
background: rgb(255, 255, 255)
}


</style>