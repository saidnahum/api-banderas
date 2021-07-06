import { createStore } from 'vuex'

export default createStore({
  state: {
    paises: [],
    paisesFiltrados: []
  },
  mutations: {
    setPaises(state, payload){
      state.paises = payload
    },
    setPaisesFiltrados(state, payload){
      state.paisesFiltrados = payload
    }
  },
  actions: {
    async getPaises({commit}){
      try {
        const resp = await fetch('https://restcountries.eu/rest/v2/all')
        const data = await resp.json()
        // console.log(data)
        commit('setPaises', data)
      } catch (error) {
        console.log(error)
      }
    },
    filtrarRegion({commit, state}, region){
      const filtro = state.paises.filter(pais =>
        pais.region.includes(region)
      )
      commit('setPaisesFiltrados', filtro)
    },
    filtroNombre({commit, state}, texto){
      const textoCliente = texto.toLowerCase()
      const filtro = state.paises.filter(pais => {
        const textoApi = pais.name.toLowerCase()
        if(textoApi.includes(textoCliente)){
          return pais
        }
      })
      commit('setPaisesFiltrados', filtro)
    }
  },
  getters: {
    topPaisesPoblacion(state){
      return state.paisesFiltrados.sort((a, b) => 
        a.population < b.population ? 1 : -1
      )
    }
  },
  modules: {
  }
})
