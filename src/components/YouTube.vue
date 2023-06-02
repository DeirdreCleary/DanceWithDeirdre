<template>
  <section class="section">
    <div class="container" align="center">
      <div class="video-container">
        <iframe
          src="https://www.youtube.com/embed/-f85VO1uUpI"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "YouTube"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
@import '../mq'
.video-container
	position: relative
	padding-bottom: 56.25%
	padding-top: 30px
	height: 0
	overflow: hidden

.video-container iframe, .video-container object, .video-container embed
	position: absolute
	top: 0
	left: 0
	width: 100%
	height: 100%
</style>
