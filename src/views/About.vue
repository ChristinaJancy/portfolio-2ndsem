<template>
  <div style="box-sizing:border-box; margin:-120px auto 0 auto; overflow-x: hidden; width: 100%; " fluid>
    <v-row class="primary" style="margin: 0 auto; padding: 0 auto;">
     
      <!--
    <v-col cols="12">
<h1 role="img" class="textLine text--text" aria-label="All projects.">
  <span class="letter">A</span>
  <span class="letter rev">b</span>
  <span class="letter rev">o</span>
  <span class="letter">u</span>
  <span class="letter rev">t </span>
  <span>m</span>
  <span class="letter">e</span>
  <span class="letter">.</span>
</h1>
<br><br><br><br><br>
    </v-col>
      -->

      <v-img
        tag="christina"
        max-height="600" 
        fit
        width="100%"
      
        src="https://firebasestorage.googleapis.com/v0/b/portfolio-708bc.appspot.com/o/Christina.jpg?alt=media&token=a7e51811-b671-4e75-8de0-9e9fda6d53d8"
      >
        <v-col cols="6">
          <br />
          <br />
          <br />
          <br />
          <br />
          <div class="container ma-0 pa-0">
            <div class="box">
              <div class="title">
                <span class="block"></span>
                <h1 class="aboutTop--text">
                  Christina Jancy
                  <span></span>
                </h1>
              </div>
              <br />
              <br />
              <div class="role">
                <div class="block"></div>
                <p class="aboutTop--text">MMD student</p>
              </div>
            </div>
          </div>
        </v-col>
      </v-img>
    </v-row>
<v-row class="primary" style="margin: 0 auto; parddin: 0 auto;">
<v-col cols="12" >
  <br><br><br><br><br><br>
          <h4 class="wordCarousel pt-12 mx-auto" align="center">
            <span class="secondary--text">experience in</span>
            <div>
              <!--        Use classes 2,3, or 4 to match the number of words -->
              <ul class="flip4">
                <li class="about_carousel--text">Content creation</li>
                <li class="about_carousel--text">Web design</li>
                <li class="about_carousel--text">User Experience</li>
                <li class="about_carousel--text">Business</li>
              </ul>
            </div>
          </h4>
           <br><br><br><br><br><br>
</v-col>

      <v-col cols="12" align="center">
        <br />
        <br />
        <h1 class="text--text">My video cv.</h1>
        <div align="center" justify="center" class="mx-12">
        <div class="youtube_responsive_container">
          <iframe
            src="https://www.youtube.com/embed/cG1XHMUauec"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        </div>
        <br />
        <br />
      </v-col>
</v-row>
    <v-row class="secondary" style="margin: 0 auto; parddin: 0 auto;">
      <v-col cols="12" align="center">
        <br><br>
        <h1 class="text-center">My CV.</h1>
        <br><br>
        <v-img
          src="https://firebasestorage.googleapis.com/v0/b/portfolio-708bc.appspot.com/o/Christina%20Jancy%20Pedersen%20-%20CV.png?alt=media&token=bdbdbee7-4f39-42fa-b247-3c84966e46ad"
          max-width="800"
          width="auto"
        ></v-img>
        <a
          href="https://firebasestorage.googleapis.com/v0/b/portfolio-708bc.appspot.com/o/Christina%20Jancy%20Pedersen%20-%20CV.pdf?alt=media&token=6296cae1-d602-470d-90de-f81e80f07030"
        >See CV as PDF</a>
      </v-col>
    </v-row>
    <v-row class="primary" style="margin: 0 auto; parddin: 0 auto;">
      <v-col cols="12" align="center">
        <br><br>
        <h1 class="text-center text--text">Business card.</h1>
        <br><br>
        <h3 class="text--text">Front</h3>
        <v-img
          max-width="500"
          width="auto"
          src="https://firebasestorage.googleapis.com/v0/b/portfolio-708bc.appspot.com/o/Business%20card%20front%20-%20Christina%20Jancy%20Pedersen.png?alt=media&token=a267cb3b-2852-4e3a-89c3-fa3d5a07bc8f"
        ></v-img>
        <br />
        <h3 class="text--text">Back</h3>
        <v-img
          max-width="500"
          width="auto"
          src="https://firebasestorage.googleapis.com/v0/b/portfolio-708bc.appspot.com/o/Business%20card%20back%20-%20Christina%20Jancy%20Pedersen.png?alt=media&token=b80673a5-f77f-4e78-9644-1c4766483055"
        ></v-img>
        <a
          class="text--text"
          href="https://firebasestorage.googleapis.com/v0/b/portfolio-708bc.appspot.com/o/Business%20card%20front%20%26%20back%20-%20Christina%20Jancy%20Pedersen.pdf?alt=media&token=56557d49-d917-41ae-a270-c7403ede5d2a"
          target="_blank"
        >See business card as pdf</a>
        <br />
        <br />
      </v-col>
    </v-row>
  </div>
</template>


<style lang="scss" scoped>
// Youtube responsive
.youtube_responsive_container {
  position: relative;
  padding-bottom: 50%;
  padding-top: 50px;
  overflow: hidden;
}

.youtube_responsive_container iframe,
.youtube_responsive_container object,
.youtube_responsive_container embed {
  left: 0;
  width: 100%;
  position: absolute;
  height: 90%;
}
//Youtube responsive end

//I am __ designer text scss
:root {
  --primary-color: #6cd9ce;
  --secondary-color: #d93ba1;
  --complimentary-color: #2e2473;
}

.h1_intro {
  color: var(--primary-color);
  transform: translateY(-600px);
  animation: 1.2s slideIn ease-in-out forwards 1s;
  opacity: 0;
  position: relative;
}

.h1_intro::before {
  content: "";
  position: absolute;
  animation: 1s underline ease-in-out forwards 2s;
  mix-blend-mode: screen;
}

@keyframes skewBg {
  0% {
    transform: scale(0.5);
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
@import url("https://fonts.googleapis.com/css?family=Lato:300,400|Poppins:300,400,800&display=swap");

.container {
  justify-content: center;
  align-items: center;
  text-align: center;
  display: flex;

  .box {
    width: auto;
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
        animation: mainBlock 2s cubic-bezier(0.74, 0.06, 0.4, 0.92) forwards;
        display: flex;
      }

      h1 {
        font: 200 6vw "Crimson Pro", serif;
        color: #fff;
        -webkit-animation: mainFadeIn 2s forwards;
        -o-animation: mainFadeIn 2s forwards;
        animation: mainFadeIn 2s forwards;
        animation-delay: 1.6s;
        opacity: 0;
        align-items: baseline;
        position: relative;

        span {
          width: 0px;
          height: 0px;
          -webkit-border-radius: 50%;
          -moz-border-radius: 50%;
          border-radius: 50%;
          background: #ffb510;
          -webkit-animation: load 0.6s cubic-bezier(0.74, 0.06, 0.4, 0.92)
            forwards;
          animation: popIn 0.8s cubic-bezier(0.74, 0.06, 0.4, 0.92) forwards;
          animation-delay: 2s;
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
        background: #dc143c;
        position: absolute;
        animation: secBlock 2s cubic-bezier(0.74, 0.06, 0.4, 0.92) forwards;
        animation-delay: 2s;
        display: flex;
      }

      p {
        animation: secFadeIn 2s forwards;
        animation-delay: 3.2s;
        opacity: 0;
        text-transform: uppercase;
        letter-spacing: 5px;
        font: 200 4vw "Crimson Pro", serif;
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
    width: 15px;
  }
  80% {
    width: 10px;
    height: 10px;
    bottom: 20px;
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
    bottom: -80px;
  }
  100% {
    opacity: 1;
    bottom: 0px;
  }
}

@keyframes icon {
  0% {
    opacity: 0;
    transform: scale(0);
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
  font: 200 6vw "Crimson Pro", serif;
  color: #939393;
  div {
    overflow: hidden;
    position: relative;
    height: 75px;
    padding-top: 5px;
    margin-top: -5px;
    li {
      font: 200 4.5vw "Crimson Pro", serif;
      color: #ccc;
      position: relative;
      font-weight: 700;
      height: 45px;
      margin-bottom: 45px;
      display: block;
    }
  }
}

.flip2 {
  animation: flip2 6s cubic-bezier(0.23, 1, 0.32, 1.2) infinite;
}
.flip3 {
  animation: flip3 8s cubic-bezier(0.23, 1, 0.32, 1.2) infinite;
}
.flip4 {
  animation: flip4 10s cubic-bezier(0.23, 1, 0.32, 1.2) infinite;
}

@keyframes flip2 {
  0% {
    margin-top: -180px;
  }
  5% {
    margin-top: -90px;
  }
  50% {
    margin-top: -90px;
  }
  55% {
    margin-top: 0px;
  }
  99.99% {
    margin-top: 0px;
  }
  100% {
    margin-top: -270px;
  }
}

@keyframes flip3 {
  0% {
    margin-top: -270px;
  }
  5% {
    margin-top: -180px;
  }
  33% {
    margin-top: -180px;
  }
  38% {
    margin-top: -90px;
  }
  66% {
    margin-top: -90px;
  }
  71% {
    margin-top: 0px;
  }
  99.99% {
    margin-top: 0px;
  }
  100% {
    margin-top: -270px;
  }
}

@keyframes flip4 {
  0% {
    margin-top: -360px;
  }
  5% {
    margin-top: -270px;
  }
  25% {
    margin-top: -270px;
  }
  30% {
    margin-top: -180px;
  }
  50% {
    margin-top: -180px;
  }
  55% {
    margin-top: -90px;
  }
  75% {
    margin-top: -90px;
  }
  80% {
    margin-top: 0px;
  }
  99.99% {
    margin-top: 0px;
  }
  100% {
    margin-top: -270px;
  }
}

// Layout //////////////////////////////////////////

@import url(https://fonts.googleapis.com/css?family=Roboto+Condensed:300|Oswald);
</style>