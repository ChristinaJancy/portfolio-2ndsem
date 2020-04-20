<template>
  <v-container style="margin-top:-80px; padding-top:50px;" class="primary" fluid>
    <h1 role="img" class="textLine text--text" aria-label="All projects.">
      <span class="letter">A</span>
      <span>l</span>
      <span class="letter rev">l</span>
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
    <br />
    <br />
    <br />
    <br />

    <!-- FOR PC -->
    <v-row justify="center" class="mx-5" id="pcrow">
      <v-col v-for="work in works" :key="work.title" :cols="work.flex" sm="12" md="6">
        <v-hover v-slot:default="{ hover }" id="header-link">
          <router-link
            id="header-link"
            v-bind:to="{
          name: 'Work', params: 
          {
          title: work.title,
          src: work.src,
          flex: work.flex,
          aboutHover: work.aboutHover,
          about: work.about,
          id: work.id
          }}"
          >
            <div class="view view-ninth" align="center">
              <v-card :elevation="hover ? 16 : 2" tile class="white" flat height="400">
                <!-- width="400"-->
                <v-img :src="work.src" class="white--text align-end" height="400" contain>
                  <v-card-title id="title" v-text="work.title"></v-card-title>
                </v-img>

                <!-- Hover mask here-->
                <div class="mask mask-1"></div>
                <div class="mask mask-2"></div>
                <div class="content">
                  <h2 v-text="work.title"></h2>
                  <p v-text="work.aboutHover"></p>
                  <router-link
                    id="header-link"
                    v-bind:to="{
                    name: 'Work', params: 
                    {
                    title: work.title,
                    src: work.src,
                    flex: work.flex,
                    aboutHover: work.aboutHover,
                    about: work.about,
                    id: work.id
                    }}"
                  >
                    <v-btn>See more</v-btn>
                  </router-link>
                </div>
              </v-card>
            </div>
          </router-link>
        </v-hover>
      </v-col>
    </v-row>

    <!-- FOR PC END-->

    <!-- FOR PHONE -->
    <v-row justify="center" class="mx-5" id="phonerow">
      <v-col v-for="work in works" :key="work.title" :cols="work.flex" sm="12" md="6">
        <router-link
          id="header-link"
          v-bind:to="{
          name: 'Work', params: 
          {
          title: work.title,
          src: work.src,
          flex: work.flex,
          aboutHover: work.aboutHover,
          about: work.about,
          id: work.id
          }}"
        >
          <v-card :elevation="5" tile class="white" flat height="400">
            <!-- width="400"-->
            <v-img :src="work.src" class="white--text align-end" height="400" contain>
              <v-row>
                <v-col align="left">
                  <v-btn text class="black--text" v-text="work.title"></v-btn>
                </v-col>
                <v-col align="right">
                  <v-btn text class="black--text">see more</v-btn>
                </v-col>
              </v-row>
            </v-img>
          </v-card>
        </router-link>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
export default {
  data: () => ({
    show: false,
    works: [
      {
        title: "Flowergirl",
        src:
          "https://firebasestorage.googleapis.com/v0/b/portfolio-708bc.appspot.com/o/Flowergirl.jpg?alt=media&token=fb59adad-115f-42a1-81e3-ff73203d15d9",
        flex: "auto",
        aboutHover:
          "Made using Adobe Photoshop, during my 1st semester as a MMD student.",
        about:
          "Made during my first semester as a multimedia designer at Business Academy EASV in Esbjerg. I created this in adobe photoshop",
        id: 1
      },
      {
        title: "Mini me",
        src: require("../assets/minimechristina.png"),
        flex: "auto",
        aboutHover:
          "Made using Adobe illustrator, during my 1st semester as a MMD student",
        about: '"Mini me" project',
        id: 2
      },
      {
        //require("../assets/pizza_cropped.png")//

        title: "Pizza",
        src:
          "https://firebasestorage.googleapis.com/v0/b/portfolio-708bc.appspot.com/o/pizza_cropped.png?alt=media&token=328d0094-3857-4625-b633-5cbefd289506",
        flex: "auto",
        aboutHover:
          "Made using Adobe illustrator, made in the beginning of my 1st semester as a MMD student",
        about:
          "A slice of pizza made in Adobe Illustrator, during my 1st semester as a multimedia designer.",
        id: 3
      },
      {
        title: "project 3",
        src: "https://via.placeholder.com/150",
        flex: "auto",
        aboutHover: "Just a test",
        about: "I am also a project",
        id: 4
      }
    ]
  })
};
</script>

<style lang="scss">
#phonerow {
  display: none;
}
@media screen and (max-width: 500px) {
  #pcrow {
    display: none;
  }
  #phonerow {
    display: initial;
  }
}

// TEEEEEEEEEEEEST
.view {
  border: 10px solid #fff;
  overflow: hidden;
  text-align: center;
  box-shadow: 1px 1px 3px #000000;
  cursor: default;
  background: #fff no-repeat center center;
}
.view .mask,
.view .content {
  width: 500px;
  height: 400px;
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
}
.view h2 {
  text-transform: uppercase;
  color: #fff;
  text-align: center;
  position: relative;
  font-size: 17px;
  padding: 10px;
  background: rgba(0, 0, 0, 0.8);
  margin: 20px 0 0 0;
}
.view p {
  font: 500 14px "Baloo Da 2", cursive;
  position: relative;
  color: #fff;
  padding: 10px 20px 20px;
  text-align: center;
}
.view a.info {
  display: inline-block;
  text-decoration: none;
  padding: 7px 14px;
  background: #000;
  color: #fff;
  text-transform: uppercase;
  box-shadow: 0 0 1px #000;
}
.view a.info:hover {
  box-shadow: 0 0 5px #000;
}

.view-ninth .mask-1,
.view-ninth .mask-2 {
  height: 500px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: all 0.4s ease-in-out 0.6s;
  background: #dc143c6b;
}
.view-ninth .mask-1 {
  left: auto;
  right: 0px;
  transform: rotate(56.5deg) translateX(-180px);
  transform-origin: 100% 0%;
}
.view-ninth .mask-2 {
  top: auto;
  bottom: -100px;
  transform: rotate(56.5deg) translateX(180px);
  transform-origin: 0% 100%;
}
.view-ninth .content {
  background: rgba(0, 0, 0, 0.9);
  height: 0px;
  opacity: 0.5;
  width: 500px;
  overflow: hidden;
  transform: rotate(-33.5deg) translate(-112px, 166px);
  transform-origin: 0% 100%;
  transition: all 0.4s ease-in-out 0.3s;
}
.view-ninth h2 {
  background: transparent;
  margin-top: 5px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}
.view-ninth a.info {
  display: none;
}
.view-ninth:hover .content {
  height: 230px;
  width: 100%;
  opacity: 0.9;
  top: 40px;
  transform: rotate(0deg) translate(0px, 0px);
}
.view-ninth:hover .mask-1,
.view-ninth:hover .mask-2 {
  transition-delay: 0s;
  opacity: 1;
}
.view-ninth:hover .mask-1 {
  transform: rotate(56.5deg) translateX(1px);
}
.view-ninth:hover .mask-2 {
  transform: rotate(56.5deg) translateX(-1px);
}
//TEEEEST EEEEEND

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
