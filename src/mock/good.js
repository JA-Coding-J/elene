import Mock from 'mockjs'

// get请求从config.url获取参数，post从config.body中获取参数
function param2Obj(url) {
  const search = url.split('?')[1]
  if (!search) {
    return {}
  }
  return JSON.parse(
    '{"' +
      decodeURIComponent(search)
        .replace(/"/g, '\\"')
        .replace(/&/g, '","')
        .replace(/=/g, '":"') +
      '"}'
  )
}

let List = []
const count = 200

for (let i = 0; i < count; i++) {
  List.push(
    Mock.mock({
      id: Mock.Random.guid(),
      img: Mock.Random.dataImage('120x60', '商品图'),
      name: Mock.Random.cword(2, 10),
      merchant: Mock.Random.cword(2, 10),
      price: Mock.Random.integer(5, 100),
      score: Mock.Random.float(1, 4, 0, 1),
      comments: Mock.Random.integer(0, 20000),
      addr: Mock.Random.cword(5, 10),
      phoneNumber: Mock.Random.integer(20000000, 29999999),
      detailImg: [
        Mock.Random.dataImage('120x60', '商品详情图'),
        Mock.Random.dataImage('120x60', '商品详情图'),
        Mock.Random.dataImage('120x60', '商品详情图'),
        Mock.Random.dataImage('120x60', '商品详情图')
      ],
      commentDetail: [
        {
          header: Mock.Random.dataImage('60x60', '头像'),
          commenter: Mock.Random.cword(2, 10),
          score: Mock.Random.float(1, 4, 0, 1),
          comment: Mock.Random.cword(1, 50),
          commentdate: Mock.Random.date()
        },
        {
          header: Mock.Random.dataImage('60x60', '头像'),
          commenter: Mock.Random.cword(2, 10),
          score: Mock.Random.float(1, 4, 0, 1),
          comment: Mock.Random.cword(1, 50),
          commentdate: Mock.Random.date()
        },
        {
          header: Mock.Random.dataImage('60x60', '头像'),
          commenter: Mock.Random.cword(2, 10),
          score: Mock.Random.float(1, 4, 0, 1),
          comment: Mock.Random.cword(1, 50),
          commentdate: Mock.Random.date()
        },
        {
          header: Mock.Random.dataImage('60x60', '头像'),
          commenter: Mock.Random.cword(2, 10),
          score: Mock.Random.float(1, 4, 0, 1),
          comment: Mock.Random.cword(1, 50),
          commentdate: Mock.Random.date()
        }
      ]
    })
  )
}

export default {
  /**
   * 获取列表
   * 要带参数 name, page, limt; name可以不填, page,limit有默认值。
   * @param name, page, limit
   * @return {{code: number, count: number, data: *[]}}
   */
  getGoodList: config => {
    const { name, page = 1, limit = 20 } = param2Obj(config.url)
    console.log('name:' + name, 'page:' + page, '分页大小limit:' + limit)
    const mockList = List.filter(good => {
      if (
        name &&
        good.name.indexOf(name) === -1 &&
        good.merchant.indexOf(name) === -1
      ) { return false }
      return true
    })
    const pageList = mockList.filter(
      (item, index) => index < limit * page && index >= limit * (page - 1)
    )
    return {
      code: 20000,
      count: mockList.length,
      list: pageList
    }
  },
  /**
   * 增加商品
   * @param name, merchant
   * @return {{code: number, data: {message: string}}}
   */
  createGood: config => {
    const { name, merchant } = JSON.parse(config.body)
    console.log(JSON.parse(config.body))
    List.unshift({
      id: Mock.Random.guid(),
      name: name,
      merchant: merchant
    })
    return {
      code: 20000,
      data: {
        message: '添加成功'
      }
    }
  },
  /**
   * 删除商品
   * @param id
   * @return {*}
   */
  deleteGood: config => {
    const { id } = param2Obj(config.url)
    if (!id) {
      return {
        code: -999,
        message: '参数不正确'
      }
    } else {
      List = List.filter(u => u.id !== id)
      return {
        code: 20000,
        message: '删除成功'
      }
    }
  },
  /**
   * 批量删除
   * @param config
   * @return {{code: number, data: {message: string}}}
   */
  batchremove: config => {
    let { ids } = param2Obj(config.url)
    ids = ids.split(',')
    List = List.filter(u => !ids.includes(u.id))
    return {
      code: 20000,
      data: {
        message: '批量删除成功'
      }
    }
  },
  /**
   * 修改商品
   * @param id, name, merchant
   * @return {{code: number, data: {message: string}}}
   */
  updateGood: config => {
    const { id, name, merchant } = JSON.parse(config.body)
    List.some(u => {
      if (u.id === id) {
        u.name = name
        u.merchant = merchant
        return true
      }
    })
    return {
      code: 20000,
      data: {
        message: '编辑成功'
      }
    }
  }
}
