'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { Bell, ChevronRight, Menu, Moon, Search, Sun } from 'lucide-react';

interface HeaderProps {
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
}

const routeTitles: Record<string, string> = {
  '/': 'Home',
  '/ai-tutor': 'AI Tutor',
  '/mock-exams': 'Mock Exams',
  '/board-simulator': 'Board Simulator',
  '/ai-grading': 'AI Grading',
  '/results': 'Results',
  '/mistake-analysis': 'Mistake Analysis',
  '/study-planner': 'Study Planner',
  '/achievements': 'Achievements',
  '/settings': 'Settings',
};

export const Header: React.FC<HeaderProps> = ({
  collapsed,
  setCollapsed,
  setOpen,
  darkMode,
  setDarkMode,
}) => {
  const pathname = usePathname();
  const pageTitle = routeTitles[pathname] || 'Workspace';

  const toggleNav = () => {
    if (typeof window !== 'undefined' && window.innerWidth <= 1050) {
      setOpen(true);
    } else {
      setCollapsed((prev) => !prev);
    }
  };

  return (
    <header>
      <button
        type="button"
        className="menu-btn"
        onClick={toggleNav}
        aria-label={collapsed ? 'Show navigation' : 'Hide navigation'}
      >
        <Menu size={21} />
      </button>
      <div className="crumb">
        <span>Workspace</span>
        <ChevronRight size={15} />
        <b>{pageTitle}</b>
      </div>
      <div className="header-actions">
        <button type="button" className="command">
          <Search size={16} />
          <span>Search anything</span>
          <kbd>⌘ K</kbd>
        </button>
        <button
          type="button"
          className="round-btn theme-icon"
          onClick={() => setDarkMode(!darkMode)}
          aria-label="Toggle dark mode"
        >
          {darkMode ? <Sun size={17} /> : <Moon size={17} />}
        </button>
        <button type="button" className="round-btn" aria-label="Notifications">
          <Bell size={18} />
          <i />
        </button>
        <div className="avatar">AR</div>
      </div>
    </header>
  );
};
