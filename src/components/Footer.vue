<template>
  <div class="secondary" style="margin-top:-20px;">
    <v-row>
      <v-col cols="12">
        <h1 class="text-center pt-10">Come find me.</h1>
      </v-col>
      <v-col cols="12" justify="center" class="pt-10">
        <p justify="center" align="center">
          I am an active member of differet social medias.
          <br />Feel free to follow me, comment, or message me.
          <br />Looking forward to hear from you.
          <br />My mail:
          <a
            href="mailto:chri91eq@easv360.dk"
            class="primary--text font-weight-bold"
          >chri91eq@easv360.dk</a>
        </p>
      </v-col>
    </v-row>
    <v-row class="secondary pt-10" style="display:flex;">
      <v-col cols="12" md="3" sm="6" xs="6" class="text-center">
        <a href="https://www.facebook.com/christinajancy/" target="_blank">
          <v-btn dark class="mx-4 primary--text pa-10" icon>
            <v-icon size="60px">mdi-facebook</v-icon>
          </v-btn>
        </a>
      </v-col>
      <v-col cols="12" md="3" sm="6" xs="6" class="text-center">
        <a href="https://github.com/ChristinaJancy" target="_blank">
          <v-btn dark class="mx-4 primary--text pa-10" icon>
              <i style="font-size:60px;" class="fa fa-github"></i>
          </v-btn>
        </a>
      </v-col>
      <v-col cols="12" md="3" sm="6" xs="6" class="text-center">
        <a href="https://www.linkedin.com/in/christinajancy/" target="_blank">
          <v-btn dark class="mx-4 primary--text pa-10" icon>
            <v-icon size="60px">mdi-linkedin</v-icon>
          </v-btn>
        </a>
      </v-col>
      <v-col cols="12" md="3" sm="6" xs="6" class="text-center">
        <a href="https://www.instagram.com/christinajancy/?hl=da" target="_blank">
          <v-btn dark class="mx-4 primary--text pa-10" icon>
               <v-icon size="60px">mdi-instagram</v-icon>
          </v-btn>
        </a>
      </v-col>
    </v-row>
    <v-row class="secondary pt-10">
      <v-col>
        <h1>dhskd</h1>
      </v-col>
    </v-row>
    <br />
    <br />
    <br />
    <br />
  </div>
</template>


<script>
export default {
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"]
  })
};
</script>