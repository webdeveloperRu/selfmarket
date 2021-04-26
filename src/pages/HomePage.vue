<template>
  <q-page class="front-page" style="position:relative">
    <div
      class="full-width action-tab "
      style="position:sticky; top: 72px; z-index: 2005; background: white"
      @mouseleave="selected_tab = ''"
    >
      <q-tabs
        v-model="selected_tab"
        class="text-primary q-pt-sm categories-tab "
        outside-arrows
        mobile-arrows
      >
        <q-tab
          no-caps
          name="new"
          label="New"
          @mouseover.native="selected_tab = 'new'"
          @click.native="navigatePage('/rankings')"
        />
        <q-tab
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
    <h3
      class="text-center q-ma-xl homepage-title"
      style="margin-top: 120px; font-size: 50px; font-weight: 300"
    >
      The largest Self marketplace
    </h3>
    <div
      class="text-center text-grey-8"
      style="font-size: 18px; font-weight: 300"
    >
      Buy, sell, and discover rare digital items
    </div>
    <div class="q-pa-md q-gutter-sm text-center">
      <q-btn
        color="primary"
        label="Explorer"
        size="14px"
        class="q-px-lg q-py-xs q-mr-lg"
        style="width: 160px"
        aria-label="Explorer"
        to="/assets"
      />
      <q-btn
        color="primary"
        outline
        label="Create"
        size="14px"
        class="q-px-lg q-py-xs"
        style="width: 160px"
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
                  src="../assets/images/mountains.jpg"
                />
              </div>
            </q-carousel-slide>
            <q-carousel-slide :name="2" class="column no-wrap">
              <div
                class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"
              >
                <q-img
                  class="rounded-borders full-height"
                  src="../assets/images/parallax2.jpg"
                />
              </div>
            </q-carousel-slide>
            <q-carousel-slide :name="3" class="column no-wrap">
              <div
                class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"
              >
                <q-img
                  class="rounded-borders full-height"
                  src="../assets/images/mountains.jpg"
                />
              </div>
            </q-carousel-slide>
          </q-carousel>
        </div>
        <div class="trending-collections q-px-sm">
          <div class="q-pl-lg" style="font-size: 14px; font-weight: 700">
            <q-icon name="insights" style="font-size: 1.5rem" />
            TRENDING COLLECTIONS
          </div>
          <q-separator class="q-mt-md" />

          <div class="trending-collections__items q-ma-sm">
            <q-card
              class="item-card cursor-pointer"
              flat
              bordered
              v-for="item in [1, 2, 3, 4, 5, 6, 7]"
              v-bind:key="item"
            >
              <img src="../assets/images/mountains.jpg" />

              <q-card-section>
                <div class="text-h6 text-center" style="font-weight: 300">
                  Our Changing Planet
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
        <div class="digital-art q-px-sm">
          <div class="q-pl-lg" style="font-size: 14px; font-weight: 700">
            <q-icon name="palette" style="font-size: 1.5rem" />
            DIGITAL ART
          </div>
          <q-separator class="q-mt-md" />

          <div class="digital-art__items q-ma-sm">
            <DataPackageCard
              v-for="item in [1, 2, 3, 4, 5, 6, 7]"
              v-bind:key="'digital' + item"
            ></DataPackageCard>
          </div>
        </div>
        <div class="virtual-world q-px-sm">
          <div class="q-pl-lg" style="font-size: 14px; font-weight: 700">
            <q-icon name="landscape" style="font-size: 1.5rem" />
            VIRTUAL WORLDS
          </div>
          <q-separator class="q-mt-md" />

          <div class="virtual-world__items q-ma-sm">
            <DataPackageCard
              v-for="item in [1, 2, 3, 4, 5, 6, 7]"
              v-bind:key="'virtual' + item"
            ></DataPackageCard>
          </div>
        </div>
        <div class="collectibles q-px-sm">
          <div class="q-pl-lg " style="font-size: 14px; font-weight: 700">
            <q-icon name="emoji_events" style="font-size: 1.5rem" />
            Collectibles
          </div>
          <q-separator class="q-mt-md" />
          <div class="collectibles__items q-ma-sm">
            <DataPackageCard
              v-for="item in [1, 2, 3, 4, 5, 6, 7]"
              v-bind:key="'collectibles' + item"
            ></DataPackageCard>
          </div>
        </div>
        <div class="flex justify-center full-width ">
          <div class="get-start-layout q-mx-sm">
            <div
              class="text-center q-my-xl text-grey-10"
              style="font-size:24px; font-weight: 600; margin-top: 50px"
            >
              Get started creating & selling your NFTs
            </div>

            <div class="content row">
              <div class="col-12 col-md-3 col-sm-6">
                <q-card flat>
                  <q-card-section class="text-center">
                    <img
                      src="../assets/images/get-start/wallet.svg"
                      width="30"
                      height="34"
                    />
                    <div class="text-h6 text-center" style="font-size: 16px">
                      Set up your wallet
                    </div>
                    <div
                      class="text-center text-grey text-subtitle1"
                      style="font-size: 16px; font-weight: 300"
                    >
                      Once you’ve set up your wallet of choice, connect it to
                      OpenSea by clicking the wallet icon in the top right
                      corner. Learn about the
                    </div>
                    <div class="link-button">wallets we support</div>
                  </q-card-section>
                </q-card>
              </div>
              <div class="col-12 col-md-3 col-sm-6">
                <q-card flat>
                  <q-card-section class="text-center">
                    <img
                      src="../assets/images/get-start/collection.svg"
                      width="30"
                      height="34"
                    />
                    <div class="text-h6 text-center" style="font-size: 16px">
                      Create your collection
                    </div>
                    <div
                      class="text-center  text-grey text-subtitle1"
                      style="font-size: 16px; font-weight: 300"
                    >
                      Click
                      <span class="link-button">create</span>
                      and set up your collection. Add social links, a
                      description, profile & banner images, and set a secondary
                      sales fee.
                    </div>
                  </q-card-section>
                </q-card>
              </div>
              <div class="col-12 col-md-3 col-sm-6">
                <q-card flat>
                  <q-card-section class="text-center">
                    <img
                      src="../assets/images/get-start/nft.svg"
                      width="30"
                      height="34"
                    />
                    <div class="text-h6 text-center" style="font-size: 16px">
                      Add your NFTs
                    </div>
                    <div
                      class="text-center text-grey text-subtitle1"
                      style="font-size: 16px; font-weight: 300"
                    >
                      Upload your work (image, video, audio, or 3D art), add a
                      title and description, and customize your NFTs with
                      properties, stats, and unlockable content.
                    </div>
                  </q-card-section>
                </q-card>
              </div>
              <div class="col-12 col-md-3 col-sm-6">
                <q-card flat>
                  <q-card-section class="text-center">
                    <img
                      src="../assets/images/get-start/sale.svg"
                      width="30"
                      height="34"
                    />
                    <div class="text-h6 text-center" style="font-size: 16px">
                      List them for sale
                    </div>
                    <div
                      class="text-center text-grey text-subtitle1"
                      style="font-size: 16px; font-weight: 300"
                    >
                      Choose between auctions, fixed-price listings, and
                      declining-price listings. You choose how you want to sell
                      your NFTs, and we help you sell them!
                    </div>
                  </q-card-section>
                </q-card>
              </div>
            </div>
          </div>
        </div>

        <div class="flex justify-center full-width q-ma-xl">
          <q-btn
            label="View our begginer's guide"
            color="primary"
            class="q-pa-sm"
            no-caps
          >
          </q-btn>
        </div>
        <div class="flex justify-center full-width q-ma-xl">
          <div class="browse-category-layout full-width row">
            <div class="col-12 col-sm-6 col-md-4 flex justify-center">
              <q-card
                flat
                bordered
                class="item-card q-ma-md"
                style="max-width: 400px"
              >
                <q-card-section class="flex items-center">
                  <img
                    src="../assets/images/browse-category/art-light.svg"
                    width="50"
                  />
                  <span
                    class="text-grey-9 q-px-md"
                    style="font-size: 16px; font-weight: 600"
                  >
                    Art</span
                  >
                </q-card-section>
                <q-separator />

                <q-card-section>
                  <div
                    class="text-grey text-subtitle1"
                    style="font-size: 16px; font-weight: 300"
                  >
                    An online community of makers, developers, and traders is
                    pushing the art world into new territory. Discover the
                    world's top crypto artists.
                  </div>
                  <div class="link-button q-mt-lg" style=" font-weight: 400">
                    Explorer Art
                  </div>
                </q-card-section>
              </q-card>
            </div>
            <div class="col-12 col-sm-6 col-md-4 flex justify-center">
              <q-card
                flat
                bordered
                class="item-card q-ma-md"
                style="max-width: 400px"
              >
                <q-card-section class="flex items-center">
                  <img
                    src="../assets/images/browse-category/domain-light.svg"
                    width="50"
                  />
                  <span
                    class="text-grey-9 q-px-md"
                    style="font-size: 16px; font-weight: 600"
                  >
                    Domain Names</span
                  >
                </q-card-section>
                <q-separator />

                <q-card-section>
                  <div
                    class="text-grey text-subtitle1"
                    style="font-size: 16px; font-weight: 300"
                  >
                    Buy and sell domain names from the Ethereum Name Service
                    (ENS), Unstoppable Domains, and Decentraland Names on
                    OpenSea.
                  </div>
                  <div class="link-button q-mt-lg" style=" font-weight: 400">
                    Explore Domain Names
                  </div>
                </q-card-section>
              </q-card>
            </div>
            <div class="col-12 col-sm-6 col-md-4 flex justify-center">
              <q-card
                flat
                bordered
                class="item-card q-ma-md"
                style="max-width: 400px"
              >
                <q-card-section class="flex items-center">
                  <img
                    src="../assets/images/browse-category/virtualworlds-light.svg"
                    width="50"
                  />
                  <span
                    class="text-grey-9 q-px-md"
                    style="font-size: 16px; font-weight: 600"
                  >
                    Virtual Worlds</span
                  >
                </q-card-section>
                <q-separator />

                <q-card-section>
                  <div
                    class="text-grey text-subtitle1"
                    style="font-size: 16px; font-weight: 300"
                  >
                    Buy and sell land parcels and wearables from projects like
                    Decentraland, Cryptovoxels and Somnium Space.
                  </div>
                  <div class="link-button q-mt-lg" style=" font-weight: 400">
                    Explore Virtual Worlds
                  </div>
                </q-card-section>
              </q-card>
            </div>
            <div class="col-12 col-sm-6 col-md-4 flex justify-center">
              <q-card
                flat
                bordered
                class="item-card q-ma-md"
                style="max-width: 400px"
              >
                <q-card-section class="flex items-center">
                  <img
                    src="../assets/images/browse-category/tradingcards-light.svg"
                    width="50"
                  />
                  <span
                    class="text-grey-9 q-px-md"
                    style="font-size: 16px; font-weight: 600"
                  >
                    Trading Cards</span
                  >
                </q-card-section>
                <q-separator />

                <q-card-section>
                  <div
                    class="text-grey text-subtitle1"
                    style="font-size: 16px; font-weight: 300"
                  >
                    Classic games are taking on a new life on the blockchain.
                    Buy and sell digital trading cards from projects like
                    Sorare, Gods Unchained, and $MEME.
                  </div>
                  <div class="link-button q-mt-lg" style=" font-weight: 400">
                    Explorer Trading Cards
                  </div>
                </q-card-section>
              </q-card>
            </div>
            <div class="col-12 col-sm-6 col-md-4 flex justify-center">
              <q-card
                flat
                bordered
                class="item-card q-ma-md"
                style="max-width: 400px"
              >
                <q-card-section class="flex items-center">
                  <img
                    src="../assets/images/browse-category/collectibles-light.svg"
                    width="50"
                  />
                  <span
                    class="text-grey-9 q-px-md"
                    style="font-size: 16px; font-weight: 600"
                  >
                    Collectibles</span
                  >
                </q-card-section>
                <q-separator />

                <q-card-section>
                  <div
                    class="text-grey text-subtitle1"
                    style="font-size: 16px; font-weight: 300"
                  >
                    Kittens, punks, and memes are being traded through digital
                    wallets. Own and sell rare NFTs like CryptoKitties, Axie
                    Infinity, and more.
                  </div>
                  <div class="link-button q-mt-lg" style=" font-weight: 400">
                    Explore Collectibles
                  </div>
                </q-card-section>
              </q-card>
            </div>
            <div class="col-12 col-sm-6 col-md-4 flex justify-center">
              <q-card
                flat
                bordered
                class="item-card q-ma-md"
                style="max-width: 400px"
              >
                <q-card-section class="flex items-center">
                  <img
                    src="../assets/images/browse-category/sports-light.svg"
                    width="50"
                  />
                  <span
                    class="text-grey-9 q-px-md"
                    style="font-size: 16px; font-weight: 600"
                  >
                    Sports</span
                  >
                </q-card-section>
                <q-separator />

                <q-card-section>
                  <div
                    class="text-grey text-subtitle1"
                    style="font-size: 16px; font-weight: 300"
                  >
                    Browse, buy, and sell non-fungible tokens from the world's
                    top sporting brands in golf, football, auto, racing, and
                    more.
                  </div>
                  <div class="link-button q-mt-lg" style=" font-weight: 400">
                    Explorer Sports
                  </div>
                </q-card-section>
              </q-card>
            </div>
            <div class="col-12 col-sm-6 col-md-4 flex justify-center">
              <q-card
                flat
                bordered
                class="item-card q-ma-md"
                style="max-width: 400px"
              >
                <q-card-section class="flex items-center">
                  <img
                    src="../assets/images/browse-category/wallet-light.svg"
                    width="50"
                  />
                  <span
                    class="text-grey-9 q-px-md"
                    style="font-size: 16px; font-weight: 600"
                  >
                    Utility</span
                  >
                </q-card-section>
                <q-separator />

                <q-card-section>
                  <div
                    class="text-grey text-subtitle1"
                    style="font-size: 16px; font-weight: 300"
                  >
                    Through redeemable rewards, membership NFTs, and other
                    utility tokens, creators are using the blockchain to build
                    their communities.
                  </div>
                  <div class="link-button q-mt-lg" style=" font-weight: 400">
                    Explorer Utility
                  </div>
                </q-card-section>
              </q-card>
            </div>
            <div class="col-12 col-sm-6 col-md-4 flex justify-center">
              <q-card
                flat
                bordered
                class="item-card q-ma-md"
                style="max-width: 400px"
              >
                <q-card-section class="flex items-center">
                  <img
                    src="../assets/images/browse-category/allnfts-light.svg"
                    width="50"
                  />
                  <span
                    class="text-grey-9 q-px-md"
                    style="font-size: 16px; font-weight: 600"
                  >
                    All NFTs</span
                  >
                </q-card-section>
                <q-separator />

                <q-card-section>
                  <div
                    class="text-grey text-subtitle1"
                    style="font-size: 16px; font-weight: 300"
                  >
                    Just want to explore, browse, and discover the endless
                    possibilities of NFTs? Browse art, collectibles, trading
                    cards, and more.
                  </div>
                  <div class="link-button q-mt-lg" style=" font-weight: 00">
                    Explorer All NFTs
                  </div>
                </q-card-section>
              </q-card>
            </div>
          </div>
        </div>

        <div class="flex justify-center full-width q-ma-xl">
          <q-btn
            label="Explorer the marketplace"
            color="primary"
            class="q-pa-sm"
            no-caps
          >
          </q-btn>
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
.front-page {
  background-image: url("../assets/images/frontpage-background.webp");
  background-position: center 300px;
  background-repeat: no-repeat;
  background-size: contain;
}
.home-content {
  background: white;
  .containter {
    max-width: 75%;
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
    .get-start-layout {
      margin-top: 150px;
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
.item-card {
  &:hover {
    cursor: pointer;
    box-shadow: #aaa 0px 0px 5px 0px !important;
  }
}
.get-start-layout,
.browse-category-layout {
  max-width: 1280px;
}

@media only screen and (max-width: 950px) {
  .tab-panel {
    display: none;
  }
}
@media only screen and (max-width: 750px) {
  .homepage-title {
    font-size: 40px !important;
    margin-top: 80px !important;
    margin-bottom: 20px !important;
  }
  .front-page {
    background-position: center 250px;
    background-repeat: no-repeat;
    background-size: contain;
  }
}
@media only screen and (max-width: 600px) {
  .home-content {
    background: white;
    .containter {
      max-width: 90%;
    }
  }

  .promo-carousel {
    margin-top: 0px !important;
  }
}

@media only screen and (max-width: 450px) {
  .promo-carousel {
    margin-top: 0px !important;
  }
  .homepage-title {
    font-size: 30px !important;
    margin-top: 30px !important;
    margin-bottom: 20px !important;
  }
  .front-page {
    background-position: center 180px;
    background-repeat: no-repeat;
    background-size: contain;
  }
}
</style>
