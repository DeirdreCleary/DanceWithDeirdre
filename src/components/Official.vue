<template>
  <section class="section">
    <div class="container">
      <p class="title">
        <strong>Official pages</strong>
      </p>
      <div class="buttons">
        <a class="button is-large bn" href="https://bollyx.com/" target="_blank"
          >BollyX Home</a
        >
        <a
          class="button is-large bn"
          href="https://bod.bollyx.com/"
          target="_blank"
          >BollyX On Demand</a
        >
        <a
          class="button is-large bn"
          href="https://bollyx.com/instructor/deirdre-cleary/"
          target="_blank"
          >My Instructor Profile</a
        >
      </div>
      <p>
        Interested in joining BollyX On Demand or becoming an instructor? Use my
        code for a <strong>10%</strong> discount!
      </p>
      <div class="buttons has-addons">
        <span class="button is-static bn">{{ discount }}</span>
        <span class="button" @click="copy(discount)">Copy</span>
        <p class="mgn" v-if="copied">Copied!</p>
      </div>
      <div class="has-text-right">
        <a
          class="icon"
          href="https://www.instagram.com/bollyxfitness/"
          target="_blank"
          ><i class="fa fa-instagram fa-2x"></i
        ></a>
        <a
          class="icon"
          href="https://www.facebook.com/bollyxfitness/"
          target="_blank"
          ><i class="fa fa-facebook-square fa-2x"></i
        ></a>
        <a
          class="icon"
          href="https://twitter.com/bollyxfitness/"
          target="_blank"
          ><i class="fa fa-twitter-square fa-2x"></i
        ></a>
        <a class="icon" href="https://www.youtube.com/c/BollyX/" target="_blank"
          ><i class="fa fa-youtube-square fa-2x"></i
        ></a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Official",
  data: function() {
    return {
      discount: "BXZJ399",
      copied: false
    };
  },
  methods: {
    async copy(s) {
      await navigator.clipboard.writeText(s);
      this.copied = true;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
@import '../mq'
.bn
    color: white
    background: black
    border-width: medium
    border-color: black
    &:hover
        color: black
        background: $primary

.mgn
  margin-left: 1em

.icon
  color: black
  margin-right: 20px

.section
    background: $fadedprimary
</style>
