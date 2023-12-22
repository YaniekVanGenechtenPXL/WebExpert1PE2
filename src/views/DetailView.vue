<template>
    <div>
        <HeaderComponent></HeaderComponent>
        <main id="main__detail">
            <div id="detail__top">
                <h2>{{ product.title }}</h2>
                <div id="detail__cover">
                    <img :src="product.image" :alt="product.title" />
                </div>
                <div id="detail__info">
                    <p>€{{ product.price }}</p>
                    <div id="detail__addtocart">
                        <select>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                        </select>
                        <div><a href="#">Add to Cart</a></div>
                    </div>
                </div>
            </div>

            <div id="detail__bottom">
                <div class="detail__info__texts">
                    <h3>Description</h3>
                    <p>
                        Natural toothpaste "Siberian Propolis" contains natural propolis emulsion,
                        essential oils and extracts of valuable Siberian plants.
                    </p>
                </div>
                <div class="detail__info__texts">
                    <h3>Recommended use</h3>
                    <p>Adults should use the toothpaste on average twice a day.</p>
                </div>
                <div class="detail__info__texts">
                    <h3>Composition</h3>
                    <ul>
                        <li><p>Bee propolis</p></li>
                        <li>
                            <p>Complex of extracts and oils of bergenia</p>
                        </li>
                        <li><p>Sage</p></li>
                        <li><p>Chamomile</p></li>
                        <li><p>Geranium</p></li>
                        <li><p>Sea-buckthorn</p></li>
                    </ul>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
import HeaderComponent from '../components/HeaderComponent.vue'

export default {
    components: {
        HeaderComponent
    },

    data() {
    return {
      productId: null,
      product: null,
      loading: true
    };
  },

  async mounted() {
    this.productId = this.$route.params.id;
    await this.loadProduct();
  },

  methods: {
    async loadProduct() {
      try {
        const response = await fetch(`/products/${this.productId}.json`);
        this.product = await response.json();
        this.loading = false;
      } catch (error) {
        console.error('Fout bij het laden van het product:', error);
        this.loading = false;
      }
    }
  }
}
</script>