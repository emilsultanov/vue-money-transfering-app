<template>
  <div id="app">
    <Header />
    <WarningModal />
    <router-view />
  </div>
</template>
<script>
import Header from "@/components/Header";
import WarningModal from "@/components/WarningModal";
export default {
  components: { WarningModal, Header },
};
</script>
