import React from 'react';

export const metadata = {
  title: 'Vibe Tasks',
  description: 'Task management app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
