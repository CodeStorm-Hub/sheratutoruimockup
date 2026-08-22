'use client';

import React, { useState } from 'react';
import { Sidebar } from '@/components/Sidebar';
import { Header } from '@/components/Header';
import { useTheme } from '@/context/ThemeContext';

export const ClientShell: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const { darkMode, setDarkMode } = useTheme();

  return (
    <div
      className={`app ${darkMode ? 'dark ' : ''}${
        collapsed ? 'nav-collapsed' : ''
      }`.trim()}
    >
      <Sidebar open={open} setOpen={setOpen} collapsed={collapsed} />
      <main>
        <Header
          collapsed={collapsed}
          setCollapsed={setCollapsed}
          setOpen={setOpen}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
        {children}
      </main>
    </div>
  );
};
