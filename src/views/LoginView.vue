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