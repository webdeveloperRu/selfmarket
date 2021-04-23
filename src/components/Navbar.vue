<template>
  <div>
    <q-header style="z-index: 3000;box-shadow: #0e0e0e40 0px 0px 8px 0px">
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
          v-model="filter_text"
          color="grey-3"
          input-class="text-left"
          placeholder="search items, collections and accounts"
          class="q-ml-md"
          style="width: 100%; max-width: 800px"
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
        <q-space />

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
              <q-list
                style="min-width: 100px"
                @mouseleave="accountMenu = false"
              >
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
                    <div @click="navigatePage('/twofactor-setup')">
                      <q-icon
                        name="add_moderator"
                        size="28px"
                        class="q-pr-sm"
                      />
                      TwoFactor Setup
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
          <q-item clickable @click="createDrawerOpen = true">
            <q-item-section avatar>
              <q-icon name="control_point" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Create</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable @click="accountDrawerOpen = true">
            <q-item-section avatar>
              <q-icon name="account_circle" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Account</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </div>
    </q-drawer>

    <q-drawer
      v-model="accountDrawerOpen"
      bordered
      content-class="bg-grey-1"
      :show-if-above="false"
      behavior="mobile"
    >
      <div class="q-my-lg">
        <q-item clickable @click="accountDrawerOpen = false">
          <q-item-section avatar>
            <q-icon name="arrow_back_ios" />
          </q-item-section>

          <q-item-section>
            <q-item-label class="text-h6">Account</q-item-label>
          </q-item-section>
        </q-item>
        <q-separator />
        <EssentialLink
          v-for="link in accountMenuList"
          :key="link.title"
          v-bind="link"
        />
      </div>
    </q-drawer>

    <q-drawer
      v-model="createDrawerOpen"
      bordered
      content-class="bg-grey-1"
      :show-if-above="false"
      behavior="mobile"
    >
      <div class="q-my-lg">
        <q-item clickable @click="createDrawerOpen = false">
          <q-item-section avatar>
            <q-icon name="arrow_back_ios" />
          </q-item-section>

          <q-item-section>
            <q-item-label class="text-h6">Create</q-item-label>
          </q-item-section>
        </q-item>
        <q-separator />
        <EssentialLink
          v-for="link in createMenuList"
          :key="link.title"
          v-bind="link"
        />
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
  }
];
const createMenuList = [
  {
    title: "My Collections",
    link: "/my-collection",
    icon: "store"
  },
  {
    title: "Develop with us",
    link: "/develop",
    icon: "code"
  },
  {
    title: "Submit NFTs",
    link: "/submit",
    icon: "assignment_returned"
  },
  {
    title: "Docs",
    link: "/docs",
    icon: "description"
  }
];
const accountMenuList = [
  {
    title: "My Profile",
    link: "/profile",
    icon: "face"
  },
  {
    title: "W-ETH station",
    link: "/station",
    icon: "code"
  },
  {
    title: "Sell",
    link: "/sell",
    icon: "create_new_folder"
  },
  {
    title: "Transfer",
    link: "/transfer",
    icon: "card_giftcard"
  },
  {
    title: "TwoFactor Setup",
    link: "/twofactor-setup",
    icon: "add_moderator"
  },
  {
    title: "Account Settings",
    link: "/account-settings",
    icon: "settings_applications"
  }
];
export default {
  name: "Navbar",
  components: { EssentialLink },
  data() {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData,
      createMenuList: createMenuList,
      accountMenuList: accountMenuList,
      tab: "",
      createMenu: false,
      accountMenu: false,
      walletMenu: false,
      filter_text: "",
      createDrawerOpen: false,
      accountDrawerOpen: false
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
