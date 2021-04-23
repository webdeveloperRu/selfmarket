<template>
  <q-layout view="hHh lpr lff">
    <Navbar></Navbar>
    <q-page-container>
      <router-view />
    </q-page-container>
    <Footer></Footer>
  </q-layout>
</template>

<script>
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export default {
  name: "MainLayout",
  components: { Navbar, Footer },
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
