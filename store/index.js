import Vuex from "vuex";
import Vue from "vue";
import { createLocalStoragePlugin } from "./plugin";
Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [
    createLocalStoragePlugin({
      paths: [
        {
          type: "SET_TOKEN",
          path: "token",
        },
        {
          type: "SET_NAME",
          path: "name",
        },
      ],
    }),
  ],

  state: {
    token: "",
  },

  mutations: {
    SET_TOKEN: (state, payload) => {
      state.token = payload.token;
    },
    SET_NAME: (state, payload) => {
      state.name = payload.name;
    },
  },
});
