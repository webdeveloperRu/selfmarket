<template>
  <q-page class=" ">
    <div
      class="full-width action-tab"
      style="position:sticky; top: 72px; z-index: 2005; background: white"
      @mouseleave="selected_tab = ''"
    >
      <q-tabs
        v-model="selected_tab"
        class="text-primary categories-tab"
        outside-arrows
        mobile-arrows
      >
        <q-tab
          no-caps
          name="new"
          label="New"
          style="font-weight: 300"
          @mouseover.native="selected_tab = 'new'"
          @click.native="navigatePage('/rankings')"
        />
        <q-tab
          no-caps
          :name="category.slug"
          :label="category.title"
          @mouseover.native="selected_tab = category.slug"
          @click.native="navigatePage('/categories/' + category.slug)"
          v-for="category in publicCategories"
          v-bind:key="category.slug"
        />

        <!-- <q-tab
          no-caps
          name="art"
          label="Art"
          @mouseover.native="selected_tab = 'art'"
          @click.native="navigatePage('/categories/art')"
        />
        <q-tab
          no-caps
          name="domain_names"
          label="Domain Names"
          @mouseover.native="selected_tab = 'domain_names'"
          @click.native="navigatePage('/categories/domain-names')"
        />
        <q-tab
          no-caps
          name="virtual_world"
          label="Virtual Worlds"
          @mouseover.native="selected_tab = 'virtual_world'"
          @click.native="navigatePage('/categories/virtual-worlds')"
        />
        <q-tab
          no-caps
          name="trading_cards"
          label="Trading Cards"
          @mouseover.native="selected_tab = 'trading_cards'"
          @click.native="navigatePage('/categories/trading-cards')"
        />
        <q-tab
          no-caps
          name="collectibles"
          label="Collectibles"
          @mouseover.native="selected_tab = 'collectibles'"
          @click.native="navigatePage('/categories/collectibles')"
        />
        <q-tab
          no-caps
          name="sports"
          label="Sports"
          @mouseover.native="selected_tab = 'sports'"
          @click.native="navigatePage('/categories/sports')"
        />
        <q-tab
          no-caps
          name="utility"
          label="Utility"
          @mouseover.native="selected_tab = 'utility'"
          @click.native="navigatePage('/categories/utility')"
        /> -->
      </q-tabs>
      <q-separator />

      <q-tab-panels
        v-model="selected_tab"
        style="position: absolute"
        class="full-width shadow-2 tab-panel"
      >
        <q-tab-panel name="new">
          <CategoryPanel
            :title="'New'"
            :description="newCollectionDescription"
          ></CategoryPanel>
        </q-tab-panel>
        <q-tab-panel
          :name="category.slug"
          v-for="category in publicCategories"
          v-bind:key="'category-panel' + category.slug"
        >
          <CategoryPanel
            :title="category.title"
            :description="category.description"
          ></CategoryPanel>
        </q-tab-panel>
      </q-tab-panels>
    </div>
    <div class="header-banner">
      <q-img src="../assets/images/collection-banner.webp" height="200px" />
    </div>
    <div class="content-header q-pa-md text-center justify-center q-mt-lg">
      <div class="text-h4 text-center" style="font-weight: 500">
        Explore Collectibles
      </div>
      <div
        class="text-subtitle1 text-grey text-center flex justify-center q-pa-md"
      >
        <p style="max-width: 800px ">
          The way we value internet-native items is changing with the
          development of blockchain technology. Kittens, punks, and memes are
          now trading digital wallets for cryptocurrencies, and the online
          collectibles market is taking shape before our eyes. Scarce digital
          property is cropping up in all kinds of industries around the world,
          and OpenSea is on a mission to house internet goods from all corners
          of the ecosystem. Own, buy, and sell rare and exclusive NFTs from
          CryptoKitties, Axie Infinity, and beyond.
        </p>
      </div>
    </div>
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
            Trending Collections
          </div>
        </div>
        <q-separator />
        <div class="q-mt-lg">
          <div class="trending-collections-list">
            <ProductPackageCard
              v-for="item in [1, 2, 3, 4, 5, 6, 7]"
              v-bind:key="'collectibles' + item"
            ></ProductPackageCard>
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
          <div class="trending-collections-list">
            <ProductPackageCard
              v-for="item in [1, 2, 3, 4, 5, 6, 7]"
              v-bind:key="'collectibles' + item"
            ></ProductPackageCard>
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
          <div class="trending-collections-list">
            <ProductPackageCard
              v-for="item in [1, 2, 3, 4, 5, 6, 7]"
              v-bind:key="'collectibles' + item"
            ></ProductPackageCard>
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
          <div class="trending-collections-list">
            <ProductPackageCard
              v-for="item in [1, 2, 3, 4, 5, 6, 7]"
              v-bind:key="'collectibles' + item"
            ></ProductPackageCard>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import CategoryPanel from "src/components/CategoryPanel.vue";

import { mapGetters } from "vuex";
export default {
  name: "MyCollection",
  components: {
    CategoryPanel,

    ProductPackageCard: () => import("../components/ProductPackageCard")
  },
  computed: {
    ...mapGetters({
      inRequest: "inRequest",
      notificationText: "notificationText",
      notificationType: "notificationType",
      requestSuccess: "requestSuccess",
      loggedIn: "auth/loggedIn",
      publicCategories: "manage/publicCategories"
    })
  },

  data() {
    return {
      selected_tab: 0,
      newCollectionDescription:
        "Every week, developers, creators, artists, and influencers are launching brandnew collections on OpenSea. If you’d like to create your own collection, visitthe collection manager page."
    };
  },
  created() {
    this.$store.dispatch("manage/getCategories");
  },
  methods: {
    navigatePage(path) {
      this.selected_tab = "";
      this.$router.push(path).catch(() => {});
    }
  }
};
</script>
<style lang="scss" scoped>
.trending-collections-list {
  display: flex;
  overflow-x: auto;
  .item-card {
    min-width: 320px;
    width: 100%;
    margin: 5px;
  }
}
.tab-panel {
  display: block;
}

@media only screen and (max-width: 950px) {
  .tab-panel {
    display: none;
  }
}
</style>
