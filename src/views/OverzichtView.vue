<template>
    <div>
        <HeaderComponent></HeaderComponent>
        <main id="main__overview">
            <div id="overview__cover">
                <h1>autumn collection</h1>
            </div>

            <section>
                <div id="overview__products">
                    <div id="overview__filters">
                        <div id="overview__filters__content">
                            <select id="overview__select" v-model="categoryValue">
                                <option value="all" default>All</option>
                                <option value="hair">Haircare</option>
                                <option value="skin">Skincare</option>
                                <option value="oral">Oral care</option>
                                <option value="beauty">Beauty</option>
                            </select>

                            <div id="overview__price__range__container">
                                <label
                                    ><p>
                                        Max Price: €<span id="maxpriceresult">{{
                                            sliderValue
                                        }}</span>
                                    </p></label
                                >
                                <input
                                    type="range"
                                    min="0"
                                    :max="maxPrice"
                                    id="slider"
                                    step="0.01"
                                    v-model="sliderValue"
                                />
                            </div>
                        </div>
                        <div id="overview__filters__buttons">
                            <button @click="updateFilters"><p>Apply</p></button>
                            <button @click="resetFilters"><p>Reset</p></button>
                        </div>
                    </div>
                    <h2>Results</h2>
                    <div class="overview__flexbox">
                        <div v-for="(product, index) in paginatedProducts" :key="index">
                            <router-link :to="{ name: 'DetailView', params: { id: product.id } }">
                                <ProductCardComponent :product="product"></ProductCardComponent>
                            </router-link>
                        </div>
                    </div>
                    <div class="paginering">
                        <button @click="goToPage(currentPage - 1)" :disabled="currentPage === 1">
                            <p>Previous</p>
                        </button>
                        <p>{{ currentPage }}</p>
                        <button
                            @click="goToPage(currentPage + 1)"
                            :disabled="currentPage === totalPages"
                        >
                            <p>Next</p>
                        </button>
                    </div>
                </div>
            </section>
        </main>
    </div>
</template>

<script>
import ProductCardComponent from '../components/ProductCardComponent.vue'
import HeaderComponent from '../components/HeaderComponent.vue'

export default {
    components: {
        HeaderComponent,
        ProductCardComponent
    },

    data() {
        return {
            products: [],
            filteredProducts: [],
            itemsPerPage: 8,
            currentPage: 1,
            maxPrice: 0,
            sliderValue: 0,
            categoryValue: 'all'
        }
    },

    async mounted() {
        await this.loadProducts()
        await this.findMaxPrice()
        this.filteredProducts = this.products
    },

    computed: {
        paginatedProducts() {
            const startIndex = (this.currentPage - 1) * this.itemsPerPage
            const endIndex = startIndex + this.itemsPerPage
            return this.filteredProducts.slice(startIndex, endIndex)
        },
        totalPages() {
            return Math.ceil(this.filteredProducts.length / this.itemsPerPage)
        }
    },

    methods: {
        async loadProducts() {
            try {
                const response = await fetch('/products.json')
                this.products = await response.json()
            } catch (error) {
                console.error('Fout bij het laden van producten:', error)
            }
        },
        goToPage(page) {
            if (page >= 1 && page <= this.totalPages) {
                this.currentPage = page
            }
        },
        async findMaxPrice() {
            if (this.products.length > 0) {
                this.maxPrice = this.products.reduce((max, product) => {
                    const price = parseFloat(product.price)
                    return price > max ? price : max
                }, 0)
            }

            this.sliderValue = this.maxPrice
        },
        updateFilters() {
            let filteredProducts = [...this.products]

            if (this.categoryValue !== 'all') {
                filteredProducts = filteredProducts.filter(
                    (product) => product.category === this.categoryValue
                )
            }

            if (this.sliderValue > 0) {
                filteredProducts = filteredProducts.filter(
                    (product) => parseFloat(product.price) <= parseFloat(this.sliderValue)
                )
            }

            this.currentPage = 1
            this.filteredProducts = filteredProducts
        },
        resetFilters() {
            this.categoryValue = 'all'
            this.sliderValue = this.maxPrice
            this.updateFilters()
        }
    }
}
</script>