<script>
// Import Swiper Vue.js components
import SwiperCore, { EffectCoverflow, Pagination, Autoplay } from "swiper"
import { Swiper, SwiperSlide } from 'swiper/vue';
SwiperCore.use([Pagination, Autoplay])
// Import Swiper styles
import 'swiper/css';
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data(){
    return {
      autoplay: {
        delay: 4000,
        disableOnInteraction: false
      },
    }
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [EffectCoverflow, Pagination],
    };
  },
};
</script>

<template>
    <section class="container mx-auto mb-20 text-gray-700 py-10">
      <div class="text-center md:max-w-xl lg:max-w-3xl mx-auto">
        <h3 class="text-3xl font-bold mb-6 text-gray-800">Testimonials</h3>
        <p class="mb-6 pb-2 md:mb-12 md:pb-0">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam
          iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam eum
          porro a pariatur veniam.
        </p>
      </div>

        <swiper
          :slides-per-view="1"
          :space-between="10"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
          :autoplay="{
            delay: 1500,
          }"
          :effect="'coverflow'"
          :grabCursor="true"
          :centeredSlides="true"
          :slidesPerView="'auto'"
          :coverflowEffect="{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }"
          :modules="modules"
        >
          <swiper-slide>
            <div class="block rounded-lg shadow-lg bg-white">
              <div class="overflow-hidden rounded-t-lg h-14 bg-primary" style=""></div>
              <div class="w-24 -mt-12 overflow-hidden border border-8 border-white rounded-full mx-auto bg-white">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp" />
              </div>
              <div class="p-6">
                <h4 class="text-2xl font-semibold mb-4">Maria Smantha</h4>
                <hr />
                <p class="mt-4">
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="quote-left" class="w-6 pr-2 inline-block" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path fill="currentColor" d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path>
                  </svg>
                  Lorem ipsum dolor sit amet eos adipisci, consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, consequatur dolor excepturi aut fugit iste culpa, est autem ducimus dolore quam aperiam. Laudantium rem consequuntur magni. Quia itaque quisquam repudiandae.
                </p>
                <p class="text-gray-500 text-sm mt-2">22 Dec 2022</p>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="block rounded-lg shadow-lg bg-white">
              <div class="overflow-hidden rounded-t-lg h-14 bg-danger" style=""></div>
              <div class="w-24 -mt-12 overflow-hidden border border-8 border-white rounded-full mx-auto bg-white">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp" />
              </div>
              <div class="p-6">
                <h4 class="text-2xl font-semibold mb-4">Maria Smantha</h4>
                <hr />
                <p class="mt-4">
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="quote-left" class="w-6 pr-2 inline-block" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path fill="currentColor" d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path>
                  </svg>
                  Lorem ipsum dolor sit amet eos adipisci, consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, consequatur dolor excepturi aut fugit iste culpa, est autem ducimus dolore quam aperiam. Laudantium rem consequuntur magni. Quia itaque quisquam repudiandae.
                </p>
                <p class="text-gray-500 text-sm mt-2">22 Dec 2022</p>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="block rounded-lg shadow-lg bg-white">
              <div class="overflow-hidden rounded-t-lg h-14 bg-warning" style=""></div>
              <div class="w-24 -mt-12 overflow-hidden border border-8 border-white rounded-full mx-auto bg-white">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp" />
              </div>
              <div class="p-6">
                <h4 class="text-2xl font-semibold mb-4">Lisa Cudrow</h4>
                <hr />
                <p class="mt-4">
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="quote-left" class="w-6 pr-2 inline-block" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path fill="currentColor" d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path>
                  </svg>
                  Neque cupiditate assumenda in maiores
                  repudi mollitia architecto. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, consequatur dolor excepturi aut fugit iste culpa, est autem ducimus dolore quam aperiam. Laudantium rem consequuntur magni. Quia itaque quisquam repudiandae.
                </p>
                <p class="text-gray-500 text-sm mt-2">22 Dec 2022</p>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="block rounded-lg shadow-lg bg-white">
              <div class="overflow-hidden rounded-t-lg h-14 bg-info" style=""></div>
              <div class="w-24 -mt-12 overflow-hidden border border-8 border-white rounded-full mx-auto bg-white">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp" />
              </div>
              <div class="p-6">
                <h4 class="text-2xl font-semibold mb-4">John Smith</h4>
                <hr />
                <p class="mt-4">
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="quote-left" class="w-6 pr-2 inline-block" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path fill="currentColor" d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path>
                  </svg>
                  Delectus impedit saepe officiis ab
                  aliquam repellat rem unde ducimus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, consequatur dolor excepturi aut fugit iste culpa, est autem ducimus dolore quam aperiam. Laudantium rem consequuntur magni. Quia itaque quisquam repudiandae.
                </p>
                <p class="text-gray-500 text-sm mt-2">22 Dec 2022</p>
              </div>
            </div>
          </swiper-slide>
        </swiper>
    </section>
</template>

<style scoped>
  .swiper-slide .shadow-lg{
    border: 1px solid #e0e0e0;
  }
  .swiper {
    width: 100%;
    padding-top: 50px;
    padding-bottom: 50px;
  }

  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 33%;
    min-width: 300px;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
  }
</style>