<template>
  <div>
    <HeaderComponent></HeaderComponent>
    <main id="main__detail">
      <div id="detail__top">
        <h2>Extra rich botanical toothpaste</h2>
        <div id="detail__cover">
          <img src="../assets/oralcare1.png" alt="product" />
        </div>
        <div id="detail__info">
          <p><span>€7,60</span>€4,95</p>
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
            Natural toothpaste "Siberian Propolis" contains natural propolis emulsion, essential
            oils and extracts of valuable Siberian plants.
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
  }
}
</script>

<style scoped>
#detailpage {
  background-color: #fff;
}

main#main__detail {
  width: 80%;
  margin: 0 auto;
}
main#main__detail div#detail__top {
  width: 100%;
}
main#main__detail div#detail__bottom {
  width: 100%;
}
main#main__detail h2 {
  color: #2b7180;
  margin: 5vh 0;
}
main#main__detail div#detail__cover {
  width: 48%;
  float: left;
}
main#main__detail div#detail__cover img {
  width: 100%;
  border: 5px solid #2b7180;
}
main#main__detail div#detail__info {
  width: 48%;
  float: right;
}
main#main__detail div#detail__info > p {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 1.5em;
  color: #899d5e;
  margin-bottom: 5vh;
}
main#main__detail div#detail__info > p span {
  margin-right: 25px;
  text-decoration: line-through #f00;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: auto;
}
main#main__detail div#detail__info #detail__addtocart {
  background-color: #899d5e;
  display: flex;
  justify-content: '';
  align-items: 'center';
  width: 250px;
  height: 40px;
}
main#main__detail div#detail__info #detail__addtocart select {
  width: 20%;
  height: 100%;
  background-color: #2b7180;
  color: #fff;
  border: none;
  padding: 5px;
}
main#main__detail div#detail__info #detail__addtocart div {
  width: 80%;
  height: 100%;
}
main#main__detail div#detail__info #detail__addtocart div a {
  color: #fff;
  text-decoration: none;
  width: 100%;
  height: 100%;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 1.4em;
  display: flex;
  justify-content: center;
  align-items: center;
}
main#main__detail div#detail__info hr {
  height: 2px;
  width: 100%;
  margin: 5vh 0;
  background-color: #899d5e;
  color: #899d5e;
  border: none;
}
main#main__detail div#detail__info .detail__info__texts {
  margin-bottom: 2vh;
}
main#main__detail div#detail__info .detail__info__texts h3 {
  color: #899d5e;
  font-size: 2em;
}
main#main__detail div#detail__info .detail__info__texts ul {
  margin-left: 20px;
}
</style>