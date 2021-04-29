<template>
  <q-card class="item-card cursor-pointer" flat bordered>
    <q-btn
      v-if="editable"
      flat
      round
      icon="edit"
      aria-label="favorite-item"
      style="position: absolute"
      class="edit-button"
      @click="navigateProductEditPage"
    />

    <span class="q-focus-helper"></span>
    <div class="float-right q-mx-md">
      <q-btn flat round icon="favorite_border" aria-label="favorite-item" />
      <span class="text-subtitle1">{{ product.votes }}</span>
    </div>
    <img
      src="../assets/images/mountains.jpg"
      alt="card-item"
      @click="navigateProductDetails"
    />

    <q-card-section @click="navigateProductDetails">
      <div class="flex justify-between">
        <div style="font-size: 12px;">
          <div class="text-grey">{{ product.title }}</div>
          <div>{{ product.address }}</div>
        </div>
        <div style="font-size: 12px;">
          <div class="text-grey">Price</div>
          <div class="text-body2">{{ priceSymbol }} {{ product.price }}</div>
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
      priceSymbol: "$"
    };
  },
  props: {
    product: Object,
    editable: {
      type: Boolean,
      default: false
    }
  },
  created() {
    switch (this.product.price_type) {
      case "BTC":
        this.priceSymbol = "฿";
        break;
      case "USD":
        this.priceSymbol = "$";
        break;
      case "LCD":
        this.priceSymbol = "CCIV";
        break;
      case "ETH":
        this.priceSymbol = "Ξ";
        break;
    }
  },
  methods: {
    async navigateProductDetails() {
      await this.$store.commit("manage/setCurrentProduct", this.product);
      this.$router.push("/assets/" + this.product.id);
    },
    async navigateProductEditPage() {
      await this.$store.commit("manage/setCurrentProduct", this.product);
      this.$router.push("/assets/" + this.product.id + "/edit");
    }
  }
};
</script>
<style lang="scss" scoped>
.item-card {
  &:hover {
    top: -3px;
    box-shadow: #aaa 0px 0px 5px 0px !important;
    .edit-button {
      display: block;
    }
  }
}
.edit-button {
  display: none;
}
</style>
