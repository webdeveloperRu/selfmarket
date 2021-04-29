<template>
  <q-page>
    <div class="banner">
      <q-img src="../../assets/images/collection-banner.webp" height="200px" />
      <div class="q-gutter-md float-right edit-banner-button">
        <q-input
          ref="bannerFileInput"
          style="display:none"
          v-model="bannerFile"
          type="file"
          label="Standard"
          @change="onSelectBannerImage"
        ></q-input>
        <q-btn
          round
          color="white"
          text-color="grey"
          icon="edit"
          @click="getBannerFile"
        ></q-btn>
      </div>
    </div>
    <div class="full-width account-header">
      <div class="avatar full-width flex justify-center">
        <div
          style="border-radius: 50%; border: solid 3px white; z-index: 10; position:relative"
          @click="getAvatarFile"
        >
          <q-avatar size="130px">
            <q-img src="../../assets/images/avatar.png" />
          </q-avatar>
          <div class="q-gutter-md edit-avatar">
            <q-input
              ref="avatarFileInput"
              style="display:none"
              v-model="avatarFile"
              type="file"
              label="Standard"
              @change="onSelectAvatarImage"
            ></q-input>
            <q-btn
              padding="0px"
              class="q-px-xl"
              label="edit"
              size="sm"
              color="secondary"
              text-color="white"
            ></q-btn>
          </div>
        </div>
      </div>
      <div class="text-h4 text-grey-10 text-center" style="font-weight: 500">
        KKOFFICIAL
      </div>
      <div
        class="text-center full-width flex justify-center items-center q-mt-sm"
        ref="userID"
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
        <div class="float-right flex">
          <q-btn
            icon="settings"
            class="q-mr-sm"
            outline
            color="grey-7"
            padding="10px"
          >
          </q-btn>

          <q-btn
            icon="share"
            class="q-mr-md"
            outline
            color="grey-7"
            padding="10px"
          >
          </q-btn>
        </div>
      </div>
      <div class="menus row q-pa-sm" style="margin-top: 150px" ref="menus">
        <div class="desktop-menu">
          <q-btn
            unelevated
            class="q-ma-sm"
            label="In Wallet"
            icon="loyalty"
            :text-color="currentTab == 0 ? 'primary' : 'grey'"
            @click="currentTab = 0"
            no-caps
          ></q-btn>
          <q-btn
            class="q-ma-sm"
            icon="history"
            flat
            label="Acitity"
            no-caps
            :text-color="currentTab == 1 ? 'primary' : 'grey'"
            @click="currentTab = 1"
          ></q-btn>
          <q-btn
            class="q-ma-sm"
            icon="redeem"
            label="Offers"
            flat
            no-caps
            :text-color="currentTab == 2 ? 'primary' : 'grey'"
            @click="currentTab = 2"
          ></q-btn>
          <q-btn
            class="q-ma-sm"
            icon="favorites"
            label="Favorites"
            flat
            no-caps
            :text-color="currentTab == 3 ? 'primary' : 'grey'"
            @click="currentTab = 3"
          ></q-btn>
        </div>
        <div class="mobile-menu">
          <q-btn
            unelevated
            class="q-ma-sm"
            icon="loyalty"
            :text-color="currentTab == 0 ? 'primary' : 'grey'"
            @click="currentTab = 0"
            no-caps
          ></q-btn>
          <q-btn
            class="q-ma-sm"
            icon="history"
            flat
            no-caps
            :text-color="currentTab == 1 ? 'primary' : 'grey'"
            @click="currentTab = 1"
          ></q-btn>
          <q-btn
            class="q-ma-sm"
            icon="redeem"
            flat
            no-caps
            :text-color="currentTab == 2 ? 'primary' : 'grey'"
            @click="currentTab = 2"
          ></q-btn>
          <q-btn
            class="q-ma-sm"
            icon="favorites"
            flat
            no-caps
            :text-color="currentTab == 3 ? 'primary' : 'grey'"
            @click="currentTab = 3"
          ></q-btn>
        </div>
      </div>
    </div>
    <div class="flex justify-between contentForm" ref="contentForm">
      <div
        style="width: 350px"
        class="side-bar"
        ref="sideBar"
        v-if="currentTab != 3"
      >
        <div style="position: sticky; top: 140px">
          <div v-if="currentTab == 0">
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
                  no-caps
                  style="width: 130px"
                  aria-label="Buy Now"
                />
                <q-btn
                  label="On Auction"
                  style="width: 130px"
                  outline
                  no-caps
                  aria-label="On Auction"
                />
                <q-btn
                  label="New"
                  outline
                  no-caps
                  style="width: 130px"
                  aria-label="New"
                />
                <q-btn
                  label="Has Offers"
                  style="width: 130px"
                  outline
                  no-caps
                  aria-label="Has Offers"
                />
              </div>
            </q-expansion-item>
            <q-separator />
          </div>
          <div v-if="currentTab == 1">
            <q-expansion-item
              expand-separator
              icon="star"
              label="Event Type"
              class="text-subtitle1 text-bold"
            >
              <q-separator />
              <div class="q-pa-md q-gutter-sm justify-around flex">
                <q-btn
                  label="Listings"
                  outline
                  no-caps
                  style="width: 130px"
                  aria-label="Listings"
                />
                <q-btn
                  label="Sales"
                  style="width: 130px"
                  outline
                  no-caps
                  aria-label="Sales"
                />
                <q-btn
                  label="Bids"
                  outline
                  no-caps
                  style="width: 130px"
                  aria-label="Bids"
                />
                <q-btn
                  label="Transfers"
                  style="width: 130px"
                  outline
                  no-caps
                  aria-label="Transfers"
                />
              </div>
            </q-expansion-item>
            <q-separator />
          </div>

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
          <div v-if="currentTab == 0">
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
          </div>
        </div>
      </div>
      <div class="content-list" :class="currentTab == 3 ? 'full-width' : ''">
        <div v-if="currentTab == 0">
          <div class="flex justify-between items-center q-mt-sm q-pa-sm">
            <div
              style="border: solid 1px #aaa;"
              class="rounded-borders q-px-sm  filter-input"
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
            <div class="flex float-right justify-center filter-select">
              <q-select
                filled
                v-model="item_filter"
                :options="item_options"
                class="q-pa-md"
                style="width: 220px"
                dense
              />
              <q-select
                filled
                v-model="sort_filter"
                :options="sort_options"
                class="q-pa-md"
                style="width: 220px"
                dense
              />
            </div>
          </div>
          <div class="row ">
            <div
              class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-12 q-pa-sm"
              v-for="item in 50"
              v-bind:key="item"
            >
              <ProductPackageCard></ProductPackageCard>
            </div>
          </div>
        </div>
        <div v-if="currentTab == 1" class="q-ma-sm">
          <q-table
            class="activity-table"
            title="Trading History"
            :data="activityList"
            :columns="columns"
            row-key="index"
            virtual-scroll
            :pagination.sync="pagination"
            :rows-per-page-options="[0]"
            no-data-label="No data to show"
          >
            <template v-slot:body-cell-event="props">
              <q-td :props="props">
                <q-icon
                  :name="eventIcon(props.row.event)"
                  size="1.5em"
                  class="q-pr-sm"
                />
                {{ props.row.event }}
              </q-td>
            </template>
            <template v-slot:body-cell-price="props">
              <q-td :props="props">
                <q-icon name="attach_money" size="1.5em" />
                {{ props.row.price }}
              </q-td>
            </template>
            <template v-slot:body-cell-item="props">
              <q-td :props="props">
                <q-avatar rounded>
                  <img src="../../assets/images/avatar.png" />
                </q-avatar>
                {{ props.row.item }}
              </q-td>
            </template>
            <template v-slot:body-cell-from="props">
              <q-td :props="props">
                <q-avatar size="30px">
                  <img src="../../assets/images/avatar.png" />
                </q-avatar>
                {{ props.row.from.name }}
              </q-td>
            </template>
            <template v-slot:body-cell-to="props">
              <q-td :props="props">
                <q-avatar size="30px">
                  <img src="../../assets/images/avatar.png" />
                </q-avatar>
                {{ props.row.to.name }}
              </q-td>
            </template></q-table
          >
        </div>
        <div v-if="currentTab == 2" class="q-ma-sm">
          <div class="flex justify-between ">
            <div
              class="offer-tab-button"
              :class="currentOfferTab == 'made' ? 'active' : ''"
              @click="currentOfferTab = 'made'"
            >
              Offers Made
            </div>
            <div
              class="offer-tab-button"
              :class="currentOfferTab == 'received' ? 'active' : ''"
              @click="currentOfferTab = 'received'"
            >
              Offers Received
            </div>
          </div>

          <q-table
            class="activity-table"
            :data="
              currentOfferTab == 'made' ? offerMadeList : offerReceivedList
            "
            :columns="columns"
            row-key="index"
            virtual-scroll
            :pagination.sync="pagination"
            :rows-per-page-options="[0]"
            no-data-label="No data to show"
          >
            <template v-slot:body-cell-event="props">
              <q-td :props="props">
                <q-icon
                  :name="eventIcon(props.row.event)"
                  size="1.5em"
                  class="q-pr-sm"
                />
                {{ props.row.event }}
              </q-td>
            </template>
            <template v-slot:body-cell-price="props">
              <q-td :props="props">
                <q-icon name="attach_money" size="1.5em" />
                {{ props.row.price }}
              </q-td>
            </template>
            <template v-slot:body-cell-item="props">
              <q-td :props="props">
                <q-avatar rounded>
                  <img src="../../assets/images/avatar.png" />
                </q-avatar>
                {{ props.row.item }}
              </q-td>
            </template>
            <template v-slot:body-cell-from="props">
              <q-td :props="props">
                <q-avatar size="30px">
                  <img src="../../assets/images/avatar.png" />
                </q-avatar>
                {{ props.row.from.name }}
              </q-td>
            </template>
            <template v-slot:body-cell-to="props">
              <q-td :props="props">
                <q-avatar size="30px">
                  <img src="../../assets/images/avatar.png" />
                </q-avatar>
                {{ props.row.to.name }}
              </q-td>
            </template></q-table
          >
        </div>
        <div v-if="currentTab == 3" class="q-ma-sm">
          <div class="row ">
            <div
              class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-12 q-pa-sm"
              v-for="item in 10"
              v-bind:key="item"
            >
              <ProductPackageDemoCard></ProductPackageDemoCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>
<script>
import fakeData from "../fakeData";
export default {
  name: "Profile",
  components: {
    ProductPackageCard: () => import("../../components/ProductPackageDemoCard")
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
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
      filter_text: "",
      bannerFile: null,
      avatarFile: null,
      columns: [
        {
          name: "event",
          label: "Event",
          align: "left",
          field: "event",
          sortable: true
        },
        {
          name: "item",
          align: "left",
          label: "Item",
          field: "item",
          sortable: true
        },
        {
          name: "price",
          label: "Unit Price",
          field: "price",
          sortable: true,
          align: "left"
        },
        {
          name: "quantity",
          label: "Quantity",
          field: "quantity",
          align: "left"
        },
        { name: "from", label: "From", field: "from", align: "left" },
        { name: "to", label: "To", field: "to", align: "left" },
        {
          name: "date",
          label: "Date",
          field: "date",
          align: "left"
        }
      ],
      activityList: fakeData.activity_data,
      offerMadeList: fakeData.activity_data,
      offerReceivedList: [],
      pagination: { rowsPerPage: 6 },
      currentOfferTab: "made"
    };
  },
  methods: {
    handleScroll(event) {
      let positionUserID = this.$refs["userID"].getBoundingClientRect();

      if (positionUserID.y < 15) {
        this.$refs.menus.style.position = "fixed";
        this.$refs.menus.style.top = "-80px";
        this.$refs.contentForm.style = "margin-top: 220px;";
        this.$refs.sideBar.position = "absolute";
      } else {
        this.$refs.contentForm.style = "margin-top: 20px;";
        this.$refs.menus.style.position = "relative";

        this.$refs.menus.style.top = "unset";
        this.$refs.contentForm.style = "margin-top: 0px;";
      }
    },
    getBannerFile() {
      this.$refs.bannerFileInput.$el.click();
    },
    onSelectBannerImage() {},
    getAvatarFile() {
      this.$refs.avatarFileInput.$el.click();
    },
    onSelectAvatarImage() {},
    eventIcon(icon_name) {
      let icon = "";
      switch (icon_name) {
        case "List":
          icon = "sell";
          break;
        case "Offer":
          icon = "back_hand";
          break;
      }
      return icon;
    }
  }
};
</script>
<style lang="scss" scoped>
.edit-avatar {
  display: none;
  position: absolute;
  top: 100px;
  right: 7px;
}
.account-header {
  .avatar {
    margin-top: -65px !important;
    cursor: pointer;
    &:hover {
      .edit-avatar {
        display: block;
      }
    }
  }
}
.edit-banner-button {
  position: absolute;
  top: 20px;
  right: 20px;
}
.menus {
  width: 100%;
  z-index: 100;
  background: white;
  border-bottom: solid 1px $grey-4;
  .desktop-menu {
    display: block;
  }
  .mobile-menu {
    display: none;
  }
}

.content-list {
  $width: 350px;
  width: calc(100% - #{$width});
}
.filter-input {
  $width: 450px;
  width: calc(100% - #{$width});
}
.side-bar {
  display: block;
  border-right: solid 1px $grey-4;
}
.contentForm {
  position: relative;
}
.filter-select {
  width: 450px;
}
.offer-tab-button {
  height: 60px;
  width: 48%;
  border: solid 1px $grey-4;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: $grey-6;
}
.offer-tab-button.active {
  color: $grey-10;
}

@media only screen and (max-width: 1200px) {
  .side-bar {
    display: none;
  }
  .content-list {
    width: 100%;
  }
}
@media only screen and (max-width: 700px) {
  .filter-input {
    width: 100%;
  }
  .filter-select {
    width: 100%;
  }
}

@media only screen and (max-width: 600px) {
  .menus {
    .desktop-menu {
      display: none;
    }
    .mobile-menu {
      display: block;
    }
  }
}
</style>
