<template>
  <v-list-item-group color="primary">
    <v-list-item v-for="(item, i) in items" :key="i" @click="getItem(item)">
      <v-list-item-icon>
        <v-icon v-text="item.icon"></v-icon>
      </v-list-item-icon>
      <v-list-item-content two-line>
        <v-list-item-title v-text="item.name"></v-list-item-title>
        <v-list-item-subtitle v-text="item.descr"></v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-list-item-group>
</template>

<script>
import {
  mdiPistol,
  mdiFire,
  mdiKnifeMilitary,
  mdiHandcuffs,
  mdiGasCylinder
} from "@mdi/js";
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "Receipts",
  props: {
    items: {
      type: Object,
      default: () => {}
    }
  },
  comments: {
    mdiPistol,
    mdiFire,
    mdiKnifeMilitary,
    mdiHandcuffs,
    mdiGasCylinder
  },
  methods: {
    getItem: item => {
      console.log(item);
    }
  },
  computed: {
    ...mapGetters(["item", "ingridients"]),
    ...mapMutations(["set_item"])
  }
};
</script>

<style></style>
