import { Suspense, useEffect } from 'react';
import {
  Route,
  Routes,
  useLocation,
  useNavigationType,
} from 'react-router-dom';
import routes from './routes/routes';

function App() {
  const location = useLocation();
  const action = useNavigationType();

  useEffect(() => {
    // 当页面路由变化时进行统一处理

    // 修改页面标题
    const currentRoute = routes.find((item) => item.path === location.pathname);
    if (currentRoute?.title) {
      document.title = currentRoute.title;
    }

    // 发送数据埋点
    // ...
  }, [location, action]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {routes.map((item) => (
          <Route key={item.path} path={item.path} element={item.element} />
        ))}
        <Route key={'404'} path='*' element={<div>404</div>} />
      </Routes>
    </Suspense>
  );
}

export default App;
