import request from '../utils/request';
import 'whatwg-fetch'
import 'es6-promise'

async function searchInfoList(params) {
  const url = `/pet`
  let dataInit = await request(url, {
    method: 'GET',
  });
  let infoList = dataInit.data.content
  return infoList
}
async function addInfoFunc(params) {
  let { user } = params
  const url = `/pet`
  await request(url, {
    method: 'POST',
    body: user
  });
}
async function deleteInfoFunc(params) {
  let user={
    id:params.id.id
  }
  const url = `/pet`
  await request(url, {
    method: 'DELETE',
    body: user
  });
}
async function updateInfoFunc(params) {
  let {user}=params
  const url = `/pet`
  await request(url, {
    method: 'Put',
    body: user
  });
}
export default {
  addInfoFunc,
  searchInfoList,
  deleteInfoFunc,
  updateInfoFunc
}
