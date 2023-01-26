import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/scss/global.scss'
import './index.css'
import BaseCard from './components/Base/BaseCard.vue'
import BaseBtn from './components/Base/BaseBtn.vue'

// perfectscrollbar plugins 
import PerfectScrollbar from 'vue3-perfect-scrollbar'
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css'
import VueApexCharts from "vue3-apexcharts";
import axios from 'axios'
import 'animate.css';
import { baseUrl } from '@/config/main.js'

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
        c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
    }
    }
    return "";
}
var jwt = getCookie('jwt');
if (jwt) {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + jwt;
}
axios.defaults.baseURL = baseUrl;


createApp(App)
    .component('BaseCard', BaseCard)
    .component('BaseBtn', BaseBtn)
    .use(PerfectScrollbar)
    .use(VueApexCharts)
    .use(store)
    .use(router, axios)
    .mount('#app')
