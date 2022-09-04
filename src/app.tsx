// 运行时配置
import { RequestConfig, history } from "@umijs/max";
import { message } from "antd";
import { RightContent } from "./components/RightContent";
import { api } from "./const/api";
import { getUser } from "./services/todo/UserController";
import './utils/init-leancloud-sdk'

type InitialType = {
  isLogin: boolean;
  userInfo: API.User_Record | null;
}

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://next.umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<InitialType> {
  const sessionToken = localStorage.getItem('sessionToken') || sessionStorage.getItem('sessionToken') || undefined
  if (sessionToken) {
    const { data } = await getUser();
    return {
      isLogin: true,
      userInfo: data
    }
  }
  return {
    isLogin: false,
    userInfo: null
  };
}

export const layout = ({ initialState }: {
  initialState: InitialType
}) => {
  return {
    logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
    menu: {
      locale: false,
    },
    onPageChange: () => {
      // 如果没有登录，重定向到 login
      if (!initialState.isLogin && location.pathname !== '/login') {
        message.error('请登陆！')
        history.push('/login');
      }
    },
    rightContentRender: () => <RightContent record={initialState.userInfo} />,
    layout: 'mix'
  };
};

export const request: RequestConfig = {
  requestInterceptors: [
    (options: any) => {
      // 拦截请求配置，进行个性化处理。
      const sessionToken = localStorage.getItem('sessionToken') || sessionStorage.getItem('sessionToken') || undefined
      options.headers = {
        ...api,
        'X-LC-Session': sessionToken,
        'Content-Type': 'application/json',
      }
      return options
    }
  ],
  responseInterceptors: [
    (response: any) => {
      // do something
      const { data } = response
      if (data.error) {
        return response
      }
      response.data = {
        success: !data.error,
        data,
      }

      return response
    },
  ],

  errorConfig: {
    errorHandler: (error: any) => {
      message.error(error.response.data.error);
    }
  }

}
