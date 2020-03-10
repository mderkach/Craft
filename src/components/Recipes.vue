<template>
  <div class="recipes__wrapper">
    <v-list-item-group color="primary" v-if="items">
      <v-list-item
        dense
        v-for="(item, i) in items"
        :key="i"
        @click="getItem(item, i)"
      >
        <div class="icon" v-html="renderIcon(item)"></div>
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
import icons from "../plugins/icons";

export default {
  name: "Recipes",
  props: {
    items: {
      type: Object,
      default: () => {}
    }
  },
  mixins: [icons],
  methods: {
    ...mapMutations(["set_item"]),
    getItem(item, recipe) {
      item.recipe = recipe;
      this.inventory.forEach(invItem => {
        if (invItem.name === "esx_item") {
          invItem.name = invItem.extra.name;
        }
        item.ingredients.forEach(ingItem => {
          ingItem.label = null;
          if (invItem.name === ingItem.item) {
            ingItem.count = invItem.amount;
            return item;
          }
        });
      });
      return this.$store.commit("set_item", item);
    },
    renderIcon(item) {
      this.icons.forEach(icon => {
        if (item.icon === icon.name) {
          item.icon = icon.icon;
        }
      });
      return item.icon;
    }
  },
  computed: {
    ...mapState(["inventory"])
  }
};
</script>

<style lang="sass">
.icon
  width: 30px
  height: 30px
  margin-right: 10px
  img
    width: 100%
.recipes__wrapper
  height: 100%
  max-height: 736px
  overflow: auto
  &::-webkit-scrollbar
    margin: 0 6px
    width: 6px
    height: 6px
  &::-webkit-scrollbar-button
    width: 4px
    height: 4px
  &::-webkit-scrollbar-thumb
    background: #e1e1e1
    border: 0px none #ffffff
    border-radius: 50px
    &:hover
      background: #ffffff
    &:active
      background: #42a5f5
  &::-webkit-scrollbar-track
    background: #666666
    border: 5px none #ffffff
    border-radius: 100px
    &:hover
      background: #666666
    &:active
      background: #ffffff
  &::-webkit-scrollbar-corner
    background: transparent
</style>
