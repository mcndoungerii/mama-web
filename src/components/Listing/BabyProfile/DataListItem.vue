<template>
  <b-card @click.prevent="clickItem($event,data)">
    <div>
      <b-row align-v="center">
        <b-col>
          <p class="mb-1 text-muted text-small">Profile No</p>
          <p class="mb-1">{{data.id }}</p>
        </b-col>
        <b-col>
          <p class="mb-1 text-muted text-small">Baby Name</p>
          <p class="mb-1">{{data.babyName }}</p>
        </b-col>
        <b-col>
          <p class="mb-1 text-muted text-small">Gender</p>
          <p class="mb-1">{{data.gender }}</p>
        </b-col>
        <b-col>
          <p class="mb-1 text-muted text-small">Age</p>
          <p class="mb-1">{{data.age }}</p>
        </b-col>
        <b-col>
          <p class="mb-1 text-muted text-small">Age Type</p>
          <p class="mb-1">{{data.ageType }}</p>
        </b-col>
        <b-col>
          <p class="mb-1 text-muted text-small">Father Name</p>
          <p class="mb-1">{{data.fatherName }}</p>
        </b-col>
        <b-col>
          <p class="mb-1 text-muted text-small">Mother Name</p>
          <p class="mb-1">{{data.motherName }}</p>
        </b-col>

        <b-col col lg="2">
          <p class="mb-1 text-muted text-small">Created at</p>
          <p class="mb-1">{{data.createdAt | humanDate}}</p>
        </b-col>
      </b-row>
    </div>
  </b-card>
</template>
<script>
let moment = require("moment");
export default {
  props: ["data", "selectedItems"],
  methods: {
    toggleItem(event, itemId) {
      this.$emit("toggle-item", event, itemId);
    },
    clickItem(event, itemId) {
      console.log(itemId);
      this.$emit("click-item", event, itemId);
    }
  },
  filters: {
    humanDate(val) {
      let date = moment(val).format("MM-DD-YYYY hh:mm a");
      return date;
    }
  }
};
</script>