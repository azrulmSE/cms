import Vuex from 'vuex'
import ls from 'local-storage'

const createStore = () => {
    return new Vuex.Store({
      state: {
        loadPage: ''
      },
      getters:{
        loadPage:state=>{
            if(ls.get('loadPage')==null) state.loadPage =''
            else  {
              state.loadPage = ls.get('loadPage')
            }
            return state.loadPage
        }
      },
      mutations:{
          loadPage:(state,payload)=>{
            if(payload=='Logout')
              {
                state.loadPage = ''
                ls.remove('loadPage')
              }
            else
              {
                state.loadPage = payload
                ls.set('loadPage',payload)
              }
          },
          updatePage:state=>{
            if(ls.get('loadPage')==null) state.loadPage =''
            else  {
              state.loadPage = ls.get('loadPage')
            }
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
