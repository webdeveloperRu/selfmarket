<template>
  <q-page-container class="q-ma-lg">
    <q-page-sticky
      position="top-left"
      class="full-width bg-white"
      style="justify-content: flex-start; z-index: 100; border-bottom:solid 1px #eeeeee"
    >
      <div class="q-pa-md cursor-pointer" @click="backToCollectionAssets">
        <q-icon name="arrow_back_ios"></q-icon>Back to
        {{ currentCollection.title }}
      </div>
    </q-page-sticky>
    <div class="flex full-width justify-center">
      <div style="max-width: 60%" class="full-width colleciotn-edit-form">
        <div class="text-h5 flex items-center">
          Edit item
          <q-spinner
            class="q-px-sm"
            color="grey-5"
            size="2em"
            :thickness="10"
            v-if="updatingProduct"
          />
        </div>

        <div class="text-h6 q-mt-md" style="font-size: 16px">
          Image
        </div>
        <div style="overflow-x: auto; display:flex">
          <div class="product-logo q-ma-sm" @click="getProductMediaFile">
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
              style="font-size: 5rem; position: absolute"
              class="select-avatar-icon"
            ></q-icon>
            <q-img
              :src="productAvatarUrl"
              v-if="productAvatarUrl != ''"
              height="200px"
            >
            </q-img>
            <q-icon
              name="image"
              class="logo-demo-icon"
              style="font-size: 5rem; position: absolute"
              v-else
            ></q-icon>
          </div>
          <div
            class="product-image q-ma-sm"
            v-for="(image, index) in currentProduct.images"
            v-bind:key="'product-image' + index"
          >
            <q-img :src="image.img" height="200px"></q-img>
            <q-btn
              round
              color="primary"
              icon="check"
              size="sm"
              class="set-primary-image-button"
            />
            <q-btn
              round
              color="red"
              size="sm"
              icon="delete"
              class="remove-image-button"
              @click="removeProductImage(image.id)"
            />
          </div>
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
          Description
        </div>
        <div class="text-body2 text-grey-7 q-mb-sm">
          The description will be included on the item's detail page underneath
          its image. Markdown syntax is supported.
        </div>
        <q-input
          outlined
          v-model="productDescription"
          placeholder="Provide a detailed description of your item"
          type="textarea"
        ></q-input>

        <div class="text-h6 q-mt-lg" style="font-size: 16px">
          Price Type
        </div>

        <q-select v-model="selectedPriceType" :options="priceTypeList" outlined>
        </q-select>

        <div class="text-h6 q-mt-lg" style="font-size: 16px">
          Price
        </div>
        <q-input
          outlined
          v-model="productPrice"
          type="number"
          placeholder="item price"
        ></q-input>

        <div class="text-h6 q-mt-lg" style="font-size: 16px">
          Symbol
        </div>
        <q-input
          outlined
          v-model="productSymbol"
          placeholder="item symbol"
        ></q-input>

        <div class="text-h6 q-mt-lg" style="font-size: 16px">
          Decimals
        </div>
        <q-input
          outlined
          v-model="productDecimals"
          type="number"
          placeholder="item address"
        ></q-input>

        <div class="text-h6 q-mt-lg" style="font-size: 16px">
          Delivery time
        </div>
        <q-input
          outlined
          v-model="deliveryTime"
          type="number"
          placeholder="item address"
        ></q-input>

        <div class="text-h6 q-mt-lg" style="font-size: 16px">
          Product slug
        </div>
        <q-input
          outlined
          v-model="productSlug"
          placeholder="item slug"
        ></q-input>

        <div class="q-gutter-sm q-mt-lg">
          <q-checkbox v-model="isNFT" label="NFT" />
        </div>

        <!-- <q-list bordered class="rounded-borders q-mt-lg">
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
        </q-list> -->

        <div class="flex justify-between q-mt-lg">
          <q-btn
            color="primary"
            label="Submit Change"
            no-caps
            class="q-pa-sm"
            @click="updateProduct"
            :loading="sendingRequest"
          ></q-btn>
        </div>
      </div>
    </div>
  </q-page-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "UpdateProduct",
  components: {
    // ProductPackageCard: () => import("../../components/ProductPackageCard")
  },
  computed: {
    ...mapGetters({
      inRequest: "inRequest",
      notificationText: "notificationText",
      notificationType: "notificationType",
      requestSuccess: "requestSuccess",
      loggedIn: "auth/loggedIn",
      publicCategories: "manage/publicCategories",
      currentCollection: "manage/currentCollection",
      currentProduct: "manage/currentProduct"
    })
  },

  data() {
    return {
      drawerLeft: false,
      filterCollectionText: "",
      selectedTab: "my-collections",
      createCollectionModal: false,
      productName: "",
      productDescription: "",
      productMediaFile: null,
      productUrl: "",
      selectedPriceType: { label: "USD", value: "USD" },
      priceTypeList: [
        { label: "USD", value: "USD" },
        { label: "BTC", value: "BTC" },
        { label: "ETH", value: "ETH" },
        { label: "LCD", value: "LCD" }
      ],
      productPrice: "",
      productAddress: "",
      productSymbol: "",
      isNFT: false,
      productDecimals: 0,
      deliveryTime: 0,
      productSlug: "",
      productAvatarUrl: "",
      productAvatarFile: null,
      updatingProduct: false,
      sendingRequest: false
    };
  },
  created() {
    this.loadingData();
  },
  methods: {
    loadingData() {
      this.productName = this.currentProduct.title;
      this.productDescription = this.currentProduct.description;
      this.productPrice = this.currentProduct.price;
      for (let i = 0; i < this.priceTypeList.length; i++) {
        if (this.priceTypeList[i].value == this.currentProduct.price_type)
          this.selectedPriceType = this.priceTypeList[i];
      }
      this.isNFT = this.currentProduct.is_nft;
      this.productAddress = this.currentProduct.address;
      this.productSymbol = this.currentProduct.symbol;
      this.productDecimals = this.currentProduct.decimals;
      this.deliveryTime = this.currentProduct.delivery_time;
      this.productSlug = this.currentProduct.slug;
    },
    getProductMediaFile() {
      this.$refs.productMediaFileInput.$el.click();
    },
    onSelectProductMedia(e) {
      let image = e.target.files[0];
      if (image !== undefined) {
        this.createImage(image);
        this.productAvatarFile = image;
      }
    },
    createImage(file) {
      var reader = new FileReader();
      reader.onload = e => {
        this.productAvatarUrl = e.target.result;
      };
      reader.readAsDataURL(file);
    },

    backToCollectionAssets() {
      this.$router.push(
        "/my-collection/" + this.currentCollection.id + "/assets/edit"
      );
    },

    updateProduct() {
      this.sendingRequest = true;
      let product = {
        title: this.productName,
        description: this.productDescription,
        price_type: this.selectedPriceType.value,
        price: this.productPrice,
        is_nft: this.isNFT,
        address: this.productAddress,
        symbol: this.productSymbol,
        decimals: this.productDecimals,
        delivery_time: this.deliveryTime,
        slug: this.productSlug,
        collection_id: this.currentProduct.collection_id
      };
      this.$store.dispatch("manage/updateProduct", product).then(() => {
        this.sendingRequest = false;
        this.$q.notify({
          type: this.notificationType,
          message: this.notificationText
        });
      });
      if (this.productAvatarFile != null) {
        this.updateProductAvatar();
      }
    },

    updateProductAvatar() {
      let productImageData = {
        file: this.productAvatarFile,
        alt_title: "",
        productID: this.currentProduct.id
      };
      this.updatingProduct = true;
      this.$store
        .dispatch("manage/addProductImage", productImageData)
        .then(() => {
          this.productAvatarUrl = "";
          this.$store
            .dispatch("manage/getProductByID", this.currentProduct.id)
            .then(() => {
              this.updatingProduct = false;
            });
        });
    },

    removeProductImage(imageID) {
      this.updatingProduct = true;
      this.$store.dispatch("manage/removeProductImage", imageID).then(() => {
        this.$q.notify({
          type: this.notificationType,
          message: this.notificationText
        });
        this.$store
          .dispatch("manage/getProductByID", this.currentProduct.id)
          .then(() => {
            this.updatingProduct = false;
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

.product-logo {
  position: relative;
  border: 3px dashed #cccccc;
  width: 300px;
  height: 200px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  color: $grey-4;
  display: flex;
  min-width: 200px;
  justify-content: center;
  align-items: center;
  .select-avatar-icon {
    display: none;
    z-index: 10;
  }

  &:hover {
    border-color: #aaaaaa;
    color: $grey-6;
    .select-avatar-icon {
      display: block;
    }
  }
}

.product-image {
  min-width: 200px;
  box-shadow: #aaa 0px 0px 5px 0px;
  position: relative;
  width: 300px;
  height: 200px;
  cursor: pointer;
  margin-top: 10px;
  color: $grey-4;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    .set-primary-image-button,
    .remove-image-button {
      display: block;
    }
  }
}
.set-primary-image-button {
  position: absolute;
  right: 50px;
  top: 10px;
  display: none;
}
.remove-image-button {
  position: absolute;
  top: 10px;
  right: 10px;
  display: none;
}
@media only screen and (max-width: 600px) {
  .colleciotn-edit-form {
    max-width: 90% !important;
  }
}
</style>
