import './globals.css';
import { Inter } from '@next/font/google';
import Header from './(index)/components/Header';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className="dark">
        <div
          className={`min-h-screen bg-gradient-to-bl from-indigo-100 via-indigo-200 to-indigo-300 dark:bg-gradient-to-r dark:from-slate-900 dark:via-blue-800 dark:to-blue-900 ${inter.className}`}
        >
          <div className="w-full dark:bg-zinc-900 dark:bg-opacity-[0.6]">
            <div className="mx-auto flex min-h-screen max-w-7xl flex-col rounded-lg px-6 sm:px-8">
              <Header />
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
