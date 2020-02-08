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
        <v-list-item-group color="primary">
          <v-list-item v-for="(item, i) in receipts" :key="i">
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content two-line>
              <v-list-item-title v-text="item.name"></v-list-item-title>
              <v-list-item-subtitle v-text="item.descr"></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-col>
      <v-col cols="8">
        <div class="blue lighten-1">
          <h2 class="text text-center">Предмет</h2>
        </div>
        <v-card outlined>
          <v-list-item three-line>
            <v-list-item-avatar tile size="80" color="grey">
              <v-icon>mdi-pistol</v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="headline mb-1"
                >Glock 17</v-list-item-title
              >
              <v-list-item-subtitle>Тупо пушка</v-list-item-subtitle>

              <v-col cols="4" class="pl-0 pr-0">
                <span class="font-weight-light">Количество: </span>
                <span class="font-weight-light" v-text="count"></span>
                <v-slider
                  v-model="count"
                  track-color="grey"
                  always-dirty
                  min="0"
                  max="99"
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
import {
  mdiPistol,
  mdiFire,
  mdiKnifeMilitary,
  mdiHandcuffs,
  mdiGasCylinder
} from "@mdi/js";

export default {
  name: "Container",
  comments: {
    mdiPistol,
    mdiFire,
    mdiKnifeMilitary,
    mdiHandcuffs,
    mdiGasCylinder
  },
  data: () => ({
    receipts: [
      {
        name: "Пистолет",
        descr: "Пиф-паф",
        icon: "mdi-pistol"
      },
      {
        name: "Нож",
        descr: "Резай!",
        icon: "mdi-knife-military"
      },
      {
        name: "Молотов",
        descr: "Гори-гори ясно...",
        icon: "mdi-fire"
      },
      {
        name: "Наручники",
        descr: "Ммм, шалунишка :)",
        icon: "mdi-handcuffs"
      },
      {
        name: "Газовая горелка",
        descr: "Не смотри на сварку!",
        icon: "mdi-gas-cylinder"
      }
    ],
    ingridients: [
      {
        name: "Пластмасса",
        countNeed: 3,
        countHave: 0
      },
      {
        name: "Хлам",
        countNeed: 3,
        countHave: 0
      },
      {
        name: "Кремень",
        countNeed: 3,
        countHave: 0
      }
    ],
    inventory: [
      {
        name: "Рация",
        countHave: 1
      },
      {
        name: "Вода",
        countHave: 2
      },
      {
        name: "Булка",
        countHave: 3
      }
    ],
    count: 0
  }),
  methods: {
    decrement() {
      this.count--;
    },
    increment() {
      this.count++;
    }
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
