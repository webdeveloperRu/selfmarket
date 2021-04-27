<template>
  <div class="row">
    <div class="col-1"></div>
    <div class="col-4 q-pa-sm">
      <q-avatar size="70px" font-size="52px" text-color="white" class="q-mb-md">
        <q-img :src="categoryAvatar"></q-img>
      </q-avatar>

      <div class="text-h4 q-mb-sm text-grey-9" style="font-size: 30px">
        {{ title }}
      </div>
      <div class="text-subtitle2 text-grey-9" style="font-weight: 400">
        {{ description }}
      </div>

      <q-separator vertical />
      <div></div>
    </div>
    <q-separator vertical class="q-ma-sm" />

    <div class="col-6 q-pa-sm">
      <div class="text-h5 q-my-md">Top Collections</div>
      <div class="row">
        <div class="col-4">
          <q-btn
            align="left"
            class="text-subtitle2 text-grey"
            flat
            no-caps
            style="width: 100%; font-weight: 300"
            to="/collection/MICK-JAGGER-X-EXTRAWEG"
          >
            <div class="ellipsis">
              CyberKongz
            </div>
          </q-btn>
          <q-btn
            class="text-subtitle2 text-grey"
            align="left"
            flat
            no-caps
            style="width: 100%; font-weight: 300"
            to="/collection/MICK-JAGGER-X-EXTRAWEG"
          >
            <div class="ellipsis">
              MICK JAGGER X EXTRAWEG
            </div>
          </q-btn>
          <q-btn
            class="text-subtitle2 text-grey"
            align="left"
            style="width: 100%; font-weight: 300"
            flat
            no-caps
            to="/collection/MICK-JAGGER-X-EXTRAWEG"
          >
            <div class="ellipsis">
              Morgan Heritage Digital Collectibles
            </div>
          </q-btn>
          <q-btn
            class="text-subtitle2 text-grey"
            align="left"
            style="width: 100%; font-weight: 300"
            flat
            no-caps
            to="/collection/MICK-JAGGER-X-EXTRAWEG"
          >
            <div class="ellipsis">
              Proximity x Mohammed Omran x Lacza x The Pyramid Watch
            </div>
          </q-btn>
        </div>
        <div class="col-4">
          <q-btn
            class="text-subtitle2 text-grey"
            align="left"
            style="width: 100%; font-weight: 300"
            flat
            no-caps
            to="/collection/MICK-JAGGER-X-EXTRAWEG"
          >
            <div class="ellipsis">
              CyberKongz
            </div>
          </q-btn>
          <q-btn
            class="text-subtitle2 text-grey"
            align="left"
            style="width: 100%; font-weight: 300"
            flat
            no-caps
            to="/collection/MICK-JAGGER-X-EXTRAWEG"
          >
            <div class="ellipsis">
              MICK JAGGER X EXTRAWEG
            </div>
          </q-btn>
          <q-btn
            class="text-subtitle2 text-grey"
            align="left"
            style="width: 100%; font-weight: 300"
            flat
            no-caps
            to="/collection/MICK-JAGGER-X-EXTRAWEG"
          >
            <div class="ellipsis">
              Morgan Heritage Digital Collectibles
            </div>
          </q-btn>
          <q-btn
            class="text-subtitle2 text-grey"
            align="left"
            style="width: 100%; font-weight: 300"
            flat
            no-caps
            to="/collection/MICK-JAGGER-X-EXTRAWEG"
          >
            <div class="ellipsis">
              Proximity x Mohammed Omran x Lacza x The Pyramid Watch
            </div>
          </q-btn>
        </div>
        <div class="col-4">
          <q-btn
            class="text-subtitle2 text-grey"
            align="left"
            style="width: 100%; font-weight: 300"
            flat
            no-caps
            to="/collection/MICK-JAGGER-X-EXTRAWEG"
          >
            <div class="ellipsis">
              CyberKongz
            </div>
          </q-btn>
          <q-btn
            class="text-subtitle2 text-grey"
            align="left"
            style="width: 100%; font-weight: 300"
            flat
            no-caps
            to="/collection/MICK-JAGGER-X-EXTRAWEG"
          >
            <div class="ellipsis">
              MICK JAGGER X EXTRAWEG
            </div>
          </q-btn>
          <q-btn
            class="text-subtitle2 text-grey"
            align="left"
            style="width: 100%; font-weight: 300"
            flat
            no-caps
            to="/collection/MICK-JAGGER-X-EXTRAWEG"
          >
            <div class="ellipsis">
              Morgan Heritage Digital Collectibles
            </div>
          </q-btn>
          <q-btn
            class="text-subtitle2 text-grey"
            align="left"
            style="width: 100%; font-weight: 300"
            flat
            no-caps
            to="/collection/MICK-JAGGER-X-EXTRAWEG"
          >
            <div class="ellipsis">
              Proximity x Mohammed Omran x Lacza x The Pyramid Watch
            </div>
          </q-btn>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CategoryPanel",
  props: {
    title: String,
    description: String
  },
  data() {
    return {
      categoryAvatar: String
    };
  },
  created() {
    switch (this.title) {
      case "New":
        this.categoryAvatar = require("../assets/images/categories/new-category.svg");
        break;
      case "Art":
        this.categoryAvatar = require("../assets/images/categories/art.png");
        break;
      case "Domain Names":
        this.categoryAvatar = require("../assets/images/categories/domain.png");
        break;

      case "Virtual Worlds":
        this.categoryAvatar = require("../assets/images/categories/virtual-worlds.png");
        break;

      case "Trading Cards":
        this.categoryAvatar = require("../assets/images/categories/trading-cards.png");
        break;

      case "Collectibles":
        this.categoryAvatar = require("../assets/images/categories/collectibles.png");
        break;
      case "Sports":
        this.categoryAvatar = require("../assets/images/categories/sports.png");
        break;
      case "Utility":
        this.categoryAvatar = require("../assets/images/categories/utility.png");
        break;
    }
  }
};
</script>
