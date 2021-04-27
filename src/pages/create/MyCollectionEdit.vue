<template>
  <q-page-container class="q-ma-lg">
    <q-page-sticky
      position="top-left"
      class="full-width bg-white"
      style="justify-content: flex-start; z-index: 100; border-bottom:solid 1px #eeeeee"
    >
      <div class="q-pa-md cursor-pointer" @click="backToCollectionAssets">
        <q-icon name="arrow_back_ios"></q-icon>Back to collection
      </div>
    </q-page-sticky>
    <div class="flex full-width justify-center">
      <div style="max-width: 60%" class="full-width colleciotn-edit-form">
        <div class="text-h5">Edit your collection</div>

        <div class="text-h6 q-mt-md" style="font-size: 16px">Logo image</div>
        <div class="text-body2 text-grey-8 q-mt-sm">
          This image will also be used for navigation. 300 x 300 recommended.
        </div>
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

        <div class="text-h6 q-mt-lg" style="font-size: 16px">
          Featured image
        </div>
        <div class="text-body2 text-grey-8 q-mt-sm">
          (optional) This image will be used for featuring your collection on
          the homepage, category pages, or other promotional areas of OpenSea.
          600 x 400 recommended.
        </div>
        <div class="fetured-image-logo" @click="getCollectionLogoFile">
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

        <div class="text-h6 q-mt-lg" style="font-size: 16px">
          Name
        </div>
        <q-input outlined v-model="collectionName"></q-input>
        <div class="text-h6 q-mt-lg" style="font-size: 16px">
          Url
        </div>
        <div class="text-body2 text-grey-7 q-mb-sm">
          Customize your URL on OpenSea. Must only contain lowercase letters,
          numbers, and hyphens.
        </div>
        <q-input outlined v-model="collectionUrl"></q-input>

        <div class="text-h6 q-mt-lg" style="font-size: 16px">
          Description
        </div>
        <div class="text-body2 text-grey-7 q-mb-sm">
          Markdown syntax is supported. 23 of 1000 characters used.
        </div>
        <q-input
          outlined
          v-model="collectionDescription"
          type="textarea"
        ></q-input>

        <div class="text-h6 q-mt-lg" style="font-size: 16px">
          Category
        </div>
        <div class="text-body2 text-grey-7 q-mb-sm">
          Adding a category will help make your item discoverable on OpenSea.
        </div>
        <q-btn color="white" text-color="grey" label="Addd category" no-caps>
        </q-btn>

        <div class="text-h6 q-mt-lg" style="font-size: 16px">
          Links
        </div>

        <div class="text-h6 q-mt-lg" style="font-size: 16px">
          Commision
        </div>
        <div class="text-body2 text-grey-7 q-mb-sm">
          Collect a fee when a user sells one of your items. This is deducted
          from the final sale price and paid bi-weekly to a payout address of
          your choosing. Learn more
        </div>

        <div class="text-h6 q-mt-lg" style="font-size: 16px">
          Authorized Editors
        </div>
        <div class="text-body2 text-grey-7 q-mb-sm">
          These accounts are allowed to modify your collection settings and
          create new items. If you’d like to authorize new accounts or remove
          them, contact us on Discord.
        </div>
        <q-btn label="you" no-caps color="white" text-color="primary"></q-btn>

        <div class="flex justify-between q-mt-lg">
          <q-btn color="primary" label="Submit Chagnes" class="q-pa-sm"></q-btn>
          <q-btn
            class="q-pa-sm"
            color="white"
            text-color="grey"
            label="Delete Collection"
          ></q-btn>
        </div>
      </div>
    </div>
  </q-page-container>
</template>

<script>
export default {
  name: "MyCollection",
  components: {
    ProductPackageCard: () => import("../../components/ProductPackageCard")
  },

  data() {
    return {
      drawerLeft: false,
      filterCollectionText: "",
      selectedTab: "my-collections",
      createCollectionModal: false,
      collectionName: "",
      collectionDescription: "",
      collectionLogoFile: null,
      collectionID: 30,
      collectionName: "",
      collectionUrl: "",
      collectionDescription: ""
    };
  },
  methods: {
    getCollectionLogoFile() {
      this.$refs.collectionLogoFileInput.$el.click();
    },
    onSelectCollectionLogoImage() {},
    backToCollectionAssets() {
      this.$router.push("/my-collection/" + this.collectionID + "/assets/edit");
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
.fetured-image-logo {
  border: 3px dashed #cccccc;
  width: 300px;
  height: 200px;
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

@media only screen and (max-width: 600px) {
  .colleciotn-edit-form {
    max-width: 90% !important;
  }
}
</style>
