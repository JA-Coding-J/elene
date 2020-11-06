import Mock from 'mockjs'
import homeApi from './home'
import goodApi from './good'
import userApi from './user'
import permissionApi from './permission'

// 首页相关
Mock.mock(/\/home\/getData/, 'get', homeApi.getHomeData)

// 商品相关
Mock.mock(/\/good\/getGood/, 'get', goodApi.getGoodList)
Mock.mock(/\/good\/del/, 'get', goodApi.deleteGood)
Mock.mock(/\/good\/batchremove/, 'get', goodApi.batchremove)
Mock.mock(/\/good\/add/, 'post', goodApi.createGood)
Mock.mock(/\/good\/edit/, 'post', goodApi.updateGood)

// 用户相关
Mock.mock(/\/user\/getUser/, 'get', userApi.getUserList)
Mock.mock(/\/user\/del/, 'get', userApi.deleteUser)
Mock.mock(/\/user\/batchremove/, 'get', userApi.batchremove)
Mock.mock(/\/user\/add/, 'post', userApi.createUser)
Mock.mock(/\/user\/edit/, 'post', userApi.updateUser)

// 权限相关
Mock.mock(/\/permission\/getMenu/, 'post', permissionApi.getMenu)
