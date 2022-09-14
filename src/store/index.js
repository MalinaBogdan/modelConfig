import { createStore } from "vuex";

export default createStore({
  state: {
    horizOrientation: null,
  },
  getters: {
    isHorizOrientation: (state) => state.horizOrientation,
  },
  actions: {},
  mutations: {
    checkHorizOrientation(state, bool) {
      return (state.horizOrientation = bool);
    },
  },
});
