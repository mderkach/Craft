// https://vuex.vuejs.org/en/state.html

export default {
  receipts: [
    {
      name: "lockpick",
      descr: "unLock",
      icon: "mdi-lock-open",
      ingridients: [
        {
          name: "scrap",
          descr: "Хлам",
          quantity: 3,
          count: 0
        }
      ]
    }
  ],
  inventory: [
    {
      name: "bread",
      descr: "Булка",
      count: 10
    },
    {
      name: "scrap",
      descr: "Хлам",
      count: 5
    }
  ],
  item: null
};
