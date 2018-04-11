import React from 'react';
import { connect } from 'dva';
import AddCom from '../components/Add';

const Add = (props) => {
  const { dispatch, user } = props
  console.log('前后user', user)
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
    console.log('?user', user)
    dispatch({ type: 'mainpage/addInfo', user })
  }
  return (
    <div>
      <AddCom
        handleCancel={handleCancel}
        handleCreate={handleCreate}
        categoryFunc={categoryFunc}
        nameFunc={nameFunc}
        idFunc={idFunc}
      />
    </div>
  )
}
export default connect(({ mainpage }) => mainpage)(Add)
