import React from 'react';
import { Button, Table } from 'antd';

const MainPageCom = (props) => {
  const { dataSource } = props
  const columns = [{
    title: '编号',
    dataIndex: 'id',
    key: 'id',
  }, {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  }, {
    title: '类别名',
    dataIndex: 'categoryName',
    key: 'categoryName',
  }, {
    title: '删除',
    key: 'action',
    render: () => (
      <span>
        <Button type="primary" display="" onClick={props.deleteBu}>删除</Button>
      </span>
    ),
  }, {
    title: '修改',
    key: 'actionu',
    render: () => (
      <span>
        <Button type="primary" display="" onClick={props.updateBu}>修改</Button>
      </span>
    ),
  }];
  return (
    <div>
      <Button type="primary" onClick={props.addBu}>添加信息</Button>
      <Table dataSource={dataSource} columns={columns} />
    </div>
  )
}

export default MainPageCom
