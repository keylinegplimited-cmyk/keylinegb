'use client';

import React, { useState } from 'react';
import { Mail, Phone, Copy, Check, ArrowUpRight } from 'lucide-react';

export default function SimpleComingSoonPage() {
  const [copied, setCopied] = useState(false);

  const contactEmail = 'Olumide@keylinegroup.com.ng';
  const contactPhone = '08035259620';
  const internationalPhone = '+234 803 525 9620';

  const copyEmail = () => {
    navigator.clipboard.writeText(contactEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1A1E24] flex flex-col justify-between p-6 sm:p-10 antialiased selection:bg-[#F56900] selection:text-white">
      
      {/* Top Header */}
      <header className="mx-auto w-full max-w-5xl flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-[#F56900] flex items-center justify-center text-white font-bold text-lg shadow-sm">
            KG
          </div>
          <div>
            <span className="font-bold tracking-tight text-[#1A1E24] text-base sm:text-lg block leading-tight">
              Keyline Growth Partners
            </span>
            <span className="text-[11px] font-medium text-[#687282] tracking-wide block">
              Limited &bull; Sales Outsourcing Execution
            </span>
          </div>
        </div>

        <div className="inline-flex items-center gap-2 rounded-full border border-[#E8E1D3] bg-white px-3.5 py-1 text-xs font-medium text-[#687282] shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#F56900] opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#F56900]"></span>
          </span>
          <span>Coming Soon</span>
        </div>
      </header>

      {/* Main Centered Hero Card */}
      <main className="my-auto py-12">
        <div className="mx-auto max-w-2xl text-center">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#F56900]/30 bg-[#FFF8F2] px-3.5 py-1 text-xs font-semibold text-[#F56900] mb-6 shadow-sm">
            <span>WEBSITE UNDER CONSTRUCTION</span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#1A1E24] leading-tight">
            Building Strategic Partnerships for{' '}
            <span className="text-[#F56900]">Sustainable Growth</span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-[#555C68] leading-relaxed max-w-xl mx-auto">
            Our official website is currently under construction. We recruit, deploy, and manage dedicated sales forces across Nigeria&apos;s six geopolitical zones.
          </p>

          {/* Contact Box */}
          <div className="mt-10 rounded-3xl border border-[#E8E1D3] bg-white p-7 sm:p-9 shadow-sm text-left max-w-lg mx-auto">
            <div className="flex items-center justify-between gap-3 mb-4">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#F56900] block">
                  Direct Inquiries &amp; Partnerships
                </span>
                <h2 className="text-lg font-bold text-[#1A1E24] mt-0.5">
                  Dr. Olumide Owoeye
                </h2>
                <p className="text-xs text-[#687282]">
                  Managing Partner &bull; Ph.D. in Economics
                </p>
              </div>
            </div>

            <p className="text-xs text-[#555C68] leading-relaxed mb-6">
              For field sales outsourcing, telesales, retail execution, or commercial advisory, contact Olumide directly:
            </p>

            <div className="space-y-3">
              {/* Primary Email CTA */}
              <div className="flex items-center gap-2">
                <a
                  href={`mailto:${contactEmail}?subject=Business%20Enquiry%20-%20Keyline%20Growth%20Partners`}
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-[#F56900] px-4 py-3 text-xs font-bold text-white shadow-md shadow-[#F56900]/20 transition hover:bg-[#DD5C00] active:scale-[0.99]"
                >
                  <Mail className="h-4 w-4" />
                  <span>Email {contactEmail}</span>
                  <ArrowUpRight className="h-3.5 w-3.5 ml-auto" />
                </a>

                <button
                  onClick={copyEmail}
                  title="Copy email address"
                  className="inline-flex items-center justify-center rounded-xl border border-[#E8E1D3] bg-[#FAF7F2] p-3 text-[#1A1E24] transition hover:bg-[#EFE9DD] active:scale-95"
                >
                  {copied ? <Check className="h-4 w-4 text-[#F56900]" /> : <Copy className="h-4 w-4 text-[#687282]" />}
                </button>
              </div>

              {/* Call CTA */}
              <a
                href={`tel:${contactPhone}`}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-[#E8E1D3] bg-white px-4 py-3 text-xs font-semibold text-[#1A1E24] transition hover:border-[#1A1E24] hover:bg-[#FAF7F2]"
              >
                <Phone className="h-4 w-4 text-[#F56900]" />
                <span>Call {internationalPhone}</span>
              </a>
            </div>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="mx-auto w-full max-w-5xl border-t border-[#E8E1D3] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#687282]">
        <p>&copy; {new Date().getFullYear()} Keyline Growth Partners Limited. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <span>All 6 Geopolitical Zones &bull; Nigeria</span>
          <span>&bull;</span>
          <a href="/zohoverify/verifyforzoho.html" className="text-[#001773] hover:underline font-medium">
            Zoho Verification
          </a>
        </div>
      </footer>

    </div>
  );
}
