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

<style scoped>
div.overview__box {
  color: #899d5e;
  margin-bottom: 5vh;
}
div.overview__box a {
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  text-decoration: none;
  color: #899d5e;
}
div.overview__box div {
  width: 100%;
  height: 250px;
  background-color: #fff;
  border: 2px solid #2b7180;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
}
div.overview__box div:hover img {
  width: 90%;
}
div.overview__box div img {
  width: 80%;
  transition: ease-in-out 0.5s;
}
div.overview__box p {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: auto;
}
div.overview__box p span {
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: auto;
  margin-right: 20px;
  text-decoration: line-through #f00;
}
</style>