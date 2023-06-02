<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <div class="columns">
          <div class="is-two-thirds column">
            <h1 class="title">{{ heading }}</h1>
            <div class="is-paddingless">
              <h2 class="subtitle is-5">{{ subheading }}</h2>
            </div>
            <router-link
              v-if="showLearnMore"
              to="about"
              class="button is-large is-primary"
              id="learn"
              >Learn more</router-link
            >
          </div>
          <figure class="image is-one-third column is-hidden-mobile padded">
            <img src="../assets/X.jpg" />
          </figure>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Hero",
  data() {
    return {
      heading: "Dance with Deirdre",
      subheading:
        "Join me for BollyX, a Bollywood inspired workout guaranteed to get your heartrate up and put a smile on your face"
    };
  },
  props: {
    showLearnMore: Boolean
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
@import '../mq'

.hero
  background: black
  background-size: cover

  .title
    color:#fff
    +mobile
      font-weight: bold
    +tablet
      font-size: 2.5rem
    +desktop
      font-size: 4rem
      margin-top: 2rem

h2
  color:#fff
  margin: 1.5rem 0 2rem 0 !important

.fa-cog
  font-size: 40px

#learn
  +desktop
    margin-bottom: 2rem

.pd
  +tablet
    padding: 2em 0

.padded
  padding: 2em
</style>
