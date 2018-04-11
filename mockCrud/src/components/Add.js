import React from 'react';
import { Modal, Form, Input, Select } from 'antd';

// const newLocal = Select.Option;
// const Option = newLocal;
const option = Select.Option;
const FormItem = Form.Item;

const AddCom = Form.create()((props) => {
  const { form } = props;
  const { getFieldDecorator } = form;

  return (
    <Modal visible="true" title="添加一条新数据" onCancel={props.handleCancel} onOk={props.handleCreate} >
      <Form layout="vertical">
        <FormItem label="编号">
          {getFieldDecorator('id', { rules: [{ required: true, message: '输入编号' }], })(<Input onChange={props.idFunc} />)}
        </FormItem>
        <FormItem label="姓名">
          {getFieldDecorator('name', { rules: [{ required: true, message: '输入姓名' }], })(<Input onChange={props.nameFunc} />)}
        </FormItem>
        <FormItem label="分类" >
          <Select onChange={props.categoryFunc}>
            <option value="cat">cat</option>
            <option value="dog">dog</option>
          </Select>
        </FormItem>
      </Form>
    </Modal>);
});
export default AddCom
