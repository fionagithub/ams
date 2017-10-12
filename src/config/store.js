import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)
let state = {
  add_count: {
    tktCut: 0,
    dvCut: 0,
  },
  _error: null,
  global_err_tips: {
    isFlag: false,
    loginUri: null,
    tips: null,
  },
  priorityMax: 3,
  confMenu:{
    source: [],
    system: [],
    _system_: [],
    priority: [],
    state: [],
    _state_: [],
  }
}
let getters = {
  getGlbErr(state) {
    return state.global_err_tips
  },
  getCtCut(state){
    return state.add_count
  },
  getConfMenu(state){
    return state.confMenu
  },
}

let mutations = {
  setErr(state){
    state.global_err_tips = {
      isFlag: false,
      loginUri: null,
      tips: null,
    }
  },
  setError(state){
    state._error = null
  },
  getGlbErr(state, obj) {
    for (let i in state.global_err_tips){
        state.global_err_tips[i]=obj[i]
    }
  },
  setConfMenu(state, obj) {
    for (let i in state.confMenu){
      state.confMenu[i]=obj[i]
    }
  },
  setAddCount(state, obj){
    for (let i in state.add_count){
      state.add_count[i]=obj[i]
    }
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations

})
