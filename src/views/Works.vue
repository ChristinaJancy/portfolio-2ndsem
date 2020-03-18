<template>
  <v-container>
    <v-row dense>
      <v-col v-for="work in works" :key="work.title" :cols="work.flex">
        <v-card>
          <v-img
            :src="work.src"
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="200px"
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
          <v-card-text v-text="work.about"></v-card-text>
          <v-card-actions>
            
          </v-card-actions>
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
        src: 'url(../assets/Flowergirl.jpg)',
        flex: 8,
        about: 'djspdjapdaofhalifla',
        id:1,
      },
      {
        title: "some code stuff",
        src:"https://www.outsideonline.com/sites/default/files/styles/img_600x600/public/2019/11/22/rock-climbing-palestine-main_s.jpg?itok=BCE0xt-8",
        flex: 4,
        price: 850,
        id:2,
      },
      {
        title: "woooo",
        src: "https://img.redbull.com/images/c_fill,g_auto,w_1500,h_1000/q_70,f_auto/redbullcom/2016/09/22/1331819378679_2/hold-fokus-p%C3%A5-udgangen-af-svinget.jpg",
        flex: 12,
        price: 600,
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
  background-color: #00000099;
  border-bottom: 1px solid #ffffff;
}
</style>