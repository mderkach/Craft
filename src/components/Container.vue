<template>
  <v-container class="craft__container">
    <v-row>
      <v-col cols="12">
        <div class="text__wrapper blue lighten-1">
          <h1 class="text text-center">Создание предметов</h1>
        </div>
      </v-col>
      <v-col cols="4">
        <div class="blue lighten-1">
          <h2 class="text text-center">Рецепты</h2>
        </div>
        <Receipts :items="receipts" />
      </v-col>
      <v-col cols="8">
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
import { mapState, mapGetters } from "vuex";
import Receipts from "./Receipts";
import Item from "./Item";
import Inventory from "./Inventory";

export default {
  name: "Container",
  components: { Receipts, Item, Inventory },
  computed: {
    ...mapState(["receipts", "inventory", "item"]),
    ...mapGetters(["receipts", "inventory", "item"])
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
</style>
