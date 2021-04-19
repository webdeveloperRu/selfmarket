<template>
  <q-layout>
    <q-header elevated style="position:sticky; z-index: 3000">
      <q-toolbar class="bg-white text-black q-pa-sm">
        <!-- <q-avatar>
          <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg" />
        </q-avatar> -->
        <q-avatar @click="navigateHomePage" style="cursor:pointer">
          <img src="../assets/selfmarket-logo.png" alt="logo" />
        </q-avatar>
        <div class="text-h5 q-pa-sm logo-title" @click="navigateHomePage">
          Self Market
        </div>
        <q-input
          dense
          outlined
          rounded
          v-model="filter_text"
          input-class="text-left"
          label="search items, collections and accounts"
          class="q-ml-md"
          style="width: 100%"
        >
          <template v-slot:append>
            <q-icon v-if="filter_text === ''" name="search" />
            <q-icon
              v-else
              name="clear"
              class="cursor-pointer"
              @click="filter_text = ''"
            />
          </template>
        </q-input>
        <div class="desktop-menu q-ml-md">
          <q-btn
            name="browse"
            label="Browse"
            to="/browse"
            aria-label="Browse Menu"
            flat
            @mouseover.native="
              () => {
                createMenu = false;
                accountMenu = false;
              }
            "
          />
          <q-btn
            name="activity"
            flat
            label="Activity"
            aria-label="Activity Menu"
            to="/acitvity"
            @mouseover.native="
              () => {
                createMenu = false;
                accountMenu = false;
              }
            "
          />
          <q-btn
            name="rankings"
            label="Rankings"
            to="/rankings"
            aria-label="Rankings Menu"
            flat
            @mouseover.native="
              () => {
                createMenu = false;
                accountMenu = false;
              }
            "
          />
          <q-btn
            label="Cteate"
            aria-label="Create Menu"
            flat
            @mouseover.native="
              () => {
                createMenu = true;
                accountMenu = false;
              }
            "
          >
            <q-menu v-model="createMenu" self="top right" anchor="bottom end">
              <q-list style="min-width: 100px" @mouseleave="createMenu = false">
                <q-item clickable v-close-popup>
                  <q-item-section>New tab</q-item-section>
                </q-item>
                <q-item clickable v-close-popup>
                  <q-item-section>New incognito tab</q-item-section>
                </q-item>
                <q-separator />
                <q-item clickable v-close-popup>
                  <q-item-section>Recent tabs</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
          <q-btn
            icon="account_circle"
            aria-label="Account Menu"
            flat
            @mouseover.native="
              () => {
                createMenu = false;
                accountMenu = true;
              }
            "
          >
            <q-menu v-model="accountMenu" self="top right" anchor="bottom end">
              <q-list
                style="min-width: 100px"
                @mouseleave="accountMenu = false"
              >
                <q-item clickable v-close-popup>
                  <q-item-section>New tab</q-item-section>
                </q-item>
                <q-item clickable v-close-popup>
                  <q-item-section>New incognito tab</q-item-section>
                </q-item>
                <q-separator />
                <q-item clickable v-close-popup>
                  <q-item-section>Recent tabs</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
          <q-btn
            icon="account_balance_wallet"
            flat
            aria-label="Wallet Menu"
            @mouseover.native="
              () => {
                createMenu = false;
                accountMenu = false;
              }
            "
          >
          </q-btn>
        </div>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          class="mobile-list-menu q-ml-md"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      content-class="bg-grey-1"
      :show-if-above="false"
      behavior="mobile"
    >
      <q-list>
        <q-item-label header class="text-grey-8">
          Essential Links
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container style="padding-top: 0px;">
      <router-view />
    </q-page-container>
    <q-footer elevated>
      <div class="row q-mx-sm q-mt-xl">
        <div class="col-12 col-md-6">
          <div class="text-h4 text-white text-center ">
            Self Market
          </div>
          <div class="text-white text-subtitle1 q-py-lg q-px-sm text-center">
            The world’s largest digital marketplace for crypto collectibles and
            non-fungible tokens (NFTs), including ERC721 and ERC1155 assets.
            Buy, sell, and discover exclusive digital assets like Axies, ENS
            names, CryptoKitties, Decentraland, and more.
          </div>
        </div>
        <div class="col-4 col-md-2 text-center">
          <div class="text-white text-subtitle1">
            My Account
          </div>
          <div class="text-white text-subtitle2 ">My Itemx</div>
          <div class="text-white text-subtitle2 ">My Activity</div>
          <div class="text-white text-subtitle2 ">My Offers</div>
          <div class="text-white text-subtitle2 ">My Refrreals</div>
          <div class="text-white text-subtitle2 ">Gift Items</div>
        </div>
        <div class="col-4 col-md-2 text-center">
          <div class="text-white text-subtitle1 ">
            Market Place
          </div>
          <div class="text-white text-subtitle2 ">
            Browse and discover
          </div>
          <div class="text-white text-subtitle2 ">Rankings</div>
          <div class="text-white text-subtitle2 ">Recently Sold</div>
          <div class="text-white text-subtitle2 ">Biggest Sales</div>
          <div class="text-white text-subtitle2 ">Ending Soon</div>
          <div class="text-white text-subtitle2 ">Most Viewed</div>
        </div>
        <div class="col-4 col-md-2 text-center">
          <div class="text-white text-subtitle1 ">
            Company
          </div>
          <div class="text-white text-subtitle2 ">About</div>
          <div class="text-white text-subtitle2 ">Suggestions</div>
          <div class="text-white text-subtitle2 ">Join The Team</div>
          <div class="text-white text-subtitle2 ">For Developers</div>
          <div class="text-white text-subtitle2 ">Advertise</div>
          <div class="text-white text-subtitle2 ">FAQ</div>
          <div class="text-white text-subtitle2 ">BLOG</div>
        </div>
      </div>
      <q-separator class="q-my-lg" />
      <div class="community">
        <div class="row">
          <div class="col-12 col-md-6">
            <div class="text-h6 text-white text-center ">
              Join the OpenSea Community
            </div>
            <div class="text-white text-subtitle1 q-py-lg q-px-sm text-center">
              Stay up-to-date with our features, meet other OpenSea enthusiasts,
              and learn more!
            </div>
          </div>
          <div
            class="col-12 col-md-6 q-gutter-sm row  justify-center items-center content-start"
          >
            <q-btn round color="primary" icon="shopping_cart" />
            <q-btn round color="secondary" icon="navigation" />
            <q-btn
              round
              color="amber"
              glossy
              text-color="black"
              icon="layers_clear"
            />
            <q-btn round color="brown-5" icon="directions" />
            <q-btn round color="deep-orange" icon="edit_location" />
            <q-btn round color="purple" glossy icon="local_grocery_store" />
          </div>
        </div>
      </div>
      <q-separator class="q-my-lg" />
      <div class="q-mx-sm">
        <p class="text-center">
          © 2021 -
          <!-- -->2025<!-- -->
          SelfMarket, Inc
        </p>
      </div>
    </q-footer>
  </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink.vue";

const linksData = [
  {
    title: "Browse",
    icon: "school"
  },
  {
    title: "Activity",
    icon: "code"
  },
  {
    title: "Rankings",
    icon: "chat"
  },
  {
    title: "Create",
    icon: "record_voice_over"
  }
];

export default {
  name: "MainLayout",
  components: { EssentialLink },
  data() {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData,
      tab: "",
      createMenu: false,
      accountMenu: false,
      walletMenu: false,
      filter_text: ""
    };
  },

  mounted() {
    this.$q.iconSet.arrow.dropdown = "";
  },
  methods: {
    onItemClick() {
      console.log("Clicked on an Item");
    },

    navigateHomePage() {
      this.$router.push("/").catch(() => {});
    }
  }
};
</script>
<style scoped>
.mobile-list-menu {
  display: none;
}
.logo-title {
  display: block;
  cursor: pointer;
  min-width: 140px;
}
.desktop-menu {
  display: flex;
}
@media only screen and (max-width: 950px) {
  .mobile-list-menu {
    display: block;
  }
  .desktop-menu {
    display: none;
  }
}
@media only screen and (max-width: 550px) {
  .logo-title {
    display: none;
  }
}
</style>
