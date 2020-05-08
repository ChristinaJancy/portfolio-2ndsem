<template>
     <v-row class="primary">
      <v-img
        tag="christina"
        src="https://firebasestorage.googleapis.com/v0/b/portfolio-708bc.appspot.com/o/Christina.jpg?alt=media&token=a7e51811-b671-4e75-8de0-9e9fda6d53d8"
        width="400"
        fit
      >
      </v-img>
      <v-col md="6" sm="12">
        <v-row justify="center" align="center">
          <v-col cols="12">
            <h1 class="text-left text--text pl-10">All about me.</h1>
          </v-col>
          <v-col class="my-5 pl-12" cols="12">
            <p class="text--text" style="line-height:35px;" justify="center">
              <span>My name is Christina Jancy Pedersen,</span>
              <br />
              <span>and I live in Esbjerg, Denmark.</span>
              <br />
              <span>I'm a coffeeholic and I love photography.</span>
              <br />
              <span>I am passionate about web development</span>
              <br />
              <span>and design, and I work hard to make my</span>
              <br />
              <span>imaginations come true.</span>
              <br />
              <span>Thanks for looking!</span>
            </p>
          <router-link to="/about">
            <v-btn color="text" class="mt-5">All about me</v-btn>
            </router-link>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
</template>