<template>
  <div class="item__wrapper">
    <v-card outlined v-if="item" style="background-color: rgba(30,30,30, 0.35)">
      <v-list-item three-line>
        <v-list-item-avatar tile size="80" color="grey">
          <v-icon v-text="item.icon"></v-icon>
        </v-list-item-avatar>
        <v-list-item-content style="align-self: flex-start">
          <v-list-item-title class="headline mb-1">{{
            item.name
          }}</v-list-item-title>
          <v-list-item-subtitle>{{ item.descr }}</v-list-item-subtitle>

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
              Недостаточно ингридиентов!
            </p>
          </v-col>
        </v-list-item-content>
        <v-list-item-content style="align-self: flex-start">
          <v-list-item-title class="headline mb-1">
            Ингридиенты
          </v-list-item-title>
          <v-simple-table dense style="background-color: rgba(30,30,30, 0.35)">
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">Ингридиент</th>
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
        <v-btn text>Создать</v-btn>
        <v-btn text @click="reset">Отменить</v-btn>
      </v-card-actions>
    </v-card>
    <v-col v-else>
      <h3>Выберите рецепт слева</h3>
    </v-col>
  </div>
</template>

<script>
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
    }
  }
};
</script>

<style lang="sass" scoped>
.item__wrapper
  min-height: 270px
  max-height: 270px
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
