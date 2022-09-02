import { UploadImg } from '@/components/UploadImg'
import { getUser, updateUser } from '@/services/todo/UserController'
import { FooterToolbar, PageContainer, ProForm, ProFormText } from '@ant-design/pro-components'
import { useModel, useRequest } from '@umijs/max'
import { Form, message } from 'antd'
import React from 'react'

const Mine: React.FC = () => {
  const { initialState, setInitialState } = useModel('@@initialState')
  const { run: runGetUser } = useRequest(getUser, {
    manual: true,
    onSuccess(r) {
      setInitialState({
        isLogin: true,
        userInfo: r
      })
    }
  })

  const { run: runUpdateUser } = useRequest(updateUser, {
    debounceInterval: 300,
    manual: true,
    onSuccess() {
      runGetUser()
      message.success('更新成功！')
    }
  })

  const onFinish = async (values: any) => {
    runUpdateUser({
      objectId: initialState?.userInfo?.objectId,
      ...values
    })
  }
  return <PageContainer ghost>
    <ProForm
      layout='horizontal'
      initialValues={initialState?.userInfo || {}}
      submitter={{
        render: (_, dom) => <FooterToolbar>{dom}</FooterToolbar>,
      }}
      onFinish={onFinish}
    >
      <Form.Item label="头像" name="avatar" >
        <UploadImg />
      </Form.Item>
      <ProFormText label="昵称" name="nickName" width={'sm'} />
    </ProForm>

  </PageContainer>

}

export default Mine