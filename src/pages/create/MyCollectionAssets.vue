<template>
  <q-layout view="hHh Lpr lff" container style="height: 92vh;">
    <q-drawer
      v-model="drawerLeft"
      show-if-above
      :width="280"
      :breakpoint="1150"
      bordered
    >
      <q-scroll-area class="fit">
        <q-tabs
          v-model="selectedTab"
          vertical
          class="text-grey-8 q-mt-lg"
          inline-label
        >
          <q-tab name="my-pyaouts" icon="view_list" label="My Payouts" disable>
            <q-tooltip content-class="bg-black">
              <div style="font-size: 14px; max-width: 250px;" class="q-pa-sm">
                Please select a collection and click the "Payouts" button to
                view payouts for that collection
              </div>
            </q-tooltip>
          </q-tab>
          <q-tab name="my-collections" icon="store" label="My Collections" />
          <q-tab name="community" icon="info" label="Commnutiy & Help" />
        </q-tabs>
      </q-scroll-area>
    </q-drawer>
    <q-page-container>
      <q-page-sticky
        position="top-left"
        class="full-width bg-white"
        style="justify-content: flex-start; z-index: 100; border-bottom:solid 1px #eeeeee"
      >
        <div class="q-pa-md cursor-pointer" @click="backToMyCollections">
          <q-icon name="arrow_back_ios"></q-icon>Back to my collections
        </div>
      </q-page-sticky>
      <div class="colleciton-body items-center" style="margin-top: 53px">
        <q-img
          src="../../assets/images/collection-banner.webp"
          height="200px"
        />
        <div class="q-gutter-md edit-banner-button">
          <q-input
            ref="bannerFileInput"
            style="display:none"
            v-model="bannerFile"
            type="file"
            label="Standard"
            @change="onSelectBannerImage"
          ></q-input>
          <q-btn
            round
            color="white"
            text-color="grey"
            icon="edit"
            @click="getBannerFile"
          ></q-btn>
        </div>
        <div class="flex full-width items-center justify-center">
          <div style="max-width: 90%" class="full-width">
            <div class="flex full-width  q-ma-sm q-mt-xl">
              <q-img
                src="../../assets/images/mountains.jpg"
                class="colleciton-logo"
              ></q-img>
              <div class="info q-ml-lg">
                <div class="text-h4" style="font-size: 40px">Collection</div>
                <div class="text-body2 text-grey-7 q-mt-lg">
                  This is Collection Description
                </div>
                <div class="flex q-mt-lg">
                  <q-btn
                    color="white"
                    round
                    text-color="grey"
                    icon="edit"
                    class="q-ma-sm"
                    @click="navigateEditCollectionPage"
                  >
                    <q-tooltip content-class="bg-black">
                      <div
                        style="font-size: 14px; max-width: 250px;"
                        class="q-pa-sm"
                      >
                        Edit
                      </div>
                    </q-tooltip>
                  </q-btn>
                  <q-btn
                    color="white"
                    round
                    text-color="grey"
                    icon="view_list"
                    class="q-ma-sm"
                  >
                    <q-tooltip content-class="bg-black">
                      <div
                        style="font-size: 14px; max-width: 250px;"
                        class="q-pa-sm"
                      >
                        Payouts
                      </div>
                    </q-tooltip>
                  </q-btn>

                  <q-btn
                    color="white"
                    round
                    text-color="grey"
                    icon="open_in_browser"
                    class="q-ma-sm"
                  >
                    <q-tooltip content-class="bg-black">
                      <div
                        style="font-size: 14px; max-width: 250px;"
                        class="q-pa-sm"
                      >
                        Visit
                      </div>
                    </q-tooltip>
                  </q-btn>
                </div>
              </div>
            </div>
            <div class="q-mt-lg flex items-center">
              <q-icon style="font-size:1.5rem" name="view_module"></q-icon>
              <span class="text-h6 q-mx-sm">ITEMS</span>
            </div>
            <q-separator spaced />
            <q-btn
              label="Add New Item"
              no-caps
              color="primary"
              class="q-px-lg q-py-sm"
              @click="navigateCreateProductPage"
            ></q-btn>
            <div
              class="flex justify-between items-center q-mt-sm q-pa-sm full-width"
            >
              <div
                style="border: solid 1px #aaa;"
                class="rounded-borders q-px-sm filter-input"
              >
                <q-input
                  dense
                  borderless
                  v-model="filterText"
                  color="grey-6"
                  input-class="text-left"
                  placeholder="Search items, collections and accounts"
                  class="q-ml-md full-width"
                >
                  <template v-slot:prepend>
                    <q-icon v-if="filterText === ''" name="search" />
                    <q-icon
                      v-else
                      name="clear"
                      class="cursor-pointer"
                      @click="filterText = ''"
                    />
                  </template>
                </q-input>
              </div>
              <q-space />
              <div class="flex float-right justify-center filter-select">
                <q-select
                  filled
                  v-model="sortFilter"
                  :options="sortOptions"
                  class="q-pa-md"
                  style="width: 220px"
                  dense
                />
              </div>
            </div>

            <div class="row q-mt-xl">
              <div
                class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-12 q-pa-sm"
                v-for="item in 10"
                v-bind:key="item"
              >
                <ProductPackageCard></ProductPackageCard>
              </div>
            </div>
          </div>
        </div>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: "MyCollection",
  components: {
    ProductPackageCard: () => import("../../components/ProductPackageCard.vue")
  },

  data() {
    return {
      drawerLeft: false,
      filterCollectionText: "",
      selectedTab: "my-collections",
      bannerFile: null,
      filterText: "",
      sortFilter: "Recently Listed",
      sortOptions: [
        "Recently Listed",
        "Recently Sold",
        "Ending Soon",
        "Price: Lowto High",
        "Price: High to Low",
        "Highest Last Sale",
        "Most Viewed",
        "MostFavorited",
        "Oldest"
      ],
      collectionID: 30
    };
  },
  methods: {
    getBannerFile() {
      this.$refs.bannerFileInput.$el.click();
    },
    onSelectCollectionLogoImage() {},

    backToMyCollections() {
      this.$router.push("/my-collection");
    },

    onSelectBannerImage() {},

    navigateEditCollectionPage() {
      this.$router.push("/my-collection/" + this.collectionID + "/edit");
    },
    navigateCreateProductPage() {
      this.$router.push(
        "/my-collection/" + this.collectionID + "/assets/create"
      );
    }
  }
};
</script>
<style lang="scss" scoped>
.q-tab {
  justify-content: left;
  margin-left: 15px;
}
.colleciton-logo {
  width: 180px;
  height: 180px;
}

.collection-body {
  margin-top: 72px;
  position: relative;
}
.edit-banner-button {
  position: absolute;
  top: 20px;
  right: 20px;
}
.filter-input {
  $width: 350px;
  width: calc(100% - #{$width});
}

@media only screen and (max-width: 600px) {
  .colleciton-logo {
    width: 64px;
    height: 64px;
  }
}
</style>
