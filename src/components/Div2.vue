<template>
<div width="100" height="100">
              <button v-on:click="show = !show">
                <h3>click me!</h3>
              </button>
              <transition name="fade">
                <div v-if="show" id="div2" class="text-center">
                  <p class="my-8">Hello</p>
                </div>
              </transition>
            </div>
</template>