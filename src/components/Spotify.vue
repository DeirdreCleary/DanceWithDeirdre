<template>
  <section class="section">
    <div class="container">
      <p class="title">
        <strong>This week's playlist</strong>
      </p>
      <iframe
        src="https://open.spotify.com/embed/playlist/3nwXD5zL1n7fiQAHpnxCvF"
        width="100%"
        height="440"
        frameborder="0"
        allowtransparency="true"
        allow="encrypted-media"
      ></iframe>
    </div>
  </section>
</template>

<script>
export default {
  name: "Spotify"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
@import '../mq'
</style>
