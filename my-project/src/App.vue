<template>
  <div id="app">
    <nav class="navigation">
      <div class="navigation__link-container">
        <router-link
        to="/"
        custom
        class="navigation__link"
        v-slot="{ href, navigate }">
          <span class="navigation__link" :href="href" @click="navigate">Список закладок</span>
        </router-link>
        <router-link
        to="/add/new"
        custom
        class="navigation__link add"
        v-slot="{ href, navigate }">
          <span class="navigation__link" :href="href" @click="navigate">Добавить закладку</span>
        </router-link>
      </div>
    </nav>
    <div class="body-container">
      <router-view />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'App',
  methods: {
    ...mapActions(['actionGetBookmarks']),
  },
  mounted() {
    this.actionGetBookmarks();
  },
};
</script>

<style>
  * {
    padding: 0;
    margin: 0;
    border: 0;
  }
  *,
  *:before,
  *:after {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  :focus,
  :active {
    outline: none;
  }
  a:focus,
  a:active {
    outline: none;
  }
  nav,
  footer,
  header,
  aside {
    display: block;
  }
  html,
  body {
    font-family: roboto;
    color: rgb(232, 234, 237);
    background-color: rgb(32, 33, 36);
    height: 100%;
    width: 100%;
    font-size: 100%;
    line-height: 1;
    font-size: 14px;
    -ms-text-size-adjust: 100%;
    -moz-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }
  input,
  button,
  textarea {
    font-family: inherit;
  }
  input::-ms-clear {
    display: none;
  }
  button {
    cursor: pointer;
  }
  button::-moz-focus-inner {
    padding: 0;
    border: 0;
  }
  a,
  a:visited {
    text-decoration: none;
  }
  a:hover {
    text-decoration: none;
  }
  ul li {
    list-style: none;
  }
  img {
    vertical-align: top;
  }
  input {outline: none;}
  input:-webkit-autofill {
      box-shadow: inset 0 0 0 50px rgb(255, 255, 255) !important;;
      -webkit-box-shadow: inset 0 0 0 50px rgb(255, 255, 255) !important;
      -webkit-text-fill-color: #999 !important;
      color: #999 !important;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
      -webkit-appearance: none;
  }
.navigation {
  background-color: #292a2d;
  color: #fff;
  padding: 8px 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding: 16px;
}
.navigation__link-container {
  align-items: center;
  box-sizing: border-box;
  display: flex;
  padding-inline-start: 18px;
}
.navigation__link {
  padding: 8px 16px;
  border: 1px solid rgb(95, 99, 104);
  border-radius: 4px;
  background: none;
  margin-inline-end: 8px;
  color: #8ab4f7;
  cursor: pointer;
  transition: all 0.2s;
}
.navigation__link.add{
  background-color: #8ab4f7;
  color: #292a2d;
}
.navigation__link:hover {
  transform: translateY(-2px);
  box-shadow: 0px 2px 2px 0px #8ab4f7;
}
.navigation__link.add:hover{
  box-shadow: 0px 2px 2px 0px rgb(95, 99, 104);
}
</style>
