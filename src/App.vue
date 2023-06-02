<template>
  <div id="app" class="content">
    <nav
      class="navbar bd-navbar"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="container">
        <div class="navbar-brand">
          <router-link to="/" class="navbar-item"
            >Dance With Deirdre</router-link
          >

          <a
            class="navbar-burger"
            role="button"
            aria-label="menu"
            aria-expanded="false"
            v-on:click="toggleNav"
            v-bind:class="{ 'is-active': isActive }"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div class="navbar-end">
          <div class="navbar-menu" v-bind:class="{ 'is-active': isActive }">
            <router-link to="/" v-on:click="hideNav" class="navbar-item r-item"
              >Home</router-link
            >
            <router-link
              to="about"
              v-on:click="hideNav"
              class="navbar-item r-item"
              >About</router-link
            >
            <router-link
              to="faq"
              v-on:click="hideNav"
              class="navbar-item r-item"
              >FAQ</router-link
            >
            <router-link
              to="contact"
              v-on:click="hideNav"
              class="navbar-item r-item"
              >Contact</router-link
            >
          </div>
        </div>
      </div>
    </nav>

    <router-view></router-view>

    <footer class="footer is-primary">
      <div class="container">
        <div class="columns">
          <div class="column">
            <p>
              &copy;BollyX and Deirdre Cleary
            </p>
          </div>
          <div class="column has-text-right">
            <a
              class="icon"
              target="_blank"
              href="https://www.instagram.com/bollyxwithdeirdre/"
              ><i class="fa fa-instagram fa-2x"></i
            ></a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "app",
  data: function() {
    return {
      isActive: false
    };
  },
  methods: {
    toggleNav: function() {
      this.isActive = !this.isActive;
    },
    hideNav: function() {
      this.isActive = false;
    }
  }
};
</script>

<style lang="sass">
@import 'mq'
@import '../node_modules/bulma/bulma.sass'

.content
  padding: 0
  margin: 0
  font-family: 'Lato', sans-serif

.navbar
  background-color: $primary
  a:hover
    color: gray
  .button
    border: none
    color: black
    background-color: white
    +tablet-only
      background-color: $primary
    +mobile
      background-color: $primary
    &:hover
      color: $primary
      background-color: black

.navbar-brand a
  color: black
  font-weight: bold

a.r-item
  color:black
  padding: 0.5rem 1.75rem
  +mobile
    color: gray
    &:hover
      background-color: #F1F1F1

.navbar-burger span
  background-color: black

footer
  background-color: $primary !important
  color: black

  .icon
    color: #fff
    margin-left: 20px

.link
  color: $primary
</style>
