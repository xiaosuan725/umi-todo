import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '@umijs/max',
  },
  proxy: {
    '/1.1': {
      target: 'https://pug2mwnu.lc-cn-n1-shared.com',
      changeOrigin: true,
    }
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    // {
    //   name: '总览',
    //   path: '/home',
    //   component: './Home',
    //   icon: 'Home'
    // },
    {
      name: '知识库',
      path: '/access',
      component: './Access',
      icon: 'FolderOpen'
    },
    {
      path: '/login',
      component: './Login',
      headerRender: false,
      footerRender: false,
      menuRender: false,
      menuHeaderRender: false,
    },
    {
      name: '我的',
      path: '/mine',
      component: './Mine',
      hideInMenu: true
    },
    {
      name: '待办任务',
      path: '/todo',
      component: './Todo',
      icon: 'CarryOut'
    }
  ],
  npmClient: 'pnpm',
});

