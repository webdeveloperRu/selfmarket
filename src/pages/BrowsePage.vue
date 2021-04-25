<template>
  <div>
    <q-layout view="hHh Lpr lff" container style="height: 93vh">
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

      <q-page-container>
        <q-page padding>
          <div class="q-pa-md" style="overflow-x:auto;  display: flex">
            <q-btn
              flat
              icon="mail"
              label="Art"
              style="min-width: 150px;"
              color="secondary"
              aria-label="Art"
            />
            <q-btn
              flat
              color="secondary"
              icon="domain"
              label="Domain Names"
              style="min-width: 200px;"
              aria-label="Domain Names"
            />
            <q-btn
              flat
              color="secondary"
              icon="travel_explorer"
              label="Virtual Worlds"
              style="min-width: 200px;"
              aria-label="Virtual Worlds"
            />
            <q-btn
              flat
              color="secondary"
              icon="card_travel"
              label="Trading Cards"
              style="min-width: 200px;"
              aria-label="Trading Cards"
            />
            <q-btn
              flat
              color="secondary"
              icon="collections"
              label="Collectibles"
              style="min-width: 200px;"
              aria-label="Collectibles"
            />
            <q-btn
              flat
              color="secondary"
              icon="sports"
              label="Sports"
              style="min-width: 150px;"
              aria-label="Sports"
            />
            <q-btn
              flat
              icon="mail"
              label="Utility"
              style="min-width: 150px;"
              color="secondary"
              aria-label="Utility"
            />
          </div>
          <q-separator />
          <div class="q-pa-md flex justify-between align-center">
            <div class="q-pa-md">14,198 results</div>
            <div class="flex">
              <q-select
                filled
                dense
                v-model="item_filter"
                :options="item_options"
                class="q-pa-md"
              />
              <q-select
                filled
                dense
                v-model="sort_filter"
                :options="sort_options"
                class="q-pa-md"
              />
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
          </div>
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
export default {
  name: "BrowsePage",
  components: {
    DataPackageCard: () => import("../components/DataPackageCard")
  },
  data() {
    return {
      drawerLeft: false,
      item_filter: "Single Items",
      sort_filter: "Recently Listed",
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
      filterCollectionText: "",
      items: [{}, {}, {}, {}, {}, {}, {}],
      filterSaleText: "",
      ethFilterCheck: false,
      wethFilterCheck: false,
      btFilterCheck: false,
      mtFilterCheck: false,
      xdnFilterCheck: false
    };
  },
  created() {
    this.$store.dispatch("manage/getProducts");
  },
  methods: {}
};
</script>
