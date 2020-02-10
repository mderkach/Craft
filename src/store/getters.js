// https://vuex.vuejs.org/en/getters.html

export default {
  receipts: state => {
    return state.receipts;
  },
  inventory: state => {
    return state.inventory;
  },
  item: state => {
    return state.item;
  }
};
