import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Gaurav Sharma | Software Engineer',
  description:
    'Portfolio of Gaurav Sharma — Software Engineer skilled in Java, JavaScript, React.js, and Spring Boot, with hands-on expertise in Kubernetes, GCP, and AI pipelines.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
