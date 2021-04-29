<template>
  <div>
    <q-header style="z-index: 3000;box-shadow: #0e0e0e40 0px 0px 8px 0px">
      <q-toolbar class="bg-white text-black " style=" height: 72px">
        <!-- <q-avatar>
          <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg" />
        </q-avatar> -->
        <q-avatar @click="navigateHomePage" style="cursor:pointer">
          <img src="../assets/images/selfmarket-logo.png" alt="logo" />
        </q-avatar>
        <div
          class="text-h5 q-pa-sm logo-title"
          @click="navigateHomePage"
          style="font-size: 20px"
        >
          Self Market
        </div>
        <div
          style="width: 100%; max-width: 800px; border: solid 1px #aaa"
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

        <div class="desktop-menu q-ml-md">
          <q-btn
            name="browse"
            label="Browse"
            to="/assets"
            aria-label="Browse Menu"
            flat
            no-caps
            class="text-grey-9"
            style="font-size: 16px; font-weight: 400"
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
            no-caps
            class="text-grey-9"
            style="font-size: 16px; font-weight: 400"
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
            no-caps
            class="text-grey-9"
            style="font-size: 16px; font-weight: 400"
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
            no-caps
            class="text-grey-9"
            style="font-size: 16px; font-weight: 400"
            @click="createMenu = false"
            @mouseover.native="
              () => {
                createMenu = true;
                accountMenu = false;
              }
            "
          >
            <q-menu v-model="createMenu" self="top right" anchor="bottom end">
              <q-list style="min-width: 100px" @mouseleave="createMenu = false">
                <q-item clickable v-close-popup class="text-grey-9">
                  <q-item-section>
                    <div @click="navigatePage('/my-collection')">
                      <q-icon name="store" size="28px" class="q-pr-sm" />My
                      Collections
                    </div></q-item-section
                  >
                </q-item>
                <q-item clickable v-close-popup class="text-grey-9">
                  <q-item-section
                    ><div @click="navigatePage('/develop')">
                      <q-icon name="code" size="28px" class="q-pr-sm" />
                      Develop with us
                    </div></q-item-section
                  >
                </q-item>
                <q-item clickable v-close-popup class="text-grey-9">
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
                <q-item clickable v-close-popup class="text-grey-9">
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
            class="text-grey-9"
            flat
            @mouseover.native="
              () => {
                createMenu = false;
                accountMenu = true;
              }
            "
            @click="accountMenu = false"
          >
            <q-menu v-model="accountMenu" self="top right" anchor="bottom end">
              <q-list
                style="min-width: 100px"
                @mouseleave="accountMenu = false"
              >
                <q-item clickable v-close-popup class="text-grey-9">
                  <q-item-section>
                    <div @click="navigatePage('/profile')">
                      <q-icon name="face" size="28px" class="q-pr-sm" />My
                      Profile
                    </div></q-item-section
                  >
                </q-item>
                <q-item clickable v-close-popup class="text-grey-9">
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
                <q-item clickable v-close-popup class="text-grey-9">
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
                <q-item clickable v-close-popup class="text-grey-9">
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
                <q-item clickable v-close-popup class="text-grey-9">
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
                <q-item clickable v-close-popup class="text-grey-9">
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
                <q-item
                  clickable
                  v-close-popup
                  class="text-grey-9"
                  v-if="loggedIn"
                >
                  <q-item-section>
                    <div @click="logout">
                      <q-icon
                        name="settings_applications"
                        size="28px"
                        class="q-pr-sm"
                      />
                      Logout
                    </div></q-item-section
                  >
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
          <q-btn
            icon="account_balance_wallet"
            flat
            aria-label="Wallet Menu"
            class="text-grey-9"
            @mouseover.native="
              () => {
                createMenu = false;
                accountMenu = false;
              }
            "
            @click="walletDrawerOpen = true"
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
          <q-item clickable @click="walletDrawerOpen = true">
            <q-item-section avatar>
              <q-icon name="account_balance_wallet" />
            </q-item-section>

            <q-item-section>
              <q-item-label>My Wallet</q-item-label>
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

    <q-drawer
      side="right"
      v-model="walletDrawerOpen"
      bordered
      content-class="bg-grey-1"
      :show-if-above="false"
      behavior="mobile"
      :width="350"
    >
      <q-scroll-area class="fit ">
        <div
          class="text-subtitle1 q-pa-md flex justify-between items-center"
          style="font-weight: 500"
        >
          <div>My Wallet</div>
          <q-btn
            no-caps
            class="text-grey-9"
            style="font-size: 16px; font-weight: 400"
            rounded
            icon="arrow_back_ios"
            @click="walletDrawerOpen = false"
            >Back</q-btn
          >
        </div>
        <q-separator />
        <div class="q-pa-md text-subtitle1">
          Connect with one of our available
          <span class="text-blue cursor-pointer">
            <q-icon name="info" style="font-size: 1.5rem"></q-icon>wallet
            <q-tooltip content-class="bg-black">
              <div style="font-size: 14px; max-width: 250px;" class="q-pa-sm">
                A crypto wallet is an application or hardware deice that allows
                individuals to store and retrieve digital assets.
              </div>
            </q-tooltip>
          </span>
          info providers or create a new one.
        </div>
        <q-list bordered separator round class="q-ma-md">
          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="signal_wifi_off" />
            </q-item-section>

            <q-item-section>Meta Mask</q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="signal_wifi_off" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Bitski</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="signal_wifi_off" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Formatic</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="signal_wifi_off" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Wallet Connect</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
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
      accountDrawerOpen: false,
      walletDrawerOpen: false
    };
  },
  computed: {
    ...mapGetters({
      inRequest: "inRequest",
      notificationText: "notificationText",
      notificationType: "notificationType",
      requestSuccess: "requestSuccess",
      loggedIn: "auth/loggedIn"
    })
  },

  methods: {
    navigateHomePage() {
      this.$router.push("/").catch(() => {});
    },
    navigatePage(page) {
      this.$router.push(page).catch(() => {});
    },
    logout() {
      this.$store.dispatch("auth/logout");
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
@media only screen and (max-width: 1050px) {
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
