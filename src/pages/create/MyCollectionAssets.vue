<template>
  <div style="height: 92vh;" class="flex">
    <div class="side-bar">
      <q-tabs
        v-model="selectedTab"
        vertical
        class="text-grey-8 q-mt-lg side-bar-menus"
        style="width: 280px"
        inline-label
      >
        <q-tab name="my-pyaouts" icon="view_list" label="My Payouts" disable>
          <q-tooltip content-class="bg-black">
            <div style="font-size: 14px; max-width: 250px;" class="q-pa-sm">
              Please select a collection and click the "Payouts" button to view
              payouts for that collection
            </div>
          </q-tooltip>
        </q-tab>
        <q-tab name="my-collections" icon="store" label="My Collections" />
        <q-tab name="community" icon="info" label="Commnutiy & Help" />
      </q-tabs>
    </div>
    <div class="container">
      <div
        class="q-pa-md cursor-pointer router-bar"
        @click="backToMyCollections"
      >
        <q-icon name="arrow_back_ios"></q-icon>Back to my collections
      </div>
      <div class="colleciton-body items-center" style="margin-top: 53px">
        <q-img
          src="../../assets/images/collection-banner.webp"
          height="200px"
        />
        <div class="q-gutter-md edit-banner-button">
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
        <div class="flex full-width items-center justify-center">
          <div style="max-width: 90%" class="full-width">
            <div class="flex full-width  q-ma-sm q-mt-xl justfy-between">
              <q-img
                :src="currentCollection.avatar"
                class="colleciton-logo"
              ></q-img>
              <div class="info q-ml-lg" style="width:60%">
                <div class="text-h4" style="font-size: 40px">
                  {{ currentCollection.title }}
                </div>
                <div class="text-body2 text-grey-7 q-mt-lg">
                  {{ currentCollection.description }}
                </div>
                <div class="flex q-mt-lg">
                  <q-btn
                    color="white"
                    round
                    text-color="grey"
                    icon="edit"
                    class="q-ma-sm"
                    @click="navigateEditCollectionPage"
                  >
                    <q-tooltip content-class="bg-black">
                      <div
                        style="font-size: 14px; max-width: 250px;"
                        class="q-pa-sm"
                      >
                        Edit
                      </div>
                    </q-tooltip>
                  </q-btn>
                  <q-btn
                    color="white"
                    round
                    text-color="grey"
                    icon="view_list"
                    class="q-ma-sm"
                  >
                    <q-tooltip content-class="bg-black">
                      <div
                        style="font-size: 14px; max-width: 250px;"
                        class="q-pa-sm"
                      >
                        Payouts
                      </div>
                    </q-tooltip>
                  </q-btn>

                  <q-btn
                    color="white"
                    round
                    text-color="grey"
                    icon="open_in_browser"
                    class="q-ma-sm"
                  >
                    <q-tooltip content-class="bg-black">
                      <div
                        style="font-size: 14px; max-width: 250px;"
                        class="q-pa-sm"
                      >
                        Visit
                      </div>
                    </q-tooltip>
                  </q-btn>
                </div>
              </div>
            </div>
            <div class="q-mt-lg flex items-center">
              <q-icon style="font-size:1.5rem" name="view_module"></q-icon>
              <span class="text-h6 q-mx-sm">ITEMS</span>
            </div>
            <q-separator spaced />
            <q-btn
              label="Add New Item"
              no-caps
              color="primary"
              class="q-px-lg q-py-sm"
              @click="navigateCreateProductPage"
            ></q-btn>
            <div
              class="flex justify-between items-center q-mt-sm q-pa-sm full-width"
            >
              <div
                style="border: solid 1px #aaa;"
                class="rounded-borders q-px-sm filter-input"
              >
                <q-input
                  dense
                  borderless
                  v-model="filterText"
                  color="grey-6"
                  input-class="text-left"
                  placeholder="Search items, collections and accounts"
                  class="q-ml-md full-width"
                >
                  <template v-slot:prepend>
                    <q-icon v-if="filterText === ''" name="search" />
                    <q-icon
                      v-else
                      name="clear"
                      class="cursor-pointer"
                      @click="filterText = ''"
                    />
                  </template>
                </q-input>
              </div>
              <q-space />
              <div class="flex float-right justify-center filter-select">
                <q-select
                  filled
                  v-model="sortFilter"
                  :options="sortOptions"
                  class="q-pa-md"
                  style="width: 220px"
                  dense
                />
              </div>
            </div>
            <div v-if="loadingProducts">
              <q-spinner color="grey-5" size="3em" :thickness="10" />
            </div>

            <div class="row q-mt-xl" v-else>
              <div
                class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-12 q-pa-sm"
                v-for="(product, index) in publicProducts"
                v-bind:key="'my-collection-product' + index"
              >
                <ProductPackageCard
                  :product="product"
                  :editable="true"
                ></ProductPackageCard>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "MyCollection",
  components: {
    ProductPackageCard: () => import("../../components/ProductPackageCard.vue")
  },
  computed: {
    ...mapGetters({
      inRequest: "inRequest",
      notificationText: "notificationText",
      notificationType: "notificationType",
      requestSuccess: "requestSuccess",
      loggedIn: "auth/loggedIn",
      currentCollection: "manage/currentCollection",
      publicProducts: "manage/publicProducts"
    })
  },

  data() {
    return {
      drawerLeft: false,
      filterCollectionText: "",
      selectedTab: "my-collections",
      bannerFile: null,
      filterText: "",
      sortFilter: "Recently Listed",
      sortOptions: [
        "Recently Listed",
        "Recently Sold",
        "Ending Soon",
        "Price: Lowto High",
        "Price: High to Low",
        "Highest Last Sale",
        "Most Viewed",
        "MostFavorited",
        "Oldest"
      ],
      loadingProducts: false
    };
  },
  created() {
    this.getProducts();
  },
  methods: {
    getProducts() {
      this.loadingProducts = true;
      let params = {
        collection_id: this.currentCollection.id
      };
      this.$store.dispatch("manage/getProducts", params).then(() => {
        this.loadingProducts = false;
      });
    },
    getBannerFile() {
      this.$refs.bannerFileInput.$el.click();
    },
    onSelectCollectionLogoImage() {},

    backToMyCollections() {
      this.$router.push("/my-collection");
    },

    onSelectBannerImage() {},

    navigateEditCollectionPage() {
      this.$router.push(
        "/my-collection/" + this.currentCollection.id + "/edit"
      );
    },
    navigateCreateProductPage() {
      this.$router.push(
        "/my-collection/" + this.currentCollection.id + "/assets/create"
      );
    }
  }
};
</script>
<style lang="scss" scoped>
$width: 280px;

.side-bar {
  position: sticky;
  width: $width;
  position: relative;
  border-right: solid 1px $grey-3;
}
.side-bar-menus {
  position: fixed;
}
.container {
  $width: 280px;
  width: calc(100% - #{$width});
  position: relative;
  .router-bar {
    position: fixed;
    top: 72px;
    z-index: 100;
    width: 100%;
    background: white;
    border-bottom: solid 1px $grey-3;
  }
}

.q-tab {
  justify-content: left;
  margin-left: 15px;
}
.colleciton-logo {
  width: 180px;
  height: 180px;
}

.collection-body {
  margin-top: 72px;
  position: relative;
}
.edit-banner-button {
  position: absolute;
  top: 60px;
  right: 20px;
}
.filter-input {
  $width: 350px;
  width: calc(100% - #{$width});
}

@media only screen and (max-width: 900px) {
  .side-bar {
    display: none;
  }
  .container {
    width: 100%;
  }
}

@media only screen and (max-width: 600px) {
  .colleciton-logo {
    width: 64px;
    height: 64px;
  }
}
</style>
