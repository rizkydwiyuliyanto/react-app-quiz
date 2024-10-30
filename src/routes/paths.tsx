// const Dashboard = lazy(() => import('pages/dashboard'));
import { lazy } from 'react';
const Signin = lazy(() => import('pages/authentication/Signin'));
const Signup = lazy(() => import('pages/authentication/Signup'));
const DashboardAdmin = lazy(() => import('pages/admin/dashboard/Index'));
const Master = lazy(() => import('pages/admin/master/index'));
const SantriAdmin = lazy(() => import('pages/admin/master/data_santri'));
const GuruAdmin = lazy(() => import('pages/admin/master/data_guru'));
const TambahGuru = lazy(() => import('pages/admin/master/data_guru/tambah'));

export const rootPaths = {
  root: '/',
  pageRoot: 'pages',
  authRoot: 'authentication',
  errorRoot: 'error',
};
// const routes = [

// ]
const privateRoutes = {
  admin: [
    {
      path: `/${rootPaths.pageRoot}/dashboard`,
      id: 'dashboard',
      name: 'Dashboard',
      element: <DashboardAdmin />,
    },
    {
      path: `/${rootPaths.pageRoot}/master`,
      id: 'master',
      name: 'Master',
      element: <Master/>,
      children: [
        {
          path: `/${rootPaths.pageRoot}/master/data_guru`,
          id: 'data_guru',
          name: 'Data guru',
          element: <GuruAdmin />,
        },
        {
          path: `/${rootPaths.pageRoot}/master/data_santri`,
          id: 'data_santri',
          name: 'Data santri',
          element: <SantriAdmin />,
        },
        {
          path: `/${rootPaths.pageRoot}/master/data_guru/tambah`,
          id: 'tambah',
          name: "Tambah",
          element: <TambahGuru/>
        }
      ],
    },
  ],
};
const authRoutes = [
  {
    path: `/${rootPaths.authRoot}/signin`,
    name: 'Sign-in',
    element: <Signin />,
  },
  {
    path: `/${rootPaths.authRoot}/signup`,
    name: 'Sign-up',
    element: <Signup />,
  },
];
export { privateRoutes, authRoutes };
// export default {
//   dashboard: `/${rootPaths.pageRoot}/dashboard`,
//   task: `/${rootPaths.pageRoot}/task`,
//   mentors: `/${rootPaths.pageRoot}/mentors`,
//   messages: `/${rootPaths.pageRoot}/messages`,
//   settings: `/${rootPaths.pageRoot}/settings`,
//   dashboard_admin: `/${rootPaths.pageRoot}/dashboard`,
//   signin: `/${rootPaths.authRoot}/signin`,
//   signup: `/${rootPaths.authRoot}/signup`,
//   forgotPassword: `/${rootPaths.authRoot}/forgot-password`,
//   404: `/${rootPaths.errorRoot}/404`,
// };
