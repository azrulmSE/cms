import createPersistedState from 'vuex-persistedstate'

export default ({store}) => {
  store.commit('loadPage', store)

  createPersistedState({
      key: 'vuex',
      paths: window.localStorage,
  })(store)
}