<template>
  <div fluid>
    <v-col>
    <!-- Floating navigation button -->
    
     
    <HomeIntro></HomeIntro>
    
    <HomeSelectedProjects></HomeSelectedProjects>  

    <HomeAboutMe></HomeAboutMe>
   


       <!--
         <HomeFooter></HomeFooter>
       -->
       
</v-col>
  </div>
</template>


<script>
import HomeIntro from "../components/home/HomeIntro";
import HomeSelectedProjects from "../components/home/HomeSelectedProjects";
import HomeAboutMe from "../components/home/HomeAboutMe";
//import HomeFooter from "../components/home/HomeFooter";


export default {
  name: "Home",
  components: {
   HomeIntro,
   HomeSelectedProjects,
   HomeAboutMe,
   //HomeFooter
  },
  data: () => ({
    
  })
};
</script>

<style lang="scss" scoped>
:root {
  --primary-color: #6CD9CE;
  --secondary-color: #D93BA1;
  --complimentary-color: #2E2473;
}


.h1_intro {
  color: var(--primary-color);
  transform: translateY(-600px);
  animation: 1.2s slideIn ease-in-out forwards 1s;
  z-index: 10;
  opacity: 0;
  position: relative;
}

.h1_intro::before {
    content: '';
    position: absolute;
    animation: 1s underline ease-in-out forwards 2s;
    mix-blend-mode: screen;
}

@keyframes skewBg {
  0% {
    transform: scale(.5);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes underline {
  100% {
    width: 100%;
  }
}

@keyframes slideIn {
  100% {
    transform: translateY(0px);
    opacity: 1;
  }
}
</style>
