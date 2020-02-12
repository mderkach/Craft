<template>
  <div class="">
    <v-card outlined v-if="item" style="background-color: rgba(30,30,30, 0.35)">
      <v-list-item three-line>
        <v-list-item-avatar tile size="80" color="grey">
          <v-icon v-text="item.icon"></v-icon>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="headline mb-1">{{
            item.name
          }}</v-list-item-title>
          <v-list-item-subtitle>{{ item.descr }}</v-list-item-subtitle>

          <v-col cols="4" class="pl-0 pr-0">
            <span class="font-weight-light">Количество: </span>
            <span class="font-weight-light" v-text="count"></span>
            <v-slider
              v-model="count"
              track-color="grey"
              always-dirty
              min="0"
              max="10"
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
          </v-col>
        </v-list-item-content>
        <v-list-item-content>
          <v-list-item-title class="headline mb-1"
            >Ингридиенты</v-list-item-title
          >
          <v-simple-table style="background-color: rgba(30,30,30, 0.35)">
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">Ингридиент</th>
                  <th class="text-left">Необходимо</th>
                  <th class="text-left">В наличии</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in item.ingridients" :key="index">
                  <td>{{ item.descr }}</td>
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
    ...mapMutations("set_item")
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
