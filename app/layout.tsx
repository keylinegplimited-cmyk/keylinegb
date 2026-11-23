import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Coming Soon | Keyline Growth Partners Limited',
  description: 'A new home for Keyline Growth Partners is in the works. Get in touch with our team.',
  keywords: [
    'Keyline Growth Partners',
    'Sales Outsourcing Nigeria',
    'Field Sales Management',
    'Telesales Agents Lagos',
    'Merchandising Nigeria',
    'Olumide Owoeye',
    'Keyline Group'
  ],
  openGraph: {
    title: 'Coming Soon | Keyline Growth Partners Limited',
    description: 'A new home for Keyline Growth Partners is in the works.',
    url: 'https://keylinegroup.com.ng',
    siteName: 'Keyline Growth Partners Limited',
    locale: 'en_NG',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#FAF7F2] text-[#1A1E24] antialiased selection:bg-[#F56900] selection:text-white">
        {children}
      </body>
    </html>
  );
}
