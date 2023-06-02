<template>
  <div class="about">
    <Hero />
    <ContactForm />
  </div>
</template>

<script>
import Hero from "../components/Hero";
import ContactForm from "../components/ContactForm";

export default {
  name: "about",
  components: { Hero, ContactForm }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
@import '../mq'
</style>
