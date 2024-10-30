/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { MenuItem } from 'routes/sitemap';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import Collapse from '@mui/material/Collapse';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import IconifyIcon from 'components/base/IconifyIcon';
import { useMatches } from 'react-router-dom';
// import { Outlet, createBrowserRouter } from 'react-router-dom';

const CollapseListItem = ({ subheader, items, icon, path }: MenuItem) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  const matches = useMatches();
  const selectPath: any = matches.find((x) => {
    return x.pathname === path;
  })?.pathname;
  const active = path === selectPath;
  return (
    <>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          {icon && (
            <IconifyIcon
              icon={icon}
              sx={{
                color: active ? 'text.primary' : null,
              }}
            />
          )}
        </ListItemIcon>
        <ListItemText
          primary={subheader}
          sx={{
            '& .MuiListItemText-primary': {
              color: active ? 'text.primary' : null,
            },
          }}
        />
        <IconifyIcon
          icon="iconamoon:arrow-down-2-duotone"
          sx={{
            color: active ? 'text.primary' : 'text.disabled',
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.2s ease-in-out',
          }}
        />
      </ListItemButton>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {items?.map((route) => {
            const selectPath: any = matches.find((x) => {
              return x.pathname === route.path;
            })?.pathname;
            const active = route.path === selectPath;
            return (
              <ListItemButton
                key={route.pathName}
                component={Link}
                href={route.path}
                sx={{ ml: 1.5, bgcolor: active ? 'info.main' : null }}
              >
                <ListItemText
                  primary={route.name}
                  sx={{
                    '& .MuiListItemText-primary': {
                      color: active ? 'text.primary' : null,
                    },
                  }}
                />
              </ListItemButton>
            );
          })}
        </List>
      </Collapse>
    </>
  );
};

export default CollapseListItem;
