<template>
  <section class="section">
    <div class="container">
      <div class="card is-horizontal mgn">
        <div class="card-content">
          <div class="columns">
            <div class="column is-half">
              <p class="title">
                <strong>{{ webTitle }}</strong>
              </p>
              <p class="subtitle is-5">
                {{ description }}
              </p>
              <p class="subtitle is-6">
                See you then!
              </p>
              <a
                :href="url"
                class="button is-large is-primary"
                v-bind:class="{ disabled: !isInProgress }"
                id="learn"
                target="_blank"
                :disabled="isInProgress ? null : 'disabled'"
                >Join Zoom class</a
              >
              <div
                v-if="!isInProgress"
                class="has-text-weight-light is-size-7"
              >
                Link available an hour before the class
              </div>
              <div>
                <div title="Add to Calendar" class="addeventatc button">
                  Add to calendar
                  <span class="start">{{ start }}</span>
                  <span class="end">{{ end }}</span>
                  <span class="date_format">{{ date_format }}</span>
                  <span class="timezone">{{ timezone }}</span>
                  <span class="title">{{ meetingTitle }}</span>
                  <span class="description"
                    >{{ description }} <br /><br />Get the latest details at
                    https://www.dancewithdeirdre.com/<br /><br />Join Zoom
                    Meeting <br />{{ url }} <br /><br />Meeting ID:
                    {{ meetingId }} <br />Passcode: {{ passcode }}</span
                  >
                  <span class="location">{{ url }}</span>
                </div>
              </div>
              <div v-if="recurring">
                <div
                  title="Add Recurring Class to Calendar"
                  class="addeventatc button"
                >
                  Add recurring class to calendar
                  <span class="start">{{ start }}</span>
                  <span class="end">{{ end }}</span>
                  <span class="date_format">{{ date_format }}</span>
                  <span class="timezone">{{ timezone }}</span>
                  <span class="title">{{ meetingTitle }}</span>
                  <span class="description"
                    >{{ description }} <br /><br />Get the latest details at
                    https://www.dancewithdeirdre.com/<br /><br />Join Zoom
                    Meeting <br />{{ url }} <br /><br />Meeting ID:
                    {{ meetingId }} <br />Passcode: {{ passcode }}</span
                  >
                  <span class="location">{{ url }}</span>
                  <span class="recurring">{{ recurring }}</span>
                </div>
              </div>
              <br />
              <p v-if="!free" class="is-size-7">
                If you would like to support my classes, please consider
                contributing below.
                <br />
                Suggested amount is €3 per class.
              </p>
              <a
                class="paybutton button"
                href="https://paypal.me/bollyxwithdeirdre"
                target="_blank"
                >PayPal</a
              >
            </div>
            <div class="card-image column is-half">
              <figure class="image">
                <img class="i" :src="imageUrl" alt="Class details" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import moment from "moment";
import { getImage } from "../firebase";

export default {
  name: "Event",
  data: function() {
    return {
      date_format: "DD-MM-YYYY",
      timezone: "Europe/Dublin",
      isInProgress: false,
      start: "",
      end: "",
      imageUrl: ""
    };
  },
  props: {
    webTitle: String,
    meetingTitle: String,
    description: String,
    image: String,
    date: String,
    startTime: String,
    endTime: String,
    url: String,
    meetingId: String,
    passcode: String,
    recurring: String,
    free: String
  },
  async mounted() {
    let externalScript = document.createElement("script");
    externalScript.setAttribute(
      "src",
      "https://addevent.com/libs/atc/1.6.1/atc.min.js"
    );
    document.head.appendChild(externalScript);
    this.imageUrl = await getImage(this.image);
    if (!this.recurring) {
      this.start = this.date + " " + this.startTime;
      this.end = this.date + " " + this.endTime;
    } else {
      var dayOfWeek = this.getDayOfWeek(this.recurring);
      var nextClass = this.getNextDayOfWeek(dayOfWeek, moment());
      this.start = nextClass + " " + this.startTime;
      this.end = nextClass + " " + this.endTime;
    }
    this.isInProgress = this.checkIfIsInProgress();
  },
  methods: {
    getDayOfWeek: function(recurring) {
      var dayCode = recurring.substring(recurring.indexOf("BYDAY=") + 6);
      switch (dayCode) {
        case "MO":
          return 1;
        case "TU":
          return 2;
        case "WE":
          return 3;
        case "TH":
          return 4;
        case "FR":
          return 5;
        case "SA":
          return 6;
        case "SU":
          return 0;
      }
    },
    getNextDayOfWeek: function(dayOfWeek, current) {
      var currentDay = current.day();
      if (currentDay == dayOfWeek) {
        return current.format("DD-MM-YYYY");
      }
      if (currentDay < dayOfWeek) {
        return current.add(dayOfWeek - currentDay, "d").format("DD-MM-YYYY");
      }
      return current
        .add(7 + (dayOfWeek - currentDay), "d")
        .format("DD-MM-YYYY");
    },
    checkIfIsInProgress: function() {
      var current = moment();
      var start = moment(this.start, "DD-MM-YYYY HH:mm a").subtract(1, "h");
      var end = moment(this.end, "DD-MM-YYYY HH:mm a");
      return current.isBetween(start, end);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
@import '../mq'
a.disabled
  pointer-events: none

.paybutton
  border: none
  background-color: $fadedprimary

  &:hover
    color: white !important
    text-decoration: none
    background-color: black
</style>
