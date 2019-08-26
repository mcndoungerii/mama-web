<template>
  <b-card @click.prevent="clickItem($event,data)">
    <div>
      <b-row align-v="center">
        <b-col>
          <p class="mb-1 text-muted text-small">Article No</p>
          <p class="mb-1">{{data.id }}</p>
        </b-col>
        <b-col>
          <p class="mb-1 text-muted text-small">Title</p>
          <p class="mb-1">{{data.title }}</p>
        </b-col>
        <b-col>
          <p class="mb-1 text-muted text-small">Author</p>
          <p class="mb-1">{{data.author }}</p>
        </b-col>
        <b-col>
          <p class="mb-1 text-muted text-small">Status</p>
          <b-badge pill :variant="data.status === true?'success':'danger'">{{ data.status }}</b-badge>
        </b-col>
        <b-col>
          <p class="mb-1 text-muted text-small">Categories</p>
          <b-badge
            v-for="(cat,index) in data.categories"
            :key="index"
            class="mb-1"
            pill
            variant="secondary"
          >{{cat.name}}</b-badge>
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