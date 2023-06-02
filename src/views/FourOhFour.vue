<template>
  <div class="home">
    <section class="container">
      <h1>
        Uh oh! Looks like somethings gone wrong
      </h1>
      <router-link to="/" class="button is-large is-primary mgn" id="learn"
        >Back to home</router-link
      >
    </section>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
@import '../mq'

h1
    margin: 1.5rem 0 2rem 1rem

.mgn
  margin: 1rem
</style>
