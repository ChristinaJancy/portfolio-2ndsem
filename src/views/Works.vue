<template>
  <v-container fluid class="work">
    <v-row class="mx-12">
      <v-col v-for="work in works" :key="work.title" :cols="work.flex">
        <v-card>
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
          <v-card-text class="text--primary about_text" style="font-weight: bold;" v-text="work.about"></v-card-text>
        </v-card>
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
        flex: 8,
        about: 'Made in adobe shotoshop',
        id:1,
      },
      {
        title: "Mini me",
        src: require('../assets/minimechristina.png'),
        flex: 4,
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
        src: "https://img.redbull.com/images/c_fill,g_auto,w_1500,h_1000/q_70,f_auto/redbullcom/2016/09/22/1331819378679_2/hold-fokus-p%C3%A5-udgangen-af-svinget.jpg",
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
  color: #ffffff;
  font-size: 18px;
  font-weight: 300;
  padding: 5px 10px;
  text-decoration: none;
  background-color: #000000d0;
  border-bottom: 1 solid #ffffff;
}

.about_text{
background: rgb(255, 255, 255)
}

.work{
background: rgb(238,174,202);
background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);

}
</style>