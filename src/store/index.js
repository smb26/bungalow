import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    properties: [],
    selectedAmenities: [],
    selectedCity: null
  },
  mutations: {
    setProperties: (state, properties) => {
      state.properties = properties;
    },
    setSelectedAmenities: (state, selectedAmenities) => {
      Vue.set(state, "selectedAmenities", selectedAmenities);
    },
    setSelectedCity: (state, selectedCity) => {
      state.selectedCity = selectedCity;
    }
  },
  getters: {
    filteredPropertiesByAmenities: state => {
      if (state.selectedAmenities.length) {
        return state.properties.filter(property => {
          return (
            property.room_amenities.some(amenity =>
              state.selectedAmenities.includes(amenity)
            ) ||
            property.amenities.some(amenity =>
              state.selectedAmenities.includes(amenity.display_name)
            )
          );
        });
      }
      return state.properties;
    }
  }
});
