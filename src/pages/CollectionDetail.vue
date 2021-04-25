<template>
  <q-page>
    <div class="banner">
      <q-img
        src="../assets/images/collection-detail-banner.png"
        height="200px"
      />
    </div>
    <div class="full-width account-header">
      <div class="avatar full-width flex justify-center">
        <div style="border-radius: 50%; border: solid 3px white; z-index: 10">
          <q-avatar size="130px">
            <q-img src="../assets/images/collection-detail-avatar.png" />
          </q-avatar>
        </div>
      </div>
      <div
        class="text-h4 text-grey-10 text-center q-mt-md"
        style="font-weight: 500; font-size: 40px"
      >
        Gods Alpha
      </div>
      <div class="info-group-button flex justify-center q-mt-md">
        <div class="full-width" style="margin-top: -130px;">
          <q-btn-group flat class="float-right q-pa-sm">
            <q-btn icon="share" outline color="grey-7" />
            <q-btn icon="web" outline color="grey-7" />
          </q-btn-group>
        </div>

        <div class="info-button">
          <div class="text-h5" style="font-weight: 500; font-size: 24px">
            17.5K
          </div>
          <span class="text-subtitle2 text-grey-5" style="font-weight: 300"
            >items</span
          >
        </div>
        <div class="info-button">
          <div class="text-h5" style="font-weight: 500; font-size: 24px">
            4.5K
          </div>
          <span class="text-subtitle2 text-grey-5" style="font-weight: 300"
            >owners</span
          >
        </div>
        <div class="info-button">
          <div class="text-h5" style="font-weight: 500; font-size: 24px">
            ㆔0.57
          </div>
          <span class="text-subtitle2 text-grey-5" style="font-weight: 300"
            >average price</span
          >
        </div>
        <div class="info-button">
          <div class="text-h5" style="font-weight: 500; font-size: 24px">
            ㆔2.57
          </div>
          <span class="text-subtitle2 text-grey-5" style="font-weight: 300"
            >volume traded</span
          >
        </div>
      </div>
      <div
        class="text-center full-width flex justify-center items-center q-mt-md"
        ref="userID"
      >
        <div style="font-size: 14px " class="ellipsis text-grey-6 q-mx-sm">
          gods alpha card game with NFTs.
        </div>
      </div>
    </div>
    <div class="flex justify-between contentForm q-pa-sm" ref="contentForm">
      <div class="content-list">
        <div
          class="trending-collections q-pa-sm full-width flex justify-center q-mt-lg"
        >
          <div class=" full-width" style="max-width: 90%;">
            <div class="title flex full-width items-center">
              <q-icon
                name="timelapse"
                class="text-black"
                style="font-size: 1.5rem;"
              />
              <div class="q-ml-sm" style="font-size: 14px; font-weight: 700">
                RECENTLY LISTED
              </div>
            </div>
            <q-separator />
            <div class="q-mt-lg">
              <div class="product-list">
                <DataPackageCard
                  v-for="item in [1, 2, 3, 4, 5, 6, 7]"
                  v-bind:key="'collectibles' + item"
                ></DataPackageCard>
              </div>
            </div>
          </div>
        </div>
        <div
          class="trending-collections q-pa-sm full-width flex justify-center q-mt-lg"
        >
          <div class=" full-width" style="max-width: 90%;">
            <div class="title flex full-width items-center">
              <q-icon
                name="whatshot"
                class="text-black"
                style="font-size: 1.5rem;"
              />
              <div class="q-ml-sm" style="font-size: 14px; font-weight: 700">
                NEWLY MINTED
              </div>
            </div>
            <q-separator />
            <div class="q-mt-lg">
              <div class="product-list">
                <DataPackageCard
                  v-for="item in [1, 2, 3, 4, 5, 6, 7]"
                  v-bind:key="'collectibles' + item"
                ></DataPackageCard>
              </div>
            </div>
          </div>
        </div>

        <div
          class="trending-collections q-pa-sm full-width flex justify-center q-mt-lg"
        >
          <div class=" full-width" style="max-width: 90%;">
            <div class="title flex full-width items-center">
              <q-icon
                name="insights"
                class="text-black"
                style="font-size: 1.5rem;"
              />
              <div class="q-ml-sm" style="font-size: 14px; font-weight: 700">
                ON AUCTION
              </div>
            </div>
            <q-separator />
            <div class="q-mt-lg">
              <div class="product-list">
                <DataPackageCard
                  v-for="item in [1, 2, 3, 4, 5, 6, 7]"
                  v-bind:key="'collectibles' + item"
                ></DataPackageCard>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>
<script>
export default {
  name: "CollectionDetail",
  components: {
    DataPackageCard: () => import("../components/DataPackageCard")
  },

  data() {
    return {
      currentTab: 0,
      drawerLeft: false,
      ethFilterCheck: false,
      mtFilterCheck: false,
      xdnFilterCheck: false,
      btFilterCheck: false,
      wethFilterCheck: false,
      filterSaleText: "",
      filterCollectionText: "",
      items: [{}, {}, {}, {}, {}, {}, {}],
      item_options: ["Single Items", "Bundles"],
      sort_options: [
        "Recently Listed",
        "Recently Sold",
        "Ending Soon",
        "Price: Low to High",
        "Price: High to Low",
        "Highest Last Sale",
        "Most Viewed",
        "Most Favorited",
        "Oldest"
      ],
      item_filter: "Single Items",
      sort_filter: "Recently Listed",
      filter_text: ""
    };
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
.account-header {
  .avatar {
    margin-top: -65px !important;
  }
}

.contentForm {
  position: relative;
  margin-top: 30px;
  display: flex;
  justify-content: center;
  .content-list {
    width: 80%;
  }
}
.filter-select {
  width: 450px;
}
.info-group-button {
  .info-button {
    width: 150px;
    height: 90px;
    text-align: center;
    border: solid 1px $grey-4;
    cursor: pointer;
    padding: 20px;
    &:hover {
      box-shadow: $grey-7 0px 0px 4px 0px;
    }
  }
}
.product-list {
  display: flex;
  overflow-x: auto;
  .item-card {
    min-width: 320px;
    width: 100%;
    margin: 5px;
  }
}

@media only screen and (max-width: 1200px) {
  .side-bar {
    display: none;
  }

  .content-list {
    width: 85% !important;
  }
}
@media only screen and (max-width: 700px) {
  .filter-input {
    width: 100%;
  }
  .filter-select {
    width: 100%;
  }
  .content-list {
    width: 90% !important;
  }
}

@media only screen and (max-width: 600px) {
  .menus {
    .desktop-menu {
      display: none;
    }
    .mobile-menu {
      display: block;
    }
    .content-list {
      width: 100% !important;
    }
  }
}
</style>
