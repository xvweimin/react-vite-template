import { lazy } from 'react';

/** 自定义路由配置 */
type CustomRouteConfig = {
  /** 页面标题 */
  title?: string;
  /** 页面路径 */
  path: string;
  /** 页面元素 */
  element: React.ReactNode | null;
};

/** 组件懒加载 */
const Home = lazy(() => import('../pages/home'));
const About = lazy(() => import('../pages/about'));

/** 路由列表 */
const routes: CustomRouteConfig[] = [
  {
    title: '首页',
    path: '/',
    element: <Home />,
  },
  {
    title: '关于',
    path: '/about',
    element: <About />,
  },
];

export default routes;
