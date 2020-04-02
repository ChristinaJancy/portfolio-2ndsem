<template>
<v-row class="primary" style="margin-top:-80px; padding-top:50px;">
     
<v-col cols="12">
<div class="container">
    <div class="box">
        <div class="title">
            <span class="block"></span>
            <h1 class="secondary--text" >Christina Jancy<span></span></h1>
        </div>

        <div class="role">
            <div class="block"></div>
            <p class="secondary--text">MMD student</p>
        </div>
    </div>
</div>
<div justify="center" align="center" class="pt-10">
<h4 class="wordCarousel">    
      <span> with experience in</span>  
        <div> 
<!--        Use classes 2,3, or 4 to match the number of words --> 
            <ul class="flip4"> 
                <li>Content creation</li>
                <li>Web design</li>
                <li>User Experience</li> 
                <li>Business</li>  
            </ul>
        </div>  
    </h4>
  </div>
</v-col>

<!-- 
  
  Word carousel 

-->

     
     <!--
     <v-col cols="12" class="text-center text--text" justify="center">
       
     <h1 class="h1_intro" style="line-height:5px;">
          <span style="font: 200 5vw 'Crimson Pro', serif">I am a</span>
          <br />
        <Textclip></Textclip>
         <span style="font: 200 5vw 'Crimson Pro', serif">Designer</span>
       </h1>
        <br />
      </v-col>
--> 

<!--
      <v-col cols="auto">
        <br />
        <br />
        <br />
        <br />
       
        <p class="text--text text-left" id="text_designer">
          Hi! I am Christina. 
          <br>
          I am a multimedia design student at
          <br>
          <span>Esbjerg Business Academy EASV.</span>
          <br />
          <span>Experience in content creation, UX,</span>
          <br />
          <span>business and web development</span>
          <br />
          <router-link to="/works">
            <v-btn
              color="text"
              class="my-4"
              style="font-decoration:none;"
            >my work</v-btn>
          </router-link>
        </p>
        </v-col>
        -->

      <!--
      <v-col cols="12" sm="12" md="6" justify="center" align="center">
        <v-img src="../../assets/png_head.png" width="auto" height="auto" max-width="400"></v-img>
      </v-col>
      -->


   </v-row>
</template>

<script>
//import Textclip from "../Textclip";

export default {
    name: "HomeIntro",
  components: {
    //Textclip
  }, 
}
</script>

<style lang="scss" scoped>
//About me text//
#text_designer {
font: 200 2vw 'Baloo Da 2', cursive;
}

@media screen and (max-width: 800px){
  #text_designer{
   font: 200 4vw 'Baloo Da 2', cursive;
  }
}

//I am __ designer text scss
:root {
  --primary-color: #6CD9CE;
  --secondary-color: #D93BA1;
  --complimentary-color: #2E2473;
}

.h1_intro {
  color: var(--primary-color);
  transform: translateY(-600px);
  animation: 1.2s slideIn ease-in-out forwards 1s;
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
/* 

About me text 

*/
@import url('https://fonts.googleapis.com/css?family=Lato:300,400|Poppins:300,400,800&display=swap');


.container { 
  justify-content: center;
  align-items: center;
  text-align: center;
  display: flex;

  .box {
    width:auto;
    height: auto;
    position: relative;
    justify-content: center;
    flex-direction: column;

    .title {
      width: 100%;
      position: relative;
      display: flex;
      align-items: center;
      height: 50px;

      .block {
        width: 0%;
        height: inherit;
        background: #ffb510;
        position: absolute;
        animation: mainBlock 2s cubic-bezier(.74, .06, .4, .92) forwards;
        display: flex;
      }

      h1 {
        font: 200 5vw 'Crimson Pro', serif;
        color: #fff;
        -webkit-animation: mainFadeIn 2s forwards;
        -o-animation: mainFadeIn 2s forwards;
        animation: mainFadeIn 2s forwards;
        animation-delay: 1.6s;
        opacity: 0;
        align-items: baseline;
        position: relative;

        span {
          width:0px;
          height: 0px;
          -webkit-border-radius: 50%;
          -moz-border-radius: 50%;
          border-radius: 50%;
          background: #ffb510;
          -webkit-animation: load 0.6s cubic-bezier(.74, .06, .4, .92) forwards;
          animation: popIn 0.8s cubic-bezier(.74, .06, .4, .92) forwards;
          animation-delay: 2s;
          margin-left: 5px;
          margin-top: -10px;
          position: absolute;
          bottom: 13px;
          right: -12px;

        }
      }
    }

    .role {
      width: 100%;
      position: relative;
      display: flex;
      align-items: center;
      height: 30px;
      margin-top: 0px;

      .block {
        width: 0%;
        height: inherit;
        background: #e91e63;
        position: absolute;
        animation: secBlock 2s cubic-bezier(.74, .06, .4, .92) forwards;
        animation-delay: 2s;
        display: flex;
      }

      p {
        animation: secFadeIn 2s forwards;
        animation-delay: 3.2s;
        opacity: 0;
        padding-top:30px;
        text-transform: uppercase;
        letter-spacing: 5px;
        font: 200 2vw 'Crimson Pro', serif
      }
    }
  }
}


@keyframes mainBlock {
  0% {
    width: 0%;
    left: 0;

  }
  50% {
    width: 100%;
    left: 0;

  }
  100% {
    width: 0;
    left: 100%;
  }
}

@keyframes secBlock {
  0% {
    width: 0%;
    left: 0;

  }
  50% {
    width: 100%;
    left: 0;

  }
  100% {
    width: 0;
    left: 100%;
  }
}

@keyframes mainFadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}


@keyframes popIn {
  0% {
    width: 0px;
    height: 0px;
    background: #e9d856;
    border: 0px solid #ddd;
    opacity: 0;
  }
  50% {
    width: 10px;
    height: 10px;
    background: #e9d856;
    opacity: 1;
    bottom: 45px;
  }
   65% {
      width: 7px;
    height: 7px;
      bottom: 0px;
      width: 15px
   }
   80% {
      width: 10px;
    height: 10px;
      bottom: 20px
   }
  100% {
    width: 7px;
    height: 7px;
    background: #e9d856;
    border: 0px solid #222;
    bottom: 13px;

  }
}

@keyframes secFadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0.5;
  }
}


@keyframes top {
  0% {
    opacity: 0;
     bottom: -80px
  }
  100% {
    opacity: 1;
     bottom: 0px

  }
}

@keyframes icon {
  0% {
    opacity: 0;
     transform: scale(0.0);
  }
   50% {
      opacity: 1;
     transform: scale(1.3) rotate(-02deg);
   }
  100% {
    opacity: 1;
     bottom: 0px;
  }
}

/* 

Word Carousel 

*/

.wordCarousel {
    max-width:600px;
    font: 200 3vw 'Crimson Pro', serif;
    color: #939393;
     display: block;
    div {
        overflow: hidden;
        height: 65px;
        padding-top: 10px;
        margin-top: -10px;
        li {
            font: 200 3vw 'Crimson Pro', serif;
            color: #ccc;
            font-weight: 700;
            padding: 0 10px;
            height: 45px;
            margin-bottom: 45px;
            display: block;
        }
    }
}

.flip2 { animation: flip2 6s cubic-bezier(0.23, 1, 0.32, 1.2) infinite; }
.flip3 { animation: flip3 8s cubic-bezier(0.23, 1, 0.32, 1.2) infinite; }
.flip4 { animation: flip4 10s cubic-bezier(0.23, 1, 0.32, 1.2) infinite; }

@keyframes flip2 {
    0% { margin-top: -180px; }
    5% { margin-top: -90px;  }
    50% { margin-top: -90px; }
    55% { margin-top: 0px; }
    99.99% { margin-top: 0px; }
    100% { margin-top: -270px; }
}

@keyframes flip3 {
    0% { margin-top: -270px; }
    5% { margin-top: -180px; }
    33% { margin-top: -180px; }
    38% { margin-top: -90px; }
    66% { margin-top: -90px; }
    71% { margin-top: 0px; }
    99.99% { margin-top: 0px; }
    100% { margin-top: -270px; }
}

@keyframes flip4 {
    0% { margin-top: -360px; }
    5% { margin-top: -270px; }
    25% { margin-top: -270px; }
    30% { margin-top: -180px; }
    50% { margin-top: -180px; }
    55% { margin-top: -90px; }
    75% { margin-top: -90px; }
    80% { margin-top: 0px; }
    99.99% { margin-top: 0px; }
    100% { margin-top: -270px; }
}

// Layout //////////////////////////////////////////

@import url(https://fonts.googleapis.com/css?family=Roboto+Condensed:300|Oswald);

</style>
