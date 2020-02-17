// https://vuex.vuejs.org/en/state.html

export default {
  recipes: {
    // blowtorch: {
    //   descr: "И светит, и паяет",
    //   icon: "mdi-gas-cylinder",
    //   ingredients: [
    //     { name: "Газовый баллон", quantity: 1, item: "gazbottle" },
    //     { name: "Хлам", quantity: 1, item: "scrap" },
    //     { name: "Зажигалка", quantity: 1, item: "ignite" }
    //   ],
    //   type: "tool",
    //   name: "Паяльная лампа"
    // },
    // spagettchee: {
    //   descr: "",
    //   icon: "mdi-pot-mix",
    //   ingredients: [
    //     { name: "Спагетти", quantity: 1, item: "spagetti" },
    //     { name: "Сыр", quantity: 1, item: "cheese" }
    //   ],
    //   type: "food",
    //   name: "Спагетти с сыром"
    // },
    // obed2: {
    //   descr: "Кто не любит мясо?",
    //   icon: "mdi-pot-mix",
    //   ingredients: [
    //     { name: "Специи", quantity: 2, item: "spices" },
    //     { name: "Куриное филе", quantity: 1, item: "packaged_chicken" },
    //     { name: "Картофель", quantity: 1, item: "potato" }
    //   ],
    //   type: "food",
    //   name: "Блюдо с мясом"
    // },
    // "3adic": {
    //   descr: "Да, не одеколон, так еще и тройной!",
    //   icon: "mdi-bottle-tonic",
    //   ingredients: [{ name: "Адикалон", quantity: 3, item: "adicalone" }],
    //   type: "drink",
    //   name: "Тройной Адикалон"
    // },
    // puree: {
    //   descr: "",
    //   icon: "mdi-pot-mix",
    //   ingredients: [
    //     { name: "Картофель", quantity: 1, item: "potato" },
    //     { name: "Молоко", quantity: 1, item: "milk" }
    //   ],
    //   type: "food",
    //   name: "Пюре"
    // },
    // spagettimeat: {
    //   descr: "",
    //   icon: "mdi-pot-mix",
    //   ingredients: [
    //     { name: "Макароны", quantity: 1, item: "spagetti" },
    //     { name: "Вода", quantity: 1, item: "water" },
    //     { name: "Сосиска", quantity: 1, item: "saucisson" }
    //   ],
    //   type: "food",
    //   name: "Макарошки с сосисками"
    // },
    // fruitpot: {
    //   descr: "Фрукты на любой вкус",
    //   icon: "mdi-fruit-cherries",
    //   ingredients: [
    //     { name: "Клубника", quantity: 1, item: "strawberry" },
    //     { name: "Банан", quantity: 1, item: "banana" },
    //     { name: "Яблоко", quantity: 1, item: "apple" }
    //   ],
    //   type: "food",
    //   name: "Фруктовый салат"
    // },
    // raspberry: {
    //   descr: "Вскрывает электронные замки, в т.ч. дорогих авто",
    //   icon: "mdi-raspberry-pi",
    //   ingredients: [
    //     { name: "Хлам", quantity: 2, item: "scrap" },
    //     { name: "Звуковая система", quantity: 1, item: "highradio" }
    //   ],
    //   type: "tool",
    //   name: "Устройство взлома"
    // },
    // meats: {
    //   descr: "",
    //   icon: "mdi-pot-mix",
    //   ingredients: [
    //     { name: "Куриное филе", quantity: 1, item: "packaged_chicken" },
    //     { name: "Специи", quantity: 1, item: "spices" }
    //   ],
    //   type: "food",
    //   name: "Котлеты"
    // },
    // pureemeat: {
    //   descr: "",
    //   icon: "mdi-pot-mix",
    //   ingredients: [
    //     { name: "Пюре", quantity: 1, item: "puree" },
    //     { name: "Котлеты", quantity: 1, item: "meats" }
    //   ],
    //   type: "food",
    //   name: "Котлетки с пюрешкой"
    // },
    // weapon_machinepistol: {
    //   descr: "",
    //   ingredients: [
    //     { name: "Хлам", quantity: 2, item: "scrap" },
    //     { name: "Железо", quantity: 3, item: "iron" },
    //     { name: "Пластик", quantity: 3, item: "airbag" }
    //   ],
    //   icon: "mdi-pistol",
    //   ammo: 40,
    //   type: "weapon",
    //   name: "микро ПП"
    // },
    // chocodrink: {
    //   descr: "Горячо и вкусно",
    //   icon: "mdi-coffee",
    //   ingredients: [
    //     { name: "Вода", quantity: 1, item: "water" },
    //     { name: "Шоколад", quantity: 1, item: "candy2" }
    //   ],
    //   type: "drink",
    //   name: "Горячий шоколад"
    // },
    // ammo_pistol: {
    //   descr: "",
    //   icon: "mdi-ammunition",
    //   ingredients: [{ name: "Хлам", quantity: 1, item: "scrap" }],
    //   type: "ammo",
    //   name: "Пистолетная обойма"
    // },
    // lockpick: {
    //   descr: "Вскрывает замки и простые автомобили",
    //   icon: "mdi-lock-open",
    //   ingredients: [{ name: "Хлам", quantity: 2, item: "scrap" }],
    //   type: "tool",
    //   name: "Отмычка"
    // },
    // hotdog: {
    //   descr: "Нет, это не горячая собака",
    //   icon: "mdi-sausage",
    //   ingredients: [
    //     { name: "Хлеб", quantity: 1, item: "bread" },
    //     { name: "Сосиска", quantity: 1, item: "saucisson" }
    //   ],
    //   type: "food",
    //   name: "Хот-дог"
    // },
    // weapon_bottle: {
    //   descr: "",
    //   icon: "mdi-bottle-soda-classic-outline",
    //   ingredients: [{ name: "Бутылка", quantity: 1, item: "bottle" }],
    //   type: "weapon",
    //   name: "Розочка"
    // },
    // obed3: {
    //   descr: "Просто суп",
    //   icon: "mdi-pot-mix",
    //   ingredients: [
    //     { name: "Специи", quantity: 2, item: "spices" },
    //     { name: "Куриное филе", quantity: 1, item: "packaged_chicken" },
    //     { name: "Картофель", quantity: 1, item: "potato" },
    //     { name: "Капуста", quantity: 1, item: "сabbage" },
    //     { name: "Вода", quantity: 1, item: "water" },
    //     { name: "Морковь", quantity: 1, item: "carrot" }
    //   ],
    //   type: "food",
    //   name: "Суп"
    // },
    // obed1: {
    //   descr: "Любителям рыбки",
    //   icon: "mdi-pot-mix",
    //   ingredients: [
    //     { name: "Специи", quantity: 2, item: "spices" },
    //     { name: "Рыба", quantity: 1, item: "fish" },
    //     { name: "Картофель", quantity: 1, item: "potato" }
    //   ],
    //   type: "food",
    //   name: "Рыбное блюдо"
    // },
    // weapon_molotov: {
    //   descr: "",
    //   icon: "mdi-fire",
    //   ingredients: [
    //     { name: "Масло", quantity: 1, item: "petrol" },
    //     { name: "Бутылка", quantity: 1, item: "bottle" },
    //     { name: "Зажигалка", quantity: 1, item: "ignite" }
    //   ],
    //   type: "throwable",
    //   name: "Коктейль Молотова"
    // },
    // ammo_smg: {
    //   descr: "",
    //   icon: "mdi-ammunition",
    //   ingredients: [{ name: "Хлам", quantity: 1, item: "scrap" }],
    //   type: "ammo",
    //   name: "Обойма ПП"
    // },
    // sendwich1: {
    //   descr: "",
    //   icon: "mdi-hamburger",
    //   ingredients: [
    //     { name: "Специи", quantity: 1, item: "spices" },
    //     { name: "Куриное филе", quantity: 1, item: "packaged_chicken" },
    //     { name: "Сыр", quantity: 1, item: "cheese" },
    //     { name: "Капуста", quantity: 1, item: "сabbage" }
    //   ],
    //   type: "food",
    //   name: "Сендвич с курицей"
    // },
    // glint: {
    //   descr: "",
    //   icon: "mdi-glass-wine",
    //   ingredients: [
    //     { name: "Специи", quantity: 1, item: "spices" },
    //     { name: "Столовое вино", quantity: 1, item: "vine" }
    //   ],
    //   type: "drink",
    //   name: "Глинтвейн"
    // },
    // ammo_shotgun: {
    //   descr: "",
    //   icon: "mdi-ammunition",
    //   ingredients: [{ name: "Хлам", quantity: 1, item: "scrap" }],
    //   type: "ammo",
    //   name: "Патроны дробовика"
    // },
    // patao: {
    //   descr: "",
    //   icon: "mdi-pot-mix",
    //   ingredients: [
    //     { name: "Картофель", quantity: 1, item: "potato" },
    //     { name: "Специи", quantity: 1, item: "spices" }
    //   ],
    //   type: "food",
    //   name: "Жареная картошка"
    // },
    // ammo_rifle: {
    //   descr: "",
    //   icon: "mdi-ammunition",
    //   ingredients: [{ name: "Хлам", quantity: 1, item: "scrap" }],
    //   type: "ammo",
    //   name: "Обойма винтовки"
    // },
    // cake: {
    //   descr: "",
    //   icon: "mdi-cupcake",
    //   ingredients: [
    //     { name: "Молоко", quantity: 1, item: "milk" },
    //     { name: "Мука", quantity: 1, item: "flour" },
    //     { name: "Сахар", quantity: 1, item: "sugar" },
    //     { name: "Шоколад", quantity: 1, item: "candy2" }
    //   ],
    //   type: "food",
    //   name: "Кекс"
    // },
    // slivstraw: {
    //   descr: "Мммм, вкусно!",
    //   icon: "mdi-food-fork-drink",
    //   ingredients: [
    //     { name: "Клубника", quantity: 1, item: "strawberry" },
    //     { name: "Сливки", quantity: 1, item: "slivki" }
    //   ],
    //   type: "food",
    //   name: "Клубника со сливками"
    // },
    // clip: {
    //   descr: "Просто обойма",
    //   icon: "mdi-ammunition",
    //   ingredients: [
    //     { name: "Хлам", quantity: 1, item: "scrap" },
    //     { name: "Железо", quantity: 2, item: "iron" },
    //     { name: "Пластик", quantity: 1, item: "airbag" }
    //   ],
    //   type: "ammo",
    //   name: "Обойма"
    // },
    // cakebig: {
    //   descr: "",
    //   icon: "mdi-cake",
    //   ingredients: [
    //     { name: "Молоко", quantity: 1, item: "milk" },
    //     { name: "Мука", quantity: 2, item: "flour" },
    //     { name: "Сахар", quantity: 1, item: "sugar" },
    //     { name: "Шоколад", quantity: 1, item: "candy2" },
    //     { name: "Банан", quantity: 1, item: "banana" },
    //     { name: "Сливки", quantity: 1, item: "slivki" },
    //     { name: "Яйца", quantity: 2, item: "eggs" }
    //   ],
    //   type: "food",
    //   name: "Торт"
    // },
    // weapon_snspistol: {
    //   descr: "",
    //   ingredients: [
    //     { name: "Хлам", quantity: 2, item: "scrap" },
    //     { name: "Железо", quantity: 2, item: "iron" },
    //     { name: "Пластик", quantity: 2, item: "airbag" }
    //   ],
    //   icon: "mdi-pistol",
    //   ammo: 20,
    //   type: "weapon",
    //   name: "Карманный пистолет"
    // }
  },
  inventory: [
    // {
    //   weight: 0.00001,
    //   description: "",
    //   amount: 0,
    //   extra: [],
    //   droppable: true,
    //   name: "money",
    //   label: "Наличка"
    // },
    // {
    //   weight: 0,
    //   description: "",
    //   amount: 1916,
    //   extra: { account_name: "bank" },
    //   droppable: false,
    //   name: "account_money",
    //   label: "Банк"
    // },
    // {
    //   weight: 0.00001,
    //   description: "",
    //   amount: 4200,
    //   extra: { account_name: "black_money" },
    //   droppable: true,
    //   name: "black_money",
    //   label: "Грязные деньги"
    // },
    // {
    //   weight: 0.2,
    //   description: "SIM: 44385",
    //   amount: 1,
    //   extra: { number: "44385" },
    //   droppable: true,
    //   name: "phone",
    //   label: "Телефон"
    // },
    // {
    //   weight: 0.2,
    //   description: "",
    //   amount: 1,
    //   extra: {
    //     weapon_label: "Выкидной нож",
    //     weapon_name: "WEAPON_SWITCHBLADE",
    //     ammo: 0
    //   },
    //   droppable: false,
    //   name: "equipped_weapon",
    //   label: "Выкидной нож"
    // },
    // {
    //   weight: 3.5,
    //   description: "",
    //   amount: 1,
    //   extra: {
    //     weapon_label: "Рельсотрон",
    //     weapon_name: "WEAPON_RAILGUN",
    //     ammo: 3
    //   },
    //   droppable: false,
    //   name: "equipped_weapon",
    //   label: "Рельсотрон"
    // },
    // {
    //   weight: 0.1,
    //   description: "",
    //   amount: 1,
    //   extra: {
    //     weapon_label: "Снежок",
    //     weapon_name: "WEAPON_SNOWBALL",
    //     ammo: 0
    //   },
    //   droppable: false,
    //   name: "equipped_weapon",
    //   label: "Снежок"
    // },
    // {
    //   weight: 0.01,
    //   description: "Форум-Драйв",
    //   amount: 1,
    //   extra: { doorid: "forum", desc: "Форум-Драйв" },
    //   droppable: true,
    //   name: "doorkey",
    //   label: "Ключ от двери"
    // },
    // {
    //   weight: 0.02,
    //   description: "Номер: BBS 278",
    //   amount: 1,
    //   extra: { plate: "BBS 278" },
    //   droppable: true,
    //   name: "carkey",
    //   label: "Ключ от машины"
    // },
    // {
    //   weight: 0.02,
    //   description: "Номер: XKS 701",
    //   amount: 1,
    //   extra: { plate: "XKS 701" },
    //   droppable: true,
    //   name: "carkey",
    //   label: "Ключ от машины"
    // },
    // {
    //   weight: 0.005,
    //   description: "",
    //   amount: 1,
    //   extra: {
    //     canRemove: true,
    //     rare: false,
    //     label: "Абонемент в спортзал",
    //     name: "gym_membership",
    //     usable: false
    //   },
    //   droppable: true,
    //   name: "esx_item",
    //   label: "Абонемент в спортзал"
    // },
    // {
    //   weight: 0.3,
    //   description: "",
    //   amount: 10,
    //   extra: {
    //     canRemove: true,
    //     rare: false,
    //     label: "Булка",
    //     name: "bread",
    //     usable: true
    //   },
    //   droppable: true,
    //   name: "esx_item",
    //   label: "Булка"
    // },
    // {
    //   weight: 0.1,
    //   description: "",
    //   amount: 10,
    //   extra: {
    //     canRemove: true,
    //     rare: false,
    //     label: "Вода",
    //     name: "water",
    //     usable: true
    //   },
    //   droppable: true,
    //   name: "esx_item",
    //   label: "Вода"
    // },
    // {
    //   weight: 10,
    //   description: "",
    //   amount: 100,
    //   extra: {
    //     canRemove: true,
    //     rare: false,
    //     label: "Железо",
    //     name: "iron",
    //     usable: false
    //   },
    //   droppable: true,
    //   name: "esx_item",
    //   label: "Железо"
    // },
    // {
    //   weight: 0.001,
    //   description: "",
    //   amount: 1,
    //   extra: {
    //     canRemove: true,
    //     rare: false,
    //     label: "Косяк",
    //     name: "weed",
    //     usable: true
    //   },
    //   droppable: true,
    //   name: "esx_item",
    //   label: "Косяк"
    // },
    // {
    //   weight: 0.01,
    //   description: "",
    //   amount: 81,
    //   extra: {
    //     canRemove: true,
    //     rare: false,
    //     label: "Отмычка",
    //     name: "lockpick",
    //     usable: true
    //   },
    //   droppable: true,
    //   name: "esx_item",
    //   label: "Отмычка"
    // },
    // {
    //   weight: 0.5,
    //   description: "",
    //   amount: 1,
    //   extra: {
    //     canRemove: true,
    //     rare: false,
    //     label: "Пиво",
    //     name: "beer",
    //     usable: true
    //   },
    //   droppable: true,
    //   name: "esx_item",
    //   label: "Пиво"
    // },
    // {
    //   weight: 0.5,
    //   description: "",
    //   amount: 100,
    //   extra: {
    //     canRemove: true,
    //     rare: false,
    //     label: "Пластик",
    //     name: "airbag",
    //     usable: false
    //   },
    //   droppable: true,
    //   name: "esx_item",
    //   label: "Пластик"
    // },
    // {
    //   weight: 0.05,
    //   description: "",
    //   amount: 100,
    //   extra: {
    //     canRemove: true,
    //     rare: false,
    //     label: "Хлам",
    //     name: "scrap",
    //     usable: false
    //   },
    //   droppable: true,
    //   name: "esx_item",
    //   label: "Хлам"
    // }
  ],
  item: null
};
