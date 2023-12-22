<template>
  <div>
    <HeaderComponent></HeaderComponent>
    <main id="mainIndex">
      <section id="hero">
        <h1>Healthcare, naturally</h1>
        <h5>by vida</h5>
        <div id="arrowdowncontainer">
          <div id="arrowdown">
            <a href="#brand"><img src="@/assets/arrowdown.png" alt="arrow down" /></a>
          </div>
        </div>
      </section>

      <section id="brand">
        <div class="brand__container">
          <div class="cover"></div>
          <div class="textcontainer">
            <h2>100% Natural & Pure</h2>
            <p>
              Mother Nature gave us everything we need in life, from medicines and powerful herbs to
              strong and flexible materials. We made sure all of our ingredients are 100% pure and
              exclusively natural, without additives or artificial conservatives.
            </p>
          </div>
        </div>

        <div class="brand__container">
          <div class="cover"></div>
          <div class="textcontainer">
            <h2>Sustainable Farming</h2>
            <p>
              We ensure that the farms and fields where our products and ingredients originated, are
              sustainable and operated by free farmers who get paid fairly.
            </p>
          </div>
        </div>
      </section>

      <section id="trending">
        <h2>Featured products</h2>
        <div id="trendingContainer">
          <div class="trendingBox">
            <div>
              <img src="@/assets/product12.png" />
              <div><h3>Sale!</h3></div>
            </div>
            <h3>Extra Rich Botanical Toothpaste</h3>
            <p><span>€7,60</span>€4,95</p>
          </div>

          <div class="trendingBox">
            <div>
              <img src="@/assets/product17.png" />
              <div><h3>Sale!</h3></div>
            </div>
            <h3>Bamboo Toothbrush Medium Bristles</h3>
            <p><span>€3,95</span>€1,95</p>
          </div>

          <div class="trendingBox">
            <div>
              <img src="@/assets/product18.png" />
              <div><h3>Sale!</h3></div>
            </div>
            <h3>Peppermints Toothpaste Tablets</h3>
            <p><span>€19,95</span>€14,95</p>
          </div>
        </div>
      </section>
    </main>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
import HeaderComponent from '../components/HeaderComponent.vue'
import FooterComponent from '../components/FooterComponent.vue'

export default {
  components: {
    HeaderComponent,
    FooterComponent
  }
}
</script>