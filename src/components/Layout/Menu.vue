<template>
  <div>
    <div class="sticky top-0 p-10">
      <p class="text-2xl mb-5">To start, select a city:</p>
      <button
        v-for="(city, index) in cities"
        :key="index"
        class="text-xl font-bold hover:text-red-400 text-left w-full flex items-center justify-between"
        :class="[
          index === cities.length - 1 ? 'mb-6' : 'mb-2',
          { 'text-red-400': city.name === selectedCity }
        ]"
        @click="getProperties(city)"
      >
        <span>{{ city.name }}</span>
        <span class="text-xs">{{ city.state }}</span>
      </button>
      <template v-if="selectedCity">
        <p class="text-2xl mb-5">Then, filter by amenities:</p>
        <label
          v-for="amenity in allAmenities"
          :key="amenity"
          class="block text-lg font-bold mb-2"
        >
          <input type="checkbox" v-model="amenities" :value="amenity" />
          {{ amenity }}
        </label>
      </template>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {
      cities: [
        {
          api: "baltimore",
          name: "Baltimore",
          state: "MD"
        },
        {
          api: "bay-area",
          name: "Bay Area",
          state: "CA"
        },
        {
          api: "boston",
          name: "Boston",
          state: "MA"
        },
        {
          api: "chicago",
          name: "Chicago",
          state: "IL"
        },
        {
          api: "los-angeles",
          name: "Los Angeles",
          state: "CA"
        },
        {
          api: "new-york-city",
          name: "New York City",
          state: "NY"
        },
        {
          api: "philadelphia",
          name: "Philadelphia",
          state: "PA"
        },
        {
          api: "portland",
          name: "Portland",
          state: "OR"
        },
        {
          api: "san-diego",
          name: "San Diego",
          state: "CA"
        },
        {
          api: "seattle",
          name: "Seattle",
          state: "WA"
        },
        {
          api: "washington-dc",
          name: "Washington DC",
          state: "DC"
        }
      ],
      allAmenities: [
        "Master Bedroom",
        "Private Bath",
        "Pet Friendly",
        "Dishwasher",
        "Dryer"
      ]
    };
  },
  computed: {
    amenities: {
      get() {
        return this.selectedAmenities;
      },
      set(value) {
        this.setSelectedAmenities(value);
      }
    },
    ...mapState(["selectedAmenities", "selectedCity"])
  },
  methods: {
    getProperties(city) {
      this.setSelectedCity(city.name);
      this.$emit("update:loading", true);

      axios
        .get(
          `https://stage-fieldstone.bungalow.com/api/v1/listings/properties/?market__slug=${city.api}`
        )
        .then(response => {
          this.setProperties(response.data.results);
          this.$emit("update:loading", false);
        });
    },
    ...mapMutations([
      "setProperties",
      "setSelectedAmenities",
      "setSelectedCity"
    ])
  }
};
</script>
