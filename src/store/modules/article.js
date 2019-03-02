import { fetchList } from '@/api/article'

const article = {
  state: {
    list: [],
    page: 1,
    keyword: '',
    total: 0
  },

  mutations: {
    SET_LIST: (state, list) => {
      state.list = list
    },
    SET_PAGE: (state, page) => {
      state.page = page
    },
    SET_KEYWORD: (state, keyword) => {
      state.keyword = keyword
    },
    SET_TOTAL: (state, total) => {
      state.total = total
    }
  },

  actions: {
    SetKeyword({ commit }, param) {
      return new Promise(resolve => {
        commit('SET_KEYWORD', param)
        resolve()
      })
    },
    SetPage({ commit }, param) {
      return new Promise(resolve => {
        commit('SET_PAGE', param)
        resolve()
      })
    },
    FetchList({ commit }) {
      const page = this.state.article.page
      const keyword = this.state.article.keyword
      const limit = 10
      const param = { page, limit, keyword }
      return new Promise((resolve, reject) => {
        fetchList(param).then(response => {
          const res = response.data
          if (!res.success) {
            reject(res.msg)
          } else {
            commit('SET_LIST', res.data)
            commit('SET_TOTAL', res.total)
            resolve()
          }
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}

export default article
