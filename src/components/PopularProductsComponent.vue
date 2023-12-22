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


<style scoped>
#container {
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
#flex {
  display: inline-block;
}
h2 {
  width: 100%;
  text-align: center;
  color: #899d5e;
}
</style>