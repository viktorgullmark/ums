import Vue from 'vue'
import Vuex from 'vuex'
import userModule from './user';
import countryModule from './country';
import professionModule from './profession';

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    userModule,
    countryModule,
    professionModule,
  },
})

export default store;