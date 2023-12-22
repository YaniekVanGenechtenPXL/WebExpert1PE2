<template>
  <div id="container">
    <h2>Featured products</h2>
    <ProductCardComponent
      v-bind:products="featuredProducts"
    ></ProductCardComponent>
  </div>
</template>

<script>
import ProductCardComponent from "./ProductCardComponent.vue";
import products from "../products.json";

export default {
  components: {
    ProductCardComponent,
  },
  data() {
    return {
      products: products,
    };
  },
  computed: {
    featuredProducts() {
      return this.products.filter((product) =>
        ["2", "7", "14"].includes(product.id)
      );
    },
  },
};
</script>