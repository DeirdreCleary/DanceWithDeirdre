<template>
  <div class="faq">
    <div class="container">
      <section class="section">
        <div class="container py-4">
          <h2 class="title has-text-centered mb-6">
            Frequently Asked Questions
          </h2>

          <div class="columns" v-if="faqs && faqs.length">
            <div
              class="column is-one-third mb-6"
              v-for="faq in faqs"
              :key="faq.question"
            >
              <div class="card block">
                <div class="card-content">
                  <div class="media">
                    <div class="media-content">
                      <h3 class="title is-4">
                        {{ faq.question }}
                      </h3>
                      <p v-html="faq.answer" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card block">
            <div class="card-content">
              <h2 class="title is-5">
                If you have a question that's not covered here, please
                <router-link to="/contact" class="link" id="learn"
                  >get in touch</router-link
                >
              </h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { readFaqs } from "../firebase";

export default {
  data() {
    return {
      faqs: []
    };
  },
  mounted() {
    readFaqs(this.faqs);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
@import '../mq'

.pd
  padding: 2.5em 0 1.5em 0

.answer
  margin-top: 10px !important
  color: gray

.columns
  flex-wrap: wrap
</style>
