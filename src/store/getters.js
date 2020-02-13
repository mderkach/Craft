// https://vuex.vuejs.org/en/getters.html

export default {
  recipes: state => {
    return state.recipes;
  },
  inventory: state => {
    return state.inventory;
  },
  item: state => {
    return state.item;
  }
};
