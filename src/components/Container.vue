<template>
  <v-container class="craft__container">
    <v-row>
      <v-col cols="12">
        <div class="text__wrapper blue lighten-1">
          <h1 class="text text-center">Создание предметов</h1>
        </div>
      </v-col>
      <v-col cols="4" style="overflow: hidden">
        <div class="blue lighten-1">
          <h2 class="text text-center">Рецепты</h2>
        </div>
        <Recipes :items="recipes" />
      </v-col>
      <v-col cols="8" style="overflow: hidden">
        <div class="blue lighten-1">
          <h2 class="text text-center">Предмет</h2>
        </div>
        <Item :item="item" />
        <Inventory :inventory="inventory" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";
import Recipes from "./Recipes";
import Item from "./Item";
import Inventory from "./Inventory";

export default {
  name: "Container",
  components: { Recipes, Item, Inventory },
  methods: {
    show: data => {
      if (data === 1) {
        document.querySelector("#app").classList.add("active");
      } else {
        document.querySelector("#app").classList.remove("active");
      }
    }
  },
  mounted() {
    if (process.env.NODE_ENV !== "production") {
      console.log("development mode");
      document.querySelector("#app").classList.add("active");
    } else {
      window.addEventListener("message", event => {
        // console.log(JSON.stringify(event.data));
        this.show(event.data.show);
        let inventory = event.data.inventory.items;
        let recipes = event.data.recipes;

        if (inventory) {
          this.$store.commit("set_inventory", inventory);
        }

        if (recipes) {
          this.$store.commit("set_recipes", recipes);
        }

        console.log(this.inventory, this.recipes);
      });
    }
  },
  computed: {
    ...mapState(["recipes", "inventory", "item"]),
    ...mapGetters(["recipes", "inventory", "item"]),
    ...mapMutations(["set_inventory", "set_recipes"])
  }
};
</script>

<style lang="sass" scoped>
.text
  color: #fff
  margin: 0

  &__wrapper
    width: 50%
    margin: 0 auto
    border-radius: 3rem

.craft
  &__container
    height: 100%
</style>
