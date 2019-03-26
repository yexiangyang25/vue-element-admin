import { fetchList } from '@/api/article'

const article = {
  state: {
    list: [],
    page: 1,
    keyword: '',
    tag: '',
    loading: false,
    total: 0
  },

  mutations: {
    SET_LOADING: (state, loading) => {
      state.loading = loading
    },
    SET_TAG: (state, tag) => {
      state.tag = tag
    },
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
    SetTag({ commit }, param) {
      return new Promise(resolve => {
        commit('SET_TAG', param)
        resolve()
      })
    },
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
      if (!this.state.article.loading) {
        commit('SET_LOADING', true)
        const page = this.state.article.page
        const keyword = this.state.article.keyword
        const tag = this.state.article.tag
        const limit = 10
        const param = { page, limit, keyword, tag }
        return new Promise((resolve, reject) => {
          fetchList(param).then(response => {
            commit('SET_LOADING', false)
            const res = response.data
            if (!res.success) {
              reject(res.msg)
            } else {
              commit('SET_LIST', res.data)
              commit('SET_TOTAL', res.total)
              resolve()
            }
          }).catch(error => {
            commit('SET_LOADING', false)
            reject(error)
          })
        })
      }
    }
  }
}

export default article