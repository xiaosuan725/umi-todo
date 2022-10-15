import { addTodoList } from '@/services/todo/TodoController'
import { formatTime } from '@/utils/formatTime'
import { PageContainer, ProCard } from '@ant-design/pro-components'
import { useRequest } from '@umijs/max'
import { useModel } from '@umijs/max'
import { useMount } from 'ahooks'
import { Button, Input, List, message, Space, TableProps } from 'antd'
import QueueAnim from 'rc-queue-anim'
import React, { useState } from 'react'

const Todo: React.FC = () => {
  const { list, tableProps, run, filter, refresh } = useModel('Todo.index')

  const [value, setValue] = useState('')

  const onChange = (e: any) => {
    setValue(e.target.value)
  }

  const { run: runAddTodoList } = useRequest(addTodoList, {
    debounceInterval: 300,
    manual: true,
    onSuccess() {
      refresh()
    }
  })

  const columns: TableProps<Unpacked<typeof list>>['columns'] = [
    {
      title: '任务',
      width: 200,
      responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
      dataIndex: 'title',
    },
    {
      title: '状态',
      width: 100,
      responsive: ['sm', 'md', 'lg', 'xl', 'xxl'],
      sorter: true,
      dataIndex: 'status',
    },
    {
      title: '创建时间',
      width: 100,
      responsive: ['lg', 'xl', 'xxl'],
      dataIndex: 'createdAt',
      sorter: true,
      render: (createdAt) => formatTime(createdAt),
    },
    {
      title: '更新时间',
      width: 100,
      responsive: ['xl', 'xxl'],
      dataIndex: 'updatedAt',
      sorter: true,
      render: (updatedAt) => formatTime(updatedAt),
    },
    {
      title: '操作',
      width: 100,
      responsive: ['sm', 'md', 'lg', 'xl', 'xxl'],
    }
  ]

  useMount(() => {
    run(filter)
  })
  return <PageContainer
    ghost
    extra={
      <Space>
        <Input value={value} onChange={onChange} />
        <Button type="primary" onClick={() => {
          runAddTodoList({ title: value })
        }}>添加</Button>
      </Space>
    }
  >
    <ProCard
      headerBordered
      defaultCollapsed={false}
      bordered
    >
      <List>
        <QueueAnim component={React.Fragment} type={['right', 'left']}>
          {
            list.map((item) => <List.Item key={item.objectId}>
              <List.Item.Meta
                title={<a href="https://ant.design">{item.title}</a>}
              />
              <div>Content</div>
            </List.Item>
            )
          }
        </QueueAnim>
      </List>
    </ProCard>
  </PageContainer>
}

export default Todo
