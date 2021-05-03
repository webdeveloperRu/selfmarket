<template>
  <div>
    <q-layout view="hHh Lpr lff" container style="height: 92vh">
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
            label="Event Type"
            class="text-subtitle1 text-bold"
          >
            <q-separator />
            <div class="q-pa-md q-gutter-sm justify-around flex">
              <q-btn
                label="Listings"
                outline
                style="width: 130px"
                aria-label="Listings"
              />
              <q-btn
                label="Sales"
                style="width: 130px"
                outline
                aria-label="Sales"
              />
              <q-btn
                label="Bids"
                outline
                style="width: 130px"
                aria-label="Bids"
              />
              <q-btn
                label="Transfers"
                style="width: 130px"
                outline
                aria-label="Transfers"
              />
            </div>
          </q-expansion-item>
          <q-separator />
          <q-expansion-item
            expand-separator
            icon="view_comfy"
            label="Collections"
            class="text-subtitle1 text-bold"
            @show="showCollectionList"
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
                @keyup="searchCollectionByTitle"
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
        </q-scroll-area>
      </q-drawer>

      <q-page-container>
        <q-page padding>
          <div class="q-pa-md" style="overflow-x:auto;  display: flex">
            <div
              class="tab-button"
              :class="currentTab == 0 ? 'active' : ''"
              @click="currentTab = 0"
            >
              <img
                src="../assets/images/categories/art-small.png"
                height="30"
              />
              <div class="q-pl-sm text-subtitle2" style="font-weight: 400">
                Art
              </div>
            </div>
            <div
              class="tab-button"
              :class="currentTab == 1 ? 'active' : ''"
              @click="currentTab = 1"
            >
              <img
                src="../assets/images/categories/domain-small.png"
                height="30"
              />
              <div class="q-pl-sm text-subtitle2" style="font-weight: 400">
                Domain Names
              </div>
            </div>
            <div
              class="tab-button"
              :class="currentTab == 2 ? 'active' : ''"
              @click="currentTab = 2"
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
              @click="currentTab = 3"
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
              @click="currentTab = 4"
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
              @click="currentTab = 5"
            >
              <img
                src="../assets/images/categories/sports-small.png"
                height="30"
              />
              <div class="q-pl-sm text-subtitle2" style="font-weight: 400">
                Sports
              </div>
            </div>
            <div
              class="tab-button"
              :class="currentTab == 6 ? 'active' : ''"
              @click="currentTab = 6"
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
          <div class="q-pa-sm q-mt-md">
            <q-table
              class="activity-table"
              title="Trading History"
              :data="data"
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
                    <img src="../assets/images/avatar.png" />
                  </q-avatar>
                  {{ props.row.item }}
                </q-td>
              </template>
              <template v-slot:body-cell-from="props">
                <q-td :props="props">
                  <q-avatar size="30px">
                    <img src="../assets/images/avatar.png" />
                  </q-avatar>
                  {{ props.row.from.name }}
                </q-td>
              </template>
              <template v-slot:body-cell-to="props">
                <q-td :props="props">
                  <q-avatar size="30px">
                    <img src="../assets/images/avatar.png" />
                  </q-avatar>
                  {{ props.row.to.name }}
                </q-td>
              </template></q-table
            >
          </div>
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import fakeData from "./fakeData";
export default {
  name: "ActivityPage",
  components: {},

  data() {
    return {
      drawerLeft: false,
      filterCollectionText: "",
      items: [{}, {}, {}, {}, {}, {}, {}],
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
        { name: "date", label: "Date", field: "date", align: "left" }
      ],
      data: fakeData.activity_data,
      pagination: {
        rowsPerPage: 15
      },
      currentTab: 0
    };
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
  created() {
    this.$store.commit("manage/setOffsetCollectionTagList", 0);
    this.$store.commit("manage/initCollectionTagList");
  },
  methods: {
    onLoad(index, done) {
      setTimeout(() => {
        if (this.items) {
          this.items.push({}, {}, {}, {}, {}, {}, {});
          done();
        }
      }, 2000);
    },
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
    }
  }
};
</script>
<style lang="sass">
.activity-table
  /* height or max-height is important */
  height: 75vh
  .q-table__top,
  .q-table__bottom,
  thead tr:first-child th /* bg color is important for th; just specify one */
    background-color: #fff

  thead tr th
    position: sticky
    z-index: 1
  /* this will be the loading indicator */
  thead tr:last-child th
    /* height of all previous header rows */
    top: 48px
  thead tr:first-child th
    top: 0
</style>
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
