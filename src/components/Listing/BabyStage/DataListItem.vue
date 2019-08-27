<template>
  <b-card @click.prevent="clickItem($event,data)">
    <div>
      <b-row align-v="center">
        <b-col>
          <p class="mb-1 text-muted text-small">Stage No</p>
          <p class="mb-1">{{data.id }}</p>
        </b-col>
        <b-col>
          <p class="mb-1 text-muted text-small">Name</p>
          <p class="mb-1">{{data.name }}</p>
        </b-col>
        <b-col>
          <p class="mb-1 text-muted text-small">Start Age</p>
          <p class="mb-1">{{data.startAge }}</p>
        </b-col>
        <b-col>
          <p class="mb-1 text-muted text-small">End Age</p>
          <p class="mb-1">{{data.endAge }}</p>
        </b-col>
        <b-col>
          <p class="mb-1 text-muted text-small">Type</p>
          <p class="mb-1">{{data.type}}</p>
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