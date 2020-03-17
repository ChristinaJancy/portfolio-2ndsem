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
});
