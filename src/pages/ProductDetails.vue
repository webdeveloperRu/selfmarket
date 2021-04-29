<template>
  <q-page class="q-pa-sm justify-center flex">
    <div class="full-width" style="max-width: 90%;">
      <div class="row q-mt-md full-width">
        <div class="col-12 col-md-5 q-pa-sm">
          <q-card class="item-card cursor-pointer q-hoverable full-width">
            <span class="q-focus-helper"></span>
            <div class="float-right q-mx-md">
              <q-btn
                flat
                round
                icon="favorite_border"
                aria-label="favorite-item"
              />
              <span
                class="text-subtitle1"
                v-if="currentProduct != null && currentProduct != undefined"
                >{{ currentProduct.vote }}</span
              >
              <span class="text-subtitle1">4</span>
            </div>
            <img src="../assets/images/product-demo.png" alt="card-item" />
          </q-card>
          <q-list bordered class="rounded-borders q-my-md">
            <q-card flat>
              <q-card-section class="">
                <div class="text-h6">
                  <q-icon name="subject" style="font-size: 1.5rem"></q-icon>
                  <span class="text-subtitle1 q-px-sm" style="font-weight:600"
                    >Details</span
                  >
                </div>
              </q-card-section>
              <q-separator />
              <q-card-section>
                <q-avatar size="30px">
                  <img src="../assets/images/avatar.png" />
                </q-avatar>
                Created by
                <q-btn flat color="primary" no-caps rounded to="/accounts/30"
                  >Dr burry
                </q-btn>
                <div class="text-subtitle1 q-mt-sm text-grey">
                  EtherMushroom #20 - # MEDIUM space
                </div>
              </q-card-section>
            </q-card>
            <q-separator />
            <q-expansion-item>
              <template v-slot:header>
                <q-item-section avatar>
                  <q-icon name="label" />
                </q-item-section>
                <q-item-section>
                  <span class="text-subtitle1" style="font-weight: 500"
                    >Properties</span
                  >
                </q-item-section>
              </template>

              <q-card>
                <q-card-section>
                  <q-btn
                    v-for="index in [1, 2, 3, 4, 5]"
                    v-bind:key="'property' + index"
                    :label="'property' + index"
                    outline
                    color="primary"
                    siz="lg"
                    class="q-ma-sm q-pa-md"
                  >
                  </q-btn>
                </q-card-section>
              </q-card>
            </q-expansion-item>

            <q-separator />

            <q-expansion-item>
              <template v-slot:header>
                <q-item-section avatar>
                  <q-icon name="vertical_split" />
                </q-item-section>

                <q-item-section>
                  <span class="text-subtitle1" style="font-weight: 500"
                    >About Crypto</span
                  >
                </q-item-section>
              </template>
              <q-card>
                <q-card-section>
                  Hi everyone. We have launched a new collection in the Nord
                  Field Team. Creating a new world. And new characters, we were
                  wondering what we could do. We want to share them with you!
                  @grafdramoola - creater. Our team - support.
                  https://opensea.io/accounts/GrafDramoola
                </q-card-section>
              </q-card>
            </q-expansion-item>
            <q-separator />

            <q-expansion-item>
              <template v-slot:header>
                <q-item-section avatar>
                  <q-icon name="ballot" />
                </q-item-section>

                <q-item-section>
                  <span class="text-subtitle1" style="font-weight: 500"
                    >Chain info</span
                  >
                </q-item-section>
              </template>

              <q-card>
                <q-card-section>
                  <div class="flex justify-between">
                    <div class="text-subtitle1">Contract Address</div>
                    <div class="text-blue">OX03023..23424</div>
                  </div>
                  <div class="flex justify-between">
                    <div class="text-subtitle1">Token ID</div>
                    <div class="">23421234242432423465756</div>
                  </div>

                  <div class="flex justify-between">
                    <div class="text-subtitle1">BlockChain</div>
                    <div class="">Ehtrum</div>
                  </div>
                </q-card-section>
              </q-card>
            </q-expansion-item>
          </q-list>
        </div>
        <div class="col-12 col-md-7 q-pa-sm">
          <div class="flex justify-between">
            <q-btn
              to="/"
              flat
              color="primary"
              icon-right="verified"
              label="The Sandbox"
              padding="none"
            >
              <q-tooltip content-class="bg-black">
                <div style="font-size: 14px">Verfied collection</div>
              </q-tooltip>
            </q-btn>

            <q-btn-group flat>
              <q-btn icon="refresh" color="grey-7" outline>
                <q-tooltip content-class="bg-black">
                  <div style="font-size: 14px">Refresh meta data</div>
                </q-tooltip>
              </q-btn>
              <q-btn icon="open_in_new" color="grey-7" outline>
                <q-tooltip content-class="bg-black">
                  <div style="font-size: 14px">View on the Sandbox</div>
                </q-tooltip>
              </q-btn>
              <q-btn icon="share" color="grey-7" outline>
                <q-tooltip content-class="bg-black">
                  <div style="font-size: 14px">Share</div>
                </q-tooltip>
              </q-btn>
              <q-btn icon="more_vert" color="grey-7" outline>
                <q-tooltip content-class="bg-black">
                  <div style="font-size: 14px">More</div>
                </q-tooltip>
              </q-btn>
            </q-btn-group>
          </div>
          <div
            class="text-h4 q-py-md text-grey-9"
            style="font-size: 30px; font-weight: 500"
            v-if="currentProduct != null"
          >
            {{ currentProduct.title }}
          </div>
          <div
            class="text-h4 q-py-md text-grey-9"
            style="font-size: 30px; font-weight: 500"
            v-else
          >
            Product Demo
          </div>

          <div>
            <q-avatar size="30px">
              <img src="../assets/images/avatar.png" />
            </q-avatar>
            Owned by
            <q-btn flat color="primary" no-caps rounded to="/accounts/30"
              >Dr burry
            </q-btn>
            <q-icon
              name="visibility"
              style="font-size: 1.5rem"
              color="grey"
              class="q-px-sm"
            ></q-icon>
            <span
              class="text-subtitle1 text-grey"
              v-if="currentProduct != undefined && currentProduct != null"
              >{{ currentProduct.views }} views</span
            >
            <span class="text-subtitle1 text-grey" v-else>3 views</span>
          </div>
          <!-- <q-card class="q-my-md">
            <q-card-section class="bg-red text-white">
              <div class="text-h6">
                <q-icon
                  name="schedule"
                  style="font-size: 1.5rem"
                  class="q-px-md"
                ></q-icon>
                <span class="text-subtitle1">Sale ends today in 00:04:13</span>
              </div>
            </q-card-section>
            <q-card-section class="flex items-center">
              <div
                class="text-h4 text-grey-9"
                style="font-size: 28px; font-weight: 500"
              >
                Ξ 0.48
              </div>
              <div class="text-subtitle1 text-grey q-px-sm">($1,077.20)</div>
            </q-card-section>

            <q-separator />

            <q-card-actions align="center">
              <q-btn color="primary" style="width: 200px;height: 50px" no-caps
                >Buy Now</q-btn
              >
            </q-card-actions>
          </q-card> -->
          <q-list bordered class="rounded-borders">
            <q-expansion-item
              expand-separator
              icon="timeline"
              label="Status"
              class="text-subtitle1 text-bold"
            >
              <q-separator />
              <div class="q-pa-md q-gutter-sm justify-around flex"></div>
            </q-expansion-item>
          </q-list>
          <q-list bordered class="rounded-borders q-mt-md">
            <q-expansion-item
              expand-separator
              icon="local_offer"
              label="Listings"
              class="text-subtitle1 text-bold"
            >
              <q-separator />
              <div class="q-pa-md q-gutter-sm ">
                <div class="row full-width q-pa-sm">
                  <div class="col-4 col-sm-3 text-subtitle1">From</div>
                  <div class="col-4 text-subtitle1">
                    Price
                  </div>
                  <div class="col-4 col-sm-3 text-subtitle1">
                    Expiration
                  </div>
                </div>
                <q-separator />
                <div v-for="item in [1, 2, 3, 4]" v-bind:key="'listing' + item">
                  <div class="row full-width q-pa-sm">
                    <div class="col-4 col-sm-3">
                      <q-avatar size="30px">
                        <img src="../assets/images/avatar.png" />
                      </q-avatar>
                      <span class="q-px-sm text-subtitle1">jacke</span>
                    </div>
                    <div class="col-4">
                      <div class="flex">
                        <div
                          class="text-subtitle1 q-px-sm"
                          style="font-weight: 600"
                        >
                          Ξ 0.48
                        </div>
                        <div class="text-subtitle2 text-grey ellipsis">
                          ($1,077.20)
                        </div>
                      </div>
                    </div>
                    <div class="col-4 col-sm-3">
                      <span class="text-subtitle1 text-grey">
                        in 4 minutes</span
                      >
                    </div>
                    <div class="col-12 col-sm-2">
                      <q-btn outline no-caps color="primary" class="float-right"
                        >Buy</q-btn
                      >
                    </div>
                  </div>
                  <q-separator />
                </div>
              </div>
            </q-expansion-item>
          </q-list>
          <q-list bordered class="rounded-borders q-mt-md">
            <q-expansion-item
              expand-separator
              icon="toc"
              label="Offers"
              class="text-subtitle1 text-bold"
            >
              <q-separator />
              <div class="q-pa-md q-gutter-sm ">
                <div class="row full-width border q-pa-sm">
                  <div class="col-4 col-sm-3 text-subtitle1">From</div>
                  <div class="col-4 text-subtitle1">
                    Price
                  </div>
                  <div class="col-4 col-sm-3 text-subtitle1">
                    Expiration
                  </div>
                </div>
                <q-separator />

                <div class="row full-width q-pa-sm">
                  <div class="col-4 col-sm-3">
                    <q-avatar size="30px">
                      <img src="../assets/images/avatar.png" />
                    </q-avatar>
                    <span class="q-px-sm text-subtitle1">jacke</span>
                  </div>
                  <div class="col-4">
                    <div class="flex">
                      <div
                        class="text-subtitle1 q-px-sm"
                        style="font-weight: 600"
                      >
                        Ξ 0.48
                      </div>
                      <div class="text-subtitle2 text-grey ellipsis">
                        ($1,077.20)
                      </div>
                    </div>
                  </div>
                  <div class="col-4 col-sm-3">
                    <span class="text-subtitle1 text-grey"> in 4 minutes</span>
                  </div>
                </div>
                <q-separator />
                <div class="full-width q-pa-sm">
                  <q-btn no-caps outline color="primary" size="lg">
                    Make Offer</q-btn
                  >
                </div>
              </div>
            </q-expansion-item>
          </q-list>
        </div>
      </div>
      <q-list bordered class="rounded-borders q-my-md">
        <q-expansion-item
          icon="swap_vert"
          label="Trading History"
          style="font-weight: 600"
        >
          <q-card>
            <q-card-section>
              <q-table
                class="trading-table"
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
                    <q-icon name="menu" size="1.5em" class="q-pr-sm" />
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
            </q-card-section>
          </q-card>
        </q-expansion-item>
      </q-list>
    </div>
  </q-page>
</template>

<script>
import fakeData from "./fakeData";
import { mapGetters } from "vuex";

export default {
  name: "ProductDetails",
  computed: {
    ...mapGetters({
      inRequest: "inRequest",
      notificationText: "notificationText",
      notificationType: "notificationType",
      requestSuccess: "requestSuccess",
      loggedIn: "auth/loggedIn",
      currentProduct: "manage/currentProduct"
    })
  },

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
        {
          name: "date",
          label: "Date",
          field: "date",
          align: "left"
        }
      ],
      data: fakeData.activity_data,
      pagination: { rowsPerPage: 15 }
    };
  }
};
</script>
