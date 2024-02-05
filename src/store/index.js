import { createStore } from "vuex";

export default createStore({
  state: {
    cartItems: [],
    cartItemsCategoty: [],
    cartItemsCount: 0,
    shippingCost: 50,
  },
  getters: {},
  mutations: {
    addToCart(state, payload) {
      let item = payload;
      item = { ...item, quantity: 1 };
      if (state.cartItems.length > 0) {
        let bool = state.cartItems.some((i) => i.id === item.id);
        if (bool) {
          let itemIndex = state.cartItems.findIndex((el) => el.id === item.id);
          state.cartItems[itemIndex]["quantity"] += 1;
        } else {
          state.cartItems.push(item);
        }
      } else {
        state.cartItems.push(item);
      }
      state.cartItemsCount++;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      localStorage.setItem(
        "cartItemsCount",
        JSON.stringify(state.cartItemsCount)
      );
    },
    deleteItem(state, payload) {
      let item = payload;
      if (state.cartItems.length > 0) {
        let bool = state.cartItems.some((i) => i.id === item.id);
        if (bool) {
          let itemIndex = state.cartItems.findIndex((el) => el.id === item.id);
          if (state.cartItems[itemIndex]["quantity"] !== 0) {
            state.cartItems[itemIndex]["quantity"] -= 1;
            state.cartItemsCount--;
          }
          if (state.cartItems[itemIndex]["quantity"] === 0) {
            state.cartItems.splice(itemIndex, 1);
          }
        }
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      localStorage.setItem(
        "cartItemsCount",
        JSON.stringify(state.cartItemsCount)
      );
    },
  },
  actions: {
    addToCart({ commit }, payload) {
      commit("addToCart", payload);
    },
    deleteItem({ commit }, payload) {
      commit("deleteItem", payload);
    },
  },
  modules: {},
});
