<template>
  <main id="main__login">
    <div id="homebutton">
      <router-link to="/"><img src="../assets/home.svg" alt="Go to homepage" /></router-link>
    </div>
    <section class="floatleft" id="content">
      <h1>Log in</h1>
      <form autocomplete="off" method="post">
        <input type="email" id="email" placeholder="E-mail" required />
        <input type="password" id="password" placeholder="Password" required />
        <div id="buttonscontainer">
          <button type="submit" class="floatleft">Log In</button>
          <button class="floatright">Sign Up</button>
        </div>
        <div id="forgotpasswordcontainer">
          <a href="#">Forgot Password?</a>
        </div>
      </form>
    </section>
    <section class="floatright" id="inlogCover"></section>
  </main>
</template>

<style scoped>
main#main__login {
  height: 100vh;
  width: 100vw;
}
main#main__login #homebutton {
  position: absolute;
  top: 20px;
  left: 20px;
}
main#main__login #homebutton a {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
main#main__login #homebutton img {
  height: 40px;
}
main#main__login section {
  width: 50%;
  height: 100%;
}
main#main__login #content {
  background-color: #899d5e;
  padding-top: 20vh;
}
main#main__login #content h1 {
  color: white;
  text-align: center;
}
main#main__login #content form {
  display: flex;
  flex-direction: column;
  margin-top: 10vh;
}
main#main__login #content form input {
  background-color: transparent;
  border: 2px solid #FFF;
  padding: 5px;
  width: 50%;
  margin: 10px auto;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 1em;
  color: #FFF;
}
main#main__login #content form input::placeholder {
  color: #FFF;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 1em;
}
main#main__login #content form #buttonscontainer {
  width: 50%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
main#main__login #content form #buttonscontainer button {
  width: 46%;
  height: 40px;
  margin-top: 10px;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
main#main__login #content form #buttonscontainer button:nth-of-type(1) {
  background-color: #FFF;
  color: #899d5e;
  border: none;
}
main#main__login #content form #buttonscontainer button:nth-of-type(2) {
  background-color: #899d5e;
  color: #FFF;
  border: 2px solid #FFF;
}
main#main__login #content form #buttonscontainer button:hover {
  text-decoration: underline;
}
main#main__login #content #forgotpasswordcontainer {
  width: 50%;
  margin: 0 auto;
  margin-top: 20px;
}
main#main__login #content a {
  color: #FFF;
  font-family: "Montserrat", sans-serif;
  font-weight: 100;
  font-size: auto;
}
main#main__login #inlogCover {
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-image: url("../assets/logincover.png");
}
</style>