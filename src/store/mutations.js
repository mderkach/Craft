// https://vuex.vuejs.org/en/mutations.html

export default {
  set_recipes: (state, payload) => {
    state.recipes = payload;
  },
  set_inventory: (state, payload) => {
    state.inventory = payload;
  },
  set_item: (state, payload) => {
    state.item = payload;
  }
};
