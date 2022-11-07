export default {

    // Global page headers: https://go.nuxtjs.dev/config-head
    target: 'static',
    head: {
        title: 'NaturalDrugs',
        titleTemplate: '%s - NaturalDrugs',
        htmlAttrs: {
            lang: 'zxx'
        },
        // bodyAttrs: {
        //     class: 'dark-mode'
        // },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
            { 
                rel: 'icon', 
                type: 'image/x-icon', 
                href: '/favicon.png' 
            }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        'assets/scss/app.scss'
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        '~/plugins/vue-awesome-swiper.js',
        '~/plugins/vue-cool-lightbox.js',
        '~/plugins/vue2-google-maps.js',
        '~/plugins/vue-pagination.js',
        '~/plugins/vue-inline-svg.js',
        '~/plugins/observe-visibility.js',
        '~/plugins/vue-masonry-css.js',
        { 
            src: '~/plugins/bootstrap.bundle.min.js', 
            mode: 'client'
        },
        { 
            src: "~/plugins/aos", 
            ssr: false 
        }
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        '@nuxtjs/style-resources'
    ],

    styleResources: {
        scss: [
            '~/assets/scss/default/_variable.scss'
        ]
    },

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        '@nuxtjs/axios',
    ],
    // change nuxt bseurl to host
    axios: {
        baseURL: 'http://localhost:8000/api/',
        // baseURL: '/api/',
    },


    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        extend (config, ctx) {},
        transpile: [/^vue2-google-maps($|\/)/],
        publicPath: '/static/home/',
    },
    generate: {
        dir: '../templates/home'
    },
}
