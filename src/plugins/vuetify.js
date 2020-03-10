import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import VueKinesis from 'vue-kinesis';
import { KinesisContainer, KinesisElement } from 'vue-kinesis'

Vue.use(Vuetify, VueKinesis);


Vue.component('kinesis-container', KinesisContainer)
Vue.component('kinesis-element', KinesisElement)

export default new Vuetify({
});
