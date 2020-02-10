<template>
  <div class="">
    <v-list-item-group color="primary" v-if="items">
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
    <v-list-item v-else>
      <v-list-item-content>
        <v-list-item-title>Нет доступных рецептов</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  name: "Receipts",
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    ...mapMutations(["set_item"]),
    getItem(item) {
      this.inventory.forEach(invItem => {
        item.ingridients.forEach(ingItem => {
          if (invItem.name === ingItem.name) {
            ingItem.count = invItem.count;
            return item;
          }
        });
      });
      return this.$store.commit("set_item", item);
    }
  },
  computed: {
    ...mapState(["inventory"])
  }
};
</script>
