<template>
  <header>
    <nav>
      <div id="navdiv1">
        <ul>
          <li><router-link to="/shop">shop</router-link></li>
          <li><router-link to="#footer">contact</router-link></li>
        </ul>
      </div>
      <div id="navdiv2">
        <router-link to="/"> <img src="../assets/logo.png" id="logo" alt="logo" /></router-link>
      </div>
      <div id="navdiv3">
        <ul>
          <li>
            <router-link to="/login">
              <img src="../assets/account.svg" alt="account"
            /></router-link>
          </li>
          <li>
            <a href="#"><img src="../assets/shoppingbag.svg" alt="shoppingcart" /></a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      scrollY: ''
    }
  },
  mounted() {
    this.setInitialStyle()
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    setInitialStyle() {
      this.$el.style.backgroundColor = 'transparent'
    },
    handleScroll() {
      this.scrollY = window.scrollY

      if (this.scrollY > 20) {
        this.$el.style.backgroundColor = '#FFFFFF'
      } else {
        this.$el.style.backgroundColor = 'transparent'
      }
    }
  }
}
</script>