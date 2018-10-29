import Vue from 'vue';
import Vuex from 'vuex';
import plugins from './plugins';
import common from './modules/common';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    common,
  },
  plugins,
});
