<template>
  <div>
    <q-layout view="hHh Lpr lff" container style="height: 93vh">
      <q-drawer
        v-model="drawerLeft"
        show-if-above
        :width="350"
        :breakpoint="920"
        elevated
      >
        <q-scroll-area class="fit">
          <q-expansion-item
            expand-separator
            icon="perm_identity"
            label="Account settings"
            caption="John Doe"
          >
            <q-card>
              <q-card-section>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quidem, eius reprehenderit eos corrupti commodi magni quaerat ex
                numquam, dolorum officiis modi facere maiores architecto
                suscipit iste eveniet doloribus ullam aliquid.
              </q-card-section>
            </q-card>
          </q-expansion-item>
          <q-separator />
          <q-expansion-item
            expand-separator
            icon="perm_identity"
            label="Account settings"
            caption="John Doe"
          >
            <q-card>
              <q-card-section>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quidem, eius reprehenderit eos corrupti commodi magni quaerat ex
                numquam, dolorum officiis modi facere maiores architecto
                suscipit iste eveniet doloribus ullam aliquid.
              </q-card-section>
            </q-card>
          </q-expansion-item>
          <q-separator />
          <q-expansion-item
            expand-separator
            icon="perm_identity"
            label="Account settings"
            caption="John Doe"
          >
            <q-card>
              <q-card-section>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quidem, eius reprehenderit eos corrupti commodi magni quaerat ex
                numquam, dolorum officiis modi facere maiores architecto
                suscipit iste eveniet doloribus ullam aliquid.
              </q-card-section>
            </q-card>
          </q-expansion-item>
          <q-separator />
          <q-expansion-item
            expand-separator
            icon="perm_identity"
            label="Account settings"
            caption="John Doe"
          >
            <q-card>
              <q-card-section>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quidem, eius reprehenderit eos corrupti commodi magni quaerat ex
                numquam, dolorum officiis modi facere maiores architecto
                suscipit iste eveniet doloribus ullam aliquid.
              </q-card-section>
            </q-card>
          </q-expansion-item>
          <q-separator />
          <q-expansion-item
            expand-separator
            icon="perm_identity"
            label="Account settings"
            caption="John Doe"
          >
            <q-card>
              <q-card-section>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quidem, eius reprehenderit eos corrupti commodi magni quaerat ex
                numquam, dolorum officiis modi facere maiores architecto
                suscipit iste eveniet doloribus ullam aliquid.
              </q-card-section>
            </q-card>
          </q-expansion-item>
          <q-separator />
          <q-expansion-item
            expand-separator
            icon="perm_identity"
            label="Account settings"
            caption="John Doe"
          >
            <q-card>
              <q-card-section>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quidem, eius reprehenderit eos corrupti commodi magni quaerat ex
                numquam, dolorum officiis modi facere maiores architecto
                suscipit iste eveniet doloribus ullam aliquid.
              </q-card-section>
            </q-card>
          </q-expansion-item>
          <q-separator />
          <q-expansion-item
            expand-separator
            icon="perm_identity"
            label="Account settings"
            caption="John Doe"
          >
            <q-card>
              <q-card-section>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quidem, eius reprehenderit eos corrupti commodi magni quaerat ex
                numquam, dolorum officiis modi facere maiores architecto
                suscipit iste eveniet doloribus ullam aliquid.
              </q-card-section>
            </q-card>
          </q-expansion-item>
          <q-separator />
        </q-scroll-area>
      </q-drawer>

      <q-page-container>
        <q-page padding>
          <div class="q-pa-md" style="overflow-x:auto;  display: flex">
            <q-btn
              flat
              icon="mail"
              label="Art"
              style="min-width: 150px;"
              color="secondary"
            />
            <q-btn
              flat
              color="secondary"
              icon="domain"
              label="Domain Names"
              style="min-width: 200px;"
            />
            <q-btn
              flat
              color="secondary"
              icon="travel_explorer"
              label="Virtual Worlds"
              style="min-width: 200px;"
            />
            <q-btn
              flat
              color="secondary"
              icon="card_travel"
              label="Trading Cards"
              style="min-width: 200px;"
            />
            <q-btn
              flat
              color="secondary"
              icon="collections"
              label="Collectibles"
              style="min-width: 200px;"
            />
            <q-btn
              flat
              color="secondary"
              icon="sports"
              label="Sports"
              style="min-width: 150px;"
            />
            <q-btn
              flat
              icon="mail"
              label="Utility"
              style="min-width: 150px;"
              color="secondary"
            />
          </div>
          <q-separator />
          <div class="q-pa-md flex justify-between align-center">
            <div class="q-pa-md">14,198 results</div>
            <div class="flex">
              <q-select
                filled
                v-model="item_filter"
                :options="item_options"
                class="q-pa-md"
              />
              <q-select
                filled
                v-model="sort_filter"
                :options="sort_options"
                class="q-pa-md"
              />
            </div>
            <div class="row">
              <div
                class="col-xl-2 col-lg-3 col-md-4 col-sm-12 q-pa-sm"
                v-for="item in 50"
                v-bind:key="item"
              >
                <q-card class="item-card cursor-pointer q-hoverable">
                  <span class="q-focus-helper"></span>
                  <div class="float-right q-mx-md">
                    <q-btn
                      flat
                      round
                      icon="favorite_border"
                      aria-label="favorite-item"
                    />
                    <span class="text-subtitle1">4</span>
                  </div>
                  <img
                    src="https://cdn.quasar.dev/img/mountains.jpg"
                    alt="card-item"
                  />

                  <q-card-section>
                    <div class="text-h6">Our Changing Planet</div>
                  </q-card-section>
                </q-card>
              </div>
            </div>
          </div>
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
export default {
  name: "BrowsePage",
  data() {
    return {
      drawerLeft: false,
      item_filter: "Single Items",
      sort_filter: "Recently Listed",
      item_options: ["Single Items", "Bundles"],
      sort_options: [
        "Recently Listed",
        "Recently Listed",
        "Recently Sold",
        "Ending Soon",
        "Price: Low to High",
        "Price: High to Low",
        "Highest Last Sale",
        "Most Viewed",
        "Most Favorited",
        "Oldest"
      ]
    };
  }
};
</script>
