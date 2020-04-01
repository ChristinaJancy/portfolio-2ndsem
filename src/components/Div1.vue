<template>
            <div id="div1">
              <kinesis-container>
                <kinesis-element :strength="10">
                  <v-img width="100" height="100" src="../assets/Astro.png"></v-img>
                </kinesis-element>
                <kinesis-element type="depth" :strength="20">
                  <h2>wooo!</h2>
                </kinesis-element>
              </kinesis-container>
            </div>
</template>


<style lang="scss" scoped>
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
</style>