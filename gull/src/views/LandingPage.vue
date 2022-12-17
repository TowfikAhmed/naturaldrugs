<script setup>
import { ref } from 'vue'
import Footer from '../layout/FooterMain.vue'
import Testimonials from '../components/landing/Testimonials.vue'
import Ecommerce from '../components/landing/Ecommerce.vue'

function animateLottieBtn(e){
    console.log(e.target)
    e.target.load('https://assets3.lottiefiles.com/packages/lf20_u4rxwy4z.json');
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
        <video autoplay muted loop class="h-100 bgvid">
            <source src="/landing-page/bg1.mp4" type="video/mp4" />
            <source src="" type="video/webm" />
            <p>
                Your browser doesn't support HTML5 video. Here
                is a
                <a href="/images/intro.mp4"
                    >link to the video</a
                >
                instead.
            </p>
        </video>
        <div class="container mx-auto">
            <nav class="flex justify-between items-center">
                <div class="flex items-center">
                    <h4 class="font-bold text-gray-200">Natural Drugs</h4>
                </div>

                <div class="flex items-center">
                    <a  
                        class="text-gray font-semibold hover:text-dark-400 flex items-center border px-3 bg-white clickanimate"
                         @click="animateLottieBtn($event)"
                    >   
                        <lottie-player src="https://assets7.lottiefiles.com/private_files/lf30_quepwpqp.json" background="transparent" class="icon"  speed="1"  style="height: 30px;" loop autoplay></lottie-player>
                        <p>LOGIN</p>
                        <lottie-player src="https://assets3.lottiefiles.com/packages/lf20_u4rxwy4z.json" background="transparent" class="animation"  speed="1" autoplay></lottie-player>
                    </a>
                </div>
            </nav>
            <div>
                <div class="grid grid-cols-12 gap-5 mt-[80px]">
                    <div class="col-span-12 lg:col-span-6 mb-4">
                        <h1
                            class="leading-normal sm:text-[50px] text-3xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-50 to-purple-100"
                        >
                            Start With
                            <span
                                class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500"
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
                                <p class="text-gray-300">Vite</p>
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
                                <p class="text-gray-300">TailwindCss</p>
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
                                <p class="text-gray-300">Vue ^3.2.6</p>
                            </div>
                        </div>
                        <p class="text-gray-300 lg:w-9/12 w-full mb-9">
                            Over 150+ professionally designed, fully responsive,
                            expertly crafted components and Over 50+ Pages
                            examples that will Boost your next Admin Dashboard
                            Project
                        </p>
                        <a
                            target="_blank"
                            href=""
                            xl
                            class="bg-primary text-white rounded-lg hover:bg-purple-600 mr-3 mb-3 font-normal leading-4 ripple py-2 px-5"
                            >Get Now ($39)</a
                        >

                        <router-link
                            target="_blank"
                            to="/dashboards/dashboard-version-one"
                            xl
                            class="bg-gray-700 text-white rounded-lg hover:bg-gray-800 mr-3 mb-3 font-normal leading-4 ripple py-2 px-5"
                        >
                            Preview
                        </router-link>
                    </div>

                    <div class="col-span-12 lg:col-span-1"></div>
                    

                    <div class="col-span-12 lg:col-span-5 flex justify-end items-center">
                        <lottie-player src="https://assets3.lottiefiles.com/packages/lf20_5ngs2ksb.json" background="transparent"  speed="1"  style="width: 100%;" loop autoplay></lottie-player>
                    </div>
                    <div class="col-span-12 py-10">
                        <div
                            class="relative max-w-screen-sm mx-auto lg:mx-0 lg:max-w-none grid lg:grid-cols-3 gap-10 lg:gap-8 text-sm"
                        >
                            <div class="flex space-x-6">
                                <svg
                                    aria-hidden="true"
                                    width="44"
                                    height="44"
                                    fill="none"
                                    class="flex-none"
                                >
                                    <g filter="url(#hero-feature-1-filter)">
                                        <path
                                            d="M2 10a8 8 0 018-8h24a8 8 0 018 8v24a8 8 0 01-8 8H10a8 8 0 01-8-8V10z"
                                            fill="#ff73b5"
                                        ></path>
                                    </g>
                                    <path
                                        d="M2.75 10A7.25 7.25 0 0110 2.75h24A7.25 7.25 0 0141.25 10v24A7.25 7.25 0 0134 41.25H10A7.25 7.25 0 012.75 34V10z"
                                        stroke="#334155"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    ></path>
                                    <path
                                        d="M29 27.335L32.25 29l-6.603 3.382a8 8 0 01-7.294 0L11.75 29 15 27.335M29 20.336L32.25 22l-6.603 3.382a8 8 0 01-7.294 0L11.75 22 15 20.336"
                                        stroke="#475569"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    ></path>
                                    <path
                                        d="M11.75 15l9.338-4.783a2 2 0 011.824 0L32.25 15l-6.603 3.382a8 8 0 01-7.294 0L11.75 15z"
                                        fill="#22D3EE"
                                        fill-opacity=".2"
                                        stroke="#22D3EE"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    ></path>
                                    <defs>
                                        <filter
                                            id="hero-feature-1-filter"
                                            x="2"
                                            y="1"
                                            width="40"
                                            height="41"
                                            filterUnits="userSpaceOnUse"
                                            color-interpolation-filters="sRGB"
                                        >
                                            <feFlood
                                                flood-opacity="0"
                                                result="BackgroundImageFix"
                                            ></feFlood>
                                            <feBlend
                                                in="SourceGraphic"
                                                in2="BackgroundImageFix"
                                                result="shape"
                                            ></feBlend>
                                            <feColorMatrix
                                                in="SourceAlpha"
                                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                result="hardAlpha"
                                            ></feColorMatrix>
                                            <feOffset dy="-1"></feOffset>
                                            <feGaussianBlur
                                                stdDeviation=".5"
                                            ></feGaussianBlur>
                                            <feComposite
                                                in2="hardAlpha"
                                                operator="arithmetic"
                                                k2="-1"
                                                k3="1"
                                            ></feComposite>
                                            <feColorMatrix
                                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
                                            ></feColorMatrix>
                                            <feBlend
                                                in2="shape"
                                                result="effect1_innerShadow"
                                            ></feBlend>
                                        </filter>
                                    </defs>
                                </svg>
                                <div>
                                    <h5 class="font-semibold text-white mb-2">
                                        Vue 3 , Vite & TailwindCss
                                    </h5>
                                    <p class="leading-normal text-gray-400">
                                        We used Vue 3 composition API,vite 3 and
                                        TailwindCss 3 to make your experience
                                        pleasant. Gull is Beautifully designed,
                                        expertly crafted components that follow
                                        all accessibility best practices and are
                                        easy to customize.
                                    </p>
                                </div>
                            </div>
                            <div class="flex space-x-6">
                                <svg
                                    aria-hidden="true"
                                    width="44"
                                    height="44"
                                    fill="none"
                                    class="flex-none"
                                >
                                    <g filter="url(#hero-feature-2-filter)">
                                        <path
                                            d="M2 10a8 8 0 018-8h24a8 8 0 018 8v24a8 8 0 01-8 8H10a8 8 0 01-8-8V10z"
                                            fill="#ff73b5"
                                        ></path>
                                    </g>
                                    <path
                                        d="M2.75 10A7.25 7.25 0 0110 2.75h24A7.25 7.25 0 0141.25 10v24A7.25 7.25 0 0134 41.25H10A7.25 7.25 0 012.75 34V10z"
                                        stroke="#334155"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    ></path>
                                    <path
                                        d="M24.25 13.75l-4.5 16.5"
                                        stroke="#22D3EE"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                    ></path>
                                    <path
                                        d="M18.75 9.75h-1a4 4 0 00-4 4v4.007a3 3 0 01-.879 2.122v0a3 3 0 000 4.242v0a3 3 0 01.879 2.122v4.007a4 4 0 004 4h1M25.25 9.75h1a4 4 0 014 4v4.007a3 3 0 00.879 2.122v0a3 3 0 010 4.242v0a3 3 0 00-.879 2.122v4.007a4 4 0 01-4 4h-1"
                                        stroke="#475569"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    ></path>
                                    <defs>
                                        <filter
                                            id="hero-feature-2-filter"
                                            x="2"
                                            y="1"
                                            width="40"
                                            height="41"
                                            filterUnits="userSpaceOnUse"
                                            color-interpolation-filters="sRGB"
                                        >
                                            <feFlood
                                                flood-opacity="0"
                                                result="BackgroundImageFix"
                                            ></feFlood>
                                            <feBlend
                                                in="SourceGraphic"
                                                in2="BackgroundImageFix"
                                                result="shape"
                                            ></feBlend>
                                            <feColorMatrix
                                                in="SourceAlpha"
                                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                result="hardAlpha"
                                            ></feColorMatrix>
                                            <feOffset dy="-1"></feOffset>
                                            <feGaussianBlur
                                                stdDeviation=".5"
                                            ></feGaussianBlur>
                                            <feComposite
                                                in2="hardAlpha"
                                                operator="arithmetic"
                                                k2="-1"
                                                k3="1"
                                            ></feComposite>
                                            <feColorMatrix
                                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
                                            ></feColorMatrix>
                                            <feBlend
                                                in2="shape"
                                                result="effect1_innerShadow"
                                            ></feBlend>
                                        </filter>
                                    </defs>
                                </svg>
                                <div>
                                    <h5 class="font-semibold text-white mb-2">
                                        <a href="">Save Time & Money</a>
                                    </h5>
                                    <p class="leading-normal text-gray-400">
                                        Boost your Development with Gull . Save
                                        Thousands of hours of Coding and money
                                        Accessible, interactive examples for Vue
                                        powered by
                                        <a
                                            href="https://headlessui.dev"
                                            class="text-white hover:underline"
                                            >Headless UI</a
                                        >
                                    </p>
                                </div>
                            </div>
                            <div class="flex space-x-6">
                                <svg
                                    aria-hidden="true"
                                    width="44"
                                    height="44"
                                    fill="none"
                                    class="flex-none"
                                >
                                    <g filter="url(#hero-feature-3-filter)">
                                        <path
                                            d="M2 10a8 8 0 018-8h24a8 8 0 018 8v24a8 8 0 01-8 8H10a8 8 0 01-8-8V10z"
                                            fill="#ff73b5"
                                        ></path>
                                    </g>
                                    <path
                                        d="M2.75 10A7.25 7.25 0 0110 2.75h24A7.25 7.25 0 0141.25 10v24A7.25 7.25 0 0134 41.25H10A7.25 7.25 0 012.75 34V10z"
                                        stroke="#334155"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    ></path>
                                    <path
                                        d="M9.75 23.25v-1.5a4 4 0 014-4h8.5a4 4 0 014 4v8.5a4 4 0 01-4 4h-1.5"
                                        stroke="#475569"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    ></path>
                                    <path
                                        d="M29.75 34.25h.5a4 4 0 004-4v-18.5a2 2 0 00-2-2h-18.5a4 4 0 00-4 4v.5"
                                        stroke="#475569"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    ></path>
                                    <path
                                        d="M33.5 10.5l-23 23"
                                        stroke="#22D3EE"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                    ></path>
                                    <path
                                        d="M27.75 9.75h4.5a2 2 0 012 2v4.5M16.25 34.25h-4.5a2 2 0 01-2-2v-4.5"
                                        stroke="#22D3EE"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    ></path>
                                    <defs>
                                        <filter
                                            id="hero-feature-3-filter"
                                            x="2"
                                            y="1"
                                            width="40"
                                            height="41"
                                            filterUnits="userSpaceOnUse"
                                            color-interpolation-filters="sRGB"
                                        >
                                            <feFlood
                                                flood-opacity="0"
                                                result="BackgroundImageFix"
                                            ></feFlood>
                                            <feBlend
                                                in="SourceGraphic"
                                                in2="BackgroundImageFix"
                                                result="shape"
                                            ></feBlend>
                                            <feColorMatrix
                                                in="SourceAlpha"
                                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                result="hardAlpha"
                                            ></feColorMatrix>
                                            <feOffset dy="-1"></feOffset>
                                            <feGaussianBlur
                                                stdDeviation=".5"
                                            ></feGaussianBlur>
                                            <feComposite
                                                in2="hardAlpha"
                                                operator="arithmetic"
                                                k2="-1"
                                                k3="1"
                                            ></feComposite>
                                            <feColorMatrix
                                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
                                            ></feColorMatrix>
                                            <feBlend
                                                in2="shape"
                                                result="effect1_innerShadow"
                                            ></feBlend>
                                        </filter>
                                    </defs>
                                </svg>
                                <div>
                                    <h5 class="font-semibold text-white mb-2">
                                        Fully Responsive & Super Fast
                                    </h5>
                                    <p class="leading-normal text-gray-400">
                                        Every example is fully responsive and
                                        carefully designed and implemented to
                                        look great at any screen size and load
                                        fast
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
        <div class="container mx-auto flex flex-wrap p-5">
            <a
                href="#dashboard"
                class="font-semibold hover:text-primary mr-8 p-2 m-2 text-2xl"
            >
                Dashboard
            </a>
            <a
                href="#apps"
                class="font-semibold hover:text-primary mr-8 p-2 m-2 text-2xl"
            >
                Application
            </a>
            <a
                href="#components"
                class="font-semibold hover:text-primary mr-8 p-2 m-2 text-2xl"
            >
                Components
            </a>
            <a
                href="#widgets"
                class="font-semibold hover:text-primary mr-8 p-2 m-2 text-2xl"
            >
                Widgets
            </a>
            <a
                href="#profile"
                class="font-semibold hover:text-primary mr-8 p-2 m-2 text-2xl"
            >
                Profile
            </a>
            <a
                href="#credentials"
                class="font-semibold hover:text-primary mr-8 p-2 m-2 text-2xl"
            >
                Credentials
            </a>
            <a
                href="#charts"
                class="font-semibold hover:text-primary mr-8 p-2 m-2 text-2xl"
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
            <h3 class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold dark:text-white text-warning">Trusted by more than 10K users</h3>

            <p class="bg-slate-200 p-10 rounded max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
        </div><!--end grid-->

        <div class="relative grid md:grid-cols-3 grid-cols-1 items-center mt-8 gap-[30px] z-1">
            <div class="counter-box text-center">
                <h1 class="lg:text-5xl text-4xl font-semibold mb-2 text-primary dark:text-white"><span class="counter-value" data-target="1548">1548</span>+</h1>
                <h5 class="counter-head text-lg font-medium">Properties Sell</h5>
            </div><!--end counter box-->
                    
            <div class="counter-box text-center">
                <h1 class="lg:text-5xl text-4xl font-semibold mb-2 text-primary dark:text-white"><span class="counter-value" data-target="25">25</span>+</h1>
                <h5 class="counter-head text-lg font-medium">Award Gained</h5>
            </div><!--end counter box-->
                    
            <div class="counter-box text-center">
                <h1 class="lg:text-5xl text-4xl font-semibold mb-2 text-primary dark:text-white"><span class="counter-value" data-target="9">9</span>+</h1>
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

        <div class="grid lg:grid-cols-12 md:grid-cols-12 grid-cols-1 mt-8 gap-[30px] items-center">
            <div class="lg:col-span-4 md:col-span-6 lg:order-1 order-2">
                <div class="grid grid-cols-1 gap-[30px]">
                    <div class="group flex transition-all duration-500 ease-in-out xl:p-3">
                        <div class="flex md:order-2 order-1 align-middle justify-center items-center w-14 h-14 mt-1 bg-warning group-hover:bg-indigo-600 group-hover:text-white text-white mx-2 rounded-full text-2xl shadow-sm dark:shadow-gray-800 transition-all duration-500 ease-in-out">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-monitor w-5 h-5"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                        </div>
                        <div class="text-right flex-1 md:order-1 order-2 ltr:md:text-right rtl:md:text-left ltr:md:mr-4 rtl:md:ml-4 ltr:md:ml-0 rtl:md:mr-0 ltr:ml-4 rtl:mr-4">
                            <h4 class="mb-0 text-lg font-medium">Use On Any Device</h4>
                            <p class="text-slate-400 mt-3">One disadvantage of Lorum Ipsum is that in Latin frequently than others</p>
                        </div>
                    </div>
                    <!--end feature-->
                            
                    <div class="group flex transition-all duration-500 ease-in-out xl:p-3">
                        <div class="flex md:order-2 order-1 align-middle justify-center items-center w-14 h-14 mt-1 bg-warning group-hover:bg-indigo-600 group-hover:text-white text-white mx-2 rounded-full text-2xl shadow-sm dark:shadow-gray-800 transition-all duration-500 ease-in-out">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-feather w-5 h-5"><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path><line x1="16" y1="8" x2="2" y2="22"></line><line x1="17.5" y1="15" x2="9" y2="15"></line></svg>
                        </div>
                        <div class="flex-1 text-right md:order-1 order-2 ltr:md:text-right rtl:md:text-left ltr:md:mr-4 rtl:md:ml-4 ltr:md:ml-0 rtl:md:mr-0 ltr:ml-4 rtl:mr-4">
                            <h4 class="mb-0 text-lg font-medium">Feather Icons</h4>
                            <p class="text-slate-400 mt-3">One disadvantage of Lorum Ipsum is that in Latin frequently than others</p>
                        </div>
                    </div>
                    <!--end feature-->
                            
                    <div class="group flex transition-all duration-500 ease-in-out xl:p-3">
                        <div class="flex md:order-2 order-1 align-middle justify-center items-center w-14 h-14 mt-1 bg-warning group-hover:bg-indigo-600 group-hover:text-white text-white mx-2 rounded-full text-2xl shadow-sm dark:shadow-gray-800 transition-all duration-500 ease-in-out">
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
                <lottie-player src="https://assets8.lottiefiles.com/private_files/lf30_azjolkac.json" background="transparent" class="icon"  speed="1"  style="height:550px;z-index:-1" loop autoplay></lottie-player>
            </div>

            <div class="lg:col-span-4 md:col-span-6 order-3">
                <div class="grid grid-cols-1 gap-[30px]">
                    <div class="group flex transition-all duration-500 ease-in-out xl:p-3">
                        <div class="flex align-middle justify-center items-center w-14 h-14 mt-1 bg-warning group-hover:bg-indigo-600 group-hover:text-white text-white mx-2 rounded-full text-2xl shadow-sm dark:shadow-gray-800 transition-all duration-500 ease-in-out">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user-check w-5 h-5"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline></svg>
                        </div>
                        <div class="flex-1 ltr:ml-4 rtl:mr-4">
                            <h4 class="mb-0 text-lg font-medium">W3c Valid Code</h4>
                            <p class="text-slate-400 mt-3">One disadvantage of Lorum Ipsum is that in Latin frequently than others</p>
                        </div>
                    </div>
                    <!--end feature-->
                            
                    <div class="group flex transition-all duration-500 ease-in-out xl:p-3">
                        <div class="flex align-middle justify-center items-center w-14 h-14 mt-1 bg-warning group-hover:bg-indigo-600 group-hover:text-white text-white mx-2 rounded-full text-2xl shadow-sm dark:shadow-gray-800 transition-all duration-500 ease-in-out">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-smartphone w-5 h-5"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
                        </div>
                        <div class="flex-1 ltr:ml-4 rtl:mr-4">
                            <h4 class="mb-0 text-lg font-medium">Fully Responsive</h4>
                            <p class="text-slate-400 mt-3">One disadvantage of Lorum Ipsum is that in Latin frequently than others</p>
                        </div>
                    </div>
                    <!--end feature-->
                            
                    <div class="group flex transition-all duration-500 ease-in-out xl:p-3">
                        <div class="flex align-middle justify-center items-center w-14 h-14 mt-1 bg-warning group-hover:bg-indigo-600 group-hover:text-white text-white mx-2 rounded-full text-2xl shadow-sm dark:shadow-gray-800 transition-all duration-500 ease-in-out">
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
    <div class="container md:my-24 my-16">
        <div class="grid md:grid-cols-6 grid-cols-2 justify-center gap-[30px]">
            <div class="mx-auto py-4">
                <img src="@/assets/images/avatar-bg.svg" class="h-6" alt="">
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
    background: linear-gradient(45deg, #36215a, 70%, rgb(201 153 106 / 87%));
    overflow: hidden;
    position: relative;
}
.header .bgvid{
    position: absolute;
    z-index: -1;
    height: 100%;
    width: 100vw;
    object-fit: cover;
    left: 0;
    top: 0;
    opacity: .8;
}
</style>
