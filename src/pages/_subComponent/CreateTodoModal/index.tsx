import { Button, Drawer, DrawerProps, Modal, Space } from 'antd'
import React, { useState } from 'react'

type Props = {
  render: (setState: React.Dispatch<React.SetStateAction<boolean>>) => React.ReactElement
}
export const CreateTodoDrawer: React.FC<Props> = (props) => {
  const [visible, setVisible] = useState<boolean>(false)
  const [isEdit, setIsEdit] = useState<boolean>(false)
  const render = props.render

  const handleClose = () => {
    setVisible(false)
  }

  const handleEdit = () => {
    setIsEdit(true)
  }

  const handleCancelEdit = () => {
    setIsEdit(false)
  }

  const drawerProps: DrawerProps = {
    title: isEdit ? '编辑' : '查看',
    visible,
    onClose: handleClose,
    // width: 800,
    footer: <Space style={{ float: 'right' }}>
      {isEdit && <Button type='primary' onClick={handleCancelEdit}>提交</Button>}
    </Space>,
    extra: isEdit || <Space>
      <Button type='primary' onClick={handleEdit}>编辑</Button><Button type='primary' danger>删除</Button>
    </Space>
  }
  return <>
    {render(setVisible)}
    <Drawer {...drawerProps}>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Drawer>
  </>
}