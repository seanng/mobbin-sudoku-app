import '@/styles/global.css';

import { Space_Mono } from '@next/font/google';

const spaceMono = Space_Mono({
  variable: '--font-mono',
  weight: ['400', '700'],
  subsets: ['latin'],
});

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className={spaceMono.variable}>
      <head />
      <body>{children}</body>
    </html>
  );
};

export default Layout;
