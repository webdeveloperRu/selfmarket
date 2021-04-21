<template>
  <q-layout view="lHh lpr lff">
    <Navbar></Navbar>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import Navbar from "../components/Navbar";
export default {
  name: "SecondaryLayout",
  components: { Navbar },
  data() {
    return {
      // leftDrawerOpen: false,
      // essentialLinks: linksData,
      // tab: "",
      // createMenu: false,
      // accountMenu: false,
      // walletMenu: false,
      // filter_text: ""
    };
  },
  methods: {}
};
</script>
