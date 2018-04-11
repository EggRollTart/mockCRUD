import React from 'react';
import { Modal, Form, Input, Select } from 'antd';
const Option = Select.Option;
const FormItem = Form.Item;
let user={
  id:'',
  name:'',
  categoryName:''
}

const CollectionCreateForm = Form.create()(
  (props)=>{
    const { visible, onCancel, onCreate, form,dispatch } =props;
          const { getFieldDecorator } = form;
          
          const idFunc=(e)=>{
          user.id=e.target.value
          dispatch({ type: "info/setData", payload: {user:{
            id:user.id,
            name:user.name,
            categoryName:user.categoryName
          }} })
          }
          const nameFunc=(e)=>{
          user.name=e.target.value
          dispatch({ type: "info/setData", payload: { user:{
            id:user.id,
            name:user.name,
            categoryName:user.categoryName
          } } })
          }
          const categoryFunc=(e)=>{
          user.categoryName=e
          dispatch({ type: "info/setData", payload: { user:{
            id:user.id,
            name:user.name,
            categoryName:user.categoryName
          } } })
  }
        return (
        <Modal
          visible={visible}
          title="Create a new collection"
          okText="Create"
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form layout="vertical">
            <FormItem label="id">
              {getFieldDecorator('id', {
                rules: [{ required: true, message: '输入id' }],
              })(
                <Input onChange={idFunc}/>
                )}
            </FormItem>
            <FormItem label="姓名">
              {getFieldDecorator('name', {
                rules: [{ required: true, message: '输入姓名' }],
              })(
                <Input onChange={nameFunc}/>
                )}
            </FormItem>
            <FormItem
              label="分类"
            >
              <Select onChange={categoryFunc}>
                <Option value="cat">cat</Option>
                <Option value="dog">dog</Option>
              </Select>
            </FormItem>
          </Form>
        </Modal>
      );
    }
 );
export default CollectionCreateForm