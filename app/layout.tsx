import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Keyline Growth Partners Limited | Building Strategic Partnerships for Sustainable Growth',
  description: 'Nigeria\'s leading sales outsourcing firm. Disciplined, transparent, and results-driven sales execution across all 6 geopolitical zones of Nigeria.',
  keywords: ['Keyline Growth Partners', 'Sales Outsourcing Nigeria', 'Field Sales', 'Telesales', 'Merchandising', 'Retail Execution', 'Olumide Owoeye'],
  openGraph: {
    title: 'Keyline Growth Partners Limited',
    description: 'Building strategic partnerships for sustainable growth. Full-spectrum sales outsourcing across Nigeria.',
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
      <body className="min-h-screen bg-[#070d1e] text-slate-100 antialiased selection:bg-emerald-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
