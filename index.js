import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Table, Divider, Tag } from 'antd';

const columns = [
  {
    title: 'Dataset',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Description',
    dataIndex: 'desciption',
    key: 'desciption',
  },
  {
    title: 'Link',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <span>
        <a>down</a>
        <Divider type="vertical" />
        <a>Delete</a>
      </span>
    ),
  },
];

const data = [
  {
    key: '1',
    name: 'kpi_derive',
    desciption: 'kpi-benchmark use to benchmark work..... ',
    address: '......',
  },
  {
    key: '2',
    name: 'yahoo_derive',
    desciption: 'yahoo-benchmark use to benchmark work..... ',
    address: '......',
  },
];

ReactDOM.render(
  <Table columns={columns} dataSource={data} />,
  document.getElementById('container')
);
