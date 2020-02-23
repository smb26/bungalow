<template>
  <div
    class="flex flex-col"
    :class="[removeScroll ? 'h-screen overflow-hidden' : 'min-h-screen']"
  >
    <Header :removeScroll.sync="removeScroll" />
    <div class="flex flex-grow">
      <Menu
        class="hidden lg:block w-1/5 h-100 border-r border-gray-300"
        :loading.sync="loading"
      />
      <div
        class="w-full lg:w-4/5 p-8 lg:pt-12 lg:px-16 flex flex-col"
        :class="{ 'items-center justify-center': loading }"
      >
        <img v-if="loading" class="self-center" src="@/assets/loading.gif" />
        <div
          v-else-if="properties"
          class="grid grid-flow-row grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 xl:gap-12 "
        >
          <Card
            v-for="property in filteredPropertiesByAmenities"
            :property="property"
            :key="`${property.id}${property.slug}`"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Layout/Header.vue";
import Menu from "@/components/Layout/Menu.vue";
import Card from "@/components/Card.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    Header,
    Menu,
    Card
  },
  data() {
    return {
      loading: false,
      removeScroll: false
    };
  },
  computed: {
    ...mapGetters(["filteredPropertiesByAmenities"])
  }
};
</script>
