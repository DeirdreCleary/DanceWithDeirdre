<template>
  <section class="section">
    <div class="container">
      <h2 class="title mb-6">
        Contact Us
      </h2>
      <h4 class="title mb-6">
        Have a burning question not covered in the <router-link
              to="faq"
              class="link"
              id="learn"
              >FAQs</router-link>? Get in touch!
      </h4>
      <form
        name="contact"
        @submit.prevent="handleSubmit"
        novalidate="true"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        v-if="
          !this.formCompletion.submittedSuccessfully &&
            !this.formCompletion.failedToSubmit
        "
      >
        <p hidden class="is-hidden">
          <label
            >Don’t fill this out if you're human: <input name="bot-field"
          /></label>
        </p>
        <div class="field">
          <label class="label">Name</label>
          <div class="control has-icons-left has-icons-right">
            <input
              name="name"
              class="input"
              type="text"
              placeholder="Name"
              v-model="form.name"
            />
            <span class="icon is-small is-left">
              <i class="fa fa-user"></i>
            </span>
          </div>
          <p class="help is-danger" v-if="!this.formValidation.isNamePopulated">
            Uh oh! Looks like you forgot to include your name. Please enter it
            above!
          </p>
        </div>

        <div class="field">
          <label class="label">Email</label>
          <div class="control has-icons-left has-icons-right">
            <input
              name="email"
              class="input"
              v-model="form.email"
              type="email"
              placeholder="Email"
            />
            <span class="icon is-small is-left">
              <i class="fa fa-envelope"></i>
            </span>
          </div>
          <p
            class="help is-danger"
            v-if="!this.formValidation.isEmailPopulated"
          >
            Please include your email or I won't know how to get back to you!
          </p>
          <p class="help is-danger" v-if="!this.formValidation.isValidEmail">
            Oops! Looks like there's a problem with your email format. Double
            check it please!
          </p>
        </div>

        <div class="field">
          <label class="label">Message</label>
          <div class="control">
            <textarea
              name="message"
              class="textarea"
              v-model="form.message"
              placeholder="Message"
            />
          </div>
        </div>

        <div class="field is-grouped">
          <div class="control">
            <button class="button is-primary">Submit</button>
          </div>
        </div>
      </form>
      <div v-if="this.formCompletion.submittedSuccessfully">
        <h2 class="mgn">
          Thanks for getting in touch! I'll get back to you as soon as possible.
        </h2>
        <router-link to="/" class="button is-large is-primary mgn" id="learn"
          >Back to home</router-link
        >
      </div>
      <div v-if="failedToSubmit">
        <h2>
          Oops! Looks like something went wrong. Contact me on
          bollyxwithdeirdre@gmail.com
        </h2>
        <router-link to="/" class="button is-large is-primary mgn" id="learn"
          >Back to home</router-link
        >
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Description",
  data: function() {
    return {
      form: {
        name: null,
        email: null,
        message: null
      },
      formValidation: {
        isNamePopulated: true,
        isEmailPopulated: true,
        isValidEmail: true
      },
      formCompletion: {
        submittedSuccessfully: false,
        failedToSubmit: false
      }
    };
  },
  created: function() {
    this.resetProperties();
  },
  methods: {
    resetProperties: function() {
      this.formValidation.isNamePopulated = true;
      this.formValidation.isEmailPopulated = true;
      this.formValidation.isValidEmail = true;
      this.formCompletion.submittedSuccessfully = false;
      this.formCompletion.failedToSubmit = false;
    },
    checkForm: function(e) {
      this.resetProperties();

      if (!this.form.name) {
        this.formValidation.isNamePopulated = false;
      }

      if (!this.form.email) {
        this.formValidation.isEmailPopulated = false;
      } else if (!this.validEmail(this.form.email)) {
        this.formValidation.isValidEmail = false;
      }

      if (!this.hasError()) {
        return true;
      }

      this.this.formCompletion.submittedSuccessfully = false;
      this.formCompletion.failedToSubmit = false;
      e.preventDefault();
    },
    validEmail: function(email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    hasError: function() {
      return (
        !this.formValidation.isNamePopulated ||
        !this.formValidation.isEmailPopulated ||
        !this.formValidation.isValidEmail
      );
    },
    handleSubmit: function() {
      if (!this.checkForm()) {
        return;
      }
      fetch("/", {
        method: "post",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: this.encode({ "form-name": "contact", ...this.form })
      })
        .then(() => {
          console.log("Successfully sent");
          this.formCompletion.submittedSuccessfully = true;
          this.formCompletion.failedToSubmit = false;
        })
        .catch((e) => {
          console.error(e);
          this.is.formCompletion.submittedSuccessfully = false;
          this.formCompletion.failedToSubmit = true;
        });
    },
    encode(data) {
      return Object.keys(data)
        .map(
          (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
@import '../mq'
.mgn
  margin: 1em 0 0 1em
</style>
