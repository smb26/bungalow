<template>
  <div id="app" v-if="ready">
    <Card
      v-for="property in data.results"
      :property="property"
      :key="property.id"
    />
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
export default {
  components: {
    Card
  },
  data() {
    return {
      data: null,
      ready: false
    };
  },
  mounted() {
    window
      .fetch(
        "https://stage-fieldstone.bungalow.com/api/v1/listings/properties/?market__slug=seattle"
      )
      .then(response => response.json())
      .then(data => {
        this.data = data;
        this.ready = true;
      });
  }
};
</script>
