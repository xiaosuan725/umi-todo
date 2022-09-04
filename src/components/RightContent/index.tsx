import { UserOutlined } from '@ant-design/icons'
import { useModel, history } from '@umijs/max'
import { Avatar, AvatarProps, Button, Dropdown, Menu, Space } from 'antd'
import React from 'react'

type Props = {
  record?: API.User_Record | null
}
export const RightContent: React.FC<Props> = (props) => {
  const { setInitialState } = useModel('@@initialState')
  const record = props.record
  const name = record?.nickName || record?.username || ''
  const avatarProps: AvatarProps = {
    src: record?.avatar || undefined,
    icon: !record?.avatar || <UserOutlined />,
    size: 'small'
  }

  const loginOut = () => {
    localStorage.removeItem('sessionToken')
    sessionStorage.removeItem('sessionToken')
    setInitialState({
      isLogin: false,
      userInfo: null
    })
    history.push('/login')
  }

  const toMine = () => {
    history.push('/mine')
  }
  const menu = <Menu
    items={[
      {
        key: '1',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
            反馈
          </a>
        ),
      },
      {
        key: '2',
        label: (
          <a onClick={loginOut}>
            退出
          </a>
        ),
      },
    ]}
  />
  return (
    <Dropdown overlay={menu}>
      <Button style={{ float: 'right', border: 0 }} onClick={toMine}>
        <Space>
          <Avatar {...avatarProps} />
          {name}
        </Space>
      </Button>
    </Dropdown>
  )
}
