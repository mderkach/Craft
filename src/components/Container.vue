<template>
  <v-container>
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
        <Item :item="item" :ingridients="ingridients" />
        <v-card outlined class="mt-12">
          <v-card-text>
            <h3>Инвентарь</h3>
          </v-card-text>
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">Предмет</th>
                  <th class="text-left">Количество</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in inventory" :key="item.name">
                  <td>{{ item.name }}</td>
                  <td>{{ item.countHave }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Receipts from "./Receipts";
import Item from "./Item";
import { mapState } from "vuex";
export default {
  name: "Container",
  components: { Receipts, Item },
  computed: {
    ...mapState(["receipts", "inventory", "ingridients", "item"])
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
