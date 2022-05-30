<template>
  <b-list-group-item class="d-flex justify-content-between align-items-center">
    {{ contact.name }}
    <div class="d-inline-flex flex-row">
      <b-form-input
        v-model="currentAmount"
        class="mx-3"
        max="200"
        min="10"
        placeholder="Amount"
        type="number"
        v-on:keyup="handleAmountChange"
      >
      </b-form-input>
      <b-button variant="primary" v-on:click="clickSendBtn(contact)"
        >Send
      </b-button>
    </div>
  </b-list-group-item>
</template>

<script>
export default {
  name: "ContactItem",
  data: function () {
    return {
      currentAmount: 0,
    };
  },
  methods: {
    handleAmountChange: function (event) {
      this.currentAmount = event.target.value;
    },
    clickSendBtn: function (contact) {
      this.handleSendClick(contact, this.currentAmount);
    },
  },
  props: {
    contact: Object,
    handleSendClick: Function,
  },
};
</script>

<style scoped></style>
