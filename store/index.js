import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({
      state: {
        counter: 0,
        loadPage: ''
      },
      getters:{
        loadPage:state=>{
            return state.loadPage
        }
      },
      mutations:{
          loadPage:(state,payload)=>{
            state.loadPage = payload
          }
      },
      actions:{
          loadPage:(vuexContext,payload)=>{
            vuexContext.commit('loadPage',payload)
          }
      }
    })
  }
  
export default createStore
