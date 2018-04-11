import request from '../utils/request';
// import 'whatwg-fetch'
// import 'es6-promise'

// 查询
async function seekList() {
  const url = '/pet'
  const dataInit = await request(url, {
    method: 'GET',
  });
  const pack = dataInit.data
  return pack
}
// 增加
async function addData(params) {
  const { user } = params 
  const url = '/pet'
  await request(url, {
    method: 'POST',
    body: user
  });
}
// 删除
async function deleteData(params) {
  console.log('service', params.id)
  const user = {
    id: params.id
  }
  const url = '/pet'
  await request(url, {
    method: 'DELETE',
    body: user
  });
}
// 修改
async function updateData(params) {
  const { user } = params
  console.log('user', user)
  const url = '/pet'
  await request(url, {
    method: 'Put',
    body: user
  });
}
export default{
  addData,
  seekList,
  deleteData,
  updateData
}

