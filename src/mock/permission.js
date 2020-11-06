import Mock from 'mockjs'
export default {
  getMenu: config => {
    const { username, password } = JSON.parse(config.body)
    // console.log(JSON.parse(config.body))
    // 先判断用户是否存在
    if (username === 'admin' || username === 'user') {
      // 判断账号和密码是否对应
      if (username === 'admin' && password === '123456') {
        return {
          code: 20000,
          data: {
            menu: [
              {
                path: '/',
                name: 'home',
                label: '首页',
                icon: 's-home',
                url: 'Home/Home'
              },
              {
                path: '/goods',
                name: 'goods',
                label: '商品管理页',
                icon: 'goods',
                url: 'GoodManage/GoodManage'
              },
              {
                path: '/user',
                name: 'user',
                label: '用户管理页',
                icon: 'user',
                url: 'UserManage/UserManage'
              }
            ],
            token: Mock.Random.guid(),
            message: '获取成功'
          }
        }
      } else if (username === 'user' && password === '123456') {
        return {
          code: 20001,
          data: {
            menu: [
              {
                path: '/userhome',
                name: 'userhome',
                label: '首页',
                url: 'UserHome/UserHome'
              },
              {
                path: '/goodDetail/:id',
                name: 'goodDetail',
                label: '商品详情页',
                url: 'GoodDetail/GoodDetail'
              }
            ],
            token: Mock.Random.guid(),
            message: '获取成功'
          }
        }
      } else {
        return {
          code: -999,
          data: {
            message: '密码错误'
          }
        }
      }
    } else {
      return {
        code: -999,
        data: {
          message: '用户不存在'
        }
      }
    }
  }
}
