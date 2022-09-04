import { PlusOutlined, PlusSquareOutlined } from '@ant-design/icons';
import { ProCard } from '@ant-design/pro-components'
import { Button, Input, List, Space } from 'antd';
import React, { Fragment } from 'react'

type Props = {
  title: string;
}

const { Search } = Input
const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
];
export const TodoList: React.FC<Props> = (props) => {
  const title = props.title

  const stopPropagation = (e: any) => {
    e.stopPropagation();
  }

  const onSearch = () => {

  }
  const addTodoList = () => {
  }
  return (
    <ProCard
      title={title}
      headerBordered
      collapsible
      defaultCollapsed={false}
      bordered
      style={{ marginBottom: 16 }}
      extra={<Space onClick={stopPropagation}>
        {/* <Search placeholder="input search text" allowClear onSearch={onSearch} style={{ width: 200 }} /> */}
        <Button size='small' onClick={addTodoList} >新建任务</Button>
      </Space>}
      actions={[
        <a>查看更多</a>
      ]}
    >
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              title={<a href="https://ant.design">{item.title}</a>}
            />
            <div>Content</div>
          </List.Item>
        )}
      />
    </ProCard>
  )
}