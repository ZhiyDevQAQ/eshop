import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import TypeNavOptions from "./TypeNavStore";

export default new Vuex.Store({
  modules: {
    TypeNavOptions,
  },
});
