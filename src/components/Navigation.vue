<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      style="border-radius: 0px 0px 200px 0px;padding-top:50px;"
      fixed
      dark
      class="primary"
      floating
      clipped
      mobile-break-point
      width="100"
      height="280"
    >
      <v-list dense justify="left" align="left">
        <!-- Home-->

        <router-link to="/">
          <v-list-item link>
            <v-list-item-content>
              <!--@click="$vuetify.goTo(home, options)"-->
              <v-list-item-title class="subtitle-2 text--text">Home</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>

        <!-- my work-->
        <router-link to="/works">
          <v-list-item link>
            <v-list-item-content>
              <!--@click="$vuetify.goTo(aboutMe, options)" -->
              <v-list-item-title class="subtitle-2 text--text">My work</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>

        <!-- about  -->
        <router-link to="/about">
          <v-list-item link>
            <v-list-item-content>
              <!--@click="$vuetify.goTo(skills, options)"-->
              <v-list-item-title class="subtitle-2 text--text">About me</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
<v-divider class="primary"></v-divider>
        <v-list-item>
          <v-list-content>
            <p class="text--text">Toggle theme:</p>
           <v-switch
           style="margin-top:-25px;"
        v-model="$vuetify.theme.dark"     
      ></v-switch>
          </v-list-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- App bar-->
    <v-app-bar app width="70" fixed class="primary" style="border-radius: 0px 0px 30px 0px;" flat>
      <v-app-bar-nav-icon color="text" @click.stop="drawer = !drawer">
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
      dynamic: "#ffffff"
    };
  }
};
</script>