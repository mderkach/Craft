<template>
  <v-card
    outlined
    class="mt-12"
    style="background-color: rgba(30,30,30, 0.35);"
  >
    <v-card-text>
      <h3>Инвентарь</h3>
    </v-card-text>
    <div class="table__wrapper">
      <v-simple-table dense fixed-header height="325">
        <template v-slot:default v-if="inventory !== null">
          <thead>
            <tr>
              <th class="text-left">Предмет</th>
              <th class="text-left">Количество</th>
              <th class="text-left">Описание</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in inventory" :key="index">
              <td>{{ item.label }}</td>
              <td>{{ item.amount }}</td>
              <td>{{ item.description }}</td>
            </tr>
          </tbody>
        </template>
        <template v-slot:default v-else>
          <v-col>
            <h4>Невозможно получить Инвентарь</h4>
          </v-col>
        </template>
      </v-simple-table>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "Inventory",
  props: {
    inventory: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style lang="sass">
.table__wrapper
  background-color: rgba(30,30,30, 0.35)
  .v-data-table--fixed-header .v-data-table__wrapper
    overflow: auto !important
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
