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
        <div class="text-h5">Create new item</div>

        <div class="text-h6 q-mt-md" style="font-size: 16px">
          Image, Video, Audio, or 3D Model
        </div>
        <div class="text-body2 text-grey-8 q-mt-sm">
          File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG,
          GLB, GLTF. Max size: 40 MB
        </div>

        <div class="product-logo" @click="getProductMediaFile">
          <q-input
            ref="productMediaFileInput"
            style="display:none"
            v-model="productMediaFile"
            type="file"
            label="Standard"
            @change="onSelectProductMedia"
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
        <q-input
          outlined
          v-model="productName"
          placeholder="item name"
        ></q-input>
        <div class="text-h6 q-mt-lg" style="font-size: 16px">
          External Link
        </div>
        <div class="text-body2 text-grey-7 q-mb-sm">
          OpenSea will include a link to this URL on this item's detail page, so
          that users can click to learn more about it. You are welcome to link
          to your own webpage with more details.
        </div>
        <q-input
          outlined
          v-model="productUrl"
          placeholder="https://yoursite.io/item/123"
        ></q-input>

        <div class="text-h6 q-mt-lg" style="font-size: 16px">
          Description
        </div>
        <div class="text-body2 text-grey-7 q-mb-sm">
          The description will be included on the item's detail page underneath
          its image. Markdown syntax is supported.
        </div>
        <q-input
          outlined
          v-model="collectionDescription"
          placeholder="Provide a detailed description of your item"
          type="textarea"
        ></q-input>

        <q-list bordered class="rounded-borders q-mt-lg">
          <q-item>
            <q-item-section avatar top>
              <q-icon name="list" color="black" size="30px" />
            </q-item-section>

            <q-item-section top>
              <q-item-label lines="1">
                <span class="text-subtitle2">Properties</span>
              </q-item-label>
              <q-item-label caption lines="1">
                Textual traits that show up as rectangles
              </q-item-label>
            </q-item-section>

            <q-item-section top side>
              <div class="text-grey-8 q-gutter-xs">
                <q-btn
                  class="q-mt-sm"
                  size="12px"
                  outline
                  padding="sm"
                  icon="add"
                  color="primary"
                />
              </div>
            </q-item-section>
          </q-item>

          <q-separator spaced />
          <q-item>
            <q-item-section avatar top>
              <q-icon name="star_rate" color="black" size="30px" />
            </q-item-section>

            <q-item-section top>
              <q-item-label lines="1">
                <span class="text-subtitle2">Levels</span>
              </q-item-label>
              <q-item-label caption lines="1">
                Numerical traits that show as a progress bar
              </q-item-label>
            </q-item-section>

            <q-item-section top side>
              <div class="text-grey-8 q-gutter-xs">
                <q-btn
                  class="q-mt-sm"
                  size="12px"
                  outline
                  padding="sm"
                  icon="add"
                  color="primary"
                />
              </div>
            </q-item-section>
          </q-item>
          <q-separator spaced />
          <q-item>
            <q-item-section avatar top>
              <q-icon name="bar_chart" color="black" size="30px" />
            </q-item-section>

            <q-item-section top>
              <q-item-label lines="1">
                <span class="text-subtitle2">Stats</span>
              </q-item-label>
              <q-item-label caption lines="1">
                Numerical traits that just show as numbers
              </q-item-label>
            </q-item-section>

            <q-item-section top side>
              <div class="text-grey-8 q-gutter-xs">
                <q-btn
                  class="q-mt-sm"
                  size="12px"
                  outline
                  padding="sm"
                  icon="add"
                  color="primary"
                />
              </div>
            </q-item-section>
          </q-item>

          <q-separator spaced />
          <q-item>
            <q-item-section avatar top>
              <q-icon name="list" color="black" size="30px" />
            </q-item-section>

            <q-item-section top>
              <q-item-label lines="1">
                <span class="text-subtitle2">Properties</span>
              </q-item-label>
              <q-item-label caption lines="1">
                Textual traits that show up as rectangles
              </q-item-label>
            </q-item-section>

            <q-item-section top side>
              <div class="text-grey-8 q-gutter-xs">
                <q-btn
                  class="q-mt-sm"
                  size="12px"
                  outline
                  padding="sm"
                  icon="add"
                  color="primary"
                />
              </div>
            </q-item-section>
          </q-item>
        </q-list>

        <div class="flex justify-between q-mt-lg">
          <q-btn color="primary" label="Create" disable class="q-pa-sm"></q-btn>
        </div>
      </div>
    </div>
  </q-page-container>
</template>

<script>
export default {
  name: "MyCollection",
  components: {
    // ProductPackageCard: () => import("../../components/ProductPackageCard")
  },

  data() {
    return {
      drawerLeft: false,
      filterCollectionText: "",
      selectedTab: "my-collections",
      createCollectionModal: false,
      productName: "",
      collectionDescription: "",
      productMediaFile: null,
      collectionID: 30,
      productUrl: ""
    };
  },
  methods: {
    getProductMediaFile() {
      this.$refs.productMediaFileInput.$el.click();
    },
    onSelectProductMedia() {},
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

.product-logo {
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
