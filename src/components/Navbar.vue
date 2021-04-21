<template>
  <div>
    <q-header elevated style="z-index: 3000;">
      <q-toolbar class="bg-white text-black " style=" height: 60px">
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
            to="/assets"
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
            to="/activity"
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
                  <q-item-section>
                    <div @click="navigatePage('/my-collection')">
                      <q-icon name="store" size="28px" class="q-pr-sm" />My
                      Collections
                    </div></q-item-section
                  >
                </q-item>
                <q-item clickable v-close-popup>
                  <q-item-section
                    ><div @click="navigatePage('/develop')">
                      <q-icon name="code" size="28px" class="q-pr-sm" />
                      Develop with us
                    </div></q-item-section
                  >
                </q-item>
                <q-item clickable v-close-popup>
                  <q-item-section>
                    <div @click="navigatePage('/submit')">
                      <q-icon
                        name="assignment_returned"
                        size="28px"
                        class="q-pr-sm"
                      />
                      Submit NFTs
                    </div></q-item-section
                  >
                </q-item>
                <q-item clickable v-close-popup>
                  <q-item-section>
                    <div @click="navigatePage('/docs')">
                      <q-icon name="description" size="28px" class="q-pr-sm" />
                      Docs
                    </div></q-item-section
                  >
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
              <q-list style="min-width: 100px" @mouseleave="createMenu = false">
                <q-item clickable v-close-popup>
                  <q-item-section>
                    <div @click="navigatePage('/profile')">
                      <q-icon name="face" size="28px" class="q-pr-sm" />My
                      Profile
                    </div></q-item-section
                  >
                </q-item>
                <q-item clickable v-close-popup>
                  <q-item-section
                    ><div @click="navigatePage('/station')">
                      <q-icon
                        name="monetization_on"
                        size="28px"
                        class="q-pr-sm"
                      />
                      W-ETH station
                    </div></q-item-section
                  >
                </q-item>
                <q-item clickable v-close-popup>
                  <q-item-section>
                    <div @click="navigatePage('/sell')">
                      <q-icon
                        name="create_new_folder"
                        size="28px"
                        class="q-pr-sm"
                      />
                      Sell
                    </div></q-item-section
                  >
                </q-item>
                <q-item clickable v-close-popup>
                  <q-item-section>
                    <div @click="navigatePage('/transfer')">
                      <q-icon
                        name="card_giftcard"
                        size="28px"
                        class="q-pr-sm"
                      />
                      Transfer
                    </div></q-item-section
                  >
                </q-item>
                <q-item clickable v-close-popup>
                  <q-item-section>
                    <div @click="navigatePage('/account-settings')">
                      <q-icon
                        name="settings_applications"
                        size="28px"
                        class="q-pr-sm"
                      />
                      Account Settings
                    </div></q-item-section
                  >
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
          <!-- <q-btn
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
          </q-btn> -->
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
      <div class="q-my-lg">
        <q-list>
          <EssentialLink
            v-for="link in essentialLinks"
            :key="link.title"
            v-bind="link"
          />
        </q-list>
      </div>
    </q-drawer>
  </div>
</template>
<script>
import EssentialLink from "./EssentialLink.vue";

const linksData = [
  {
    title: "Browse",
    link: "/assets",
    icon: "web_asset"
  },
  {
    title: "Activity",
    link: "/activity",
    icon: "local_activity"
  },
  {
    title: "Rankings",
    link: "/rankings",
    icon: "thumb_up"
  },
  {
    title: "Create",
    link: "/account-settings",
    icon: "add_circle_outline"
  }
];
export default {
  name: "Navbar",
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
  methods: {
    navigateHomePage() {
      this.$router.push("/").catch(() => {});
    },
    navigatePage(page) {
      this.$router.push(page).catch(() => {});
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
