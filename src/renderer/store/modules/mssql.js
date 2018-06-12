const mssql = {
  stage: {
    userName: '',
    password: '',
    server: '',
    options: {
      database: ''
    }
  },
  mutations: {
    SET_DATABASE: (state, data) => {
      state.options.dataBaseName = data
    },
    SET_USERNAME: (state, data) => {
      state.userName = data
    },
    SET_PASSWORD: (state, data) => {
      state.password = data
    },
    SET_SERVER: (state, data) => {
      state.server = data
    }
  },
  actions: {
    setDataBaseConfig ({ commit, db }) {
      commit('SET_SERVER', db.server)
      commit('SET_USERNAME', db.userName)
      commit('SET_PASSWORD', db.password)
      commit('SET_DATABASE', db.dataBaseName)
    }
  }
}
export default mssql
