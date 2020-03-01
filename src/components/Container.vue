<template>
  <v-container class="craft__container py-0">
    <v-row>
      <v-col class="py-2" cols="12">
        <div class="text__wrapper blue lighten-1">
          <h1 class="text text-center">Создание предметов</h1>
        </div>
      </v-col>
      <v-col class="py-0" cols="4" style="overflow: hidden">
        <div class="blue lighten-1">
          <h2 class="text text-center">Рецепты</h2>
        </div>
        <Recipes :items="recipes" />
      </v-col>
      <v-col class="py-0" cols="8" style="overflow: hidden">
        <div class="blue lighten-1">
          <h2 class="text text-center">Предмет</h2>
        </div>
        <Item :item="item" />
        <Inventory :inventory="inventory" />
      </v-col>
    </v-row>
    <v-btn @click="close" class="close">
      <v-icon>mdi-close</v-icon>
    </v-btn>
  </v-container>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";
import axios from "axios";
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
    },
    close: () => {
      if (process.env.NODE_ENV !== "production") {
        console.log("close");
      } else {
        axios.post("http://vuecraft/NUIClose", JSON.stringify({}));
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
        if (event.data.show !== 0) {
          let inventory = event.data.inventory.items;
          let recipes = event.data.recipes;

          if (inventory) {
            this.$store.commit("set_inventory", inventory);
          }

          if (recipes) {
            this.$store.commit("set_recipes", recipes);
          }
        }

        // console.log(this.inventory, this.recipes);
        // console.log(JSON.stringify(this.inventory));
        // console.log(JSON.stringify(this.recipes));
      });
    }

    document.addEventListener("keydown", event => {
      if (event.keyCode === 27) {
        this.close();
      }
    });
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

.close
  position: absolute
  top: 10px
  right: 10px
</style>
