// https://vuex.vuejs.org/en/state.html

export default {
  recipes: {
    // patao: {
    //   ingredients: [
    //     {
    //       item: "potato",
    //       name: "Картофель",
    //       quantity: 1
    //     },
    //     {
    //       item: "spices",
    //       name: "Специи",
    //       quantity: 1
    //     }
    //   ],
    //   descr: "",
    //   name: "Жареная картошка",
    //   type: "food",
    //   needsRecipe: false,
    //   icon: "friedpotato"
    // },
    // pureefish: {
    //   ingredients: [
    //     {
    //       item: "puree",
    //       name: "Пюре",
    //       quantity: 1
    //     },
    //     {
    //       item: "cutletfish",
    //       name: "Котлета рыбная",
    //       quantity: 1
    //     }
    //   ],
    //   descr: "",
    //   name: "Пюре с котлетой (рыбной)",
    //   type: "food",
    //   needsRecipe: false,
    //   icon: "pureemeat"
    // },
    // orangejuice: {
    //   ingredients: [
    //     {
    //       item: "orange",
    //       name: "Апельсин",
    //       quantity: 1
    //     },
    //     {
    //       item: "water",
    //       name: "Вода",
    //       quantity: 1
    //     }
    //   ],
    //   descr: "",
    //   name: "Сок апельсиновый",
    //   type: "drink",
    //   needsRecipe: false,
    //   icon: "juice"
    // },
    // pizzachicken: {
    //   ingredients: [
    //     {
    //       item: "salt",
    //       name: "Соль",
    //       quantity: 1
    //     },
    //     {
    //       item: "dough",
    //       name: "Тесто",
    //       quantity: 2
    //     },
    //     {
    //       item: "cheese",
    //       name: "Сыр",
    //       quantity: 2
    //     },
    //     {
    //       item: "mushrooms",
    //       name: "Грибы",
    //       quantity: 3
    //     },
    //     {
    //       item: "tomatoes",
    //       name: "Томаты",
    //       quantity: 2
    //     },
    //     {
    //       item: "onion",
    //       name: "Лук",
    //       quantity: 1
    //     },
    //     {
    //       item: "tomatopaste",
    //       name: "Томатная паста",
    //       quantity: 1
    //     },
    //     {
    //       item: "packaged_chicken",
    //       name: "Куриное филе",
    //       quantity: 2
    //     }
    //   ],
    //   descr: "",
    //   name: "Пицца c курицей",
    //   type: "food",
    //   needsRecipe: false,
    //   icon: "pizza"
    // },
    // glint: {
    //   ingredients: [
    //     {
    //       item: "spices",
    //       name: "Специи",
    //       quantity: 1
    //     },
    //     {
    //       item: "vine",
    //       name: "Столовое вино",
    //       quantity: 1
    //     }
    //   ],
    //   descr: "",
    //   name: "Глинтвейн",
    //   type: "drink",
    //   needsRecipe: false,
    //   icon: "glint"
    // },
    // mincedbeef: {
    //   ingredients: [
    //     {
    //       item: "beef",
    //       name: "Говядина",
    //       quantity: 2
    //     },
    //     {
    //       item: "salt",
    //       name: "Соль",
    //       quantity: 1
    //     },
    //     {
    //       item: "eggs",
    //       name: "Яйца",
    //       quantity: 1
    //     },
    //     {
    //       item: "bread",
    //       name: "Хлеб",
    //       quantity: 1
    //     }
    //   ],
    //   descr: "",
    //   name: "Фарш говяжий",
    //   type: "food",
    //   needsRecipe: false,
    //   icon: "mince"
    // },
    // chococake: {
    //   ingredients: [
    //     {
    //       item: "dough",
    //       name: "Тесто",
    //       quantity: 2
    //     },
    //     {
    //       item: "sugar",
    //       name: "Сахар",
    //       quantity: 1
    //     },
    //     {
    //       item: "candy2",
    //       name: "Шоколад",
    //       quantity: 3
    //     },
    //     {
    //       item: "strawberry",
    //       name: "Клубника",
    //       quantity: 2
    //     },
    //     {
    //       item: "salt",
    //       name: "Соль",
    //       quantity: 1
    //     },
    //     {
    //       item: "eggs",
    //       name: "Яйца",
    //       quantity: 2
    //     }
    //   ],
    //   descr: "",
    //   name: "Шоколадный торт с клубникой",
    //   type: "food",
    //   needsRecipe: false,
    //   icon: "chococake"
    // },
    // cutletpork: {
    //   ingredients: [
    //     {
    //       item: "mincedpork",
    //       name: "Фарш свиной",
    //       quantity: 1
    //     },
    //     {
    //       item: "spices",
    //       name: "Специи",
    //       quantity: 2
    //     }
    //   ],
    //   descr: "",
    //   name: "Котлета свиная",
    //   type: "food",
    //   needsRecipe: false,
    //   icon: "cutlet"
    // },
    // fruitpot: {
    //   ingredients: [
    //     {
    //       item: "strawberry",
    //       name: "Клубника",
    //       quantity: 1
    //     },
    //     {
    //       item: "banana",
    //       name: "Банан",
    //       quantity: 1
    //     },
    //     {
    //       item: "apple",
    //       name: "Яблоко",
    //       quantity: 1
    //     }
    //   ],
    //   descr: "Фрукты на любой вкус",
    //   name: "Фруктовый салат",
    //   type: "food",
    //   needsRecipe: false,
    //   icon: "fruitpot"
    // },
    // "3adic": {
    //   ingredients: [
    //     {
    //       item: "adicalone",
    //       name: "Адикалон",
    //       quantity: 3
    //     }
    //   ],
    //   descr: "Да, не одеколон, так еще и тройной!",
    //   name: "Тройной Адикалон",
    //   type: "drink",
    //   needsRecipe: false,
    //   icon: "parfum"
    // },
    // mincedchicken: {
    //   ingredients: [
    //     {
    //       item: "packaged_chicken",
    //       name: "Куриное филе",
    //       quantity: 2
    //     },
    //     {
    //       item: "salt",
    //       name: "Соль",
    //       quantity: 1
    //     },
    //     {
    //       item: "eggs",
    //       name: "Яйца",
    //       quantity: 1
    //     },
    //     {
    //       item: "bread",
    //       name: "Хлеб",
    //       quantity: 1
    //     }
    //   ],
    //   descr: "",
    //   name: "Фарш куриный",
    //   type: "food",
    //   needsRecipe: false,
    //   icon: "mince"
    // },
    // peachjuice: {
    //   ingredients: [
    //     {
    //       item: "peach",
    //       name: "Персик",
    //       quantity: 1
    //     },
    //     {
    //       item: "water",
    //       name: "Вода",
    //       quantity: 1
    //     }
    //   ],
    //   descr: "",
    //   name: "Сок персиковый",
    //   type: "drink",
    //   needsRecipe: false,
    //   icon: "juice"
    // },
    // applejuice: {
    //   ingredients: [
    //     {
    //       item: "apple",
    //       name: "Яблоко",
    //       quantity: 1
    //     },
    //     {
    //       item: "water",
    //       name: "Вода",
    //       quantity: 1
    //     }
    //   ],
    //   descr: "",
    //   name: "Сок яблочный",
    //   type: "drink",
    //   needsRecipe: false,
    //   icon: "juice"
    // },
    // mincehouse: {
    //   ingredients: [
    //     {
    //       item: "mincedchicken",
    //       name: "Фарш куриный",
    //       quantity: 1
    //     },
    //     {
    //       item: "mincedbeef",
    //       name: "Фарш говяжий",
    //       quantity: 1
    //     },
    //     {
    //       item: "mincedpork",
    //       name: "Фарш свиной",
    //       quantity: 1
    //     },
    //     {
    //       item: "salt",
    //       name: "Соль",
    //       quantity: 1
    //     },
    //     {
    //       item: "eggs",
    //       name: "Яйца",
    //       quantity: 1
    //     },
    //     {
    //       item: "bread",
    //       name: "Хлеб",
    //       quantity: 1
    //     }
    //   ],
    //   descr: "",
    //   name: "Фарш домашний",
    //   type: "food",
    //   needsRecipe: false,
    //   icon: "mince"
    // },
    // icecreampeach: {
    //   ingredients: [
    //     {
    //       item: "icecream",
    //       name: "Мороженое",
    //       quantity: 1
    //     },
    //     {
    //       item: "peach",
    //       name: "Персик",
    //       quantity: 1
    //     }
    //   ],
    //   descr: "",
    //   name: "Персиковое мороженое",
    //   type: "food",
    //   needsRecipe: false,
    //   icon: "icecream2"
    // },
    // spagettisausage: {
    //   ingredients: [
    //     {
    //       item: "spagetti",
    //       name: "Макароны",
    //       quantity: 1
    //     },
    //     {
    //       item: "water",
    //       name: "Вода",
    //       quantity: 1
    //     },
    //     {
    //       item: "saucisson",
    //       name: "Сосиски",
    //       quantity: 3
    //     },
    //     {
    //       item: "salt",
    //       name: "Соль",
    //       quantity: 1
    //     }
    //   ],
    //   descr: "",
    //   name: "Макароны с Сосискими",
    //   type: "food",
    //   needsRecipe: false,
    //   icon: "spagettisausage"
    // },
    // cakebig: {
    //   ingredients: [
    //     {
    //       item: "milk",
    //       name: "Молоко",
    //       quantity: 1
    //     },
    //     {
    //       item: "flour",
    //       name: "Мука",
    //       quantity: 2
    //     },
    //     {
    //       item: "sugar",
    //       name: "Сахар",
    //       quantity: 1
    //     },
    //     {
    //       item: "candy2",
    //       name: "Шоколад",
    //       quantity: 1
    //     },
    //     {
    //       item: "banana",
    //       name: "Банан",
    //       quantity: 1
    //     },
    //     {
    //       item: "slivki",
    //       name: "Сливки",
    //       quantity: 1
    //     },
    //     {
    //       item: "eggs",
    //       name: "Яйца",
    //       quantity: 2
    //     }
    //   ],
    //   descr: "",
    //   name: "Торт",
    //   type: "food",
    //   needsRecipe: false,
    //   icon: "birthdaycake"
    // },
    // buffalowings: {
    //   ingredients: [
    //     {
    //       item: "spices",
    //       name: "Специи",
    //       quantity: 1
    //     },
    //     {
    //       item: "salt",
    //       name: "Соль",
    //       quantity: 1
    //     },
    //     {
    //       item: "pepper",
    //       name: "Перец",
    //       quantity: 1
    //     },
    //     {
    //       item: "packaged_chicken",
    //       name: "Куриное филе",
    //       quantity: 1
    //     }
    //   ],
    //   descr: "",
    //   name: "Крылышки 'Баффало'",
    //   type: "food",
    //   needsRecipe: false,
    //   icon: "chickenwings"
    // },
    // hodgepodge: {
    //   ingredients: [
    //     {
    //       item: "water",
    //       name: "Вода",
    //       quantity: 1
    //     },
    //     {
    //       item: "beef",
    //       name: "Говядина",
    //       quantity: 1
    //     },
    //     {
    //       item: "lemon",
    //       name: "Лимон",
    //       quantity: 1
    //     },
    //     {
    //       item: "carrot",
    //       name: "Морковь",
    //       quantity: 1
    //     },
    //     {
    //       item: "saucisson",
    //       name: "Сосиски",
    //       quantity: 1
    //     },
    //     {
    //       item: "onion",
    //       name: "Лук",
    //       quantity: 1
    //     },
    //     {
    //       item: "bacon",
    //       name: "Бекон",
    //       quantity: 1
    //     },
    //     {
    //       item: "salt",
    //       name: "Соль",
    //       quantity: 1
    //     }
    //   ],
    //   descr: "",
    //   name: "Солянка",
    //   type: "food",
    //   needsRecipe: false,
    //   icon: "soup"
    // },
    // pureebeef: {
    //   ingredients: [
    //     {
    //       item: "puree",
    //       name: "Пюре",
    //       quantity: 1
    //     },
    //     {
    //       item: "cutletbeef",
    //       name: "Котлета говяжья",
    //       quantity: 1
    //     }
    //   ],
    //   descr: "",
    //   name: "Пюре с котлетой (говяжьей)",
    //   type: "food",
    //   needsRecipe: false,
    //   icon: "pureemeat"
    // },
    // mincedfish: {
    //   ingredients: [
    //     {
    //       item: "fish",
    //       name: "Рыба",
    //       quantity: 2
    //     },
    //     {
    //       item: "salt",
    //       name: "Соль",
    //       quantity: 1
    //     },
    //     {
    //       item: "eggs",
    //       name: "Яйца",
    //       quantity: 1
    //     },
    //     {
    //       item: "bread",
    //       name: "Хлеб",
    //       quantity: 1
    //     }
    //   ],
    //   descr: "",
    //   name: "Фарш рыбный",
    //   type: "food",
    //   needsRecipe: false,
    //   icon: "mince"
    // },
    // spagettifish: {
    //   ingredients: [
    //     {
    //       item: "spagetti",
    //       name: "Макароны",
    //       quantity: 1
    //     },
    //     {
    //       item: "water",
    //       name: "Вода",
    //       quantity: 1
    //     },
    //     {
    //       item: "salt",
    //       name: "Соль",
    //       quantity: 1
    //     },
    //     {
    //       item: "cutletfish",
    //       name: "Котлета рыбная",
    //       quantity: 1
    //     }
    //   ],
    //   descr: "",
    //   name: "Макароны с котлетой (рыбной)",
    //   type: "food",
    //   needsRecipe: false,
    //   icon: "spaghettimeat"
    // },
    // mincedpork: {
    //   ingredients: [
    //     {
    //       item: "pork",
    //       name: "Свинина",
    //       quantity: 2
    //     },
    //     {
    //       item: "salt",
    //       name: "Соль",
    //       quantity: 1
    //     },
    //     {
    //       item: "eggs",
    //       name: "Яйца",
    //       quantity: 1
    //     },
    //     {
    //       item: "bread",
    //       name: "Хлеб",
    //       quantity: 1
    //     }
    //   ],
    //   descr: "",
    //   name: "Фарш свиной",
    //   type: "food",
    //   needsRecipe: false,
    //   icon: "mince"
    // },
    // obed2: {
    //   ingredients: [
    //     {
    //       item: "spices",
    //       name: "Специи",
    //       quantity: 2
    //     },
    //     {
    //       item: "packaged_chicken",
    //       name: "Куриное филе",
    //       quantity: 1
    //     },
    //     {
    //       item: "potato",
    //       name: "Картофель",
    //       quantity: 1
    //     }
    //   ],
    //   descr: "Кто не любит мясо?",
    //   name: "Блюдо с мясом",
    //   type: "food",
    //   needsRecipe: false,
    //   icon: "meatfood"
    // },
    // obed3: {
    //   ingredients: [
    //     {
    //       item: "spices",
    //       name: "Специи",
    //       quantity: 2
    //     },
    //     {
    //       item: "packaged_chicken",
    //       name: "Куриное филе",
    //       quantity: 1
    //     },
    //     {
    //       item: "potato",
    //       name: "Картофель",
    //       quantity: 1
    //     },
    //     {
    //       item: "сabbage",
    //       name: "Капуста",
    //       quantity: 1
    //     },
    //     {
    //       item: "water",
    //       name: "Вода",
    //       quantity: 1
    //     },
    //     {
    //       item: "carrot",
    //       name: "Морковь",
    //       quantity: 1
    //     }
    //   ],
    //   descr: "Просто суп",
    //   name: "Суп",
    //   type: "food",
    //   needsRecipe: false,
    //   icon: "soup"
    // },
    // cutletchicken: {
    //   ingredients: [
    //     {
    //       item: "mincedchicken",
    //       name: "Фарш куриный",
    //       quantity: 1
    //     },
    //     {
    //       item: "spices",
    //       name: "Специи",
    //       quantity: 2
    //     }
    //   ],
    //   descr: "",
    //   name: "Котлета куриная",
    //   type: "food",
    //   needsRecipe: false,
    //   icon: "cutlet"
    // },
    // pizzapeperoni: {
    //   ingredients: [
    //     {
    //       item: "salt",
    //       name: "Соль",
    //       quantity: 1
    //     },
    //     {
    //       item: "dough",
    //       name: "Тесто",
    //       quantity: 2
    //     },
    //     {
    //       item: "cheese",
    //       name: "Сыр",
    //       quantity: 2
    //     },
    //     {
    //       item: "beef",
    //       name: "Говядина",
    //       quantity: 1
    //     },
    //     {
    //       item: "tomatoes",
    //       name: "Томаты",
    //       quantity: 2
    //     },
    //     {
    //       item: "onion",
    //       name: "Лук",
    //       quantity: 1
    //     },
    //     {
    //       item: "tomatopaste",
    //       name: "Томатная паста",
    //       quantity: 1
    //     }
    //   ],
    //   descr: "",
    //   name: "Пицца 'Пепперони'",
    //   type: "food",
    //   needsRecipe: false,
    //   icon: "pizza"
    // },
    // rollcaesar: {
    //   ingredients: [
    //     {
    //       item: "packaged_chicken",
    //       name: "Куриное филе",
    //       quantity: 1
    //     },
    //     {
    //       item: "cheese",
    //       name: "Сыр",
    //       quantity: 1
    //     },
    //     {
    //       item: "cucumber",
    //       name: "Огурец",
    //       quantity: 1
    //     },
    //     {
    //       item: "tomatoes",
    //       name: "Томаты",
    //       quantity: 1
    //     },
    //     {
    //       item: "rice",
    //       name: "Рис",
    //       quantity: 1
    //     },
    //     {
    //       item: "seaweeds",
    //       name: "Водоросли",
    //       quantity: 1
    //     }
    //   ],
    //   descr: "",
    //   name: "Ролл 'Цезарь с курицей'",
    //   type: "food",
    //   needsRecipe: false,
    //   icon: "roll3"
    // },
    // sendwich1: {
    //   ingredients: [
    //     {
    //       item: "spices",
    //       name: "Специи",
    //       quantity: 1
    //     },
    //     {
    //       item: "packaged_chicken",
    //       name: "Куриное филе",
    //       quantity: 1
    //     },
    //     {
    //       item: "cheese",
    //       name: "Сыр",
    //       quantity: 1
    //     },
    //     {
    //       item: "сabbage",
    //       name: "Капуста",
    //       quantity: 1
    //     }
    //   ],
    //   descr: "",
    //   name: "Сендвич с курицей",
    //   type: "food",
    //   needsRecipe: false,
    //   icon: "sandwich"
    // },
    // bisquitfruit: {
    //   ingredients: [
    //     {
    //       item: "apple",
    //       name: "Яблоко",
    //       quantity: 1
    //     },
    //     {
    //       item: "sugar",
    //       name: "Сахар",
    //       quantity: 2
    //     },
    //     {
    //       item: "orange",
    //       name: "Апельсин",
    //       quantity: 2
    //     },
    //     {
    //       item: "dough",
    //       name: "Тесто",
    //       quantity: 1
    //     },
    //     {
    //       item: "berries",
    //       name: "Ягоды",
    //       quantity: 3
    //     },
    //     {
    //       item: "nuts",
    //       name: "Орехи",
    //       quantity: 2
    //     },
    //     {
    //       item: "sourcream",
    //       name: "Сметана",
    //       quantity: 1
    //     }
    //   ],
    //   descr: "",
    //   name: "Фруктовый бисквит",
    //   type: "food",
    //   needsRecipe: false,
    //   icon: "bisquit"
    // },
    // weapon_bottle: {
    //   ingredients: [
    //     {
    //       item: "bottle",
    //       name: "Бутылка",
    //       quantity: 1
    //     }
    //   ],
    //   descr: "",
    //   name: "Розочка",
    //   type: "weapon",
    //   needsRecipe: false,
    //   icon: "brokenbottle"
    // },
    // chocodrink: {
    //   ingredients: [
    //     {
    //       item: "water",
    //       name: "Вода",
    //       quantity: 1
    //     },
    //     {
    //       item: "candy2",
    //       name: "Шоколад",
    //       quantity: 1
    //     }
    //   ],
    //   descr: "Горячо и вкусно",
    //   name: "Горячий шоколад",
    //   type: "drink",
    //   needsRecipe: false,
    //   icon: "chocodrink"
    // },
    // saladceasar: {
    //   ingredients: [
    //     {
    //       item: "garlic",
    //       name: "Чеснок",
    //       quantity: 1
    //     },
    //     {
    //       item: "packaged_chicken",
    //       name: "Куриное филе",
    //       quantity: 1
    //     },
    //     {
    //       item: "tomatoes",
    //       name: "Томаты",
    //       quantity: 1
    //     },
    //     {
    //       item: "cheese",
    //       name: "Сыр",
    //       quantity: 1
    //     },
    //     {
    //       item: "salt",
    //       name: "Соль",
    //       quantity: 1
    //     },
    //     {
    //       item: "bread",
    //       name: "Хлеб",
    //       quantity: 1
    //     }
    //   ],
    //   descr: "",
    //   name: "Салат 'Цезарь'",
    //   type: "food",
    //   needsRecipe: false,
    //   icon: "salad1"
    // },
    // rollphiladelphia: {
    //   ingredients: [
    //     {
    //       item: "fish",
    //       name: "Рыба",
    //       quantity: 1
    //     },
    //     {
    //       item: "cheese",
    //       name: "Сыр",
    //       quantity: 1
    //     },
    //     {
    //       item: "cucumber",
    //       name: "Огурец",
    //       quantity: 1
    //     },
    //     {
    //       item: "rice",
    //       name: "Рис",
    //       quantity: 1
    //     },
    //     {
    //       item: "seaweeds",
    //       name: "Водоросли",
    //       quantity: 1
    //     },
    //     {
    //       item: "eggs",
    //       name: "Яйца",
    //       quantity: 1
    //     }
    //   ],
    //   descr: "",
    //   name: "Роллы 'Филадельфия'",
    //   type: "food",
    //   needsRecipe: false,
    //   icon: "roll2"
    // },
    // icecreambanana: {
    //   ingredients: [
    //     {
    //       item: "icecream",
    //       name: "Мороженое",
    //       quantity: 1
    //     },
    //     {
    //       item: "banana",
    //       name: "Банан",
    //       quantity: 1
    //     }
    //   ],
    //   descr: "",
    //   name: "icecreambanana",
    //   type: "food",
    //   needsRecipe: false,
    //   icon: "icecreambanana"
    // },
    // tomatopaste: {
    //   ingredients: [
    //     {
    //       item: "salt",
    //       name: "Соль",
    //       quantity: 1
    //     },
    //     {
    //       item: "sugar",
    //       name: "Сахар",
    //       quantity: 1
    //     },
    //     {
    //       item: "tomatoes",
    //       name: "Томаты",
    //       quantity: 2
    //     },
    //     {
    //       item: "water",
    //       name: "Вода",
    //       quantity: 1
    //     }
    //   ],
    //   descr: "",
    //   name: "Томатная паста",
    //   type: "food",
    //   needsRecipe: false,
    //   icon: "tomatopaste"
    // },
    // rollamerican: {
    //   ingredients: [
    //     {
    //       item: "bacon",
    //       name: "Бекон",
    //       quantity: 1
    //     },
    //     {
    //       item: "potato",
    //       name: "Картофель",
    //       quantity: 1
    //     },
    //     {
    //       item: "eggs",
    //       name: "Яйца",
    //       quantity: 1
    //     },
    //     {
    //       item: "onion",
    //       name: "Лук",
    //       quantity: 1
    //     },
    //     {
    //       item: "cheese",
    //       name: "Сыр",
    //       quantity: 1
    //     },
    //     {
    //       item: "seaweeds",
    //       name: "Водоросли",
    //       quantity: 1
    //     }
    //   ],
    //   descr: "",
    //   name: "'Американ-ролл'",
    //   type: "food",
    //   needsRecipe: false,
    //   icon: "roll4"
    // },
    // cutletfish: {
    //   ingredients: [
    //     {
    //       item: "mincedfish",
    //       name: "Фарш рыбный",
    //       quantity: 1
    //     },
    //     {
    //       item: "spices",
    //       name: "Специи",
    //       quantity: 2
    //     }
    //   ],
    //   descr: "",
    //   name: "Котлета рыбная",
    //   type: "food",
    //   needsRecipe: false,
    //   icon: "cutlet"
    // },
    // cutletbeef: {
    //   ingredients: [
    //     {
    //       item: "mincedbeef",
    //       name: "Фарш говяжий",
    //       quantity: 1
    //     },
    //     {
    //       item: "spices",
    //       name: "Специи",
    //       quantity: 2
    //     }
    //   ],
    //   descr: "",
    //   name: "Котлета говяжья",
    //   type: "food",
    //   needsRecipe: false,
    //   icon: "cutlet"
    // },
    // meats: {
    //   ingredients: [
    //     {
    //       item: "packaged_chicken",
    //       name: "Куриное филе",
    //       quantity: 1
    //     },
    //     {
    //       item: "spices",
    //       name: "Специи",
    //       quantity: 1
    //     }
    //   ],
    //   descr: "",
    //   name: "Котлеты",
    //   type: "food",
    //   needsRecipe: false,
    //   icon: "cutlet"
    // },
    // turkeyveggetables: {
    //   ingredients: [
    //     {
    //       item: "spices",
    //       name: "Специи",
    //       quantity: 1
    //     },
    //     {
    //       item: "turkey",
    //       name: "Индейка",
    //       quantity: 1
    //     },
    //     {
    //       item: "potato",
    //       name: "Картофель",
    //       quantity: 2
    //     },
    //     {
    //       item: "carrot",
    //       name: "Морковь",
    //       quantity: 2
    //     },
    //     {
    //       item: "tomatoes",
    //       name: "Томаты",
    //       quantity: 1
    //     },
    //     {
    //       item: "salt",
    //       name: "Соль",
    //       quantity: 1
    //     }
    //   ],
    //   descr: "",
    //   name: "Индейка с овощами",
    //   type: "food",
    //   needsRecipe: false,
    //   icon: "roastedchicken"
    // },
    // lasagna: {
    //   ingredients: [
    //     {
    //       item: "salt",
    //       name: "Соль",
    //       quantity: 1
    //     },
    //     {
    //       item: "cheese",
    //       name: "Сыр",
    //       quantity: 1
    //     },
    //     {
    //       item: "dough",
    //       name: "Тесто",
    //       quantity: 1
    //     },
    //     {
    //       item: "mincehouse",
    //       name: "Фарш домашний",
    //       quantity: 1
    //     },
    //     {
    //       item: "tomatopaste",
    //       name: "Томатная паста",
    //       quantity: 1
    //     }
    //   ],
    //   descr: "",
    //   name: "Лазанья",
    //   type: "food",
    //   needsRecipe: false,
    //   icon: "lasagna"
    // },
    // pureepork: {
    //   ingredients: [
    //     {
    //       item: "puree",
    //       name: "Пюре",
    //       quantity: 1
    //     },
    //     {
    //       item: "cutletpork",
    //       name: "Котлета свиная",
    //       quantity: 1
    //     }
    //   ],
    //   descr: "",
    //   name: "Пюре с котлетой (свиной)",
    //   type: "food",
    //   needsRecipe: false,
    //   icon: "pureemeat"
    // },
    // hotdog: {
    //   ingredients: [
    //     {
    //       item: "bun",
    //       name: "Булка",
    //       quantity: 1
    //     },
    //     {
    //       item: "saucisson",
    //       name: "Сосиски",
    //       quantity: 1
    //     }
    //   ],
    //   descr: "Нет, это не горячая собака",
    //   name: "Хот-дог",
    //   type: "food",
    //   needsRecipe: false,
    //   icon: "hotdog"
    // },
    // shrimpbreading: {
    //   ingredients: [
    //     {
    //       item: "seafood",
    //       name: "Морепродукты",
    //       quantity: 3
    //     },
    //     {
    //       item: "salt",
    //       name: "Соль",
    //       quantity: 1
    //     },
    //     {
    //       item: "flour",
    //       name: "Мука",
    //       quantity: 2
    //     },
    //     {
    //       item: "eggs",
    //       name: "Яйца",
    //       quantity: 1
    //     }
    //   ],
    //   descr: "",
    //   name: "Креветки в панировке",
    //   type: "food",
    //   needsRecipe: false,
    //   icon: "shrimp"
    // },
    // rollcalifornia: {
    //   ingredients: [
    //     {
    //       item: "fish",
    //       name: "Рыба",
    //       quantity: 1
    //     },
    //     {
    //       item: "cheese",
    //       name: "Сыр",
    //       quantity: 1
    //     },
    //     {
    //       item: "cucumber",
    //       name: "Огурец",
    //       quantity: 1
    //     },
    //     {
    //       item: "rice",
    //       name: "Рис",
    //       quantity: 1
    //     },
    //     {
    //       item: "seaweeds",
    //       name: "Водоросли",
    //       quantity: 1
    //     }
    //   ],
    //   descr: "",
    //   name: "Роллы 'Калифорния'",
    //   type: "food",
    //   needsRecipe: false,
    //   icon: "roll"
    // },
    // risottochicken: {
    //   ingredients: [
    //     {
    //       item: "salt",
    //       name: "Соль",
    //       quantity: 1
    //     },
    //     {
    //       item: "packaged_chicken",
    //       name: "Куриное филе",
    //       quantity: 1
    //     },
    //     {
    //       item: "onion",
    //       name: "Лук",
    //       quantity: 1
    //     },
    //     {
    //       item: "rice",
    //       name: "Рис",
    //       quantity: 1
    //     }
    //   ],
    //   descr: "",
    //   name: "Ризотто с курицей",
    //   type: "food",
    //   needsRecipe: false,
    //   icon: "risotto"
    // },
    // carrotjuice: {
    //   ingredients: [
    //     {
    //       item: "carrot",
    //       name: "Морковь",
    //       quantity: 1
    //     },
    //     {
    //       item: "water",
    //       name: "Вода",
    //       quantity: 1
    //     }
    //   ],
    //   descr: "",
    //   name: "Сок морковный",
    //   type: "drink",
    //   needsRecipe: false,
    //   icon: "juice"
    // },
    // pureechicken: {
    //   ingredients: [
    //     {
    //       item: "puree",
    //       name: "Пюре",
    //       quantity: 1
    //     },
    //     {
    //       item: "cutletchicken",
    //       name: "Котлета куриная",
    //       quantity: 1
    //     }
    //   ],
    //   descr: "",
    //   name: "Пюре с котлетой (куриной)",
    //   type: "food",
    //   needsRecipe: false,
    //   icon: "pureemeat"
    // },
    // steakbeef: {
    //   ingredients: [
    //     {
    //       item: "spices",
    //       name: "Специи",
    //       quantity: 2
    //     },
    //     {
    //       item: "salt",
    //       name: "Соль",
    //       quantity: 1
    //     },
    //     {
    //       item: "beef",
    //       name: "Говядина",
    //       quantity: 3
    //     },
    //     {
    //       item: "ketchup",
    //       name: "Кетчуп",
    //       quantity: 1
    //     }
    //   ],
    //   descr: "",
    //   name: "Стейк из говядины",
    //   type: "food",
    //   needsRecipe: false,
    //   icon: "steak"
    // },
    // pureeseabass: {
    //   ingredients: [
    //     {
    //       item: "seabass",
    //       name: "Сибас",
    //       quantity: 1
    //     },
    //     {
    //       item: "puree",
    //       name: "Пюре",
    //       quantity: 1
    //     }
    //   ],
    //   descr: "",
    //   name: "Сибас с картофельным пюре",
    //   type: "food",
    //   needsRecipe: false,
    //   icon: "puree"
    // },
    // cheesesnack: {
    //   ingredients: [
    //     {
    //       item: "bread",
    //       name: "Хлеб",
    //       quantity: 1
    //     },
    //     {
    //       item: "cheese",
    //       name: "Сыр",
    //       quantity: 1
    //     },
    //     {
    //       item: "salt",
    //       name: "Соль",
    //       quantity: 1
    //     }
    //   ],
    //   descr: "",
    //   name: "Сырная закуска",
    //   type: "food",
    //   needsRecipe: false,
    //   icon: "cheese"
    // },
    // raviolihouse: {
    //   ingredients: [
    //     {
    //       item: "mincehouse",
    //       name: "Фарш домашний",
    //       quantity: 1
    //     },
    //     {
    //       item: "dough",
    //       name: "Тесто",
    //       quantity: 1
    //     },
    //     {
    //       item: "pepper",
    //       name: "Перец",
    //       quantity: 1
    //     },
    //     {
    //       item: "salt",
    //       name: "Соль",
    //       quantity: 1
    //     },
    //     {
    //       item: "mayo",
    //       name: "Майонез",
    //       quantity: 1
    //     }
    //   ],
    //   descr: "",
    //   name: "Домашние пельмени",
    //   type: "food",
    //   needsRecipe: false,
    //   icon: "dumpling"
    // },
    // spagettichicken: {
    //   ingredients: [
    //     {
    //       item: "spagetti",
    //       name: "Макароны",
    //       quantity: 1
    //     },
    //     {
    //       item: "water",
    //       name: "Вода",
    //       quantity: 1
    //     },
    //     {
    //       item: "salt",
    //       name: "Соль",
    //       quantity: 1
    //     },
    //     {
    //       item: "cutletpork",
    //       name: "Котлета свиная",
    //       quantity: 1
    //     }
    //   ],
    //   descr: "",
    //   name: "Макароны с котлетой (куриная)",
    //   type: "food",
    //   needsRecipe: false,
    //   icon: "spaghettimeat"
    // },
    // cake: {
    //   ingredients: [
    //     {
    //       item: "milk",
    //       name: "Молоко",
    //       quantity: 1
    //     },
    //     {
    //       item: "flour",
    //       name: "Мука",
    //       quantity: 1
    //     },
    //     {
    //       item: "sugar",
    //       name: "Сахар",
    //       quantity: 1
    //     },
    //     {
    //       item: "candy2",
    //       name: "Шоколад",
    //       quantity: 1
    //     }
    //   ],
    //   descr: "",
    //   name: "Кекс",
    //   type: "food",
    //   needsRecipe: false,
    //   icon: "cake"
    // },
    // spagettchee: {
    //   ingredients: [
    //     {
    //       item: "spagetti",
    //       name: "Макароны",
    //       quantity: 1
    //     },
    //     {
    //       item: "cheese",
    //       name: "Сыр",
    //       quantity: 1
    //     },
    //     {
    //       item: "water",
    //       name: "Вода",
    //       quantity: 1
    //     },
    //     {
    //       item: "salt",
    //       name: "Соль",
    //       quantity: 1
    //     }
    //   ],
    //   descr: "",
    //   name: "Макароны с сыром",
    //   type: "food",
    //   needsRecipe: false,
    //   icon: "spaghetti"
    // },
    // obed1: {
    //   ingredients: [
    //     {
    //       item: "spices",
    //       name: "Специи",
    //       quantity: 2
    //     },
    //     {
    //       item: "fish",
    //       name: "Рыба",
    //       quantity: 1
    //     },
    //     {
    //       item: "potato",
    //       name: "Картофель",
    //       quantity: 1
    //     }
    //   ],
    //   descr: "Любителям рыбки",
    //   name: "Рыбное блюдо",
    //   type: "food",
    //   needsRecipe: false,
    //   icon: "fishfood"
    // },
    // peachcasserole: {
    //   ingredients: [
    //     {
    //       item: "peach",
    //       name: "Персик",
    //       quantity: 2
    //     },
    //     {
    //       item: "flour",
    //       name: "Мука",
    //       quantity: 2
    //     },
    //     {
    //       item: "sugar",
    //       name: "Сахар",
    //       quantity: 1
    //     },
    //     {
    //       item: "sourcream",
    //       name: "Сметана",
    //       quantity: 1
    //     },
    //     {
    //       item: "salt",
    //       name: "Соль",
    //       quantity: 1
    //     },
    //     {
    //       item: "eggs",
    //       name: "Яйца",
    //       quantity: 1
    //     }
    //   ],
    //   descr: "",
    //   name: "Персиковая запеканка",
    //   type: "food",
    //   needsRecipe: false,
    //   icon: "casserole"
    // },
    // cheesestick: {
    //   ingredients: [
    //     {
    //       item: "flour",
    //       name: "Мука",
    //       quantity: 2
    //     },
    //     {
    //       item: "cheese",
    //       name: "Сыр",
    //       quantity: 1
    //     },
    //     {
    //       item: "eggs",
    //       name: "Яйца",
    //       quantity: 2
    //     },
    //     {
    //       item: "salt",
    //       name: "Соль",
    //       quantity: 1
    //     }
    //   ],
    //   descr: "",
    //   name: "Сырные палочки",
    //   type: "food",
    //   needsRecipe: false,
    //   icon: "cheese"
    // },
    // spagettipork: {
    //   ingredients: [
    //     {
    //       item: "spagetti",
    //       name: "Макароны",
    //       quantity: 1
    //     },
    //     {
    //       item: "water",
    //       name: "Вода",
    //       quantity: 1
    //     },
    //     {
    //       item: "salt",
    //       name: "Соль",
    //       quantity: 1
    //     },
    //     {
    //       item: "cutletpork",
    //       name: "Котлета свиная",
    //       quantity: 1
    //     }
    //   ],
    //   descr: "",
    //   name: "Макароны с котлетой (свиной)",
    //   type: "food",
    //   needsRecipe: false,
    //   icon: "spaghettimeat"
    // },
    // potatorosemary: {
    //   ingredients: [
    //     {
    //       item: "spices",
    //       name: "Специи",
    //       quantity: 2
    //     },
    //     {
    //       item: "potato",
    //       name: "Картофель",
    //       quantity: 3
    //     },
    //     {
    //       item: "garlic",
    //       name: "Чеснок",
    //       quantity: 1
    //     },
    //     {
    //       item: "salt",
    //       name: "Соль",
    //       quantity: 1
    //     }
    //   ],
    //   descr: "",
    //   name: "Молодой картофель с розмарином",
    //   type: "food",
    //   needsRecipe: false,
    //   icon: "potatofood"
    // },
    // steakpork: {
    //   ingredients: [
    //     {
    //       item: "spices",
    //       name: "Специи",
    //       quantity: 2
    //     },
    //     {
    //       item: "salt",
    //       name: "Соль",
    //       quantity: 1
    //     },
    //     {
    //       item: "pork",
    //       name: "Свинина",
    //       quantity: 3
    //     },
    //     {
    //       item: "ketchup",
    //       name: "Кетчуп",
    //       quantity: 1
    //     }
    //   ],
    //   descr: "",
    //   name: "steak",
    //   type: "food",
    //   needsRecipe: false,
    //   icon: "steak"
    // },
    // spagettibeef: {
    //   ingredients: [
    //     {
    //       item: "spagetti",
    //       name: "Макароны",
    //       quantity: 1
    //     },
    //     {
    //       item: "water",
    //       name: "Вода",
    //       quantity: 1
    //     },
    //     {
    //       item: "salt",
    //       name: "Соль",
    //       quantity: 1
    //     },
    //     {
    //       item: "cutletbeef",
    //       name: "Котлета говяжья",
    //       quantity: 1
    //     }
    //   ],
    //   descr: "",
    //   name: "Макароны с котлетой (говяжьей)",
    //   type: "food",
    //   needsRecipe: false,
    //   icon: "spaghettimeat"
    // },
    // pizzamush: {
    //   ingredients: [
    //     {
    //       item: "salt",
    //       name: "Соль",
    //       quantity: 1
    //     },
    //     {
    //       item: "dough",
    //       name: "Тесто",
    //       quantity: 2
    //     },
    //     {
    //       item: "cheese",
    //       name: "Сыр",
    //       quantity: 2
    //     },
    //     {
    //       item: "mushrooms",
    //       name: "Грибы",
    //       quantity: 3
    //     },
    //     {
    //       item: "tomatoes",
    //       name: "Томаты",
    //       quantity: 2
    //     },
    //     {
    //       item: "onion",
    //       name: "Лук",
    //       quantity: 1
    //     },
    //     {
    //       item: "tomatopaste",
    //       name: "Томатная паста",
    //       quantity: 1
    //     }
    //   ],
    //   descr: "",
    //   name: "Пицца грибная",
    //   type: "food",
    //   needsRecipe: false,
    //   icon: "pizza"
    // },
    // puree: {
    //   ingredients: [
    //     {
    //       item: "potato",
    //       name: "Картофель",
    //       quantity: 3
    //     },
    //     {
    //       item: "milk",
    //       name: "Молоко",
    //       quantity: 1
    //     },
    //     {
    //       item: "salt",
    //       name: "Соль",
    //       quantity: 1
    //     },
    //     {
    //       item: "oil",
    //       name: "Масло",
    //       quantity: 1
    //     }
    //   ],
    //   descr: "",
    //   name: "Пюре",
    //   type: "food",
    //   needsRecipe: false,
    //   icon: "puree"
    // },
    // icecreamdrage: {
    //   ingredients: [
    //     {
    //       item: "icecream",
    //       name: "Мороженое",
    //       quantity: 1
    //     },
    //     {
    //       item: "candy1",
    //       name: "Драже",
    //       quantity: 5
    //     }
    //   ],
    //   descr: "",
    //   name: "icecreamdrage",
    //   type: "food",
    //   needsRecipe: false,
    //   icon: "icecreamdrage"
    // },
    // seabass: {
    //   ingredients: [
    //     {
    //       item: "tomatopaste",
    //       name: "Томатная паста",
    //       quantity: 2
    //     },
    //     {
    //       item: "spices",
    //       name: "Специи",
    //       quantity: 2
    //     },
    //     {
    //       item: "fish",
    //       name: "Рыба",
    //       quantity: 2
    //     },
    //     {
    //       item: "salt",
    //       name: "Соль",
    //       quantity: 1
    //     }
    //   ],
    //   descr: "",
    //   name: "Сибас",
    //   type: "food",
    //   needsRecipe: false,
    //   icon: "fish"
    // },
    // steakfish: {
    //   ingredients: [
    //     {
    //       item: "spices",
    //       name: "Специи",
    //       quantity: 2
    //     },
    //     {
    //       item: "salt",
    //       name: "Соль",
    //       quantity: 1
    //     },
    //     {
    //       item: "fish",
    //       name: "Рыба",
    //       quantity: 3
    //     },
    //     {
    //       item: "ketchup",
    //       name: "Кетчуп",
    //       quantity: 1
    //     }
    //   ],
    //   descr: "",
    //   name: "steak",
    //   type: "food",
    //   needsRecipe: false,
    //   icon: "steak"
    // },
    // icecreamstrawberry: {
    //   ingredients: [
    //     {
    //       item: "icecream",
    //       name: "Мороженое",
    //       quantity: 1
    //     },
    //     {
    //       item: "strawberry",
    //       name: "Клубника",
    //       quantity: 1
    //     }
    //   ],
    //   descr: "",
    //   name: "Клубничное мороженое",
    //   type: "food",
    //   needsRecipe: false,
    //   icon: "icecream2"
    // },
    // slivstraw: {
    //   ingredients: [
    //     {
    //       item: "strawberry",
    //       name: "Клубника",
    //       quantity: 1
    //     },
    //     {
    //       item: "slivki",
    //       name: "Сливки",
    //       quantity: 1
    //     }
    //   ],
    //   descr: "Мммм, вкусно!",
    //   name: "Клубника со сливками",
    //   type: "food",
    //   needsRecipe: false,
    //   icon: "slivstraw"
    // },
    // tomatojuice: {
    //   ingredients: [
    //     {
    //       item: "tomatoes",
    //       name: "Томаты",
    //       quantity: 1
    //     },
    //     {
    //       item: "water",
    //       name: "Вода",
    //       quantity: 1
    //     }
    //   ],
    //   descr: "",
    //   name: "Сок томатный",
    //   type: "drink",
    //   needsRecipe: false,
    //   icon: "juice"
    // },
    // chickenbatter: {
    //   ingredients: [
    //     {
    //       item: "packaged_chicken",
    //       name: "Куриное филе",
    //       quantity: 1
    //     },
    //     {
    //       item: "salt",
    //       name: "Соль",
    //       quantity: 1
    //     },
    //     {
    //       item: "eggs",
    //       name: "Яйца",
    //       quantity: 1
    //     },
    //     {
    //       item: "mayo",
    //       name: "Майонез",
    //       quantity: 1
    //     },
    //     {
    //       item: "oil",
    //       name: "Масло",
    //       quantity: 1
    //     }
    //   ],
    //   descr: "",
    //   name: "Жареный цыпленок в кляре",
    //   type: "food",
    //   needsRecipe: false,
    //   icon: "roastedchicken"
    // },
    // ratatouille: {
    //   ingredients: [
    //     {
    //       item: "onion",
    //       name: "Лук",
    //       quantity: 1
    //     },
    //     {
    //       item: "garlic",
    //       name: "Чеснок",
    //       quantity: 1
    //     },
    //     {
    //       item: "tomatoes",
    //       name: "Томаты",
    //       quantity: 2
    //     },
    //     {
    //       item: "cucumber",
    //       name: "Огурец",
    //       quantity: 2
    //     },
    //     {
    //       item: "tomatopaste",
    //       name: "Томатная паста",
    //       quantity: 2
    //     }
    //   ],
    //   descr: "",
    //   name: "Рататуй",
    //   type: "food",
    //   needsRecipe: false,
    //   icon: "salad3"
    // },
    // eggsbacon: {
    //   ingredients: [
    //     {
    //       item: "eggs",
    //       name: "Яйца",
    //       quantity: 3
    //     },
    //     {
    //       item: "bacon",
    //       name: "Бекон",
    //       quantity: 2
    //     },
    //     {
    //       item: "oil",
    //       name: "Масло",
    //       quantity: 1
    //     },
    //     {
    //       item: "ketchup",
    //       name: "Кетчуп",
    //       quantity: 1
    //     }
    //   ],
    //   descr: "",
    //   name: "eggsbacon",
    //   type: "food",
    //   needsRecipe: false,
    //   icon: "eggsbacon"
    // },
    // eggmushpaste: {
    //   ingredients: [
    //     {
    //       item: "spices",
    //       name: "Специи",
    //       quantity: 2
    //     },
    //     {
    //       item: "spagetti",
    //       name: "Макароны",
    //       quantity: 1
    //     },
    //     {
    //       item: "eggs",
    //       name: "Яйца",
    //       quantity: 1
    //     },
    //     {
    //       item: "sourcream",
    //       name: "Сметана",
    //       quantity: 1
    //     },
    //     {
    //       item: "mushrooms",
    //       name: "Грибы",
    //       quantity: 1
    //     }
    //   ],
    //   descr: "",
    //   name: "Паста с белыми грибами и Яйцам",
    //   type: "food",
    //   needsRecipe: false,
    //   icon: "spaghetti"
    // },
    // saladfruite: {
    //   ingredients: [
    //     {
    //       item: "apple",
    //       name: "Яблоко",
    //       quantity: 2
    //     },
    //     {
    //       item: "banana",
    //       name: "Банан",
    //       quantity: 1
    //     },
    //     {
    //       item: "orange",
    //       name: "Апельсин",
    //       quantity: 1
    //     },
    //     {
    //       item: "yogurt",
    //       name: "Йогурт",
    //       quantity: 1
    //     },
    //     {
    //       item: "grapperaisin",
    //       name: "Гроздь винограда",
    //       quantity: 1
    //     }
    //   ],
    //   descr: "",
    //   name: "Фруктовый салат",
    //   type: "food",
    //   needsRecipe: false,
    //   icon: "salad2"
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
