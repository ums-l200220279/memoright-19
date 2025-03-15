import { useEffect, useState } from 'react';
import type React from 'react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState('');

  useEffect(() => {
    // Menunggu rendering di sisi klien sebelum mengubah tema
    const savedTheme = localStorage.getItem('theme') || 'light';  // default ke 'light'
    setTheme(savedTheme);
  }, []);

  return (
    <html lang="en">
      <body className={`flex min-h-screen flex-col ${theme}`}>
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
