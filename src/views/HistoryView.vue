<template>
  <div class="about-page">
    <b-container class="py-5">
      <h2>History</h2>
      <b-list-group>
        <b-list-group-item
          v-for="transaction in transactions"
          v-bind:key="transaction.id"
          class="d-flex justify-content-between align-items-center"
        >
          {{ transaction.contactName }}
          <b-badge variant="primary" class="bg-primary" pill
            >Amount: {{ transaction.amount }} AZN</b-badge
          >
          <b-badge variant="primary" class="bg-secondary" pill
            >Date: {{ getFullYear(transaction.date) }}</b-badge
          >
          <b-badge variant="primary" class="bg-info" pill
            >Date: {{ getFullTime(transaction.date) }}</b-badge
          >
        </b-list-group-item>
      </b-list-group>
    </b-container>
  </div>
</template>
<script>
export default {
  name: "app-history",
  methods: {
    getFullYear(date) {
      let day = date.getUTCDate(),
        month = date.getUTCMonth() + 1,
        year = date.getUTCFullYear();
      return `${day}/${month}/${year}`;
    },
    getFullTime(date) {
      let hours = date.getHours(),
        minutes = date.getMinutes(),
        seconds = date.getSeconds();

      return `${hours}:${minutes}:${seconds}`;
    },
  },
  computed: {
    transactions() {
      return this.$store.state.transactions;
    },
  },
};
</script>
