<template>
    <div>
    <v-navigation-drawer
      v-model="drawer"
      app
      relative
      dark
      right
    >
      <v-list dense>
        <!-- Home-->
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title @click="$vuetify.goTo(home, options)">Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
<!-- About me-->
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-account</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title @click="$vuetify.goTo(aboutMe, options)">About me</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <!-- skills -->
                <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-account</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title @click="$vuetify.goTo(skills, options)">Skills</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- App bar-->
    <v-app-bar
      app
      :color="dynamic"
      light
      dense
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          style="margin-bottom:-47px;"
          class="shrink mr-2"
          contain
          src="@/assets/Flowergirl.jpg"
          transition="scale-transition"
          width="75"
        />
      </div>
 <template v-slot:extension>
        <v-app-bar-title
          class="shrink mt-1 hidden-sm-and-down"
          min-width="100"
          width="100"
        >Jancy</v-app-bar-title>
 </template>
      <v-spacer></v-spacer>

      <v-app-bar-nav-icon @click.stop="drawer = !drawer" ></v-app-bar-nav-icon>

    </v-app-bar>
    </div>
</template>


<script>
import * as easings from 'vuetify/es5/services/goto/easing-patterns'

export default {
    data () {
      return {
        drawer: null,
        type: 'number',
        number: 0,
        selector: '#scroll-with-options',
        duration: 950,
        offset: 0,
        easing: 'easeInOutCubic',
        easings: Object.keys(easings),
        //for scroll
        home: '#home',
        aboutMe: '#aboutMe',
        skills: '#skills',
        //Colorchange appbar
        dynamic: '#ffffff'
      }
    },
  }
</script>