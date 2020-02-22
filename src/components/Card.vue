<template>
  <div>
    <div>
      <Swiper :options="options" v-if="property.images.length">
        <SwiperSlide v-for="image in property.images" :key="image.order">
          <img
            :data-src="image.sm_url"
            class="swiper-lazy"
            style="height: 300px"
          />
        </SwiperSlide>
      </Swiper>
      <p v-else>Coming soon</p>
    </div>
    <p>{{ roomsAvailable }}</p>
    <p>{{ property.headline }}</p>
    <p>{{ property.price }}</p>
    <p>
      {{
        property.available_room_count === 1
          ? cheapestPrice
          : `${cheapestPrice} - ${highestPrice}`
      }}
    </p>
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
