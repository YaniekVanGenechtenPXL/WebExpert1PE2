<template>
  <div class="overview__box hair">
    <div><img :src="product.image" :alt="product.title" /></div>
    <h3>{{ product.title }}</h3>
    <p>€{{ product.price }}</p>
  </div>
</template>

<script>
export default {
  props: {
    product: Object
  }
}
</script>