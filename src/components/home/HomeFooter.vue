<template>
    <div> <v-row justify="center" class="secondary" align="center">
          <v-col cols="12">
            <h1 class="text-center">Come find me.</h1>
          </v-col>
          <v-col cols="12" justify="center">
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
      <v-row class="secondary">
      <v-col cols="12" md="3" sm="6" xs="6" class="text-center">
        <v-btn dark class="mx-4 primary--text pa-10" icon>
          <v-icon size="60px">mdi-facebook</v-icon>
        </v-btn>
      </v-col>
      <v-col cols="12" md="3" sm="6" xs="6" class="text-center">
        <v-btn dark class="mx-4 primary--text pa-10" icon>
          <v-icon size="60px">mdi-twitter</v-icon>
        </v-btn>
      </v-col>
      <v-col cols="12" md="3" sm="6" xs="6" class="text-center">
        <v-btn dark class="mx-4 primary--text pa-10" icon>
          <v-icon size="60px">mdi-linkedin</v-icon>
        </v-btn>
      </v-col>
      <v-col cols="12" md="3" sm="6" xs="6" class="text-center">
        <v-btn dark class="mx-4 primary--text pa-10" icon>
          <v-icon justify-center size="60px">mdi-instagram</v-icon>
        </v-btn>
      </v-col>
</v-row>
</div>
</template>


<script>
export default {
    data: () => ({
        icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
    })
}
</script>