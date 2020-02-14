// https://vuex.vuejs.org/en/state.html

export default {
  recipes: [
    {
      item: "lockpick",
      name: "Отмычка",
      icon: "mdi-lock-open",
      descr: "Вскрывает замки и простые автомобили",
      ingridients: [
        {
          name: "Хлам",
          item: "scrap",
          quantity: 2
        }
      ]
    },
    {
      item: "blowtorch",
      name: "Паяльная лампа",
      icon: "mdi-gas-cylinder",
      descr: "И светит, и паяет",
      ingridients: [
        {
          quantity: 1,
          item: "gazbottle",
          name: "Газовый баллон"
        },
        {
          quantity: 1,
          item: "scrap",
          name: "Хлам"
        },
        {
          item: "ignite",
          name: "Зажигалка",
          quantity: 1
        }
      ]
    },
    {
      item: "clip",
      name: "Обойма",
      icon: "mdi-ammunition",
      descr: "Просто обойма",
      ingridients: [
        {
          quantity: 1,
          item: "scrap",
          name: "Хлам"
        },
        {
          quantity: 2,
          item: "iron",
          name: "Железо"
        },
        {
          quantity: 1,
          item: "airbag",
          name: "Пластик"
        }
      ]
    },
    {
      item: "raspberry",
      name: "Устройство взлома",
      icon: "mdi-raspberry-pi",
      descr: "Вскрывает электронные замки, в т.ч. дорогих авто",
      ingridients: [
        {
          quantity: 2,
          item: "scrap",
          name: "Хлам"
        },
        {
          quantity: 1,
          item: "highradio",
          name: "Звуковая система"
        }
      ]
    }
  ],
  inventory: [],
  item: null
};
