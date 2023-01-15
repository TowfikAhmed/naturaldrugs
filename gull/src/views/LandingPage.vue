<script setup>
import { ref, onMounted } from 'vue'
import Footer from '../layout/FooterMain.vue'
import Testimonials from '../components/landing/Testimonials.vue'
import Ecommerce from '../components/landing/Ecommerce.vue'
import Animation from '../components/landing/Animation.vue'

import * as THREE from "three";

// router 
import { useRouter } from 'vue-router'

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500 );
camera.position.z = 8;
scene.add( camera );

const light = new THREE.PointLight( 0xffffff, 1, 100 );
light.position.set( 0, 20, 25 );
const light2 = new THREE.AmbientLight( 0xffffff, 0.2 );
light2.position.set( 0, -100, 100 );
scene.add( light, light2 );



// sphare 3, 64, 64 with soften edges
const geometry = new THREE.SphereGeometry( 2, 64, 64 );
const texture = new THREE.TextureLoader().load( '/static/dashboard/t.png' );
const material = new THREE.MeshPhongMaterial( {
    map: texture,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: .9,
    alphaTest: 0.5,
} );
const mesh = new THREE.Mesh( geometry, material );
scene.add( mesh );

const geometry2 = new THREE.SphereGeometry( 3, 188, 188 );
const texture2 = new THREE.TextureLoader().load( '/static/dashboard/c1.png' );
const material2 = new THREE.MeshPhongMaterial( {
    map: texture2,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: .6,
    alphaTest: 0.5,
} );
const mesh2 = new THREE.Mesh( geometry2, material2 );
scene.add( mesh2 );

const geometry3 = new THREE.SphereGeometry( 5, 188, 188 );
const texture3 = new THREE.TextureLoader().load( '/static/dashboard/c.png' );
const material3 = new THREE.MeshPhongMaterial( {
    map: texture3,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: .5,
    alphaTest: 0.5,
} );
const mesh3 = new THREE.Mesh( geometry3, material3 );
scene.add( mesh3 );

const geometry4 = new THREE.SphereGeometry( 2.1, 288, 288 );
const texture4 = new THREE.TextureLoader().load( '/static/dashboard/c2.png' );
const material4 = new THREE.MeshPhongMaterial( {
    map: texture4,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: .9,
    alphaTest: 0.5,
} );
const mesh4 = new THREE.Mesh( geometry4, material4 );
scene.add( mesh4 );

const geometry5 = new THREE.SphereGeometry( 9, 188, 188 );
const texture5 = new THREE.TextureLoader().load( '/static/dashboard/sky.png' );
const material5 = new THREE.MeshPhongMaterial( {
    map: texture5,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 1,
    alphaTest: 0.5,
} );
const mesh5 = new THREE.Mesh( geometry5, material5 );
scene.add( mesh5 );


const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.render( scene, camera );


function animate() {
    requestAnimationFrame( animate );
  mesh.rotation.y -= 0.008;
  mesh2.rotation.y += 0.015;
    mesh3.rotation.y -= 0.02;
    mesh4.rotation.y -= 0.01;
    mesh5.rotation.y += 0.001;
  renderer.render( scene, camera );
}


onMounted(() => {
    var canvas = document.getElementById('canvas');
    console.log(canvas);
    canvas.appendChild( renderer.domElement );
    animate();
})


window.addEventListener( 'resize', onWindowResize, false );

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize( window.innerWidth, window.innerHeight );
}

var router = useRouter()
function animateLottieBtn(e, url){
    e.target.load('https://assets3.lottiefiles.com/packages/lf20_u4rxwy4z.json');
    setTimeout(() => {
        router.push(url)
    }, 500);
}

const landingPageItems = ref([
    {
        headerTitle: 'Dashboard',
        id: 'dashboard',
        img: '/landing-page/dashboard.png',
        paragraph:
            'Landing page heroes, feature sections, newsletter sign up forms — everything you need to build beautiful marketing websites.',
        parentTitle: 'Dashboard',
        child: [
            {
                title: 'Dashboard V1',
                link: '/dashboards/dashboard-version-one',
            },
            {
                title: 'Dashboard V2',
                link: '/dashboards/dashboard-version-two',
            },
            {
                title: 'Dashboard V3',
                link: '/dashboards/dashboard-version-three',
            },
            {
                title: 'Dashboard V4',
                link: '/dashboards/dashboard-version-four',
            },
            {
                title: 'Dashboard V5',
                link: '/dashboards/dashboard-version-five',
            },
        ],
    },
    {
        headerTitle: 'Application',
        id: 'apps',
        img: '/landing-page/app.png',
        paragraph:
            'Landing page heroes, feature sections, newsletter sign up forms — everything you need to build beautiful marketing websites.',
        parentTitle: 'Apps',
        child: [
            {
                title: 'Chat',
                link: '/apps/chat',
            },
            {
                title: 'Contact Table',
                link: '/apps/contact-table',
            },
            {
                title: 'Contact List',
                link: '/apps/contact-list',
            },
            {
                title: 'Contact Grid',
                link: '/apps/contact-grid',
            },
            {
                title: 'Ecommerce',
                link: '/apps/ecommerce',
            },
            {
                title: 'Cart',
                link: '/apps/cart',
            },
            {
                title: 'Checkout',
                link: '/apps/checkout',
            },
            {
                title: 'Inbox',
                link: '/apps/inbox',
            },
            {
                title: 'Create Invoice',
                link: '/apps/create-invoice',
            },
            {
                title: 'Print Invoice',
                link: '/apps/print-invoice',
            },
            {
                title: 'Todo List',
                link: '/apps/todo-list',
            },
        ],
    },
    {
        headerTitle: 'Components',
        id: 'components',
        img: '/landing-page/components.png',
        paragraph:
            'Landing page heroes, feature sections, newsletter sign up forms — everything you need to build beautiful marketing websites.',
        parentTitle: 'Components',
        child: [
            {
                title: 'Avatar',
                link: '/components/avatars',
            },
            {
                title: 'Button',
                link: '/components/button',
            },
            {
                title: 'Badges',
                link: '/components/badges',
            },
            {
                title: 'Accordions',
                link: '/components/accordions',
            },
            {
                title: 'Tabs',
                link: '/components/tabs',
            },
            {
                title: 'Typography',
                link: '/components/typography',
            },
        ],
    },
    {
        headerTitle: 'Widgets',
        id: 'widgets',
        img: '/landing-page/widgets.png',
        paragraph:
            'Landing page heroes, feature sections, newsletter sign up forms — everything you need to build beautiful marketing websites.',
        parentTitle: 'Widgets',
        child: [
            {
                title: 'Charts',
                link: '/widgets/charts',
            },
            {
                title: 'General',
                link: '/widgets/general',
            },
        ],
    },
    {
        headerTitle: 'Profile',
        id: 'profile',
        img: '/landing-page/widgets.png',
        paragraph:
            'Landing page heroes, feature sections, newsletter sign up forms — everything you need to build beautiful marketing websites.',
        parentTitle: 'Profile',
        child: [
            {
                title: 'Profile ver 1.0',
                link: '/profile/profileOne',
            },
            {
                title: 'Profile ver 2.0',
                link: '/profile/profileTwo',
            },
        ],
    },
    {
        headerTitle: 'Credentials',
        id: 'credentials',
        img: '/landing-page/session.png',
        paragraph:
            'Landing page heroes, feature sections, newsletter sign up forms — everything you need to build beautiful marketing websites.',
        parentTitle: 'Session',
        child: [
            {
                title: 'Sign In',
                link: '/sessions/signin',
            },
            {
                title: 'Sign In Two',
                link: '/sessions/signin-two',
            },
            {
                title: 'Sign In Three',
                link: '/sessions/signin-three',
            },
            {
                title: 'Sign In Four',
                link: '/sessions/signin-four',
            },
            {
                title: 'Sign Up',
                link: '/sessions/signup',
            },
            {
                title: 'Sign Up Two',
                link: '/sessions/signup-two',
            },
            {
                title: 'Sign Up Three',
                link: '/sessions/signup-three',
            },
            {
                title: 'Sign Up Four',
                link: '/sessions/signup-four',
            },
            {
                title: 'Error 404',
                link: '/sessions/404',
            },
            {
                title: 'Forgot',
                link: '/sessions/forgot',
            },
        ],
    },
    {
        headerTitle: 'Charts',
        id: 'charts',
        img: '/landing-page/chart.png',
        paragraph:
            'Landing page heroes, feature sections, newsletter sign up forms — everything you need to build beautiful marketing websites.',
        parentTitle: 'Charts',
        child: [
            {
                title: 'Bar',
                link: '/charts/bar',
            },
            {
                title: 'Area',
                link: '/charts/area',
            },
            {
                title: 'Line',
                link: '/charts/line',
            },
            {
                title: 'Mix',
                link: '/charts/mix',
            },
            {
                title: 'Column',
                link: '/charts/column',
            },
            {
                title: 'Pie Donut',
                link: '/charts/pieDonut',
            },
            {
                title: 'Radar Chart',
                link: '/charts/radarChart',
            },
            {
                title: 'Radialbar chart',
                link: '/charts/radialBar',
            },
            {
                title: 'Scatter',
                link: '/charts/scatter',
            },
            {
                title: 'Sparkline',
                link: '/charts/sparkline',
            },
        ],
    },
])
</script>
<template>
    <header class="header mx-auto py-10 px-4 lg:px-12 bg-[#112031]">
        <div id="canvas" class="canvas"></div>
        <div class="container mx-auto">
            <nav class="flex justify-between items-center">
                <div class="flex items-center">
                    <h4 class="font-bold text-black-200">Natural Drugs</h4>
                </div>

                <div class="flex items-center">
                    <a  
                        class="bg-rose-500 text-white rounded-lg hover:bg-rose-600 mr-3 mb-3 font-normal leading-4 ripple py-2 px-5 items-center flex gap-2 clickanimate"
                         @click="animateLottieBtn($event, '/signin')"
                    >   
                        <i class="i-Checked-User text-sm"></i>
                        <p>LOGIN</p>
                        <lottie-player src="https://assets3.lottiefiles.com/packages/lf20_u4rxwy4z.json" background="transparent" class="animation"  speed="1" autoplay></lottie-player>
                    </a>
                </div>
            </nav>
            <div>
                <div class="grid grid-cols-12 gap-5 mt-[80px]">                    

                    <div class="col-span-12 lg:col-span-5 flex justify-end items-center">

                        <Animation class="my-6" />
                    </div>
                    <div class="col-span-12 lg:col-span-1"></div>
                    <div class="col-span-12 lg:col-span-6 mb-4">
                        <h1
                            class="leading-normal sm:text-[50px] text-3xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-500"
                        >
                            Start With
                            <span
                                class="bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-tomato-500"
                                >Natural Drugs
                            </span>
                            & UIKIT Built with Tailwind and Vue3
                        </h1>

                        <div class="flex py-3 mb-4">
                            <div class="flex items-center mr-5">
                                <svg
                                    class="w-4 h-4 mr-2"
                                    viewBox="0 0 256 257"
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                    preserveAspectRatio="xMidYMid"
                                >
                                    <defs>
                                        <linearGradient
                                            x1="-0.828097821%"
                                            y1="7.6518539%"
                                            x2="57.6359644%"
                                            y2="78.4107719%"
                                            id="linearGradient-1"
                                        >
                                            <stop
                                                stop-color="#41D1FF"
                                                offset="0%"
                                            ></stop>
                                            <stop
                                                stop-color="#BD34FE"
                                                offset="100%"
                                            ></stop>
                                        </linearGradient>
                                        <linearGradient
                                            x1="43.3760053%"
                                            y1="2.24179788%"
                                            x2="50.3158848%"
                                            y2="89.0299051%"
                                            id="linearGradient-2"
                                        >
                                            <stop
                                                stop-color="#FFEA83"
                                                offset="0%"
                                            ></stop>
                                            <stop
                                                stop-color="#FFDD35"
                                                offset="8.33333%"
                                            ></stop>
                                            <stop
                                                stop-color="#FFA800"
                                                offset="100%"
                                            ></stop>
                                        </linearGradient>
                                    </defs>
                                    <g>
                                        <path
                                            d="M255.152904,37.937763 L134.896865,252.97646 C132.413943,257.416178 126.035075,257.442321 123.5149,253.02417 L0.87443175,37.9584812 C-1.87111536,33.1438084 2.24595371,27.3119153 7.70191187,28.2871109 L128.086639,49.8052023 C128.854587,49.9424525 129.640835,49.9411454 130.408783,49.8012155 L248.276014,28.3179595 C253.713738,27.3268821 257.850198,33.1136134 255.152904,37.937763 Z"
                                            fill="url(#linearGradient-1)"
                                        ></path>
                                        <path
                                            d="M185.432401,0.0631038902 L96.4393502,17.500942 C94.9766549,17.7875335 93.8936852,19.0270992 93.8054529,20.5146956 L88.3311293,112.971419 C88.2023755,115.149123 90.2023075,116.839261 92.3277254,116.349082 L117.10466,110.630976 C119.422882,110.096354 121.517582,112.138114 121.041128,114.469407 L113.67994,150.515893 C113.184532,152.941955 115.462232,155.016394 117.831433,154.29681 L133.134834,149.647295 C135.507302,148.927059 137.786963,151.00738 137.285019,153.435402 L125.586724,210.056351 C124.854723,213.598061 129.565674,215.529368 131.530313,212.49287 L132.842687,210.464834 L205.359174,65.745575 C206.573511,63.3224548 204.479465,60.5594769 201.818118,61.0730542 L176.31441,65.9952397 C173.91776,66.4573155 171.878614,64.2253653 172.555061,61.8805431 L189.2009,4.17570253 C189.878001,1.82692623 187.831665,-0.406957894 185.432401,0.0631038902 Z"
                                            fill="url(#linearGradient-2)"
                                        ></path>
                                    </g>
                                </svg>
                                <p class="text-white">Vite</p>
                            </div>
                            <div class="flex items-center mr-5">
                                <svg
                                    class="w-5 h-5 mr-2"
                                    viewBox="0 0 256 154"
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                    preserveAspectRatio="xMidYMid"
                                >
                                    <g>
                                        <path
                                            d="M128,-1.0658141e-14 C93.8666667,-1.0658141e-14 72.5333333,17.0666667 64,51.2 C76.8,34.1333333 91.7333333,27.7333333 108.8,32 C118.537481,34.4343704 125.497363,41.4985481 133.201067,49.3184 C145.750756,62.0567704 160.275437,76.8 192,76.8 C226.133333,76.8 247.466667,59.7333333 256,25.6 C243.2,42.6666667 228.266667,49.0666667 211.2,44.8 C201.462519,42.3656296 194.502637,35.3014519 186.798933,27.4816 C174.249244,14.7432296 159.724563,-1.0658141e-14 128,-1.0658141e-14 Z M64,76.8 C29.8666667,76.8 8.53333333,93.8666667 0,128 C12.8,110.933333 27.7333333,104.533333 44.8,108.8 C54.5374815,111.23437 61.497363,118.298548 69.2010667,126.1184 C81.7507556,138.85677 96.275437,153.6 128,153.6 C162.133333,153.6 183.466667,136.533333 192,102.4 C179.2,119.466667 164.266667,125.866667 147.2,121.6 C137.462519,119.16563 130.502637,112.101452 122.798933,104.2816 C110.249244,91.5432296 95.724563,76.8 64,76.8 Z"
                                            fill="url(#linearGradient-1)"
                                        ></path>
                                    </g>
                                </svg>
                                <p class="text-white">TailwindCss</p>
                            </div>
                            <div class="flex items-center mr-5">
                                <svg
                                    class="w-5 h-5 mr-2"
                                    version="1.1"
                                    viewBox="0 0 261.76 226.69"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g
                                        transform="matrix(1.3333 0 0 -1.3333 -76.311 313.34)"
                                    >
                                        <g transform="translate(178.06 235.01)">
                                            <path
                                                d="m0 0-22.669-39.264-22.669 39.264h-75.491l98.16-170.02 98.16 170.02z"
                                                fill="#41b883"
                                            />
                                        </g>
                                        <g transform="translate(178.06 235.01)">
                                            <path
                                                d="m0 0-22.669-39.264-22.669 39.264h-36.227l58.896-102.01 58.896 102.01z"
                                                fill="#34495e"
                                            />
                                        </g>
                                    </g>
                                </svg>
                                <p class="text-white">Vue ^3.2.6</p>
                            </div>
                        </div>
                        <p class="text-white lg:w-9/12 w-full mb-9">
                            Over 150+ professionally designed, fully responsive,
                            expertly crafted components and Over 50+ Pages
                            examples that will Boost your next Admin Dashboard
                            Project
                        </p>
                        <a
                            @click="animateLottieBtn($event)"
                            xl
                            class="bg-rose-500 text-white rounded-lg hover:bg-rose-600 mr-3 mb-3 font-normal leading-4 ripple py-3 px-5 clickanimate"
                            >
                                Get Now ($39)
                                <lottie-player src="https://assets3.lottiefiles.com/packages/lf20_u4rxwy4z.json" background="transparent" class="animation"  speed="1" autoplay></lottie-player>
                            </a
                        >
                    </div>


                    <div class="col-span-12 py-10">
                        <div
                            class="relative max-w-screen-sm mx-auto lg:mx-0 lg:max-w-none grid lg:grid-cols-3 gap-10 lg:gap-8 text-sm"
                        >
                            <div class="flex space-x-6">
                                <lottie-player src="https://assets9.lottiefiles.com/packages/lf20_idaok5ne.json" background="transparent"  speed=".6"  style="width: 100%;max-width:80px" loop autoplay></lottie-player>
                                <div>
                                    <h5 class="font-semibold text-white mb-2">
                                        Start Your Business
                                    </h5>
                                    <p class="leading-normal text-white">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, nam perferendis facilis officiis nihil optio a. Laborum, incidunt quod numquam quia cupiditate qui sunt ipsa consequuntur a? Tenetur, quidem doloremque?
                                    </p>
                                </div>
                            </div>
                            <div class="flex space-x-6">
                                <lottie-player src="https://assets9.lottiefiles.com/packages/lf20_maarwknn.json" background="transparent"  speed=".6"  style="width: 100%;max-width:80px" loop autoplay></lottie-player>
                                <div>
                                    <h5 class="font-semibold text-white mb-2">
                                        <a href="">Buy for youself</a>
                                    </h5>
                                    <p class="leading-normal text-white">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ratione quod consectetur sit tempore blanditiis. Quaerat molestias voluptate dolorum magni illum vitae praesentium iste adipisci, porro delectus, voluptatibus, consequatur sit?
                                        <a
                                            href="https://headlessui.dev"
                                            class="text-white hover:underline"
                                            >Headless UI</a
                                        >
                                    </p>
                                </div>
                            </div>
                            <div class="flex space-x-6">
                                <lottie-player src="https://assets4.lottiefiles.com/private_files/lf30_f5nb5n.json" background="transparent"  speed=".6"  style="width: 100%;max-width:80px" loop autoplay></lottie-player>
                                <div>
                                    <h5 class="font-semibold text-white mb-2">
                                        Make Ideas
                                    </h5>
                                    <p class="leading-normal text-white">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam doloribus rerum hic maiores. Repudiandae eum veritatis voluptates consequuntur, consequatur officia, culpa ipsum, quam saepe necessitatibus porro! Impedit consequuntur expedita tempore!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <section class="sticky-section shadow sticky z-50 top-0 bg-white lg:px-12">
        <div class="container mx-auto flex gap-2 flex-wrap p-0">
            <a
                href="#dashboard"
                class="font-semibold hover:text-rose-500 mr-8 p-2 py-5 text-xl"
            >
                Dashboard
            </a>
            <a
                href="#apps"
                class="font-semibold hover:text-rose-500 mr-8 p-2 py-5 text-xl"
            >
                Application
            </a>
            <a
                href="#components"
                class="font-semibold hover:text-rose-500 mr-8 p-2 py-5 text-xl"
            >
                Components
            </a>
            <a
                href="#widgets"
                class="font-semibold hover:text-rose-500 mr-8 p-2 py-5 text-xl"
            >
                Widgets
            </a>
            <a
                href="#profile"
                class="font-semibold hover:text-rose-500 mr-8 p-2 py-5 text-xl"
            >
                Profile
            </a>
            <a
                href="#credentials"
                class="font-semibold hover:text-rose-500 mr-8 p-2 py-5 text-xl"
            >
                Credentials
            </a>
            <a
                href="#charts"
                class="font-semibold hover:text-rose-500 mr-8 p-2 py-5 text-xl"
            >
                Charts
            </a>
        </div>
    </section>
    <Ecommerce class="my-6" />
    
    <div class="container md:mt-24 my-16 mx-auto bg-no-repeat bg-center relative">
        <lottie-player src="https://assets1.lottiefiles.com/packages/lf20_mksle47o.json" background="transparent" class="w-full absolute"  speed="1" loop autoplay></lottie-player>
        
        <div class="absolute inset-0 opacity-25 dark:opacity-50"></div>
        <div class="relative grid grid-cols-1 pb-8 text-center z-1">
            <h3 class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold dark:text-white text-success">Trusted by more than 10K users</h3>

            <p class="bg-slate-200 p-10 rounded max-w-xl mx-auto">
                Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa suscipit, facere molestias error ea doloribus accusantium cumque natus hic soluta consequuntur beatae quidem ut saepe illum fugiat est, quae rem!
            </p>
        </div><!--end grid-->

        <div class="relative grid md:grid-cols-3 grid-cols-1 items-center mt-8 gap-[30px] z-1">
            <div class="counter-box text-center">
                <h1 class="lg:text-5xl text-4xl font-semibold mb-2 text-rose-500 dark:text-white"><span class="counter-value" data-target="1548">1548</span>+</h1>
                <h5 class="counter-head text-lg font-medium">Properties Sell</h5>
            </div><!--end counter box-->
                    
            <div class="counter-box text-center">
                <h1 class="lg:text-5xl text-4xl font-semibold mb-2 text-rose-500 dark:text-white"><span class="counter-value" data-target="25">25</span>+</h1>
                <h5 class="counter-head text-lg font-medium">Award Gained</h5>
            </div><!--end counter box-->
                    
            <div class="counter-box text-center">
                <h1 class="lg:text-5xl text-4xl font-semibold mb-2 text-rose-500 dark:text-white"><span class="counter-value" data-target="9">9</span>+</h1>
                <h5 class="counter-head text-lg font-medium">Years Experience</h5>
            </div><!--end counter box-->
        </div>
    </div>
    <Testimonials />
    <div class="container my-16 mx-auto">
        <div class="grid grid-cols-1 pb-8 text-center">
            <h3 class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Key Features</h3>
            <p class="text-slate-400 max-w-xl mx-auto">Create, collaborate, and turn your ideas into incredible products with the definitive platform for digital design.</p>
        </div><!--end grid-->

        <div class="grid lg:grid-cols-12 md:grid-cols-12 grid-cols-1 mt-8 gap-[10px] items-center">
            <div class="lg:col-span-4 md:col-span-6 lg:order-1 order-2">
                <div class="grid grid-cols-1 gap-[30px]">
                    <div class="group flex transition-all duration-500 ease-in-out xl:p-3">
                        <div class="flex md:order-2 order-1 align-middle justify-center items-center w-14 h-14 mt-1 bg-success group-hover:bg-indigo-600 group-hover:text-white text-white mx-2 rounded-full text-2xl shadow-sm dark:shadow-gray-800 transition-all duration-500 ease-in-out">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-monitor w-5 h-5"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                        </div>
                        <div class="text-right flex-1 md:order-1 order-2 ltr:md:text-right rtl:md:text-left ltr:md:mr-4 rtl:md:ml-4 ltr:md:ml-0 rtl:md:mr-0 ltr:ml-4 rtl:mr-4">
                            <h4 class="mb-0 text-lg font-medium">Use On Any Device</h4>
                            <p class="text-slate-400 mt-3">One disadvantage of Lorum Ipsum is that in Latin frequently than others</p>
                        </div>
                    </div>
                    <!--end feature-->
                            
                    <div class="group flex transition-all duration-500 ease-in-out xl:p-3">
                        <div class="flex md:order-2 order-1 align-middle justify-center items-center w-14 h-14 mt-1 bg-success group-hover:bg-indigo-600 group-hover:text-white text-white mx-2 rounded-full text-2xl shadow-sm dark:shadow-gray-800 transition-all duration-500 ease-in-out">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-feather w-5 h-5"><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path><line x1="16" y1="8" x2="2" y2="22"></line><line x1="17.5" y1="15" x2="9" y2="15"></line></svg>
                        </div>
                        <div class="flex-1 text-right md:order-1 order-2 ltr:md:text-right rtl:md:text-left ltr:md:mr-4 rtl:md:ml-4 ltr:md:ml-0 rtl:md:mr-0 ltr:ml-4 rtl:mr-4">
                            <h4 class="mb-0 text-lg font-medium">Feather Icons</h4>
                            <p class="text-slate-400 mt-3">One disadvantage of Lorum Ipsum is that in Latin frequently than others</p>
                        </div>
                    </div>
                    <!--end feature-->
                            
                    <div class="group flex transition-all duration-500 ease-in-out xl:p-3">
                        <div class="flex md:order-2 order-1 align-middle justify-center items-center w-14 h-14 mt-1 bg-success group-hover:bg-indigo-600 group-hover:text-white text-white mx-2 rounded-full text-2xl shadow-sm dark:shadow-gray-800 transition-all duration-500 ease-in-out">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-eye w-5 h-5"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                        </div>
                        <div class="flex-1 text-right md:order-1 order-2 ltr:md:text-right rtl:md:text-left ltr:md:mr-4 rtl:md:ml-4 ltr:md:ml-0 rtl:md:mr-0 ltr:ml-4 rtl:mr-4">
                            <h4 class="mb-0 text-lg font-medium">Retina Ready</h4>
                            <p class="text-slate-400 mt-3">One disadvantage of Lorum Ipsum is that in Latin frequently than others</p>
                        </div>
                    </div>
                    <!--end feature-->
                </div>
            </div>

            <div class="lg:col-span-4 md:col-span-12 lg:mx-1 lg:order-2 order-1">
                <lottie-player src="https://assets10.lottiefiles.com/packages/lf20_dkamovet.json" background="transparent" class="icon"  speed="1"  style="height:550px;z-index:-1" loop autoplay></lottie-player>
            </div>

            <div class="lg:col-span-4 md:col-span-6 order-3">
                <div class="grid grid-cols-1 gap-[30px]">
                    <div class="group flex transition-all duration-500 ease-in-out xl:p-3">
                        <div class="flex align-middle justify-center items-center w-14 h-14 mt-1 bg-success group-hover:bg-indigo-600 group-hover:text-white text-white mx-2 rounded-full text-2xl shadow-sm dark:shadow-gray-800 transition-all duration-500 ease-in-out">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user-check w-5 h-5"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline></svg>
                        </div>
                        <div class="flex-1 ltr:ml-4 rtl:mr-4">
                            <h4 class="mb-0 text-lg font-medium">W3c Valid Code</h4>
                            <p class="text-slate-400 mt-3">One disadvantage of Lorum Ipsum is that in Latin frequently than others</p>
                        </div>
                    </div>
                    <!--end feature-->
                            
                    <div class="group flex transition-all duration-500 ease-in-out xl:p-3">
                        <div class="flex align-middle justify-center items-center w-14 h-14 mt-1 bg-success group-hover:bg-indigo-600 group-hover:text-white text-white mx-2 rounded-full text-2xl shadow-sm dark:shadow-gray-800 transition-all duration-500 ease-in-out">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-smartphone w-5 h-5"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
                        </div>
                        <div class="flex-1 ltr:ml-4 rtl:mr-4">
                            <h4 class="mb-0 text-lg font-medium">Fully Responsive</h4>
                            <p class="text-slate-400 mt-3">One disadvantage of Lorum Ipsum is that in Latin frequently than others</p>
                        </div>
                    </div>
                    <!--end feature-->
                            
                    <div class="group flex transition-all duration-500 ease-in-out xl:p-3">
                        <div class="flex align-middle justify-center items-center w-14 h-14 mt-1 bg-success group-hover:bg-indigo-600 group-hover:text-white text-white mx-2 rounded-full text-2xl shadow-sm dark:shadow-gray-800 transition-all duration-500 ease-in-out">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart w-5 h-5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                        </div>
                        <div class="flex-1 ltr:ml-4 rtl:mr-4">
                            <h4 class="mb-0 text-lg font-medium">Browser Compatibility</h4>
                            <p class="text-slate-400 mt-3">One disadvantage of Lorum Ipsum is that in Latin frequently than others</p>
                        </div>
                    </div>
                    <!--end feature-->
                </div>
            </div>
        </div><!--end grid-->
    </div>
    <div class="container md:my-24 my-16 mx-auto">
        <div class="grid md:grid-cols-6 grid-cols-2 justify-center gap-[30px]">
            <div class="mx-auto py-4">
                <img src="@/assets/images/client/paypal.svg" class="h-6" alt="">
            </div>

            <div class="mx-auto py-4">
                <img src="@/assets/images/client/google.svg" class="h-6" alt="">
            </div>
                    
            <div class="mx-auto py-4">
                <img src="@/assets/images/client/lenovo.svg" class="h-6" alt="">
            </div>
                    
            <div class="mx-auto py-4">
                <img src="@/assets/images/client/paypal.svg" class="h-6" alt="">
            </div>
                    
            <div class="mx-auto py-4">
                <img src="@/assets/images/client/shopify.svg" class="h-6" alt="">
            </div>
                    
            <div class="mx-auto py-4">
                <img src="@/assets/images/client/spotify.svg" class="h-6" alt="">
            </div>
        </div><!--end grid-->
    </div>
    <Footer />

</template>
<style lang="scss" scoped>
header {
    }
.header{
    overflow: hidden;
    position: relative;
    color: black;
    background: transparent;
}
.header #canvas{
    position: absolute;
    z-index: -1;
    height: 100vh;
    width: 100vw;
    left: 0;
    top: 0;
    opacity: 10;
}
@media (max-width: 1300px) {
    .sticky-section a{
        margin: 0px;
        font-size: 18px;
        flex: 1;
    }
    .sticky-section{
        justify-content: center;
    }
}
</style>
