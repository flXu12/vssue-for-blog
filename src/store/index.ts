import { createStore } from 'vuex';

const defaultStates = {
  count: 0
}

export default createStore({
  state() {
    return defaultStates;
  },
  mutations: {
    mutationFunc(state: typeof defaultStates) {
      state.count += 1;
    }
  },
  actions: {
    actionFunc(context) {
      context.commit('mutationFunc')
    }
  }
})