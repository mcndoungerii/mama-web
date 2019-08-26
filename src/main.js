import Vue from "vue";
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue);

import router from "./router";


import {store} from "./store"

import App from "./App";
import en from "./locales/en.json";
import es from "./locales/es.json";

import VueI18n from 'vue-i18n';
Vue.use(VueI18n);
const messages = { en: en, es:es };
import {defaultLocale,localeOptions} from 'constants/config'
const locale =(localStorage.getItem('currentLanguage') && localeOptions.filter(x=>x.id==localStorage.getItem('currentLanguage')).length>0) ? localStorage.getItem('currentLanguage') : defaultLocale
const i18n = new VueI18n({
    locale:locale,
    fallbackLocale:'en',
    messages
})



import Notifications from 'components/Common/Notification'
Vue.use(Notifications)

import vuePerfectScrollbar from "vue-perfect-scrollbar";
Vue.component('vue-perfect-scrollbar',vuePerfectScrollbar)



import Breadcrumb from 'components/Common/Breadcrumb'
Vue.component('piaf-breadcrumb', Breadcrumb)

import RefreshButton from 'components/Common/RefreshButton'
Vue.component('b-refresh-button', RefreshButton)

import Colxx from 'components/Common/Colxx'
Vue.component('b-colxx', Colxx)

import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

Vue.use(require('vue-shortkey'))

import contentmenu from 'v-contextmenu'
Vue.use(contentmenu)

import VueQrcode from '@chenfengyuan/vue-qrcode';
Vue.component(VueQrcode.name, VueQrcode);

import vmodal from 'vue-js-modal'
Vue.use(vmodal)

import lineClamp from 'vue-line-clamp'
Vue.use(lineClamp, {
  // plugin options
})


import VCalendar from 'v-calendar';
import 'v-calendar/lib/v-calendar.min.css';

Vue.use(VCalendar, {
  firstDayOfWeek: 2,   // ...other defaults,
  formats: {
    title: 'MMM YY',
    weekdays: 'WW',
    navMonths: 'MMMM',
    input: ['L', 'YYYY-MM-DD', 'YYYY/MM/DD'],
    dayPopover: 'L',
  },
  datePickerShowDayPopover:false,
  popoverExpanded:true,
  popoverDirection:"bottom"
});

import VueScrollTo from'vue-scrollto'
Vue.use(VueScrollTo)



import firebase from 'firebase/app';
import 'firebase/auth'
import {firebaseConfig} from 'constants/config'
firebase.initializeApp(firebaseConfig);


export default new Vue({
    el:'#app',
    i18n,
    router,
    store,
    render: h => h(App)
})