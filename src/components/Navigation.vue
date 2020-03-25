<template>
  <div>
    <v-navigation-drawer 
    v-model="drawer" app relative dark right>
      <v-list dense>
        
        <!-- Home-->
        <router-link to="/">
          <v-list-item link>
            <v-list-item-action>
              <v-icon>mdi-home</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <!--@click="$vuetify.goTo(home, options)"-->
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>

        <!-- my work-->
        <router-link to="/works">
          <v-list-item link>
            <v-list-item-action>
              <v-icon>mdi-account</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <!--@click="$vuetify.goTo(aboutMe, options)" -->
              <v-list-item-title>My work</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>

        <!-- about  -->
        <router-link to="/about">
          <v-list-item link>
            <v-list-item-action>
              <v-icon>mdi-account</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <!--@click="$vuetify.goTo(skills, options)"-->
              <v-list-item-title>About me</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
      </v-list>
    </v-navigation-drawer>

    <!-- App bar-->
    <v-app-bar 
    app 
    style="color:transparent"
    light 
    elevate-on-scroll
    prominent
    src="https://picsum.photos/1920/1080?random"
    fade-img-on-scroll
    scroll-threshold="100"
  >
  <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, #0b0c10, #0b0c10"
        ></v-img>
      </template>
      <div class="d-flex align-center">
        <router-link to="/">
          <div d-flex >
           <v-img
           src="../assets/jancy_logo.png">
           </v-img>
          </div>
        </router-link>
      </div>
      <v-spacer></v-spacer>

      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>
  </div>
</template>


<script>
import * as easings from "vuetify/es5/services/goto/easing-patterns";

export default {
  data() {
    return {
      drawer: null,
      type: "number",
      number: 0,
      selector: "#scroll-with-options",
      duration: 950,
      offset: 0,
      easing: "easeInOutCubic",
      easings: Object.keys(easings),
      //for scroll
      home: "#home",
      aboutMe: "#aboutMe",
      skills: "#skills",
      //Colorchange appbar
      dynamic: "#ffffff",
    };
  }
};
</script>