import Cookie from 'js-cookie'
export default {
  state: {
    detail: {
      id: null,
      img: null,
      name: null,
      merchant: null,
      price: null,
      score: null,
      comments: null,
      addr: null,
      phoneNumber: null,
      detailImg: [],
      commentDetail: []
    }
  },
  mutations: {
    setValue(state, item) {
      state.detail = item
      Cookie.set('detail', JSON.stringify(item))
    },
    clearValue(state) {
      state.detail = {}
      Cookie.remove('detail')
    }
  }
}
