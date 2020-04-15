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
        secondary: '#fbeec1',
        button: '#dc143c',
        accent: '#8c9eff',
        error: '#b71c1c',
        text: '#c5c6c7',
        textclip: '#0b0c10',
        textclipText: '#c5c6c7',
        aboutTop: '#c5c6c7',
      },
      dark: {
        primary: '#fbeec1',
        secondary: '#1F2833',
        text: '#0b0c10',
        button: '#dc143c',
        error: '#b71c1c',
        textclip: '#0b0c10',
        textclipText: '#c5c6c7',
        aboutTop:'#c5c6c7',
      }
    },
  },
});

