import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Giobots Trading Platform',
  description: 'A sophisticated trading platform powered by Giobots.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}