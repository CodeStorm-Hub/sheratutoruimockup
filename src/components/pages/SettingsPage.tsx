'use client';

import React from 'react';
import { ChevronRight, Moon } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { useTheme } from '@/context/ThemeContext';

interface SettingsPageProps {
  darkMode?: boolean;
  setDarkMode?: (dark: boolean) => void;
}

const settingsSections = [
  'Profile',
  'Learning preferences',
  'Notifications',
  'Appearance',
  'Privacy & security',
];

export const SettingsPage: React.FC<SettingsPageProps> = ({
  darkMode: propDarkMode,
  setDarkMode: propSetDarkMode,
}) => {
  const theme = useTheme();
  const darkMode = propDarkMode !== undefined ? propDarkMode : theme.darkMode;
  const setDarkMode = propSetDarkMode || theme.setDarkMode;

  return (
    <>
      <PageHeader
        title="Settings"
        description="Manage your account and your SheraTutor experience."
      />
      <div className="settings-layout">
        <aside>
          {settingsSections.map((x, i) => (
            <button
              type="button"
              className={i === 0 ? 'active' : ''}
              key={x}
            >
              {x}
              <ChevronRight size={15} />
            </button>
          ))}
        </aside>
        <section>
          <h2>Profile</h2>
          <p>Keep your profile details up to date.</p>
          <div className="profile-edit">
            <div className="large-avatar">AR</div>
            <button type="button">Change photo</button>
          </div>
          <label>
            Full name
            <input defaultValue="Anam Rahman" />
          </label>
          <label>
            Class & group
            <input defaultValue="HSC · Science" />
          </label>
          <label>
            Target board
            <select defaultValue="Dhaka Board">
              <option>Dhaka Board</option>
              <option>Chattogram Board</option>
            </select>
          </label>
          <div className="appearance-toggle">
            <div>
              <b>
                <Moon size={16} /> Dark mode
              </b>
              <small>Use a darker, low-light interface.</small>
            </div>
            <button
              type="button"
              className={`theme-switch ${darkMode ? 'on' : ''}`}
              onClick={() => setDarkMode(!darkMode)}
              role="switch"
              aria-checked={darkMode}
              aria-label="Toggle dark mode"
            >
              <i />
            </button>
          </div>
          <button type="button" className="primary-btn">
            Save changes
          </button>
        </section>
      </div>
    </>
  );
};
