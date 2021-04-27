<template>
  <q-card
    class="item-card cursor-pointer"
    flat
    bordered
    @click="navigateCollectionAssets"
  >
    <span class="q-focus-helper"></span>
    <img src="../assets/images/mountains.jpg" alt="card-item" />
    <q-card-section>
      <span class="text-subtitle1 q-pa-md">Collection</span>
    </q-card-section>
  </q-card>
</template>
,
<script>
export default {
  name: "CollectionPackageCard",
  data() {
    return {
      collection_id: 30
    };
  },
  methods: {
    navigateCollectionAssets() {
      this.$router.push(
        "/my-collection/" + this.collection_id + "/assets/edit"
      );
    }
  }
};
</script>
<style lang="scss" scoped>
.item-card {
  &:hover {
    top: -3px;
    box-shadow: #aaa 0px 0px 5px 0px !important;
  }
}
</style>
