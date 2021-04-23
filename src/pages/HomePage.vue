<template>
  <q-page class="front-page" style="position:relative">
    <div
      class="full-width action-tab"
      style="position:sticky; top: 60px; z-index: 2005; background: white"
      @mouseleave="selected_tab = ''"
    >
      <q-tabs
        v-model="selected_tab"
        class="text-teal q-pt-sm"
        outside-arrows
        mobile-arrows
      >
        <q-tab
          name="new"
          label="New"
          @mouseover.native="selected_tab = 'new'"
          @click.native="navigatePage('/rankings')"
        />
        <q-tab
          name="art"
          label="Art"
          @mouseover.native="selected_tab = 'art'"
          @click.native="navigatePage('/collection/art')"
        />
        <q-tab
          name="domain_names"
          label="Domain Names"
          @mouseover.native="selected_tab = 'domain_names'"
          @click.native="navigatePage('/collection/domain-names')"
        />
        <q-tab
          name="virtual_world"
          label="Virtual Worlds"
          @mouseover.native="selected_tab = 'virtual_world'"
          @click.native="navigatePage('/collection/virtual-worlds')"
        />
        <q-tab
          name="trading_cards"
          label="Trading Cards"
          @mouseover.native="selected_tab = 'trading_cards'"
          @click.native="navigatePage('/collection/trading-cards')"
        />
        <q-tab
          name="collectibles"
          label="Collectibles"
          @mouseover.native="selected_tab = 'collectibles'"
          @click.native="navigatePage('/collection/collectibles')"
        />
        <q-tab
          name="sports"
          label="Sports"
          @mouseover.native="selected_tab = 'sports'"
          @click.native="navigatePage('/collection/sports')"
        />
        <q-tab
          name="utility"
          label="Utility"
          @mouseover.native="selected_tab = 'utility'"
          @click.native="navigatePage('/collection/utility')"
        />
      </q-tabs>
      <q-separator />

      <q-tab-panels
        v-model="selected_tab"
        style="position: absolute"
        class="full-width shadow-2 tab-panel"
      >
        <q-tab-panel name="new">
          <NewCollection></NewCollection>
        </q-tab-panel>
        <q-tab-panel name="art">
          <Art></Art>
        </q-tab-panel>
        <q-tab-panel name="domain_names">
          <DomainNames></DomainNames>
        </q-tab-panel>
        <q-tab-panel name="trading_cards">
          <TradingCards></TradingCards>
        </q-tab-panel>
        <q-tab-panel name="virtual_world">
          <VirtualWorlds></VirtualWorlds>
        </q-tab-panel>
        <q-tab-panel name="collectibles">
          <Collectibles></Collectibles>
        </q-tab-panel>
        <q-tab-panel name="sports">
          <Sports></Sports>
        </q-tab-panel>
        <q-tab-panel name="utility">
          <Utility></Utility>
        </q-tab-panel>
      </q-tab-panels>
    </div>
    <h3 class="text-center q-ma-lg">The largest Self marketplace</h3>
    <p class="text-center" style="color: #444; font-size: 18px">
      Buy, sell, and discover rare digital items
    </p>
    <div class="q-pa-md q-gutter-sm text-center">
      <q-btn
        color="primary"
        label="Explorer"
        size="16px"
        class="q-px-lg q-py-xs"
        style="width: 200px"
        aria-label="Explorer"
        to="/assets"
      />
      <q-btn
        color="primary"
        outline
        label="Create"
        size="16px"
        class="q-px-lg q-py-xs"
        style="width: 200px"
        aria-label="Create Button"
        to="/my-collection"
      />
    </div>
    <div class="home-content full-width">
      <div class="containter ">
        <div class="promo-carousel">
          <q-carousel
            v-model="slide"
            transition-prev="slide-right"
            transition-next="slide-left"
            swipeable
            animated
            control-color="primary"
            navigation
            padding
            arrows
            class="bg-grey-1  rounded-borders promo-carousel"
          >
            <q-carousel-slide :name="1" class="column no-wrap">
              <div
                class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"
              >
                <q-img
                  class="rounded-borders full-height"
                  src="../assets/mountains.jpg"
                />
              </div>
            </q-carousel-slide>
            <q-carousel-slide :name="2" class="column no-wrap">
              <div
                class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"
              >
                <q-img
                  class="rounded-borders full-height"
                  src="../assets/parallax2.jpg"
                />
              </div>
            </q-carousel-slide>
            <q-carousel-slide :name="3" class="column no-wrap">
              <div
                class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"
              >
                <q-img
                  class="rounded-borders full-height"
                  src="../assets/mountains.jpg"
                />
              </div>
            </q-carousel-slide>
          </q-carousel>
        </div>
        <div class="trending-collections q-px-sm">
          <div class="text-h6 q-pl-lg">
            <q-icon name="insights" />
            TRENDING COLLECTIONS
          </div>
          <q-separator />
          <div class="trending-collections__items q-ma-sm">
            <q-card
              class="item-card"
              v-for="item in [1, 2, 3, 4, 5, 6, 7]"
              v-bind:key="item"
            >
              <img src="../assets/mountains.jpg" />

              <q-card-section>
                <div class="text-h6">Our Changing Planet</div>
              </q-card-section>
            </q-card>
          </div>
        </div>
        <div class="digital-art q-px-sm">
          <div class="text-h6 q-pl-lg">
            <q-icon name="palette" />
            Digital Art
          </div>
          <q-separator />
          <div class="digital-art__items q-ma-sm">
            <DataPackageCard
              v-for="item in [1, 2, 3, 4, 5, 6, 7]"
              v-bind:key="'digital' + item"
            ></DataPackageCard>
          </div>
        </div>
        <div class="virtual-world q-px-sm">
          <div class="text-h6 q-pl-lg">
            <q-icon name="landscape" />
            Virtual World
          </div>
          <q-separator />
          <div class="virtual-world__items q-ma-sm">
            <DataPackageCard
              v-for="item in [1, 2, 3, 4, 5, 6, 7]"
              v-bind:key="'virtual' + item"
            ></DataPackageCard>
          </div>
        </div>
        <div class="collectibles q-px-sm">
          <div class="text-h6 q-pl-lg">
            <q-icon name="emoji_events" />
            Collectibles
          </div>
          <q-separator />
          <div class="collectibles__items q-ma-sm">
            <DataPackageCard
              v-for="item in [1, 2, 3, 4, 5, 6, 7]"
              v-bind:key="'collectibles' + item"
            ></DataPackageCard>
          </div>
        </div>
        <div class="selfmarket-developers q-mx-sm">
          <div class="text-h4 text-center q-mt-xl text-grey">
            Selfmarket for Developers
          </div>
          <div class="text-subtitle1 text-center q-my-lg">
            Empowering developers and designers with easy-to-use, powerful tools
          </div>
          <div class="content">
            <q-card class="item-card" flat>
              <img
                src="../assets/mountains.jpg"
                class="q-px-xl"
              />

              <q-card-section>
                <div class="text-h6 text-center">
                  Create your own marketplace
                </div>
                <div class="text-center text-grey text-subtitle1">
                  Build a beautiful marketplace for your ERC721 or ERC1155
                  assets for free, and earn revenue on every secondary sale of
                  your items.
                </div>
              </q-card-section>
            </q-card>
            <q-card class="item-card" flat>
              <img
                src="../assets/parallax2.jpg"
                class="q-px-xl"
              />

              <q-card-section>
                <div class="text-h6 text-center">
                  Pull market data from our digital asset API
                </div>
                <div class="text-center text-grey text-subtitle1">
                  Automatically show your users their own collectibles, and
                  become an OpenSea affiliate to monetize your user base
                </div>
              </q-card-section>
            </q-card>
            <q-card class="item-card" flat>
              <img
                                src="../assets/mountains.jpg"

                class="q-px-xl"
              />

              <q-card-section>
                <div class="text-h6 text-center">
                  Collaborate with OpenSea Studios
                </div>
                <div class="text-center text-grey text-subtitle1">
                  Building a game? Need a blockchain-powered marketplace? We'll
                  do the heavy lifting for you. Check out Ethmoji for an
                  example.
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import NewCollection from "components/homepage/NewCollection.vue";
import Collectibles from "components/homepage/Collectibles.vue";
import DomainNames from "components/homepage/DomainNames.vue";
import Sports from "components/homepage/Sports.vue";
import TradingCards from "components/homepage/TradingCards.vue";
import Utility from "components/homepage/Utility.vue";
import Art from "components/homepage/Art.vue";
import VirtualWorlds from "components/homepage/VirtualWorlds.vue";

export default {
  name: "HomePage",
  components: {
    NewCollection,
    Collectibles,
    DomainNames,
    Sports,
    TradingCards,
    Utility,
    Art,
    VirtualWorlds,
    DataPackageCard: () => import("../components/DataPackageCard")
  },
  data() {
    return {
      selected_tab: 0,
      slide: 1
    };
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
.front-page {
  background-image: url("../assets/frontpage-background.webp");
  background-position: center 300px;
  background-repeat: no-repeat;
  background-size: contain;
}
.home-content {
  background: white;
  .containter {
    max-width: 1280px;
    margin: 0 auto;
    .promo-carousel {
      margin-top: 250px;
    }
    .trending-collections {
      .trending-collections__items {
        display: flex;
        overflow-x: auto;
        .item-card {
          min-width: 320px;
          width: 100%;
          margin: 5px;
        }
      }
    }
    .digital-art {
      margin-top: 30px;
      .digital-art__items {
        display: flex;
        overflow-x: auto;
        .item-card {
          min-width: 320px;
          width: 100%;
          margin: 5px;
        }
      }
    }

    .virtual-world {
      margin-top: 30px;
      .virtual-world__items {
        display: flex;
        overflow-x: auto;
        .item-card {
          min-width: 320px;
          width: 100%;
          margin: 5px;
        }
      }
    }

    .collectibles {
      margin-top: 30px;
      .collectibles__items {
        display: flex;
        overflow-x: auto;
        .item-card {
          min-width: 320px;
          width: 100%;
          margin: 5px;
        }
      }
    }
    .selfmarket-developers {
      .content {
        display: flex;
        overflow-x: auto;
        .item-card {
          margin: 10px;
          min-width: 320px;
        }
      }
    }
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
@media only screen and (max-width: 600px) {
  .promo-carousel {
    margin-top: 0px !important;
  }
}
</style>
