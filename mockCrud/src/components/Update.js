import React from 'react';
import { Modal, Form, Input, Select } from 'antd';

// const newLocal = Select.Option;
// const Option = newLocal;
const Option = Select.Option;// eslint-disable-line
const FormItem = Form.Item;

const UpdateCom = Form.create()((props) => {
  const { form, user } = props;
  console.log('user', user)
  const { getFieldDecorator } = form;

  return (
    <Modal visible="true" title="修改数据" okText="Create" onCancel={props.handleCancel} onOk={props.handleCreate} >
      <Form layout="vertical">
        <FormItem label="编号">
          {getFieldDecorator('id', { rules: [{ required: true, message: '输入编号' }], })(<Input onChange={props.idFunc} placeholder={user.id} />)}
        </FormItem>
        <FormItem label="姓名">
          {getFieldDecorator('name', { rules: [{ required: true, message: '输入姓名' }], })(<Input placeholder={user.name} onChange={props.nameFunc} />)}
        </FormItem>
        <FormItem label="分类" >
          {getFieldDecorator('categoryName', {
              rules: [{ required: true }],
             })(<Select
               placeholder={user.categoryName}
               value={user.categoryName}
               onChange={props.categoryFunc}
             >
               <Option value="cat">cat</Option>
               <Option value="dog">dog</Option>
                   </Select>)// eslint-disable-line
                }
        </FormItem>
      </Form>
    </Modal>);
});
export default UpdateCom
