"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AppBar, Tabs, Tab, Box, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Navbar = () => {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState(pathname);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    setActiveTab(pathname);
  }, [pathname]);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setActiveTab(newValue);
  };

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const menuItems = [
    { label: 'Landing Page', value: '/', href: '/' },
    { label: 'Skills', value: '/pages/skills', href: '/pages/skills' },
    { label: 'Projects', value: '/pages/projects', href: '/pages/projects' },
    { label: 'Experience', value: '/pages/experience', href: '/pages/experience' },
    { label: 'Education', value: '/pages/education', href: '/pages/education' },
  ];

  return (
    <AppBar position="static" color="default">
      {isMobile ? (
        <>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
          <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
            <Box
              sx={{ width: 250 }}
              role="presentation"
              onClick={toggleDrawer(false)}
              onKeyDown={toggleDrawer(false)}
            >
              <List>
                {menuItems.map((item) => (
                  <ListItem button key={item.value} component={Link} href={item.href}>
                    <ListItemText primary={item.label} />
                  </ListItem>
                ))}
              </List>
            </Box>
          </Drawer>
        </>
      ) : (
        <Tabs
          value={activeTab}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          centered
        >
          {menuItems.map((item) => (
            <Tab
              key={item.value}
              label={item.label}
              value={item.value}
              component={Link}
              href={item.href}
            />
          ))}
        </Tabs>
      )}
    </AppBar>
  );
};

export default Navbar;