<template>
  <q-card
    class="item-card cursor-pointer"
    flat
    bordered
    @click="navigateCollectionAssets"
  >
    <span class="q-focus-helper"></span>
    <div class="flex justify-center items-center full-width">
      <q-icon
        name="image"
        style="font-size: 12.5rem"
        color="grey-4"
        v-if="
          collection.avatar == '' ||
            collection.avatar == null ||
            collection.avatar == undefined
        "
      ></q-icon>
      <q-img
        v-else
        :src="collection.avatar"
        class="full-width"
        style="height: 200px;
        border-top-left-radius: 3px;
        border-top-right-radius:3px;"
      />
    </div>
    <q-separator />
    <q-card-section
      style="height: 70px; padding: 5px"
      class="text-center flex items-center justify-center"
    >
      <span class="text-subtitle1 ">{{ collection.title }}</span>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: "CollectionPackageCard",
  data() {
    return {};
  },
  props: {
    collection: Object
  },
  methods: {
    navigateCollectionAssets() {
      this.$store.commit("manage/setCurrentCollection", this.collection);
      this.$router.push(
        "/my-collection/" + this.collection.id + "/assets/edit"
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
