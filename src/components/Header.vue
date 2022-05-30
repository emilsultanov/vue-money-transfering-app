<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="primary">
      <b-container>
        <b-navbar-brand href="#">Money-Transfering</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" class="justify-content-end" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item>
              <router-link to="/" class="text-light text-decoration-none"
                >Home</router-link
              >
            </b-nav-item>
            <b-nav-item>
              <router-link to="/history" class="text-light text-decoration-none"
                >History</router-link
              >
            </b-nav-item>
            <b-nav-item disabled> Balance: {{ balance }} AZN </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "app-header",
  computed: {
    balance() {
      return this.$store.state.balance;
    },
  },
};
</script>
