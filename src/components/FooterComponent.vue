<template>
  <footer id="footer">
        <ul>
            <li><h4>ViDa</h4></li>
            <li><p>Copyright © ViDa</p></li>
            <li>
                <ul>
                    <li><a href="#"><img src="../assets/facebook.png" alt="Facebook"></a></li>
                    <li><a href="#"><img src="../assets/instagram.png" alt="Instagram"></a></li>
                    <li><a href="#"><img src="../assets/twitter.png" alt="Twitter"></a></li>
                    <li><a href="#"><img src="../assets/pinterest.png" alt="Pinterest"></a></li>
                </ul>
            </li>
        </ul>

        <ul>
            <li><h4>Contact</h4></li>
            <li><a href="mailto:info@bedrijf.com">info@vida.com</a></li>
            <li><a href="tel:011123456">011/123456</a></li>
        </ul>

        <ul>
            <li><h4>About</h4></li>
            <li><a href="#">Shipping & Returns</a></li>
            <li><a href="#">Blog</a></li>
        </ul>
    </footer>
</template>

<style scoped>
footer {
  background-color: #899d5e;
  width: 100vw;
  padding: 5vw 2vw 7vw 2vw;
  display: flex;
  justify-content: space-between;
}
footer p, footer a {
  color: #FFF;
  font-family: "Montserrat", sans-serif;
  font-weight: 300;
  font-size: 15px;
}
footer ul {
  width: 33.33vw;
}
footer ul li {
  list-style: none;
  margin: 10px 0;
}
footer ul li ul {
  display: flex;
  gap: 0 20px;
}
footer ul li ul img {
  height: 20px;
}
</style>