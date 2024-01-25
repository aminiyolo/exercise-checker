import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import AuthProvider from '@/context/authContext';
import Nav from '@/components/nav';
import Footer from '@/components/footer';
import RecoilWrapper from '@/components/recoilWrapper';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Exercise-Checker',
  description: '운동 기록 하기.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <AuthProvider>
          <RecoilWrapper>
            <Nav />
            {children}
            <Footer />
          </RecoilWrapper>
        </AuthProvider>
      </body>
    </html>
  );
}
