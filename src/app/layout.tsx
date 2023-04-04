import '@/styles/global.css';

import { PT_Sans, Space_Mono } from '@next/font/google';

const spaceMono = Space_Mono({
  variable: '--font-mono',
  weight: ['400', '700'],
  subsets: ['latin'],
});

const ptSans = PT_Sans({
  variable: '--font-sans',
  weight: ['400', '700'],
  subsets: ['latin'],
});

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className={`${spaceMono.variable} ${ptSans.variable}`}>
      <head />
      <body>{children}</body>
    </html>
  );
};

export default Layout;
