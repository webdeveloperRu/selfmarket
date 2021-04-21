<template>
  <q-page class=" ">
    <div
      class="full-width action-tab"
      style="position:sticky; top: 60px; z-index: 2005; background: white"
      @mouseleave="selected_tab = ''"
    >
      <q-tabs
        v-model="selected_tab"
        class="text-teal q-pt-sm"
        outside-arrows
        mobile-arrows
      >
        <q-tab
          name="new"
          label="New"
          @mouseover.native="selected_tab = 'new'"
          @click.native="navigatePage('/rankings')"
        />
        <q-tab
          name="art"
          label="Art"
          @mouseover.native="selected_tab = 'art'"
          @click.native="navigatePage('/collection/art')"
        />
        <q-tab
          name="domain_names"
          label="Domain Names"
          @mouseover.native="selected_tab = 'domain_names'"
          @click.native="navigatePage('/collection/domain-names')"
        />
        <q-tab
          name="virtual_world"
          label="Virtual Worlds"
          @mouseover.native="selected_tab = 'virtual_world'"
          @click.native="navigatePage('/collection/virtual-worlds')"
        />
        <q-tab
          name="trading_cards"
          label="Trading Cards"
          @mouseover.native="selected_tab = 'trading_cards'"
          @click.native="navigatePage('/collection/trading-cards')"
        />
        <q-tab
          name="collectibles"
          label="Collectibles"
          @mouseover.native="selected_tab = 'collectibles'"
          @click.native="navigatePage('/collection/collectibles')"
        />
        <q-tab
          name="sports"
          label="Sports"
          @mouseover.native="selected_tab = 'sports'"
          @click.native="navigatePage('/collection/sports')"
        />
        <q-tab
          name="utility"
          label="Utility"
          @mouseover.native="selected_tab = 'utility'"
          @click.native="navigatePage('/collection/utility')"
        />
      </q-tabs>
      <q-separator />

      <q-tab-panels
        v-model="selected_tab"
        style="position: absolute"
        class="full-width shadow-2"
      >
        <q-tab-panel name="new">
          <NewCollection></NewCollection>
        </q-tab-panel>
        <q-tab-panel name="art">
          <Art></Art>
        </q-tab-panel>
        <q-tab-panel name="domain_names">
          <DomainNames></DomainNames>
        </q-tab-panel>
        <q-tab-panel name="trading_cards">
          <TradingCards></TradingCards>
        </q-tab-panel>
        <q-tab-panel name="virtual_world">
          <VirtualWorlds></VirtualWorlds>
        </q-tab-panel>
        <q-tab-panel name="collectibles">
          <Collectibles></Collectibles>
        </q-tab-panel>
        <q-tab-panel name="sports">
          <Sports></Sports>
        </q-tab-panel>
        <q-tab-panel name="utility">
          <Utility></Utility>
        </q-tab-panel>
      </q-tab-panels>
    </div>
  </q-page>
</template>

<script>
import NewCollection from "components/homepage/NewCollection.vue";
import Collectibles from "components/homepage/Collectibles.vue";
import DomainNames from "components/homepage/DomainNames.vue";
import Sports from "components/homepage/Sports.vue";
import TradingCards from "components/homepage/TradingCards.vue";
import Utility from "components/homepage/Utility.vue";
import Art from "components/homepage/Art.vue";
import VirtualWorlds from "components/homepage/VirtualWorlds.vue";
export default {
  name: "MyCollection",
  components: {
    NewCollection,
    Collectibles,
    DomainNames,
    Sports,
    TradingCards,
    Utility,
    Art,
    VirtualWorlds
  },
  data() {
    return {
      selected_tab: 0
    };
  },
  methods: {
    navigatePage(path) {
      this.selected_tab = "";
      this.$router.push(path).catch(() => {});
    }
  }
};
</script>
