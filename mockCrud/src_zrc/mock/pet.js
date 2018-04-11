const Mock = require('mockjs')

const data = Mock.mock({
  'content|6': [{
    'id|+1': 1,
    'name|+1': [
      'LiMei',
      'HanLeiLei',
      'Poly',
      'Adam',
      'Jack',
      'Lucy'
    ],
    'categoryName|1': [
      'cat',
      'dog',
    ],
  }],
}).content

let total = 6
const defaultSize = 10
const defaultSort = 'id asc'
const sortByIdAsc = (a, b) => {
  return a.id - b.id
}
const sortByIdDesc = (a, b) => {
  return b.id - a.id
}
const sortByNameAsc = (a, b) => {
  if (a.name < b.name) return -1
  if (a.name > b.name) return 1
  return 0
}
const sortByNameDesc = (a, b) => {
  if (a.name < b.name) return 1
  if (a.name > b.name) return -1
  return 0
}
module.exports = {
  'GET /pet': (req, res) => {
    console.log(data)
    let { page, size, sort } = req.query
    if (!size) size = defaultSize
    else size = parseInt(size, 0)
    if (!page) page = 0
    else page = parseInt(page, 0)
    if (!sort) sort = defaultSort
    else sort = sort.toLowerCase()

    if (sort.indexOf('id desc') >= 0) data.sort(sortByIdDesc)
    else if (sort.indexOf('id') >= 0) data.sort(sortByIdAsc)
    else if (sort.indexOf('name desc') >= 0) data.sort(sortByNameDesc)
    else if (sort.indexOf('name') >= 0) data.sort(sortByNameAsc)

    let content
    if (page * size + size >= total) content = data.slice(page * size)
    else content = data.slice(page * size, page * size + size)
    res.status(200).json({
      content,
      last: page * size + size >= total,
      totalPages: Math.ceil(total / size),
      size,
      number: page,
      first: page === 0,
      sort,
      numberOfElements: content.length
    })
  },
  'POST /pet': (req, res) => {
    const newItem = req.body
    if (!newItem ||
      !newItem.id ||
      !newItem.name ||
      !newItem.categoryName) {
      res.status(400).json({
        success: false,
        message: 'item invalid.'
      })
      return
    }
    if (data.find(p => p.id === newItem.id)) {
      res.status(400).json({
        success: false,
        message: 'item id duplicated.'
      })
      return
    }
    data.push(newItem)
    res.status(200).json({
      success: true
    })
  },
  'PUT /pet': (req, res) => {
    const newItem = req.body
    if (!newItem ||
      !newItem.id) {
      res.status(400).json({
        success: false,
        message: 'item invalid.'
      })
      return
    }
    let updateIndex =data.findIndex(p => p.id === newItem.id)
    if (updateIndex<0) {
      res.status(200).json({
        success: true,
        message: 'item id not found.'
      })
      return
    }
    data.splice(updateIndex, 1,newItem);
    res.status(200).json({
      success: true
    })
  },
  'DELETE /pet': (req, res) => {
    const item = req.body
    if (!item ||
      !item.id) {
      res.status(400).json({
        success: false,
        message: 'item invalid.'
      })
      return
    }

    const index = data.findIndex(p => p.id === item.id)
    if (index < 0) {
      res.status(200).json({
        success: true,
        message: 'item id not found.'
      })
      return
    }
    data.splice(index, 1);
    res.status(200).json({
      success: true
    })

  }
};