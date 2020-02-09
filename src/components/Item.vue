<template>
  <v-card outlined>
    <v-list-item three-line>
      <v-list-item-avatar tile size="80" color="grey">
        <v-icon>mdi-pistol</v-icon>
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
        <v-list-item-title class="headline mb-1">Ингридиенты</v-list-item-title>
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">Ингридиент</th>
                <th class="text-left">Необходимо</th>
                <th class="text-left">В наличии</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in ingridients" :key="item.name">
                <td>{{ item.name }}</td>
                <td>{{ item.countNeed }}</td>
                <td>{{ item.countHave }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-list-item-content>
    </v-list-item>

    <v-card-actions>
      <v-btn text>Создать</v-btn>
      <v-btn text>Отменить</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import {
  mdiPistol,
  mdiFire,
  mdiKnifeMilitary,
  mdiHandcuffs,
  mdiGasCylinder
} from "@mdi/js";
import { mapGetters } from "vuex";

export default {
  name: "Item",
  comments: {
    mdiPistol,
    mdiFire,
    mdiKnifeMilitary,
    mdiHandcuffs,
    mdiGasCylinder
  },
  data: () => ({
    count: 0
  }),
  methods: {
    decrement() {
      this.count--;
    },
    increment() {
      this.count++;
    }
  },
  computed: {
    ...mapGetters(["item", "ingridients"])
  }
};
</script>

<style></style>
