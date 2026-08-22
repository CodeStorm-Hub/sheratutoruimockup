'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  ChevronDown,
  ChevronRight,
  HelpCircle,
  Settings,
  Trophy,
  X,
} from 'lucide-react';
import { navItems } from '@/data/mockData';

interface SidebarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  collapsed: boolean;
}

export const Sidebar: React.FC<SidebarProps> = ({ open, setOpen, collapsed }) => {
  const pathname = usePathname();

  const isNavActive = (href?: string) => {
    if (!href) return false;
    if (href === '/') return pathname === '/';
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <aside className={`sidebar ${open ? 'open ' : ''}${collapsed ? 'collapsed' : ''}`.trim()}>
      <div className="brand">
        <Link href="/" className="brand-link" style={{ display: 'flex', alignItems: 'center', gap: 'inherit', textDecoration: 'none', color: 'inherit' }}>
          <div className="brand-mark">
            <span />
            <span />
            <span />
          </div>
          <span>
            Shera<span>Tutor</span>
          </span>
        </Link>
        <button
          type="button"
          className="mobile-close"
          onClick={() => setOpen(false)}
          aria-label="Close sidebar"
        >
          <X size={18} />
        </button>
      </div>

      <div className="school">
        <div className="school-icon">A</div>
        <div>
          <b>Anam Rahman</b>
          <small>HSC · Science</small>
        </div>
        <ChevronDown size={15} />
      </div>

      <nav>
        {navItems.map((item, i) =>
          item.group ? (
            <div className="nav-heading" key={`group-${i}`}>
              {item.label}
            </div>
          ) : (
            <Link
              key={item.label}
              href={item.href}
              className={isNavActive(item.href) ? 'active' : ''}
              onClick={() => setOpen(false)}
            >
              <item.icon size={18} />
              <span>{item.label}</span>
              {item.isNew && <i>New</i>}
            </Link>
          )
        )}
      </nav>

      <div className="sidebar-bottom">
        <Link
          href="/achievements"
          className={isNavActive('/achievements') ? 'active' : ''}
          onClick={() => setOpen(false)}
        >
          <Trophy size={18} />
          Achievements
        </Link>
        <Link
          href="/settings"
          className={isNavActive('/settings') ? 'active' : ''}
          onClick={() => setOpen(false)}
        >
          <Settings size={18} />
          Settings
        </Link>

        <div className="help-card">
          <div className="help-icon">
            <HelpCircle size={18} />
          </div>
          <b>Need a hand?</b>
          <p>Ask your personal examiner.</p>
          <button type="button">
            Get help <ChevronRight size={14} />
          </button>
        </div>
      </div>
    </aside>
  );
};
