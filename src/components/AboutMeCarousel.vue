<template>
          <v-carousel id="AboutMeCarousel"
          style="margin-left:-35px;"
          :show-arrows="false"
          touch
          height="220"
          width="200"
          light
          hide-delimiter-background
        >
          <v-carousel-item
          style="padding-left:50px;">
            <h2 class="font-weight-light" style="font-size:16px;">
              Hi, I'm Christina!
              <br />I am currently studying Multimedia Design at Business Academy SouthWest (EASV) in Esbjerg.
              <br />I love being INNOVATIVE, and I’m not afraid of a challenge - equipped with a CREATIVE mindset with a toolbox full of innovative design skills!
            </h2>
          </v-carousel-item>
          <v-carousel-item text-center style="padding-left:50px;">
            <h2>About me</h2>
            <span><b>Name:</b> Christina Jancy Pedersen</span> 
            <br>
            <span><b>Age:</b> 23 years old (May 4th 1996)</span>
            <br>
             <span><b>Email:</b> christinajancy@hotmail.com</span>
            <br>
            <h2>Social links</h2>
            <span><b>LinkedIn:</b> <a href="https://www.linkedin.com/in/christinajancy/" target="_blank">christinajancy</a></span>
            <br>
            <span><b>Instagram</b> <a href="https://www.instagram.com/christinajancy/" target="_blank">christinajancy</a> </span>
          </v-carousel-item>
        </v-carousel>
</template>


<style lang="scss">

@media only screen and (max-width: 950px){

#AboutMeCarousel{
    padding-left:30px;
    }
}
</style>