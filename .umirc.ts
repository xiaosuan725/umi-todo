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
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
    {
      name: '权限演示',
      path: '/access',
      component: './Access',
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
    }
  ],
  npmClient: 'pnpm',
});

