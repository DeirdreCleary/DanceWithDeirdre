<template>
  <div class="about">
    <Hero />
    <Description />
    <Official />
    <YouTube />
  </div>
</template>

<script>
import Hero from "../components/Hero";
import Description from "../components/Description";
import YouTube from "../components/YouTube";
import Official from "../components/Official";

export default {
  name: "about",
  components: { Hero, Description, YouTube, Official }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
@import '../mq'
</style>
