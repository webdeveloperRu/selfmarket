<template>
  <div class="q-pa-sm flex justify-center">
    <div container style="height: 90vh;" class="rankings-container full-width">
      <div class="text-h4 text-center q-pa-lg" style="font-size: 30px">
        Top Non-Fungible Tokens
      </div>
      <div class="text-subtitle1 text-center ">
        Volume, Average, Price and other top statistics for non-fungible
        tokens(NFTs), updated hourly.
      </div>
      <div class="q-pa-md" style="overflow-x:auto;  display: flex">
        <div
          class="tab-button"
          :class="currentTab == 'all' ? 'active' : ''"
          @click="setCurrentTab('all')"
        >
          <div class=" text-subtitle2" style="font-weight: 400">
            All
          </div>
        </div>

        <div
          class="tab-button"
          :class="currentTab == 'new' ? 'active' : ''"
          @click="setCurrentTab('new')"
        >
          <div class=" text-subtitle2" style="font-weight: 400">
            New
          </div>
        </div>

        <div
          class="tab-button"
          :class="currentTab == category.id ? 'active' : ''"
          @click="setCurrentTab(category.id)"
          v-for="category in publicCategories"
          v-bind:key="'ranking-cateogry-tab' + category.id"
        >
          <div class=" text-subtitle2" style="font-weight: 400">
            {{ category.title }}
          </div>
        </div>
      </div>
      <q-separator />
      <div>
        <q-table
          class="activity-table"
          :data="collectionRankings"
          :columns="columns"
          virtual-scroll
          flat
          hide-pagination
          :pagination.sync="pagination"
          :rows-per-page-options="[0]"
          hide-no-data
        >
          <template v-slot:header="props">
            <q-tr :props="props">
              <q-th
                v-for="col in props.cols"
                :key="col.name"
                :props="props"
                class="text-primary"
                style="font-size: 15px"
              >
                {{ col.label }}
              </q-th>
            </q-tr>
          </template>

          <template v-slot:body-cell-title="props">
            <q-td :props="props">
              {{ props.row.index }}{{ props.row.title }}
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
      <div
        class="q-my-md flex justify-center"
        v-observe-visibility="visibilityChanged"
      >
        <q-spinner
          size="3em"
          color="primary"
          :thickness="10"
          v-if="loadingRankings"
        />
        <div class="text-body1" v-else>
          {{ collectionRankings.length }} results
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import fakeData from "./fakeData";
import { mapGetters } from "vuex";
import Vue from "vue";

import VueObserveVisibility from "vue-observe-visibility";
Vue.use(VueObserveVisibility);

export default {
  name: "RankingsPage",
  components: {},
  computed: {
    ...mapGetters({
      inRequest: "inRequest",
      notificationText: "notificationText",
      notificationType: "notificationType",
      requestSuccess: "requestSuccess",
      publicCategories: "manage/publicCategories",
      collectionRankings: "manage/collectionRankings",
      offsetRankings: "manage/offsetRankings"
    })
  },

  data() {
    return {
      columns: [
        {
          name: "title",
          label: "COLLECTION",
          align: "left",
          field: "title"
        },
        {
          name: "last_7_day_volume",
          align: "left",
          label: "7 DAY VOLUME",
          field: "last_7_day_volume",
          sortable: true
        },
        {
          name: "last_7_DAY_CHANGE",
          label: "7 DAY CHANGE",
          field: "last_7_DAY_CHANGE",
          align: "left",
          sortable: true
        },
        {
          name: "TOTAL_VOLUME",
          label: "TOTAL VOLUME",
          field: "TOTAL_VOLUME",
          align: "left",
          sortable: true
        },
        {
          name: "AVG_PRICE",
          label: "AVG PRICE",
          field: "AVG_PRICE",
          align: "left",
          sortable: true
        },
        {
          name: "OWNERS",
          label: "OWNERS",
          field: "OWNERS",
          align: "left",
          sortable: true
        },
        {
          name: "ASSETS",
          label: "ASSETS",
          field: "ASSETS",
          align: "left",
          sortable: true
        }
      ],
      data: fakeData.activity_data,
      pagination: {
        rowsPerPage: 0
      },
      currentTab: "all",
      loadingRankings: false
    };
  },

  created() {
    this.loadData();
  },
  mounted() {},

  methods: {
    setCurrentTab(tab) {
      this.$store.commit("manage/initCollectionRankings");
      this.currentTab = tab;
    },

    loadData() {
      this.$store.dispatch("manage/getCategories");
      this.setCurrentTab("all");
    },

    getRankings() {
      this.loadingRankings = true;

      if (this.currentTab == "new" || this.currentTab == "all") {
        let params = {
          offset: this.offsetRankings
        };
        this.$store
          .dispatch("manage/getRankingsStatus", [this.currentTab, params])
          .then(() => {
            this.loadingRankings = false;
          });
      } else {
        let params = { offset: this.offsetRankings };

        this.$store
          .dispatch("manage/getRankingsCategoryID", [this.currentTab, params])
          .then(() => {
            this.loadingRankings = false;
          });
      }
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
    visibilityChanged(isVisible, entry) {
      if (isVisible) {
        this.getRankings();
      }
    }
  }
};
</script>
<style lang="sass">
.activity-table
  /* height or max-height is important */
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
.rankings-container {
  max-width: 85%;
}

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

@media only screen and (max-width: 600px) {
  .rankings-container {
    max-width: 100%;
  }
}
</style>
