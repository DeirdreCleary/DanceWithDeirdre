<template>
  <section class="section">
    <div class="container">
      <div class="card mgn">
        <div class="card-content">
          <p class="title">
            <strong>What is BollyX?</strong>
          </p>
          <p>
            BollyX is a Bollywood-inspired dance-fitness program that combines
            dynamic choreography with the hottest music from around the world.
            Its 50-minute cardio workout cycles between higher and
            lower-intensity dance sequences to get you moving, sweating, and
            smiling. At the very core of a BollyX workout is the inspiration it
            draws from the music and dance of Bollywood, the film industry of
            India. Learn more at
            <a href="https://bollyx.com/" target="_blank" class="link"
              >BollyX.com</a
            >
          </p>
        </div>
      </div>
      <div class="card is-horizontal mgn">
        <div class="card-content">
          <p class="title">
            <strong>Who is Deirdre?</strong>
          </p>
          <div class="columns">
            <div class="card-image column is-two-fifths">
              <figure class="image">
                <img :src="imageUrl" alt="Instructor" />
              </figure>
            </div>
            <div class="column is-three-fifths">
              <p>
                I became a BollyX instructor in August 2020 and I have loved
                every second of my journey since then! Nothing makes me happier
                after a long day than dancing the day away and I'm so excited to
                share that with you.
              </p>
              <p>
                I got involved in dance fitness when I graduated college and
                started my first job at as a software engineer - after sitting
                at a desk all day all I wanted to do was get moving! I started
                taking Zumba classes and discovered my love for dance for the
                first time. I took my first BollyX class when visiting
                Philadelphia for work in 2018 and I was hooked. Unfortunately my
                rotation in the US office was only a month long and I was soon
                back in Dublin, reminiscing about my Saturdays rocking out to
                Bollywood beats. So you can imagine my excitement when I
                discovered the BollyX On Demand portal in 2020! I was dancing
                around my living room in no time. I was delighted, but it didn't
                quite replicate the atmosphere of a live class, so I decided to
                take action and get certified as a BollyX instructor.
              </p>
              <p>
                Now I'm bringing the party to Dublin every Wednesday at 8pm,
                come dance with me!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { getImage } from "../firebase";

export default {
  name: "Description",
  data: function() {
    return {
      imageUrl: ""
    };
  },
  async mounted() {
    this.imageUrl = await getImage("Instructor.jpeg");
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
@import '../mq'
.mgn
  margin: 2em
</style>
