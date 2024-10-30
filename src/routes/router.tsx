/* eslint-disable react-refresh/only-export-components */
import React, { Suspense, lazy } from 'react';
import { Outlet, createBrowserRouter } from 'react-router-dom';
import { rootPaths, privateRoutes, authRoutes } from './paths';
import MainLayout from 'layouts/main-layout';
import AuthLayout from 'layouts/auth-layout';
import Splash from 'components/loader/Splash';
import PageLoader from 'components/loader/PageLoader';

const App = lazy(() => import('App'));
const role = 'admin';
interface RouteItem {
  path: string;
  name: string;
  element: React.ReactNode;
  children?: RouteItem[];
}
const itemRoute = (x: RouteItem) => {
  let result: RouteItem = {
    path: x.path,
    name: x.name,
    element: x.element,
  };
  if (x?.children) {
    result = {
      ...result,
      path: x.path,
      name: x.name,
      element: x.element,
      children: x.children.map((y) => {
        return {
          path: y.path,
          name: y.name,
          element: y.element,
        };
      }),
    };
  }
  return result;
};
const router = createBrowserRouter(
  [
    {
      element: (
        <Suspense fallback={<Splash />}>
          <App />
        </Suspense>
      ),
      children: [
        {
          path: '/',
          element: (
            <MainLayout>
              <Suspense fallback={<PageLoader />}>
                <Outlet />
              </Suspense>
            </MainLayout>
          ),
          children: [
            // {
            //   index: true,
            //   element: <Dashboard />,
            // },

            ...privateRoutes[role].map((x) => {
              return {
                ...itemRoute(x)
              };
            }),
          ],
        },
        {
          path: rootPaths.authRoot,
          element: (
            <AuthLayout>
              <Outlet />
            </AuthLayout>
          ),
          children: [
            // {
            //   path: paths.signin,
            //   element: <Signin />,
            // },
            // {
            //   path: paths.signup,
            //   element: <Signup />,
            // },
            ...authRoutes.map((x) => {
              return {
                path: x.path,
                name: x.name,
                element: x.element,
              };
            }),
          ],
        },
      ],
    },
  ],
  {
    basename: '/dnx',
  },
);

export default router;
