<template>
  <q-card
    class="item-card cursor-pointer"
    flat
    bordered
    @click="navigateProductDetails"
  >
    <span class="q-focus-helper"></span>
    <div class="float-right q-mx-md">
      <q-btn flat round icon="favorite_border" aria-label="favorite-item" />
      <span class="text-subtitle1">4</span>
    </div>
    <img src="../assets/images/mountains.jpg" alt="card-item" />

    <q-card-section>
      <div class="flex justify-between">
        <div style="font-size: 12px;">
          <div class="text-grey">Etherum Name Service(ENS)</div>
          <div>flag.eth</div>
        </div>
        <div style="font-size: 12px;">
          <div class="text-grey">Price</div>
          <div class="text-grey">0.15</div>
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>
,
<script>
export default {
  name: "ProductPackageCard",
  data() {
    return {
      product_id: 30
    };
  },
  methods: {
    navigateProductDetails() {
      this.$router.push("/assets/" + this.product_id);
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
