<template>
  <b-list-group>
    <ContactItem
      v-for="contact in contacts"
      v-bind:key="contact.id"
      v-bind:contact="contact"
      v-bind:handleSendClick="handleSendClick"
    />
  </b-list-group>
</template>

<script>
import ContactItem from "@/components/ContactItem";

export default {
  name: "app-contacts",
  components: { ContactItem },
  methods: {
    handleSendClick(contact, amount) {
      let sumOfTransactions =
        this.$store.getters.getSumOfTransactionsByContactId(contact.id);
      if (this.$store.state.balance >= amount) {
        if (sumOfTransactions + Number(amount) <= 200) {
          this.$store.commit("updateBalance", Number(amount));
          this.$store.commit("updateTransactions", {
            contactId: contact.id,
            amount: Number(amount),
            name: contact.name,
          });
        } else {
          this.$bvModal.show("bv-modal-example");
        }
      }
    },
  },
  computed: {
    contacts() {
      return this.$store.state.contacts;
    },
    balance() {
      return this.$store.state.balance;
    },
  },
};
</script>

<style scoped></style>
