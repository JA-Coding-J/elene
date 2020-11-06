import Cookie from 'js-cookie'
export default {
  state: {
    isCollapse: false,
    currentMenu: null,
    menu: [],
    code: 20001
  },
  mutations: {
    setMenu(state, val) {
      state.menu = val
      Cookie.set('menu', JSON.stringify(val))
    },
    clearMenu(state) {
      state.menu = []
      state.currentMenu = null
      Cookie.remove('menu')
    },
    addMenu(state, params) {
      if (!Cookie.get('menu')) {
        return
      }
      const menu = JSON.parse(Cookie.get('menu'))
      state.menu = menu
      if (params.code) {
        state.code = params.code
      }
      var current = [
        {
          path: '',
          component: '',
          children: []
        }
      ]
      // 根据code值判断是否是管理员
      if (state.code === 20000) {
        current = [
          {
            path: '/',
            component: () => import(`@/views/Main`),
            children: []
          }
        ]
      } else if (state.code === 20001) {
        current = [
          {
            path: '/',
            component: () => import(`@/views/UserMain`),
            children: []
          }
        ]
      }
      const currentMenu = current
      menu.forEach(item => {
        if (item.children) {
          item.children = item.children.map(item => {
            item.component = () => import(`@/views/${item.url}`)
            return item
          })
          currentMenu[0].children.push(...item.children)
        } else {
          item.component = () => import(`@/views/${item.url}`)
          currentMenu[0].children.push(item)
        }
      })
      params.router.addRoutes(currentMenu)
    },
    selectMenu(state, val) {
      if (val.name !== 'home') {
        state.currentMenu = val
      } else {
        state.currentMenu = null
      }
    },
    collapseMenu(state) {
      state.isCollapse = !state.isCollapse
    }
  },
  actions: {}
}
