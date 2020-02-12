<template>
  <v-card outlined class="mt-12" style="background-color: rgba(30,30,30, 0.35)">
    <v-card-text>
      <h3>Инвентарь</h3>
    </v-card-text>
    <v-simple-table style="background-color: rgba(30,30,30, 0.35)">
      <template v-slot:default v-if="inventory !== null">
        <thead>
          <tr>
            <th class="text-left">Предмет</th>
            <th class="text-left">Количество</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in inventory" :key="item.name">
            <td>{{ item.descr }}</td>
            <td>{{ item.count }}</td>
          </tr>
        </tbody>
      </template>
      <template v-slot:default v-else>
        <v-col>
          <h4>Невозможно получить Инвентарь</h4>
        </v-col>
      </template>
    </v-simple-table>
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
