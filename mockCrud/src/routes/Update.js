import React from 'react';
import { connect } from 'dva';
import UpdateCom from '../components/Update';

const Update = (props) => {
  const { dispatch, user } = props
  console.log('update', user.id, user.name, user.categoryName)
  const idFunc = (e) => {
    user.id = e.target.value
  }
  const nameFunc = (e) => {
    user.name = e.target.value
  }
  const categoryFunc = (e) => {
    user.categoryName = e
  }
  const handleCancel = () => {
    dispatch({ type: 'setData', payload: { isShowModel: false } })
  }
  const handleCreate = () => {
    console.log('hui')
    dispatch({ type: 'mainpage/updateFu', user })
  }
  return (
    <div>
      <UpdateCom
        handleCancel={handleCancel}
        handleCreate={handleCreate}
        categoryFunc={categoryFunc}
        nameFunc={nameFunc}
        user={user}
        idFunc={idFunc}
      />
    </div>
  )
}
export default connect(({ mainpage }) => mainpage)(Update)
