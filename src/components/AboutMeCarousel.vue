<template>
<div class="mx-auto">
          <v-carousel id="AboutMeCarousel"
          :show-arrows="true"
          touch
          height="230"
          style="width:500px;"
          light
          class="mx-auto"
        >
          <v-carousel-item class="mx-auto" max-width="500">
    
            <h2 class="font-weight-light carouselText" style="padding:0 20px 0 20px;">
              Hi, I'm Christina!
              <br />I am currently studying Multimedia Design at Business Academy SouthWest (EASV) in Esbjerg.
              <br />I love being INNOVATIVE, and I’m not afraid of a challenge - equipped with a CREATIVE mindset with a toolbox full of innovative design skills!
            </h2>
        
          </v-carousel-item>

         
          <v-carousel-item  class="mx-auto">
             <div class="font-weight-light carouselText" style="padding:0 20px 0 20px;" justify-content="center">
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
         </div>
          </v-carousel-item>
           
        </v-carousel>
        </div>
</template>


<style lang="scss">

.carouselText{
  font-size: 16px;
}

@media screen  and (max-width:750px) {
  .carouselText{
    font-size: 10px;
  }
}
</style>