<template>
  <q-page>
    <div class="banner">
      <q-img src="../assets/images/collection-banner.webp" height="200px" />
    </div>
    <div class="full-width account-header">
      <div class="avatar full-width flex justify-center">
        <div style="border-radius: 50%; border: solid 3px white; z-index: 10">
          <q-avatar size="130px">
            <q-img src="../assets/images/avatar.png" />
          </q-avatar>
        </div>
      </div>
      <div class="text-h4 text-grey-10 text-center" style="font-weight: 500">
        KKOFFICIAL
      </div>
      <div
        class="text-center full-width flex justify-center items-center q-mt-sm"
      >
        <div
          style="width: 100px; font-size: 16px "
          class="ellipsis text-grey-7 q-mx-sm"
        >
          0x3424242948590348508503
        </div>
        <q-btn
          icon="content_copy"
          color="grey-8"
          flat
          style="font-size: 12px"
        ></q-btn>
      </div>
      <div class="full-width" style="margin-top: -130px;">
        <q-btn icon="share" class="float-right q-mx-md" outline color="grey-7">
        </q-btn>
      </div>
      <div class="menus row q-pa-sm" style="margin-top: 150px">
        <q-btn
          unelevated
          class="q-ma-sm"
          label="In Wallet"
          icon="loyalty"
          :color="currentTab == 0 ? 'grey-4' : 'white'"
          :text-color="currentTab == 0 ? 'black' : 'grey'"
          @click="currentTab = 0"
          no-caps
        ></q-btn>
        <q-btn
          class="q-ma-sm"
          icon="history"
          flat
          label="Acitity"
          :color="currentTab == 1 ? 'grey-4' : 'white'"
          no-caps
          :text-color="currentTab == 1 ? 'black' : 'grey'"
          @click="currentTab = 1"
        ></q-btn>
        <q-btn
          class="q-ma-sm"
          icon="redeem"
          label="Offers"
          flat
          no-caps
          :color="currentTab == 2 ? 'grey-4' : 'white'"
          :text-color="currentTab == 2 ? 'black' : 'grey'"
          @click="currentTab = 2"
        ></q-btn>
        <q-btn
          class="q-ma-sm"
          icon="favorites"
          label="Favorites"
          flat
          no-caps
          :color="currentTab == 3 ? 'grey-4' : 'white'"
          :text-color="currentTab == 3 ? 'black' : 'grey'"
          @click="currentTab = 3"
        ></q-btn>
      </div>
    </div>
    <q-separator />
    <q-layout class="q-pa-sm">
      <q-drawer
        v-model="drawerLeft"
        show-if-above
        :width="350"
        :breakpoint="1150"
        bordered
      >
        <q-scroll-area class="fit">
          <q-expansion-item
            expand-separator
            icon="star"
            label="Status"
            class="text-subtitle1 text-bold"
          >
            <q-separator />
            <div class="q-pa-md q-gutter-sm justify-around flex">
              <q-btn
                label="Buy Now"
                outline
                style="width: 130px"
                aria-label="Buy Now"
              />
              <q-btn
                label="On Auction"
                style="width: 130px"
                outline
                aria-label="On Auction"
              />
              <q-btn
                label="New"
                outline
                style="width: 130px"
                aria-label="New"
              />
              <q-btn
                label="Has Offers"
                style="width: 130px"
                outline
                aria-label="Has Offers"
              />
            </div>
          </q-expansion-item>
          <q-separator />
          <q-expansion-item
            expand-separator
            icon="view_comfy"
            label="Collections"
            class="text-subtitle1 text-bold"
          >
            <q-separator />
            <div class="q-pa-md  justify-around flex">
              <q-input
                dense
                outlined
                v-model="filterCollectionText"
                input-class="text-left"
                placeholder="Filter"
                class="q-ml-md"
                style="width: 100%"
              >
                <template v-slot:append>
                  <q-icon v-if="filterCollectionText === ''" name="search" />
                  <q-icon
                    v-else
                    name="clear"
                    class="cursor-pointer"
                    @click="filterCollectionText = ''"
                  />
                </template>
              </q-input>
              <div v-for="(item, index) in items" :key="index" class="caption">
                <q-item clickable v-ripple class="full-width">
                  <q-item-section avatar>
                    <q-icon color="primary" name="bluetooth" />
                  </q-item-section>

                  <q-item-section>Icon as avatar</q-item-section>
                </q-item>
              </div>
            </div>
          </q-expansion-item>
          <q-separator />
          <q-expansion-item
            expand-separator
            icon="local_offer"
            label="On Sale in"
            class="text-subtitle1 text-bold"
          >
            <q-separator />
            <div class="q-pa-md  justify-around flex">
              <q-input
                dense
                outlined
                v-model="filterSaleText"
                input-class="text-left"
                placeholder="Filter"
                class="q-ml-md"
                style="width: 100%"
              >
                <template v-slot:append>
                  <q-icon v-if="filterSaleText === ''" name="search" />
                  <q-icon
                    v-else
                    name="clear"
                    class="cursor-pointer"
                    @click="filterSaleText = ''"
                  />
                </template>
              </q-input>
              <div class="q-pa-md text-subtitle1">
                <q-checkbox
                  v-model="ethFilterCheck"
                  label="ETH"
                  class="full-width"
                />
                <q-checkbox
                  v-model="wethFilterCheck"
                  label="WETH"
                  class="full-width"
                />
                <q-checkbox
                  v-model="btFilterCheck"
                  label="0xBTC"
                  class="full-width"
                />
                <q-checkbox
                  v-model="mtFilterCheck"
                  label="1MT"
                  class="full-width"
                />
                <q-checkbox
                  v-model="xdnFilterCheck"
                  label="2XDN"
                  class="full-width"
                />
              </div>
            </div>
          </q-expansion-item>
          <q-separator />
        </q-scroll-area>
      </q-drawer>
      <q-page-container class="margin-left: 350px">
        <div class="flex justify-between items-center">
          <div
            style="width: 100%; max-width: 400px;border: solid 1px #aaa"
            class="rounded-borders q-px-sm q-ml-sm"
          >
            <q-input
              dense
              borderless
              v-model="filter_text"
              color="grey-6"
              input-class="text-left"
              placeholder="Search items, collections and accounts"
              class="q-ml-md full-width"
            >
              <template v-slot:prepend>
                <q-icon v-if="filter_text === ''" name="search" />
                <q-icon
                  v-else
                  name="clear"
                  class="cursor-pointer"
                  @click="filter_text = ''"
                />
              </template>
            </q-input>
          </div>
          <q-space />
          <div class="flex float-right">
            <q-select
              filled
              v-model="item_filter"
              :options="item_options"
              class="q-pa-md"
              dense
            />
            <q-select
              filled
              v-model="sort_filter"
              :options="sort_options"
              class="q-pa-md"
              dense
            />
          </div>
        </div>
        <div class="row">
          <div
            class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-12 q-pa-sm"
            v-for="item in 50"
            v-bind:key="item"
          >
            <DataPackageCard></DataPackageCard>
          </div>
        </div>
      </q-page-container>
    </q-layout>
  </q-page>
</template>
<script>
export default {
  name: "AccountUser",
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
  }
};
</script>
<style lang="scss" scoped>
.account-header {
  .avatar {
    margin-top: -65px !important;
  }
}
</style>
