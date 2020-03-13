<template>
  <div class="recipes__wrapper">
    <v-expansion-panels accordion tile>
      <v-expansion-panel v-for="(item, i) in assignFilters" :key="i">
        <v-expansion-panel-header>{{ item.name }}</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-list-item-group color="primary" v-if="item.items">
            <v-list-item
              dense
              v-for="(recipe, i) in item.items"
              :key="i"
              @click="getItem(recipe, i)"
            >
              <div class="icon" v-html="renderIcon(recipe)"></div>
              <v-list-item-content two-line>
                <v-list-item-title v-text="recipe.name"></v-list-item-title>
                <v-list-item-subtitle
                  v-text="recipe.descr"
                ></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
          <v-list-item v-else>
            <v-list-item-content>
              <v-list-item-title>Нет доступных рецептов</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
import icons from "../plugins/icons";

export default {
  name: "Recipes",
  data: () => ({
    filteredRecipes: []
  }),
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
    },
    filter(handler, type) {
      let result = [];
      if (type.length > 1) {
        result = Object.entries(handler).filter(
          item => item[1].type === type[0] || item[1].type === type[1]
        );
      } else {
        result = Object.entries(handler).filter(
          item => item[1].type === type[0]
        );
      }

      if (result.length !== 0) {
        const resultObj = Object.assign(
          ...result.map(([key, val]) => ({ [key]: val }))
        );
        return resultObj;
      } else {
        const resultObj = Object.assign({}, {});
        return resultObj;
      }
    },
    assign() {
      console.log("called assign");
      let keys = Object.keys(this.filteredRecipes);
      for (let i = 0; i < keys.length; i++) {
        delete this.filteredRecipes[keys[i]];
      }
      this.filteredRecipes.splice(0, this.filteredRecipes.length);
      const foodAndDrink = this.filter(this.recipes, ["drink", "food"]);
      const weapon = this.filter(this.recipes, ["weapon"]);
      const ammo = this.filter(this.recipes, ["ammo"]);
      const throwable = this.filter(this.recipes, ["throwable"]);

      if (
        Object.keys(foodAndDrink).length !== 0 &&
        foodAndDrink.constructor === Object
      ) {
        this.filteredRecipes.push({
          name: "Еда и напитки",
          items: foodAndDrink
        });
      }

      if (Object.keys(weapon).length !== 0 && weapon.constructor === Object) {
        this.filteredRecipes.push({
          name: "Оружие",
          items: weapon
        });
      }

      if (Object.keys(ammo).length !== 0 && ammo.constructor === Object) {
        this.filteredRecipes.push({
          name: "Патроны",
          items: ammo
        });
      }

      if (
        Object.keys(throwable).length !== 0 &&
        throwable.constructor === Object
      ) {
        this.filteredRecipes.push({
          name: "Метательное",
          items: throwable
        });
      }
      console.log(this.filteredRecipes);
      return this.filteredRecipes;
    }
  },
  computed: {
    ...mapGetters(["inventory", "recipes"]),
    assignFilters() {
      return this.assign();
    }
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
