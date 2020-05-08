<template>
  <div style="margin-top:-80px; padding-top:50px;" class="primary" fluid>
    <h1 class="text--text text-center " >All projects.</h1>
    <!--
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
    
    <br />
    <br />
    <br />
    <br />
-->
    <!-- FOR PC -->
    <v-row justify="center" class="mx-5" id="pcrow" >
      <v-col v-for="work in works" :key="work.title" :cols="work.flex" >
        <div class="view view-ninth" align="center" style="box-shadow:1px 1px 4px #000000;">
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
          link: work.link,
          id: work.id
          }}"
            >
              <v-card :elevation="hover ? 16 : 2" tile color="white" flat height="auto" class="pa-2" style="box-sizing:border-box;">
                <!-- width="400"-->
                <h3 class="black--text center-text" v-text="work.title"></h3>
                <v-img :src="work.src" class="align-end" height="400" contain></v-img>

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
                    link: work.link,
                    id: work.id
                    }}"
                  >
                    <v-btn>See more</v-btn>
                  </router-link>
                </div>
              </v-card>
            </router-link>
          </v-hover>
        </div>
      </v-col>

<!-- Video column--> 
      <v-col v-for="climateVideo in climateVideo" :key="climateVideo.title" :cols="climateVideo.flex">
        <div class="view view-ninth" align="center" style="box-shadow:1px 1px 4px #000000;">
          <v-hover v-slot:default="{ hover }">
            <router-link
              to="/climatevideo"
            >
              <v-card :elevation="hover ? 16 : 2" tile color="white" flat height="auto" class="pa-2" style="box-sizing:border-box;">
                <!-- width="400"-->
                 <h3 class="primary--text center-text" v-text="climateVideo.title"></h3>
                <v-img src="../assets/climate_song_studio.png" class="align-end" height="400" contain></v-img>

                <!-- Hover mask here-->
                <div class="mask mask-1"></div>
                <div class="mask mask-2"></div>
                <div class="content">
                  <h2 v-text="climateVideo.title"></h2>
                  <p v-text="climateVideo.aboutHover"></p>
                  <router-link to="/climatevideo"
                  >
                    <v-btn>Listen now!</v-btn>
                  </router-link>
                </div>
              </v-card>
            </router-link>
          </v-hover>
        </div>

      </v-col>
        <v-col v-for="infomercial in infomercial" :key="infomercial.title" :cols="infomercial.flex">
        <div class="view view-ninth" align="center" style="box-shadow:1px 1px 4px #000000;">
          <v-hover v-slot:default="{ hover }">
            <router-link
              to="/infomercial"
            >
              <v-card :elevation="hover ? 16 : 2" tile color="white" flat height="auto" class="pa-2" style="box-sizing:border-box;">
                <!-- width="400"-->
                 <h3 class="primary--text center-text" v-text="infomercial.title"></h3>
                <v-img src="../assets/drugs.png" class="align-end" height="400" contain></v-img>

                <!-- Hover mask here-->
                <div class="mask mask-1"></div>
                <div class="mask mask-2"></div>
                <div class="content">
                  <h2 v-text="infomercial.title"></h2>
                  <p v-text="infomercial.aboutHover"></p>
                  <router-link to="/infomercial"
                  >
                    <v-btn>Watch now!</v-btn>
                  </router-link>
                </div>
              </v-card>
            </router-link>
          </v-hover>
        </div>

      </v-col>
    </v-row>
    <br />
    <br />
    <br />

    <!-- FOR PC END-->

    <!-- FOR PHONE -->
    <v-row justify="center" class="mx-5" id="phonerow">
      <v-col v-for="work in works" :key="work.title" cols="auto" sm="12">
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
         
          <v-card :elevation="5" tile flat height="auto" class="pa-2" color="white" style="box-sizing:border-box;">
            <!-- width="400"-->
             <h3 class="black--text" v-text="work.title" align="center"></h3>
            <v-img :src="work.src" class="white--text align-end" height="400" contain>
              <v-btn width="100%" tile color="rgba(255, 255, 255, 0.600)" class="black--text">see more</v-btn>
            </v-img>

          </v-card>
        </router-link>
      </v-col>

      <!-- VIDEO COLUMN -->
        <v-col v-for="climateVideo in climateVideo" :key="climateVideo.title" cols="auto" sm="12">
        <router-link
         to="/climatevideo"
        >
          <v-card :elevation="5" tile flat height="auto" class="pa-2" color="white" style="box-sizing:border-box;">
            <!-- width="400"-->
             <h3 class="black--text" v-text="climateVideo.title" align="center"></h3>
            <v-img src="../assets/climate_song_studio.png" class="white--text align-end" height="400" contain>
              <v-btn width="100%" tile color="rgba(255, 255, 255, 0.600)" class="black--text">Listen now!</v-btn>
            </v-img>

          </v-card>
        </router-link>
      </v-col>
      
      <v-col v-for="infomercial in infomercial" :key="infomercial.title" cols="auto" sm="12">
        <router-link
         to="/infomercial"
        >
          <v-card :elevation="5" tile flat height="auto" class="pa-2" color="white" style="box-sizing:border-box;">
            <!-- width="400"-->
             <h3 class="black--text" v-text="infomercial.title" align="center"></h3>
            <v-img src="../assets/drugs.png" class="white--text align-end" height="400" contain>
              <v-btn width="100%" tile color="rgba(255, 255, 255, 0.600)" class="black--text">Watch now!</v-btn>
            </v-img>

          </v-card>
        </router-link>
      </v-col>

    </v-row>
    <br />
    <br />
  </div>
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
        flex: "4",
        aboutHover:
          "Made using Adobe Photoshop, during my 1st semester as a MMD student.",
        about:
          "Made during my first semester as a multimedia designer at Business Academy EASV in Esbjerg. I created this in adobe photoshop, using double exposure effects. The task was to have someone take a picture of yourself in profile and combine it with whatever was on your mind using double exposure effects.",
        id: 1
      },
      {
        title: "Mini me",
        src: require("../assets/minime.png"),
        flex: "4",
        aboutHover:
          "Made using Adobe illustrator, during my 1st semester as a MMD student",
        about: 'This project was called "Mini me" project, and the task was to create an illustrated version of yourself, for a class photo',
        id: 2
      },
      {
        //require("../assets/pizza_cropped.png")//

        title: "Pizza",
        src:
          "https://firebasestorage.googleapis.com/v0/b/portfolio-708bc.appspot.com/o/pizza_cropped.png?alt=media&token=328d0094-3857-4625-b633-5cbefd289506",
        flex: "4",
        aboutHover:
          "Made using Adobe illustrator, made in the beginning of my 1st semester as a MMD student",
        about:
          "A slice of pizza made in Adobe Illustrator, during my 1st semester as a multimedia designer. It was a fun little task, to get to know Adobe Illustrator better.",
        id: 3
      },
      {
        title: '"High pink"',
        src:
          "https://firebasestorage.googleapis.com/v0/b/portfolio-708bc.appspot.com/o/High%20Pink%20Label_cropped.png?alt=media&token=a4af2e6b-5fe5-4f5b-9375-31717ce608e5",
        flex: "6",
        aboutHover: "Made for a 2nd semester SoMe commercial. ",
        about: "Made using adobe illustrator for a for a school project. We created a short commercial, about a drink called 'High Pink'. This was the label created by me. ",
        link: "watch here: https://www.youtube.com/watch?v=2G_vG5WPwbs",
        id: 4
      },
      {
        title: "Portfolio logo",
        src:
          "https://firebasestorage.googleapis.com/v0/b/portfolio-708bc.appspot.com/o/Jancyv2.png?alt=media&token=00bc5306-4ede-4cdf-b9e4-92e3a7de8cb7",
        flex: "6",
        aboutHover: "Logo created for this portfolio",
        about: "Made using adobe illustrator. I wanted to create a logo, that can show who I am. I like that it is a logo, that can be 'split' into smaller parts, e.g. only showing my name, or only the face.",
        id: 5
      }
    ],
    climateVideo:[
      { 
        title: "Climate song",
        src:require("../assets/climate_song_studio.png"),
        flex: "6",
        aboutHover: "Lyrics written by me and a classmate, piano composed by me.",
        about: "Lyrics written by me and a classmate, piano composed by me.",
      }
    ],
  infomercial:[
    {
      title: "Infomercial",
        src:require("../assets/drugs.png"),
        flex: "6",
        aboutHover: "Infomercial project made during my 2nd semester",
        about: "Infomercial project made during my 2nd semester",
 }
  ]
  })
};
</script>

<style lang="scss">

#phonerow {
  display: none;
}
@media screen and (max-width: 830px) {
  #pcrow {
    display: none;
  }
  #phonerow {
    display: initial;
  }
}

// TEEEEEEEEEEEEST
.view {
  overflow: hidden;
  text-align: center;
  cursor: default;
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
  background: #dc14146b;
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
  background: rgb(0, 0, 0);
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
  font-size: 18px;
  font-weight: 500;
  padding: 5px 10px;
  text-decoration: none;
}

.about_text {
  background: rgb(255, 255, 255);
}
</style>
