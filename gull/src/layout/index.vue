/* * File: index.vue * Project: Gull * File Created: Wednesday, 3rd November
2021 8:57:46 am * Author: Naime Hossain & ui-lib -> https://ui-lib.com/
(support@ui-lib.com) * ----- * Last Modified: Wednesday, 19th October 2022
5:54:39 pm * Modified By: Naime Hossain & ui-lib -> https://ui-lib.com/
(support@ui-lib.com>) * ----- * Copyright 2019 - 2022 ui-lib , ui-lib (
https://ui-lib.com/ ) */

<script setup>
import { useStore } from 'vuex'
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import axios from 'axios';
import Header from './Header.vue'
import SidebarAdmin from './SidebarAdmin.vue'
import SidebarDepot from './SidebarDepot.vue'
import SidebarDealer from './SidebarDealer.vue'
import SidebarAgent from './SidebarAgent.vue'
import SidebarMember from './SidebarMember.vue'
import Footer from './Footer.vue'

let store = useStore()
const router = useRouter()

onMounted(() => {
    var jwt = getCookie('jwt');
    console.log(jwt);
    if(!store.state.user && jwt){
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + jwt;
        axios.defaults.headers.common['Content-Type'] = 'application/json';
        axios.defaults.headers.common['Accept'] = 'application/json';
        axios.get('/api/member/verify_token')
        .then((response) => {
            console.log(response.data, 'user-lo');
            response.data['api_token'] = jwt;
            store.commit('setUser', response.data);
        })
    } else if ((!store.state.user && !jwt)){
        router.push('/sessions/signin-two')
    }
})
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

</script>

<template>
    <div class="app-admin-wrap-layout-2">
        <Header />
        <SidebarAdmin v-if="store.state.user && store.state.user.type == 'ADMIN'" />
        <SidebarMember v-if="store.state.user && store.state.user.type == 'MEMBER'" />
        <SidebarAgent v-if="store.state.user && store.state.user.type == 'AGENT'" />
        <SidebarDealer v-if="store.state.user && store.state.user.type == 'DEALER'" />
        <SidebarDepot v-if="store.state.user && store.state.user.type == 'DEPOT'" />
        
        <div
            :class="
                store.state.largeSidebar.sidebarToggleProperties
                    .isSideNavOpen === true
                    ? ''
                    : 'full'
            "
            class="main-content-wrap"
        >
            <main>
                <div
                    class="main-content-wrap flex flex-col flex-grow print-area pt-10"
                >
                    <div>
                        <router-view v-slot="{ Component }">
                            <transition name="scale" mode="out-in">
                                <component :is="Component" />
                            </transition>
                        </router-view>
                    </div>
                    <div class="flex-grow-1"></div>
                    <Footer />
                    {{store.state.user}}
                </div>
            </main>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.scale-enter-active,
.scale-leave-active {
    transition: all 0.5s ease;
}
.scale-enter-from,
.scale-leave-to {
    opacity: 0;
    transform: scale(0.9);
}
.flex-grow-1 {
    -webkit-box-flex: 1 !important;
    -ms-flex-positive: 1 !important;
    flex-grow: 1 !important;
}

.app-admin-wrap-layout-2 {
    width: 100%;
    height: 100%;

    .main-content-wrap {
        width: calc(100% - 120px);
        margin-left: 90px;
        // min-height: 100vh;
        min-height: calc(100vh - 60px);
        padding-top: 50px;
        transition: all 0.24s ease-in-out;

        .main-content-body {
            min-height: calc(100vh - 80px);
        }

        &.full {
            width: 100%;
            margin-left: 0px;
            transition: all 0.24s ease-in-out;
        }

        @media screen and (max-width: 991px) {
            width: 100%;
            margin-left: 0px;
            padding-right: 16px;
            padding-left: 16px;
        }
    }
}
</style>
