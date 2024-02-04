import { createStore } from 'vuex'
import mutations from './mutations';
import actions from './actions.js';

const store = createStore({
  state(){
    return {
      news : [],
      ask : [],
      jobs : [],
      user : {},
      item : {},
    }
  },
  mutations,
  actions,
})

export default store;