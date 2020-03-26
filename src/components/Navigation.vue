<template>
  <div>
    <v-navigation-drawer 
    v-model="drawer" 
    style="border-radius: 0px 0px 200px 0px;"
    fixed
    dark
    class="primary"
    left
    width="110"
    height="170">
      <v-list dense justify="left" align="left">
        <!-- Home-->
        
        <router-link to="/">
          <v-list-item link>
            <v-list-item-content>
              <!--@click="$vuetify.goTo(home, options)"-->
              <v-list-item-title class="subtitle-2">Home</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>

        <!-- my work-->
        <router-link to="/works">
          <v-list-item link>
            <v-list-item-content>
              <!--@click="$vuetify.goTo(aboutMe, options)" -->
              <v-list-item-title class="subtitle-2">My work</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>

        <!-- about  -->
        <router-link to="/about">
          <v-list-item link>
            <v-list-item-content>
              <!--@click="$vuetify.goTo(skills, options)"-->
              <v-list-item-title class="subtitle-2">About me</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
      </v-list>
    </v-navigation-drawer>

    <!-- App bar-->
    <v-app-bar 
    app 
    dense
    width="160"
    class="primary"
    style="border-radius: 0px 0px 30px 0px;" 
  >
  <v-spacer></v-spacer>
      <v-app-bar-nav-icon color="white" @click.stop="drawer = !drawer">
        <v-icon x-large>mdi-menu</v-icon>
      </v-app-bar-nav-icon>
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