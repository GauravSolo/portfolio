import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Gaurav Sharma | Full Stack Developer',
  description:
    'Portfolio of Gaurav Sharma — Full Stack Developer specializing in React, Node.js, and modern web technologies.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
