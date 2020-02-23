<template>
  <div
    class="border-b-2 border-black flex flex-col justify-start items-stretch"
  >
    <div>
      <Swiper class="group" :options="options" v-if="property.images.length">
        <SwiperSlide
          class="h-64"
          v-for="image in property.images"
          :key="image.order"
        >
          <img
            class="w-full h-full object-cover swiper-lazy"
            :data-src="image.sm_url"
          />
        </SwiperSlide>
        <div
          class="swiper-button-prev swiper-button-black hidden group-hover:block"
          slot="button-prev"
        ></div>
        <div
          class="swiper-button-next swiper-button-black hidden group-hover:block"
          slot="button-next"
        ></div>
      </Swiper>
      <div
        v-else
        class="w-full h-64 overflow-hidden flex justify-center items-center bg-gray-200"
      >
        <p class="text-gray-600">Coming soon</p>
      </div>
    </div>
    <div
      class="flex flex-col items-start justify-between pt-5 pb-2 pr-2 flex-grow"
    >
      <div class="flex flex-col items-start mb-6">
        <p class="border border-black text-sm font-bold py-1 px-2 mb-3">
          {{ roomsAvailable }}
        </p>
        <p class="text-xl font-bold">{{ property.headline }}</p>
      </div>
      <p class="text-lg">
        {{
          property.available_room_count === 1
            ? cheapestPrice
            : `${cheapestPrice} - ${highestPrice}`
        }}
      </p>
    </div>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  props: {
    property: {
      type: Object,
      required: true
    }
  },
  components: {
    Swiper: swiper,
    SwiperSlide: swiperSlide
  },
  data() {
    return {
      ready: false,
      options: {
        preloadImages: false,
        lazy: {
          loadPrevNext: true,
          loadOnTransitionStart: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  },
  computed: {
    roomsAvailable() {
      return `${this.property.available_room_count} of ${this.property.total_room_count} rooms available today`;
    },
    cheapestPrice() {
      return `$${Math.min(...this.property.room_prices)}`;
    },
    highestPrice() {
      return `$${Math.max(...this.property.room_prices)}`;
    }
  }
};
</script>
