<template>
  <q-layout view="hHh Lpr lff" container style="height: 92vh; width: 99.5%">
    <q-drawer
      v-model="drawerLeft"
      show-if-above
      :width="280"
      :breakpoint="1150"
      bordered
    >
      <q-scroll-area class="fit">
        <q-tabs
          v-model="selectedTab"
          vertical
          class="text-grey-8 q-mt-lg"
          inline-label
        >
          <q-tab name="my-pyaouts" icon="view_list" label="My Payouts" disable>
            <q-tooltip content-class="bg-black">
              <div style="font-size: 14px; max-width: 250px;" class="q-pa-sm">
                Please select a collection and click the "Payouts" button to
                view payouts for that collection
              </div>
            </q-tooltip>
          </q-tab>
          <q-tab name="my-collections" icon="store" label="My Collections" />
          <q-tab name="community" icon="info" label="Commnutiy & Help" />
        </q-tabs>
      </q-scroll-area>
    </q-drawer>
    <q-page-container>
      <div class="q-pa-md q-gutter-y-sm">
        <div class="text-h5 flex items center">
          <div class="text-h5 q-mr-sm" style="font-size: 26px">
            My Collecitons
          </div>
          <q-spinner
            color="grey-5"
            size="1.5em"
            :thickness="10"
            v-if="loadingData"
          />
        </div>
        <div class="text-grey-7" style="font-size: 15px; font-weight: 300">
          Create collections (your own storefronts), upload digital creations,
          configure your commission, and sell NFTs to your fans - all for free!
          You can also manage smart contracts that you created outside of
          Selfmarket. Learn more
        </div>
        <div class="row">
          <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-12 q-pa-sm">
            <q-card
              class="create-collection-card cursor-pointer full-height"
              flat
              bordered
            >
              <q-card-section>
                <div
                  class="text-subtitle1 text-center q-mt-xl"
                  style="font-weight: 500"
                >
                  <q-icon
                    name="store"
                    class="text-grey-5"
                    style="font-size: 3rem"
                  ></q-icon>
                  <div>Create new collection</div>
                </div>
                <div class="text-center q-mt-lg">
                  <q-btn
                    color="primary"
                    label="Create"
                    no-caps
                    class="q-px-lg q-py-sm"
                    @click="createCollectionModal = true"
                  ></q-btn>
                </div>
              </q-card-section>
            </q-card>
          </div>

          <div
            class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-12 q-pa-sm"
            v-for="(item, index) in myCollections"
            v-bind:key="'my-colleciton' + index"
          >
            <CollectionPackageCard></CollectionPackageCard>
          </div>
        </div>

        <q-separator class="q-mt-xl" />
        <div>
          <p style="font-weight: 300; font-size: 22px; ">
            Looking for other NFT creation tools?
          </p>
          <p style="font-size: 15px; font-weight: 300" class="text-grey-6">
            Selfmarket is compatible with open blockchain standards, so you can
            create your work on other platforms, and come back and sell your
            work on Selfmarket.
          </p>
        </div>
        <div class="row">
          <div class=" col-md-3 col-sm-6 col-xs-12 q-pa-sm ">
            <q-card class="cursor-pointer" style="height: 200px">
              <q-card-section class="q-py-md">
                <div
                  class="text-h5 text-center q-my-md"
                  style="font-weight: 600"
                >
                  <q-img
                    src="../../assets/images/nft-tool/rarible.svg"
                    width="130px"
                  />
                </div>
                <div class="text-center text-grey-6 q-my-sm">
                  Rarible is a community-governed platform for creating digital
                  assets, with support for the ERC1155 standard.
                </div>
              </q-card-section>
            </q-card>
          </div>

          <div class=" col-md-3 col-sm-6 col-xs-12 q-pa-sm ">
            <q-card class="cursor-pointer" style="height: 200px">
              <q-card-section class="q-py-md">
                <div
                  class="text-h5 text-center q-my-md"
                  style="font-weight: 600"
                >
                  <q-img
                    src="../../assets/images/nft-tool/mintbase.svg"
                    width="130px"
                  />
                </div>
                <div class="text-center text-grey-6 q-my-sm">
                  Mintbase is a refined platform for creating digital assets,
                  with support for batch minting ERC721s.
                </div>
              </q-card-section>
            </q-card>
          </div>

          <div class=" col-md-3 col-sm-6 col-xs-12 q-pa-sm ">
            <q-card class="cursor-pointer" style="height: 200px">
              <q-card-section class="q-py-md">
                <div
                  class="text-h5 text-center q-my-md"
                  style="font-weight: 600"
                >
                  <q-img
                    src="../../assets/images/nft-tool/cargo.svg"
                    width="130px"
                  />
                </div>
                <div class="text-center text-grey-6 q-my-sm">
                  Cargo is a token minting platform specializing in efficient
                  batch minting of ERC721s.
                </div>
              </q-card-section>
            </q-card>
          </div>

          <div class=" col-md-3 col-sm-6 col-xs-12 q-pa-sm ">
            <q-card class="cursor-pointer" style="height: 200px">
              <q-card-section class="q-py-md">
                <div
                  class="text-h5 text-center q-my-md"
                  style="font-weight: 600"
                >
                  <q-img
                    src="../../assets/images/nft-tool/mintable.svg"
                    width="130px"
                  />
                </div>
                <div class="text-center text-grey-6 q-my-sm">
                  Mintable is a community controlled token minting platform with
                  some unique features.
                </div>
              </q-card-section>
            </q-card>
          </div>

          <div class=" col-md-3 col-sm-6 col-xs-12 q-pa-sm ">
            <q-card class="cursor-pointer" style="height: 200px">
              <q-card-section class="q-py-md">
                <div
                  class="text-h5 text-center q-my-md"
                  style="font-weight: 600"
                >
                  <q-img
                    src="../../assets/images/nft-tool/zora.png"
                    width="130px"
                  />
                </div>
                <div class="text-center text-grey-6 q-my-sm">
                  Zora is a permissionless protocol to mint, share and exchange
                  NFTs.
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>
      <q-dialog v-model="createCollectionModal">
        <q-card style="width: 700px; max-width: 80vw;" class="q-pa-md">
          <q-card-section class="row items-center q-pb-none">
            <q-space />
            <q-btn icon="close" flat round dense v-close-popup />
          </q-card-section>

          <q-card-section>
            <div
              style="font-size: 28px; font-weight: 300;"
              class="text-grey-10 text-center q-mb-md"
            >
              Create your collection
            </div>
            <p
              class="text-subtitle2 text-grey-8 q-px-xl text-center"
              style="font-weight: 300"
            >
              You can change these values later, along with configuring external
              URLs, payment options, and trading fees.
            </p>
          </q-card-section>
          <q-card-section>
            <!-- <div class="text-body2 text-grey-10">Logo</div>
            <div class="text-body2  text-grey-5">
              (350 x 350 recommended)
            </div>
            <div class="flex">
              <div class="collection-logo" @click="getCollectionLogoFile">
                <q-input
                  ref="collectionLogoFileInput"
                  style="display:none"
                  v-model="collectionLogoFile"
                  type="file"
                  label="Standard"
                  @change="onSelectCollectionLogoImage"
                ></q-input>

                <q-icon
                  name="image"
                  class="logo-demo-icon"
                  style="font-size: 5rem"
                ></q-icon>
              </div>
            </div> -->
            <div class="text-body2 text-grey-10 q-mt-lg q-mb-sm">Title *</div>
            <q-input v-model="collectionTitle" outlined dense />
            <div class="text-body2 text-grey-10 q-mt-lg ">
              Description *
            </div>
            <div class="text-body2 text-grey-5 q-mb-sm">
              (0 of 1000 characters used)
            </div>
            <q-input v-model="collectionDescription" outlined type="textarea" />
            <div class="text-body2 text-grey-10 q-mt-lg ">
              Category *
            </div>

            <q-select
              v-model="selectedCategory"
              :options="categoryList"
              class="q-mt-sm"
              outlined
              dense
            >
            </q-select>
            <div class="text-center q-my-md">
              <q-btn
                color="primary"
                class="q-pa-sm"
                no-caps
                label="Create"
                @click="createCollection"
                :loading="creatingColleciton"
              ></q-btn>
            </div>
          </q-card-section>
        </q-card>
      </q-dialog>
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "MyCollection",
  components: {
    CollectionPackageCard: () =>
      import("../../components/CollectionPackageCard.vue")
  },
  computed: {
    ...mapGetters({
      inRequest: "inRequest",
      notificationText: "notificationText",
      notificationType: "notificationType",
      requestSuccess: "requestSuccess",
      loggedIn: "auth/loggedIn",
      myCollections: "manage/myCollections",
      publicCategories: "manage/publicCategories"
    })
  },

  data() {
    return {
      drawerLeft: false,
      filterCollectionText: "",
      selectedTab: "my-collections",
      createCollectionModal: false,
      collectionTitle: "",
      collectionDescription: "",
      collectionLogoFile: null,
      loadingData: false,
      categoryList: [],
      selectedCategory: null,
      creatingColleciton: false
    };
  },

  created() {
    this.loadData();
  },
  methods: {
    async loadData() {
      this.loadingData = true;
      await this.$store.dispatch("manage/getCategories").then(() => {
        if (this.requestSuccess) {
          this.categoryList = [];
          for (let i = 0; i < this.publicCategories.length; i++) {
            this.categoryList[i] = {
              label: this.publicCategories[i].title,
              value: this.publicCategories[i].id
            };
          }
        }
      });
      await this.$store.dispatch("manage/getCollections").then(() => {
        this.$q.notify({
          type: this.notificationType,
          message: this.notificationText
        });
      });
      this.loadingData = false;
    },
    getCollectionLogoFile() {
      this.$refs.collectionLogoFileInput.$el.click();
    },
    onSelectCollectionLogoImage() {},
    createCollection() {
      if (this.collectionDescription == "") {
        this.$q.notify({
          type: "negative",
          message: "Description is required!"
        });
        return;
      }

      if (this.collectionTitle == "") {
        this.$q.notify({ type: "negative", message: "Title is required!" });
        return;
      }
      if (this.selectedCategory == null) {
        this.$q.notify({ type: "negative", message: "Category is required!" });
        return;
      }
      let collection = {
        category_id: this.selectedCategory.value,
        title: this.collectionTitle,
        description: this.collectionDescription
      };
      this.creatingColleciton = true;
      this.$store.dispatch("manage/addCollection", collection).then(() => {
        this.creatingColleciton = false;
        this.$q.notify({
          type: this.notificationType,
          message: this.notificationText
        });
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.q-tab {
  justify-content: left;
  margin-left: 15px;
}
.create-collection-card {
  &:hover {
    top: -3px;
    box-shadow: #aaa 0px 0px 5px 0px !important;
  }
}
.collection-logo {
  border: 3px dashed #cccccc;
  width: 160px;
  height: 160px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  color: $grey-4;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    border-color: #aaaaaa;
    color: $grey-6;
  }
}
</style>
