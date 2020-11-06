import Mock from 'mockjs'

// 图表数据
const List = []
export default {
  getHomeData: () => {
    for (let i = 0; i < 7; i++) {
      List.push(
        Mock.mock({
          Food: Mock.Random.float(100, 8000, 0, 2),
          SweetsOrDrinks: Mock.Random.float(100, 8000, 0, 2),
          Supermarket: Mock.Random.float(100, 8000, 0, 2),
          Fruits: Mock.Random.float(100, 8000, 0, 2),
          daigou: Mock.Random.float(100, 8000, 0, 2),
          Drug: Mock.Random.float(100, 8000, 0, 2)
        })
      )
    }
    return {
      code: 20000,
      data: {
        // 饼图
        videoData: [
          {
            name: 'Food',
            value: Mock.Random.float(1000, 10000, 0, 2)
          },
          {
            name: 'SweetsOrDrinks',
            value: Mock.Random.float(1000, 10000, 0, 2)
          },
          {
            name: 'Supermarket',
            value: Mock.Random.float(1000, 10000, 0, 2)
          },
          {
            name: 'Fruits',
            value: Mock.Random.float(1000, 10000, 0, 2)
          },
          {
            name: 'daigou',
            value: Mock.Random.float(1000, 10000, 0, 2)
          },
          {
            name: 'Drug',
            value: Mock.Random.float(1000, 10000, 0, 2)
          }
        ],
        // 柱状图
        userData: [
          {
            date: '周一',
            new: Mock.Random.integer(1, 100),
            active: Mock.Random.integer(100, 1000)
          },
          {
            date: '周二',
            new: Mock.Random.integer(1, 100),
            active: Mock.Random.integer(100, 1000)
          },
          {
            date: '周三',
            new: Mock.Random.integer(1, 100),
            active: Mock.Random.integer(100, 1000)
          },
          {
            date: '周四',
            new: Mock.Random.integer(1, 100),
            active: Mock.Random.integer(100, 1000)
          },
          {
            date: '周五',
            new: Mock.Random.integer(1, 100),
            active: Mock.Random.integer(100, 1000)
          },
          {
            date: '周六',
            new: Mock.Random.integer(1, 100),
            active: Mock.Random.integer(100, 1000)
          },
          {
            date: '周日',
            new: Mock.Random.integer(1, 100),
            active: Mock.Random.integer(100, 1000)
          }
        ],
        // 折线图
        orderData: {
          date: [
            '20200701',
            '20200702',
            '20200703',
            '20200704',
            '20200705',
            '20200706',
            '20200707'
          ],
          data: List
        },
        tableData: [
          {
            name: 'Food',
            todayBuy: Mock.Random.float(100, 1000, 0, 2),
            monthBuy: Mock.Random.float(3000, 5000, 0, 2),
            totalBuy: Mock.Random.float(40000, 1000000, 0, 2)
          },
          {
            name: 'SweetsOrDrinks',
            todayBuy: Mock.Random.float(100, 1000, 0, 2),
            monthBuy: Mock.Random.float(3000, 5000, 0, 2),
            totalBuy: Mock.Random.float(40000, 1000000, 0, 2)
          },
          {
            name: 'Supermarket',
            todayBuy: Mock.Random.float(100, 1000, 0, 2),
            monthBuy: Mock.Random.float(3000, 5000, 0, 2),
            totalBuy: Mock.Random.float(40000, 1000000, 0, 2)
          },
          {
            name: 'Fruits',
            todayBuy: Mock.Random.float(100, 1000, 0, 2),
            monthBuy: Mock.Random.float(3000, 5000, 0, 2),
            totalBuy: Mock.Random.float(40000, 1000000, 0, 2)
          },
          {
            name: 'daigou',
            todayBuy: Mock.Random.float(100, 1000, 0, 2),
            monthBuy: Mock.Random.float(3000, 5000, 0, 2),
            totalBuy: Mock.Random.float(40000, 1000000, 0, 2)
          },
          {
            name: 'Drug',
            todayBuy: Mock.Random.float(100, 1000, 0, 2),
            monthBuy: Mock.Random.float(3000, 5000, 0, 2),
            totalBuy: Mock.Random.float(40000, 1000000, 0, 2)
          }
        ]
      }
    }
  }
}
