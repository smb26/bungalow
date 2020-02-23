<template>
  <div>
    <div
      class="p-10 border-b border-gray-300 flex justify-between items-center w-100"
    >
      <img class="h-4" src="@/assets/bungalow.png" />
      <button class="block lg:hidden" @click="isOpen = !isOpen">
        <svg class="h-8 w-8 fill-current" viewBox="0 0 24 24">
          <path
            v-if="isOpen"
            fill-rule="evenodd"
            d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
          />
          <path
            v-else
            fill-rule="evenodd"
            d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
          />
        </svg>
      </button>
    </div>
    <Menu
      v-if="isOpen"
      class="w-100 h-100 fixed inset-0 lg:hidden mt-24 bg-white z-20"
    />
  </div>
</template>

<script>
import Menu from "@/components/Layout/Menu.vue";

export default {
  components: {
    Menu
  },
  data() {
    return {
      isOpen: false
    };
  },
  watch: {
    isOpen(newVal) {
      this.$emit("update:removeScroll", newVal);
    }
  }
};
</script>
