import React from 'react';
import { connect } from 'dva';
import MainPageCom from '../components/MainPage';

const MainPage = (props) => {
  const {
    dispatch, dataSource, totalPages
  } = props
  function addBu() {
    dispatch({ type: 'mainpage/addBu', payload: 'page' })
  }
  function deleteBu(e) {
    const id = e.target.parentNode.parentNode.parentNode.parentNode.firstChild.innerText
    console.log('删除去routes-id', id)
    dispatch({ type: 'mainpage/deleteFu', id })
  }
  function updateBu(e) {
    const id = e.target.parentNode.parentNode.parentNode.parentNode.firstChild.innerText
    const name = e.target.parentNode.parentNode.parentNode.parentNode.children[1].innerText
    const categoryName = e.target.parentNode.parentNode.parentNode.parentNode.children[2].innerText
    const userj = { id, name, categoryName }
    dispatch({ type: 'mainpage/updatepage', user: userj })
  }

  return (
    <div>
      <MainPageCom
        deleteBu={deleteBu}
        updateBu={updateBu}
        addBu={addBu}
        dataSource={dataSource}
        totalPage={totalPages}
      />
    </div>
  )
}
export default connect(({ mainpage }) => mainpage)(MainPage);
