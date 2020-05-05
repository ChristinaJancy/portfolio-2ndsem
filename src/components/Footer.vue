<template>
  <div class="secondary" style="margin-top:-77px;">
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

    <v-footer dark padless>
      <v-card flat tile class="secondary flex text-center">
        <br><br>
        <v-card-text>
        <v-row>
          <v-col md="3" sm="12">
          <a href="https://www.facebook.com/christinajancy/" target="_blank">
            <v-btn class="mx-6 primary--text" icon>
              <v-icon size="60">mdi-facebook</v-icon>
            </v-btn>
          </a>
          <br><br>
          </v-col>
          <v-col md="3" sm="12">
          <a href="https://github.com/ChristinaJancy" target="_blank">
            <v-btn dark class="mx-6 primary--text" icon>
              <v-icon style="font-size:60px;" class="fa fa-github"></v-icon>
            </v-btn>
          </a>
              <br><br>
        </v-col>
        <v-col md="3" sm="12">
          <a href="https://www.linkedin.com/in/christinajancy/" target="_blank">
            <v-btn dark class="mx-6 primary--text" icon>
              <v-icon size="60">mdi-linkedin</v-icon>
            </v-btn>
          </a>
              <br><br>
          </v-col>
          <v-col md="3" sm="12">
          <a href="https://www.instagram.com/christinajancy/?hl=da" target="_blank">
            <v-btn dark class="mx-6 primary--text" icon>
              <v-icon size="60">mdi-instagram</v-icon>
            </v-btn>
          </a>
          </v-col>
          </v-row>
        </v-card-text>

 <v-card-text class="secondary--text pt-0">
        Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      </v-card-text>
        <v-divider></v-divider>

        <v-card-text class="primary--text">
          {{ new Date().getFullYear() }} —
          <strong>Christina Jancy</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </div>
</template>
