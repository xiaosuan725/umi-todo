import { DownOutlined, FilterOutlined, SmileOutlined, UnorderedListOutlined } from '@ant-design/icons';
import { Dropdown, Input, Menu, Space } from 'antd'
import type React from 'react'

const { Search } = Input;

const menu = (
  <Menu
    items={[
      {
        key: '1',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
            1st menu item
          </a>
        ),
      },
      {
        key: '2',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
            2nd menu item (disabled)
          </a>
        ),
        icon: <SmileOutlined />,
        disabled: true,
      },
      {
        key: '3',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
            3rd menu item (disabled)
          </a>
        ),
        disabled: true,
      },
      {
        key: '4',
        danger: true,
        label: 'a danger item',
      },
    ]}
  />
);

export const Tools: React.FC = () => {
  return (
    <Space>
      <Search placeholder="input search text" allowClear />
      <Dropdown overlay={menu}>
        <span onClick={e => e.preventDefault()}>
          <Space>
            <FilterOutlined />
            筛选
            <DownOutlined />
          </Space>
        </span>
      </Dropdown>
      <Dropdown overlay={menu}>
        <span onClick={e => e.preventDefault()}>
          <Space>
            <UnorderedListOutlined />
            分组
            <DownOutlined />
          </Space>
        </span>
      </Dropdown>
      {/* <AddModal
        title="新建任务"
        render={(setVisible) => <Button type="primary" onClick={() => setVisible(true)}>新建任务</Button>}
      /> */}
    </Space>
  )
}
