// import { PAGE_NOT_FOUND_ROUTE, REDIRECT_ROUTE } from '/@/router/routes/basic';

// import { PageEnum } from '/@/enums/pageEnum';
// import { t } from '/@/hooks/web/useI18n';

// import.meta.globEager() 直接引入所有的模块 Vite 独有的功能
// const modules = import.meta.globEager('./modules/**/*.ts');
// const routeModuleList = [];
import { pageRoutes } from './pageRoutes'
const LAYOUT = () => import('/@/layouts/default/index.vue')

// 加入到路由集合中
// Object.keys(modules).forEach((key) => {
//   const mod = modules[key].default || {};
//   const modList = Array.isArray(mod) ? [...mod] : [mod];
//   routeModuleList.push(...modList);
// });

// export const asyncRoutes = [PAGE_NOT_FOUND_ROUTE, ...routeModuleList];

// 根路由
export const RootRoute = {
  path: '/',
  name: 'Root',
  redirect: '/home',
  component:LAYOUT,
  meta: {
    title: 'Root',
  },
};

export const LoginRoute = {
  path: '/login',
  name: 'Login',
  component: () => import('/@/views/login/Login.vue'),
  // meta: {
  //   title: t('routes.basic.login'),
  // },
};

// Basic routing without permission
// 未经许可的基本路由
export const basicRoutes = [
  LoginRoute,
  RootRoute,
  ...pageRoutes
  //   REDIRECT_ROUTE,
  //   PAGE_NOT_FOUND_ROUTE,
];