import type { Metadata } from 'next';
import React from 'react';
import '@/styles.css';
import '@/pages.css';
import '@/layout-fixes.css';
import { ThemeProvider } from '@/context/ThemeContext';
import { ClientShell } from '@/app/ClientShell';

export const metadata: Metadata = {
  title: 'SheraTutor — HSC AI Learning Workspace',
  description:
    'A modern dashboard and learning workspace prototype for HSC science students.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;700;800&family=Inter:wght@400;500;600;700&family=Space+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ThemeProvider>
          <ClientShell>{children}</ClientShell>
        </ThemeProvider>
      </body>
    </html>
  );
}
