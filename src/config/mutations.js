import {
   SETERR,
 SETERROR,
 GETGLBERR,
 SETCONFMENU,
 SETADDCOUNT,
} from './mutation-types'
export const mutations = {
  [SETERR](state){
    state.global_err_tips = {
      isFlag: false,
      loginUri: null,
      tips: null,
    }
  },
  [SETERROR](state, obj){
   // console.log('--=-=-',obj)
    state._error = obj
  },
  [GETGLBERR](state, obj) {
    for (let i in state.global_err_tips){
      if(obj[i]){
        state.global_err_tips[i]=obj[i]
      }
    }
  },
  [SETCONFMENU](state, obj) {
    for (let i in state.confMenu){
      if(obj[i]){
        state.confMenu[i]=obj[i]
      }
    }
  },
  [SETADDCOUNT](state, obj){
    for (let i in state.add_count){
      if(obj[i]){
         state.add_count[i]=obj[i]
       }
    }
  }
}
