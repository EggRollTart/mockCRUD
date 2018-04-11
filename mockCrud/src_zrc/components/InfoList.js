import React from 'react';
import { Table, Divider, Button, Modal, Form, Input, Select } from 'antd';
import CollectionCreateForm from '../components/addModel'
import CollectionUpdateForm from "../components/updateModel"
const Option = Select.Option;

const InfoList = (props) => {

  let { data, isShowAddModel, dispatch,user,isShowUpdateModel } = props
  let showModel = () => {
    dispatch({ type: "info/setData", payload: { isShowAddModel: true } })
  }
  let ShowUpdateModel = (e) => {
    user.id=e.target.parentNode.parentNode.parentNode.firstChild.innerText
    user.name=e.target.parentNode.parentNode.parentNode.children[1].innerText
    user.categoryName=e.target.parentNode.parentNode.parentNode.children[2].innerText
    dispatch({ type: "info/setData", payload: { isShowUpdateModel: true,user} })
  }
  let deleteInfo = (e) => {
    let id=e.target.parentNode.parentNode.parentNode.firstChild.innerText
    dispatch({ type: "info/deleteInfo", id: { id } })
  }
  let handleCancel = () => {
    dispatch({ type: "info/setData", payload: { isShowAddModel: false,isShowUpdateModel:false } })
  }
  let handleCreate = (e) => {
    dispatch({ type: "info/addInfo", payload: { isShowAddModel: false ,isShowUpdateModel:false} })
}
  let handleUpdate = (e) => {
  dispatch({ type: "info/updateInfo", payload: { isShowAddModel: false ,isShowUpdateModel:false} })
}
  const columns = [{ title: 'ID', dataIndex: 'id', key: 'id' },
  { title: '姓名', dataIndex: 'name', key: 'name' },
  { title: '分类', dataIndex: 'categoryName', key: 'categoryName' },
  {
    title: '操作', key: 'action', render: () => (
      <span>
        <Button className="editable-add-btn" onClick={deleteInfo}>删除</Button>
        <Divider type="vertical" />
        <Button className="editable-add-btn" onClick={ShowUpdateModel}>修改</Button>
      </span>
    )
  }]
  return (
    <div>
      <Button className="editable-add-btn" onClick={showModel}>新增</Button>
      <Table columns={columns} dataSource={data} />
      <CollectionCreateForm
        wrappedComponentRef={this.saveFormRef}
        visible={isShowAddModel}
        onCancel={handleCancel}
        onCreate={handleCreate}
        dispatch={dispatch}
      />
      <CollectionUpdateForm
        wrappedComponentRef={this.saveFormRef}
        visible={isShowUpdateModel}
        onCancel={handleCancel}
        onCreate={handleUpdate}
        dispatch={dispatch}
        user={user}
      />
    </div>
  );
};

InfoList.propTypes = {
};

export default InfoList;
