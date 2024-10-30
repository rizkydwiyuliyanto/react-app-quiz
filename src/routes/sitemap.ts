import { privateRoutes } from './paths';

export interface SubMenuItem {
  name?: string;
  pathName?: string;
  path?: string;
  icon?: string;
  // active?: boolean;
  items?: SubMenuItem[];
}

export interface MenuItem {
  id: string;
  subheader: string;
  path?: string;
  icon?: string;
  avatar?: string;
  // active?: boolean;
  items?: SubMenuItem[];
}

const role = 'admin';
const subMenu = ['tambah', 'exit'];
const sitemap: MenuItem[] = [
  // {
  //   id: 'dashboard',
  //   subheader: 'Overview',
  //   path: '/',
  //   icon: 'hugeicons:grid-view',
  //   active: true,
  // },
  ...privateRoutes[role].map((x) => {
    let result: MenuItem = {
      id: x.id,
      subheader: x.name,
      path: x.path,
      icon: 'hugeicons:grid-view',
    };
    if (x?.children) {
      result = {
        ...result,
        items: x?.children
          .filter((y) => {
            return !subMenu.includes(y.id);
          })
          .map((z) => {
            return {
              name: z.name,
              path: z.path,
              pathName: z.id,
              icon: '',
            };
          }),
      };
    }
    return result;
  }),
  // {
  //   id: 'task',
  //   subheader: 'Task',
  //   path: '#!',
  //   icon: 'hugeicons:book-open-01',
  // },
  // {
  //   id: 'mentors',
  //   subheader: 'Mentors',
  //   path: '#!',
  //   icon: 'mynaui:user-hexagon',
  // },
  // {
  //   id: 'messages',
  //   subheader: 'Messages',
  //   path: '#!',
  //   icon: 'mage:message-dots',
  // },
  // {
  //   id: 'settings',
  //   subheader: 'Settings',
  //   path: '#!',
  //   icon: 'hugeicons:settings-01',
  // },
  // {
  //   id: 'authentication',
  //   subheader: 'Authentication',
  //   icon: 'mynaui:lock-password',
  //   // active: true,
  //   items: [
  //     {
  //       name: 'Sign In',
  //       pathName: 'signin',
  //       icon: '',
  //       path: authRoutes[0].path,
  //     },
  //     {
  //       name: 'Sign Up',
  //       pathName: 'signup',
  //       icon: '',
  //       path: authRoutes[1].path,
  //     },
  //   ],
  // },
];

export default sitemap;
