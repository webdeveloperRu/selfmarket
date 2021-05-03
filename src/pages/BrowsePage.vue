<template>
  <q-layout view="hHh Lpr lff" container style="height: 92vh; width: 99.5%">
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
            <q-btn label="New" outline style="width: 130px" aria-label="New" />
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
          class="text-subtitle1 text-bold "
          @show="showCollectionList"
        >
          <q-separator />
          <div class="q-pa-md  justify-around flex">
            <q-input
              dense
              outlined
              v-model="filterCollectionText"
              @keyup="searchCollectionByTitle"
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
                  @click="removeFilterCollectionText"
                />
              </template>
            </q-input>
            <q-scroll-area
              style="height: 300px;"
              class="q-mt-md full-width"
              @scroll="onScrollCollectionList"
            >
              <q-list>
                <q-item
                  clickable
                  v-ripple
                  class="full-width"
                  v-for="(collection, index) in collectionTagList"
                  :key="index"
                >
                  <q-item-section avatar>
                    <q-avatar>
                      <img :src="collection.avatar" />
                    </q-avatar>
                  </q-item-section>

                  <q-item-section class="text-body2 text-weight-medium">{{
                    collection.title
                  }}</q-item-section>
                </q-item>
              </q-list>
            </q-scroll-area>
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
      <div class="q-pa-md" style="overflow-x:auto;  display: flex">
        <div
          class="tab-button"
          :class="currentTab == 0 ? 'active' : ''"
          @click="setCurrentTab(0)"
        >
          <img src="../assets/images/categories/art-small.png" height="30" />
          <div class="q-pl-sm text-subtitle2" style="font-weight: 400">
            Art
          </div>
        </div>
        <div
          class="tab-button"
          :class="currentTab == 1 ? 'active' : ''"
          @click="setCurrentTab(1)"
        >
          <img src="../assets/images/categories/domain-small.png" height="30" />
          <div class="q-pl-sm text-subtitle2" style="font-weight: 400">
            Domain Names
          </div>
        </div>
        <div
          class="tab-button"
          :class="currentTab == 2 ? 'active' : ''"
          @click="setCurrentTab(2)"
        >
          <img
            src="../assets/images/categories/virtual-worlds-small.png"
            height="30"
          />
          <div class="q-pl-sm text-subtitle2" style="font-weight: 400">
            Virtual Worlds
          </div>
        </div>

        <div
          class="tab-button"
          :class="currentTab == 3 ? 'active' : ''"
          @click="setCurrentTab(3)"
        >
          <img
            src="../assets/images/categories/trading-cards-small.png"
            height="30"
          />
          <div class="q-pl-sm text-subtitle2" style="font-weight: 400">
            Trading Cards
          </div>
        </div>
        <div
          class="tab-button"
          :class="currentTab == 4 ? 'active' : ''"
          @click="setCurrentTab(4)"
        >
          <img
            src="../assets/images/categories/collectibles-small.png"
            height="30"
          />
          <div class="q-pl-sm text-subtitle2" style="font-weight: 400">
            Collectibles
          </div>
        </div>
        <div
          class="tab-button"
          :class="currentTab == 5 ? 'active' : ''"
          @click="setCurrentTab(5)"
        >
          <img src="../assets/images/categories/sports-small.png" height="30" />
          <div class="q-pl-sm text-subtitle2" style="font-weight: 400">
            Sports
          </div>
        </div>
        <div
          class="tab-button"
          :class="currentTab == 6 ? 'active' : ''"
          @click="setCurrentTab(6)"
        >
          <img
            src="../assets/images/categories/utility-small.png"
            height="30"
          />
          <div class="q-pl-sm text-subtitle2" style="font-weight: 400">
            Utility
          </div>
        </div>
      </div>
      <q-separator />
      <div class="q-pa-md flex justify-between align-center">
        <div class="q-pa-md" v-if="!loadingProducts">14,198 results</div>
        <div class="q-pa-md" v-else>
          <q-spinner color="grey-5" size="3em" :thickness="10" />
        </div>
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
            v-for="(item, index) in publicProducts"
            v-bind:key="'browse-product' + index"
          >
            <ProductPackageCard></ProductPackageCard>
          </div>
        </div>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "BrowsePage",
  components: {
    ProductPackageCard: () => import("../components/ProductPackageCard")
  },
  computed: {
    ...mapGetters({
      inRequest: "inRequest",
      notificationText: "notificationText",
      notificationType: "notificationType",
      requestSuccess: "requestSuccess",
      loggedIn: "auth/loggedIn",
      currentCollection: "manage/currentCollection",
      publicProducts: "manage/publicProducts",
      collectionTagList: "manage/collectionTagList",
      offsetCollectionTagList: "manage/offsetCollectionTagList"
    })
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
      xdnFilterCheck: false,
      currentTab: 0,
      loadingProducts: false
    };
  },
  created() {
    this.getProducts();
    this.$store.commit("manage/setOffsetCollectionTagList", 0);
    this.$store.commit("manage/initCollectionTagList");
  },
  methods: {
    getProducts() {
      let params = { limit: 10 };
      this.loadingProducts = true;
      this.$store.dispatch("manage/getProducts", params).then(() => {
        this.$q.notify({
          type: this.notificationType,
          message: this.notificationText
        });
        this.loadingProducts = false;
      });
    },
    showCollectionList() {
      let params = { limit: 10, offset: this.offsetCollectionTagList };

      this.$store.dispatch("manage/getCollectionTagList", params).then(() => {
        if (!this.requestSuccess) {
          this.$q.notify({
            type: this.notificationType,
            message: this.notificationText
          });
        }
      });
    },

    onScrollCollectionList({ verticalPercentage }) {
      if (verticalPercentage == 1) this.showCollectionList();
    },

    searchCollectionByTitle() {
      if (this.timer) {
        clearTimeout(this.timer);
        this.timer = null;
      }
      this.timer = setTimeout(() => {
        this.$store.commit("manage/setOffsetCollectionTagList", 0);
        this.$store.commit("manage/initCollectionTagList");
        if (this.filterCollectionText == "") {
          this.showCollectionList();
        } else {
          let params = {
            limit: 10,
            title: this.filterCollectionText,
            offset: this.offsetCollectionTagList
          };
          this.$store
            .dispatch("manage/getCollectionTagList", params)
            .then(() => {
              if (!this.requestSuccess) {
                this.$q.notify({
                  type: this.notificationType,
                  message: this.notificationText
                });
              }
            });
        }
      }, 1500);
    },

    removeFilterCollectionText() {
      this.filterCollectionText = "";
      this.$store.commit("manage/setOffsetCollectionTagList", 0);
      this.$store.commit("manage/initCollectionTagList");
      this.showCollectionList();
    },

    setCurrentTab(tabIndex) {
      if (this.currentTab == tabIndex) this.currentTab = -1;
      else this.currentTab = tabIndex;
    }
  }
};
</script>
<style lang="scss" scoped>
.tab-button {
  display: flex;
  align-items: center;
  color: $grey-7;
  cursor: pointer;
  border-radius: 5px;
  justify-content: center;
  padding: 5px 15px;
  margin: 0px 10px;
  white-space: nowrap;

  &:hover {
    background: $grey-4;
    color: $grey-10;
  }
}
.tab-button.active {
  background: $grey-4;
  color: $grey-10;
}
</style>
