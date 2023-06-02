<template>
  <div>
    <Hero />
    <Faq />
  </div>
</template>

<script>
import Hero from "../components/Hero";
import Faq from "../components/Faq";

export default {
  name: "FaqPage",
  components: { Hero, Faq }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
@import '../mq'
</style>
