<template>
  <div>
    <!-- 
      PC NAVIGATION 
    -->

    <v-navigation-drawer
      v-model="drawer"
      style="border-radius: 0px 0px 200px 0px;padding-top:50px;"
      fixed
      dark
      elevation="12"
      class="primary pcnav"
      floating
      clipped
      mobile-break-point
      width="110"
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
              <v-list-item-title class="subtitle-2 text--text">All projects</v-list-item-title>
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
            <v-switch style="margin-top:-25px;" v-model="$vuetify.theme.dark"></v-switch>
          </v-list-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- App bar-->
    <v-app-bar
      app
      width="70"
      fixed
      class="primary pcnav"
      style="border-radius: 0px 0px 30px 0px;"
      flat
    >
      <v-app-bar-nav-icon color="text" @click.stop="drawer = !drawer">
        <v-icon x-large>mdi-menu</v-icon>
      </v-app-bar-nav-icon>
    </v-app-bar>

    <!-- 
    PC NAVIGATION END
    -->

    <!-- -----------------------------

                    Small screen navigation
    --------------------------------->

    <v-card class="my-auto">
      <v-navigation-drawer
        v-model="drawer"
        fixed
        elevation="12"
        class="smallscreennav"
        bottom
        floating
        mobile-break-point
        width="100%"
        height="93%"
        style="background-color: rgba(0, 0, 0, 0.940);"
      >
        <v-list align="center" nav class="my-12">
          <!-- Home-->

          <router-link to="/">
            <v-list-item link class="pa-12">
              <v-list-item-icon>
                <v-icon class="white--text">mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <!--@click="$vuetify.goTo(home, options)"-->
                <v-list-item-title class="title white--text">Home</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </router-link>

          <!-- my work-->
          <router-link to="/works">
            <v-list-item link class="pa-12">
              <v-list-item-icon>
                <v-icon class="white--text">mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <!--@click="$vuetify.goTo(aboutMe, options)" -->
                <v-list-item-title class="title white--text">All projects</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </router-link>

          <!-- about  -->
          <router-link to="/about">
            <v-list-item link class="pa-12">
              <v-list-item-icon>
                <v-icon class="white--text">mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <!--@click="$vuetify.goTo(skills, options)"-->
                <v-list-item-title class="title white--text">About me</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </router-link>

          <v-list-item align="end">
            <v-list-item-content>
              <v-list-item-title class="title white--text">Toggle theme:</v-list-item-title>
            </v-list-item-content>
            <v-spacer></v-spacer>
            <v-switch style="margin-right:30%;" v-model="$vuetify.theme.dark"></v-switch>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-card>
    <!-- App bar-->
    <v-app-bar bottom app class="smallscreennav" fixed style="background-color:#ffffff95;">
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon  color="black" @click.stop="drawer = !drawer"> 
          <v-icon @click="hidden = !hidden">{{ hidden ? 'mdi-menu' : 'mdi-window-close' }}</v-icon>
     </v-app-bar-nav-icon>
      <v-spacer></v-spacer>
    </v-app-bar>

    <!-- 
    PC NAVIGATION END
    -->
  </div>
</template>

<style lang="scss" scoped>
.smallscreennav {
  display: none;
}
.pcnav {
  display: initial;
}
@media screen and (max-width: 600px) {
  .pcnav {
    display: none;
  }
  .smallscreennav {
    display: initial;
  }
}
</style>



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
      //Theme toggle//
      show: true,
      props: {
        attrs: {
          type: Object,
          default: () => ({})
        }
      },
      hidden: false,
      data: vm => ({
        initialDark: vm.$vuetify ? vm.$vuetify.theme.dark : false
      }),

      beforeDestroy() {
        if (!this.$vuetify) return;
        this.$vuetify.theme.dark = this.initialDark;
      }
    };
  }
};
</script>