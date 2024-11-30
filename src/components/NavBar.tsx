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
    <AppBar position="static" className="shadow-none py-4" color="transparent">
      {isMobile ? (
        <>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
            <MenuIcon className="text-white" />
          </IconButton>
          <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
            <Box
              sx={{ width: 250, height: '100%'}}
              role="presentation"
              onClick={toggleDrawer(false)}
              onKeyDown={toggleDrawer(false)}
              className="bg-gray-900 text-white"
            >
              <List>
                {menuItems.map((item) => (
                  <ListItem key={item.value} component={Link} href={item.href}>
                    <ListItemText primary={item.label} className={`text-white ${activeTab === item.value ? 'text-[#9333ea]' : ''}`} />
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
          textColor="inherit"
          variant="fullWidth"
          centered
          className="text-white"
          TabIndicatorProps={{ style: { backgroundColor: '#9333ea' } }}
        >
          {menuItems.map((item) => (
            <Tab
              key={item.value}
              label={item.label}
              value={item.value}
              component={Link}
              href={item.href}
              className={`text-white ${activeTab === item.value ? 'text-[#9333ea]' : ''}`}
            />
          ))}
        </Tabs>
      )}
    </AppBar>
  );
};

export default Navbar;