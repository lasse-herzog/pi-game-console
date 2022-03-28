<template>
  <div class="site-footer">
    <footer>
      <div class="social-media">
        <a href="https://www.instagram.com/">
          <font-awesome-icon :icon="['fab', 'instagram']" />
        </a>
        <a href="https://twitter.com/">
          <font-awesome-icon :icon="['fab', 'twitter']" />
        </a>
        <a href="https://www.facebook.com/">
          <font-awesome-icon :icon="['fab', 'facebook']" />
        </a>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
          <font-awesome-icon :icon="['fab', 'youtube']" />
        </a>
      </div>
      <div class="site-links">
        <ul class="inline-list">
          <li class="list-item"><router-link to="/">Home</router-link></li>
          <li class="list-item">
            <router-link to="console">Console</router-link>
          </li>
          <li class="list-item"><router-link to="games">Games</router-link></li>
          <li class="list-item"><router-link to="shop">Shop</router-link></li>
          <li class="list-item"><router-link to="faq">FAQ</router-link></li>
          <li class="list-item"><router-link to="datenschutz">Datenschutz</router-link></li>
          <li class="list-item">
            <router-link to="impressum">Impressum</router-link>
          </li>
        </ul>
        <p class="copyright">PYCO AG &copy; 2022</p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.site-footer {
  padding: 2rem 0;
  background-color: slategray;
  color: aliceblue;
}
.site-footer ul {
  padding: 0;
  list-style: none;
  text-align: center;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 0;
  margin-top: 0;
}
.site-footer li {
  padding: 0 0.5rem;
  display: inline;
}
.site-footer ul a {
  color: inherit;
  text-decoration: none;
  opacity: 0.8;
}
.site-footer ul a:hover {
  color: white;
  cursor: pointer;
  opacity: 1;
}
.social-media {
  text-align: center;
  padding: 1rem;
}
.social-media a {
  font-size: 2rem;
  display: inline-block;
  text-align: center;
  margin: 0 1rem;
  color: inherit;
  opacity: 0.8;
}
.social-media a:hover {
  opacity: 1;
}
.site-footer .copyright {
  margin-top: 2rem;
  text-align: center;
  font-size: 0.8rem;
  color: rgb(61, 61, 61);
  margin-bottom: 0;
}

@media screen and (max-width: 460px) {
  .site-footer li {
    padding: 0 0.5rem;
    display: block;
  }
}
</style>
