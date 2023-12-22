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

<style scoped>
header {
  position: fixed;
  top: 0;
  width: 100vw;
  height: 80px;
  background-color: #fff;
  transition: 0.5s;
  z-index: 100;
}
header nav {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
header nav #logo {
  height: 50px;
}
header nav div {
  width: 33.33vw;
}
header nav #navdiv1 ul {
  float: left;
  margin-left: 40px;
}
header nav #navdiv2 {
  text-align: center;
}
header nav #navdiv3 ul {
  float: right;
  margin-right: 40px;
}
header nav ul {
  display: flex;
}
header nav ul li {
  list-style: none;
  padding: 0 12px;
}
header nav ul li a {
  text-decoration: none;
  color: #2b7180;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 15px;
  text-transform: uppercase;
  cursor: pointer;
}
header nav ul li img {
  height: 30px;
}
</style>