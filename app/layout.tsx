import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Keyline Growth Partners Limited | Sales Outsourcing & Execution',
  description: 'Nigeria\'s premier sales execution partner. We recruit, deploy, and manage field sales executives, telesales agents, and merchandisers across all six geopolitical zones of Nigeria.',
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
    title: 'Keyline Growth Partners Limited',
    description: 'Building strategic partnerships for sustainable revenue growth. Full-spectrum sales execution across Nigeria.',
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
