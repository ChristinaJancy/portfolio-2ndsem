<template>
  <v-container style="margin-top:-80px; padding-top:50px;" class="primary" fluid>
    <h1 role="img" class="textLine text--text" aria-label="All projects.">
  <span class="letter">A</span>
  <span>l</span>
  <span class="letter rev">l </span>
  <span class="letter rev">p</span>
  <span class="letter">r</span>
  <span class="letter rev">o</span>
  <span>j</span>
  <span class="letter rev">e</span>
  <span class="letter">c</span>
  <span>t</span>
  <span class="letter">s</span>
  <span class="letter">.</span>
</h1>
<br><br><br><br>
    <v-row justify="center" class="mx-5">
      <v-col v-for="work in works" :key="work.title" :cols="work.flex" sm="12" md="6">
        <v-hover v-slot:default="{ hover }">
          <router-link
            id="header-link"
            v-bind:to="{
          name: 'Work', params: 
          {
          title: work.title,
          src: work.src,
          flex:work.flex,
          about:work.about,
          id:work.id
          }}"
          >
            <v-card
              :elevation="hover ? 16 : 2"
              tile
              class="white"
              flat
              height="400"
            >
            <!-- width="400"-->
              <v-img :src="work.src" class="white--text align-end" height="400"  contain>
                <v-card-title id="title" v-text="work.title"></v-card-title>
              </v-img>
            </v-card>
          </router-link>
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
        src: "https://firebasestorage.googleapis.com/v0/b/portfolio-708bc.appspot.com/o/Flowergirl.jpg?alt=media&token=fb59adad-115f-42a1-81e3-ff73203d15d9",
        flex: "auto",
        about:
          "Made during my first semester as a multimedia designer at Business Academy EASV in Esbjerg. I created this in adobe photoshop",
        id: 1
      },
      {
        title: "Mini me",
        src: require("../assets/minimechristina.png"),
        flex: "auto",
        about: '"Mini me" project',
        id: 2
      },
      {
        //require("../assets/pizza_cropped.png")//

        title: "Pizza",
        src: "https://firebasestorage.googleapis.com/v0/b/portfolio-708bc.appspot.com/o/pizza_cropped.png?alt=media&token=328d0094-3857-4625-b633-5cbefd289506",
        flex: "auto",
        about: "A slice of pizza made in Adobe Illustrator, during my 1st semester as a multimedia designer.",
        id: 3
      },
      {
        title: "project 3",
        src: "https://via.placeholder.com/150",
        flex: "auto",
        about: "I am also a project",
        id: 4
      }
    ]
  })
};
</script>

<style>
#title {
  color: #000000;
  font-size: 18px;
  font-weight: 500;
  padding: 5px 10px;
  text-decoration: none;
}

.about_text {
  background: rgb(255, 255, 255);
}
</style>
