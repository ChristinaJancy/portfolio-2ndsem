import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import VueKinesis from 'vue-kinesis';
import VueAnime from 'vue-animejs';

import { KinesisContainer, KinesisElement } from 'vue-kinesis'

Vue.use(Vuetify, VueKinesis, VueAnime);


Vue.component('kinesis-container', KinesisContainer)
Vue.component('kinesis-element', KinesisElement)

export default new Vuetify({
  icons: {
    iconfont: 'mdiSvg', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
  },
  theme: {
    themes: {
      light: {
        primary: '#0b0c10',
        secondary: '#e3e2df',
        button: '#dc143c',
        accent: '#8c9eff',
        error: '#b71c1c',
        text: '#e3e2df',
        textclip: '#e3e2df',
        textclipText: '#e3e2df',
        aboutTop: '#e3e2df',
      },
      dark: {
        primary: '#e3e2df',
        secondary: '#1F2833',
        text: '#0b0c10',
        button: '#dc143c',
        error: '#b71c1c',
        textclip: '#0b0c10',
        textclipText: '#e3e2df',
        aboutTop:'#e3e2df',
      }
    },
  },
});

