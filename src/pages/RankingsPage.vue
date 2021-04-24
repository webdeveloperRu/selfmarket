<template>
  <div class="q-pa-sm">
    <q-layout view="hHh Lpr lff" container style="height: 88vh">
      <div class="text-h4 text-center q-pa-lg">
        Top Non-Fungible Tokens
      </div>
      <div class="text-subtitle1 text-center q-pa-md">
        Volume, Average, Price and other top statistics for non-fungible
        tokens(NFTs), updated hourly.
      </div>
      <div class="q-pa-md" style="overflow-x:auto;  display: flex">
        <q-btn
          flat
          icon="mail"
          label="Art"
          style="min-width: 150px;"
          color="secondary"
          aria-label="Art"
        />
        <q-btn
          flat
          color="secondary"
          icon="domain"
          label="Domain Names"
          style="min-width: 200px;"
          aria-label="Domain Names"
        />
        <q-btn
          flat
          color="secondary"
          icon="travel_explorer"
          label="Virtual Worlds"
          style="min-width: 200px;"
          aria-label="Virtual Worlds"
        />
        <q-btn
          flat
          color="secondary"
          icon="card_travel"
          label="Trading Cards"
          style="min-width: 200px;"
          aria-label="Trading Cards"
        />
        <q-btn
          flat
          color="secondary"
          icon="collections"
          label="Collectibles"
          style="min-width: 200px;"
          aria-label="Collectibles"
        />
        <q-btn
          flat
          color="secondary"
          icon="sports"
          label="Sports"
          style="min-width: 150px;"
          aria-label="Sports"
        />
        <q-btn
          flat
          icon="mail"
          label="Utility"
          style="min-width: 150px;"
          color="secondary"
          aria-label="Utility"
        />
      </div>
      <q-separator />
      <q-page-container>
        <q-table
          class="activity-table"
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
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
import fakeData from "./fakeData";
export default {
  name: "RankingsPage",
  components: {},
  data() {
    return {
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
      }
    };
  },
  methods: {
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
<style lang="sass">
.activity-table
  /* height or max-height is important */
  height: 65vh
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
