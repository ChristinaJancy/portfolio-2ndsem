<template>
<v-content>
    <v-container fluid>
        
    </v-container>
</v-content>
</template>


<script>
//import Parallax from "../components/Parallax";
//import Div1 from "../components/Div1"
//import Div2 from "../components/Div2"
//import Div3 from "../components/Div3"
//import Div4 from "../components/Div4"

export default {
  name: "Home",
  components: {
    //Parallax,
    //Div1,
    //Div2,
    //Div3,
    //Div4,
  },
  data: () => ({
  }),
};
</script>

<style lang="scss" scoped>
// code start here //

#div1 {
  width: 100px;
  height: 100px;
  background-color: red;
  animation-name: example;
  animation-duration: 4s;
  animation-iteration-count: infinite;
}
@keyframes example {
  0% {
    background-color: red;
    left: 0px;
    top: 0px;
  }
  25% {
    background-color: yellow;
    left: 200px;
    top: 0px;
  }
  50% {
    background-color: blue;
    left: 200px;
    top: 200px;
  }
  75% {
    background-color: green;
    left: 0px;
    top: 200px;
  }
  100% {
    background-color: red;
    left: 0px;
    top: 0px;
  }
}

#div2 {
  width: 100px;
  height: 100px;
  border-radius: 25px;
  border: 2px solid #73ad21;
  position: relative;
  animation-name: example2;
  animation-duration: 4s;
  animation-iteration-count: infinite;
}
@keyframes example2 {
  0% {
    border-color: red;
  }
  25% {
    border-color: yellow;
  }
  50% {
    border-color: blue;
  }
  75% {
    border-color: green;
  }
  100% {
    border-color: red;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>