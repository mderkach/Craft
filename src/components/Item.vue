<template>
  <div class="item__wrapper">
    <v-card outlined v-if="item" style="background-color: rgba(30,30,30, 0.35)">
      <v-list-item three-line>
        <v-list-item-avatar tile size="80">
          <div class="item__icon" v-html="item.icon"></div>
        </v-list-item-avatar>
        <v-list-item-content style="align-self: flex-start">
          <v-list-item-title class="headline mb-1">
            {{ item.name }}
          </v-list-item-title>
          <v-list-item-subtitle>
            {{ item.descr }}
          </v-list-item-subtitle>
          <v-col cols="8" class="pl-0 pr-0">
            <span class="font-weight-light">Количество: </span>
            <span class="font-weight-light" v-text="count"></span>
            <v-slider
              v-if="calcuteCraft !== 0"
              v-model="count"
              track-color="grey"
              always-dirty
              min="0"
              :max="calcuteCraft"
            >
              <template v-slot:prepend>
                <v-icon @click="decrement">
                  mdi-minus
                </v-icon>
              </template>

              <template v-slot:append>
                <v-icon @click="increment">
                  mdi-plus
                </v-icon>
              </template>
            </v-slider>
            <p v-else class="mt-4">
              <v-icon color="warning">mdi-alert</v-icon>
              Недостаточно ингредиентов!
            </p>
          </v-col>
        </v-list-item-content>
        <v-list-item-content style="align-self: flex-start">
          <v-list-item-title class="headline mb-1">
            ингредиенты
          </v-list-item-title>
          <v-simple-table dense style="background-color: rgba(30,30,30, 0.35)">
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">ингредиент</th>
                  <th class="text-left">Необходимо</th>
                  <th class="text-left">В наличии</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in item.ingredients" :key="index">
                  <td>{{ item.name }}</td>
                  <td>{{ item.quantity }}</td>
                  <td>{{ item.count }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-list-item-content>
      </v-list-item>

      <v-card-actions>
        <v-btn text @click="craftItem(count, item)">Создать</v-btn>
        <v-btn text @click="reset">Отменить</v-btn>
      </v-card-actions>
    </v-card>
    <v-col v-else>
      <h3>Выберите рецепт слева</h3>
    </v-col>
  </div>
</template>

<script>
import axios from "axios";
import { mapMutations } from "vuex";

export default {
  name: "Item",
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  },
  data: () => ({
    count: 0
  }),
  computed: {
    ...mapMutations(["set_item"]),
    calcuteCraft() {
      let total = 0;
      let temp = [];
      this.item.ingredients.forEach(resource => {
        if (!resource.count) {
          resource.count = 0;
        }
        temp.push(Math.floor(resource.count / resource.quantity));
      });
      total = Math.min(...temp);
      return total;
    }
  },
  methods: {
    decrement() {
      this.count--;
    },
    increment() {
      this.count++;
    },
    reset() {
      this.item = null;
      this.$store.commit("set_item", null);
    },
    craftItem(craftingCount, item) {
      item.toCraft = craftingCount;
      if (process.env.NODE_ENV !== "production") {
        console.log(JSON.stringify(item));
      } else {
        axios.post("http://vuecraft/craftItemNUI", JSON.stringify(item));
      }
    }
  }
};
</script>

<style lang="sass">
.item
  &__wrapper
    min-height: 310px
    max-height: 310px
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
  &__icon
    display: flex
    justify-content: center
    align-items: center
    img
      width: 100%
      height: 100%
</style>
