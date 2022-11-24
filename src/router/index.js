import { createRouter, createWebHashHistory } from 'vue-router';

import { basicRoutes } from './routes/basicRoutes';

// import { useBreadcrumbName } from '/@/stores/modules/breadcrumbName';


export const router = createRouter({
  // 创建一个 hash 历史记录。
  history: createWebHashHistory(import.meta.env.VITE_PUBLIC_PATH),
  // 应该添加到路由的初始路由列表。
  routes: basicRoutes,
  // 是否应该禁止尾部斜杠。默认为假
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
});


// router.beforeEach((to, form) => {
//   const breadcrumbNameStore = useBreadcrumbName()
//   console.log('to=', to)
//   console.log('form=', form)
// })



export function setupRouter(app) {
  app.use(router);
}