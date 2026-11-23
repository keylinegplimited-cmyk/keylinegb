'use client';

import React, { useState } from 'react';
import { 
  Building2, 
  Mail, 
  Phone, 
  MapPin, 
  CheckCircle2, 
  TrendingUp, 
  Users, 
  ShieldCheck, 
  Compass, 
  ArrowRight, 
  Clock, 
  Copy, 
  Check, 
  Sparkles,
  BarChart3,
  Layers,
  Send
} from 'lucide-react';

export default function UnderConstructionPage() {
  const [copied, setCopied] = useState(false);
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryEmail, setInquiryEmail] = useState('');
  const [inquiryCompany, setInquiryCompany] = useState('');
  const [inquiryMsg, setInquiryMsg] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const contactEmail = 'Olumide@keylinegroup.com.ng';
  const contactPhone = '08035259620';
  const internationalPhone = '+234 803 525 9620';

  const copyEmail = () => {
    navigator.clipboard.writeText(contactEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleQuickInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Keyline Website Enquiry from ${inquiryName || 'Prospective Client'} (${inquiryCompany || 'Company'})`);
    const body = encodeURIComponent(
      `Hello Olumide,\n\nName: ${inquiryName}\nEmail: ${inquiryEmail}\nCompany: ${inquiryCompany}\n\nEnquiry / Requirement:\n${inquiryMsg}\n\nSent via Keylinegroup.com.ng`
    );
    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const coreValues = [
    { letter: 'P', title: 'Partnership', desc: 'Collaborating closely with client brands and distributor ecosystems.' },
    { letter: 'A', title: 'Accountability', desc: 'Rigorous daily tracking of stock, cash, routes, and revenue metrics.' },
    { letter: 'I', title: 'Integrity', desc: 'Auditable, transparent sales operations with zero compromise.' },
    { letter: 'D', title: 'Discipline', desc: 'Relentless ground execution across every single retail outlet.' },
    { letter: 'A', title: 'Adaptability', desc: 'Agile responses to dynamic market shifts and consumer demand.' },
    { letter: 'I', title: 'Innovation', desc: 'Leveraging real-time CRM and tracking tech for speed and visibility.' },
  ];

  const services = [
    {
      title: 'Field Sales Outsourcing',
      desc: 'Recruiting, deploying, and managing dedicated field sales teams across all 6 geopolitical zones of Nigeria.',
      badge: 'Nationwide Reach',
    },
    {
      title: 'Telesales Outsourcing',
      desc: 'High-conversion phone-based customer acquisition, distributor follow-ups, and repeat order fulfillment.',
      badge: 'High Conversion',
    },
    {
      title: 'Sales Process Outsourcing (SPO)',
      desc: 'End-to-end recruitment, employee onboarding, KPI management, payroll administration, and supervision.',
      badge: 'Full Lifecycle',
    },
    {
      title: 'Merchandising & Retail Execution',
      desc: 'Planogram compliance, shelf presence, stock replenishment, and brand visibility in major open markets & modern trade.',
      badge: 'In-Store Impact',
    },
  ];

  const clientNames = [
    'Tolaram',
    'KIVO',
    'RiBe Foods',
    'Wigo Foods',
    'Ebenco Group',
    'Paga',
    'Vitafoam',
    'Moura',
  ];

  return (
    <div className="relative min-h-screen bg-[#070d1e] text-slate-100 flex flex-col justify-between overflow-hidden">
      {/* Background ambient glow effects */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-emerald-500/10 blur-[140px]" />
      <div className="pointer-events-none absolute top-1/3 -right-40 h-[600px] w-[600px] rounded-full bg-blue-600/10 blur-[160px]" />
      <div className="pointer-events-none absolute -bottom-40 left-1/3 h-[500px] w-[500px] rounded-full bg-teal-500/10 blur-[150px]" />

      {/* Top Navigation */}
      <header className="relative z-10 border-b border-slate-800/80 bg-slate-950/60 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-400 font-bold text-white shadow-lg shadow-emerald-500/20 text-xl tracking-tight">
              KG
            </div>
            <div>
              <span className="block font-bold tracking-tight text-white text-base sm:text-lg">
                Keyline Growth Partners
              </span>
              <span className="block text-xs font-medium text-emerald-400">
                Limited &bull; Sales Outsourcing Execution
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`mailto:${contactEmail}`}
              className="hidden sm:inline-flex items-center gap-2 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-xs font-semibold text-emerald-400 transition hover:bg-emerald-500/20"
            >
              <Mail className="h-3.5 w-3.5" />
              <span>{contactEmail}</span>
            </a>
            <a
              href={`tel:${contactPhone}`}
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-4 py-2 text-xs font-semibold text-slate-950 shadow-md shadow-emerald-500/20 transition hover:bg-emerald-400"
            >
              <Phone className="h-3.5 w-3.5" />
              <span>Call Us</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 mx-auto max-w-7xl px-6 py-12 lg:py-16 flex-1">
        {/* Under Construction Notice Banner */}
        <div className="mx-auto max-w-3xl text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-xs font-semibold text-amber-400 backdrop-blur-md mb-6">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-500"></span>
            </span>
            <Clock className="h-3.5 w-3.5" />
            <span>WEBSITE UNDER CONSTRUCTION &bull; LAUNCHING SOON</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight sm:leading-none">
            Building Strategic Partnerships for{' '}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              Sustainable Growth
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            We deliver disciplined, transparent, and results-driven sales outsourcing solutions that help growing brands expand into new markets, strengthen distributor relationships, and accelerate revenue across Nigeria and West Africa.
          </p>

          {/* Contact Highlight Card */}
          <div className="mt-8 rounded-2xl border border-slate-700/80 bg-slate-900/80 p-6 backdrop-blur-xl shadow-2xl max-w-xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-left">
                <p className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                  Direct Inquiries & Business Partnerships
                </p>
                <p className="mt-1 font-medium text-white text-base">
                  Contact: <span className="font-bold">Olumide Owoeye</span> (Managing Partner)
                </p>
                <p className="text-xs text-slate-400 mt-0.5">
                  Ph.D. Economics &bull; Commercial Strategy & Sales Outsourcing
                </p>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <a
                  href={`mailto:${contactEmail}?subject=Business%20Enquiry%20-%20Keyline%20Growth%20Partners`}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 px-4 py-2.5 text-xs font-bold text-slate-950 transition hover:opacity-95 shadow-lg shadow-emerald-500/20"
                >
                  <Send className="h-3.5 w-3.5" />
                  <span>Send Email</span>
                </a>
                <button
                  onClick={copyEmail}
                  title="Copy email to clipboard"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-700 bg-slate-800/80 p-2.5 text-slate-300 transition hover:bg-slate-700 hover:text-white"
                >
                  {copied ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between text-xs text-slate-400 gap-2">
              <div className="flex items-center gap-1.5">
                <Mail className="h-3.5 w-3.5 text-emerald-400" />
                <a href={`mailto:${contactEmail}`} className="hover:text-emerald-300 underline underline-offset-2">
                  {contactEmail}
                </a>
              </div>
              <div className="flex items-center gap-1.5">
                <Phone className="h-3.5 w-3.5 text-emerald-400" />
                <a href={`tel:${contactPhone}`} className="hover:text-emerald-300">
                  {internationalPhone}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Section: Operational Footprint & Key Numbers */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto my-12">
          <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-4 text-center backdrop-blur-sm">
            <span className="block text-2xl sm:text-3xl font-extrabold text-emerald-400">6 of 6</span>
            <span className="text-xs text-slate-400 mt-1 block">Geopolitical Zones Covered</span>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-4 text-center backdrop-blur-sm">
            <span className="block text-2xl sm:text-3xl font-extrabold text-teal-400">100s</span>
            <span className="text-xs text-slate-400 mt-1 block">Client Brands Managed</span>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-4 text-center backdrop-blur-sm">
            <span className="block text-2xl sm:text-3xl font-extrabold text-cyan-400">Real-Time</span>
            <span className="text-xs text-slate-400 mt-1 block">CRM & GPS Sales Tracking</span>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-4 text-center backdrop-blur-sm">
            <span className="block text-2xl sm:text-3xl font-extrabold text-amber-400">PAID-AI</span>
            <span className="text-xs text-slate-400 mt-1 block">Core Values & Daily Rigor</span>
          </div>
        </div>

        {/* Section: Core Solutions */}
        <div className="my-14">
          <div className="text-center mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-white">Full-Spectrum Sales Outsourcing</h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              You focus on product innovation & manufacturing; we take complete ownership of disciplined sales execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
            {services.map((svc, i) => (
              <div
                key={i}
                className="group relative rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900/80 to-slate-950/80 p-6 transition duration-300 hover:border-emerald-500/40 hover:shadow-xl hover:shadow-emerald-500/5"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-bold text-base sm:text-lg text-white group-hover:text-emerald-400 transition">
                    {svc.title}
                  </h3>
                  <span className="rounded-md border border-slate-700 bg-slate-800/80 px-2.5 py-1 text-[10px] font-semibold text-emerald-400 uppercase tracking-wider">
                    {svc.badge}
                  </span>
                </div>
                <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {svc.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section: PAID-AI Values */}
        <div className="my-14 rounded-2xl border border-slate-800 bg-slate-900/40 p-6 sm:p-8 backdrop-blur-md max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-xs font-bold text-emerald-400 tracking-wider uppercase">Our Guiding Operating System</span>
            <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">The PAID-AI Core Values</h2>
            <p className="text-xs text-slate-400 mt-1">
              How our field teams, supervisors, and account partners operate daily across Nigeria.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {coreValues.map((v, i) => (
              <div key={i} className="rounded-xl border border-slate-800/80 bg-slate-950/60 p-4 text-center">
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 font-extrabold text-lg border border-emerald-500/20 mb-2">
                  {v.letter}
                </div>
                <h4 className="font-semibold text-xs text-white">{v.title}</h4>
                <p className="text-[11px] text-slate-400 mt-1 leading-snug">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Section: Client Trust & Portfolio */}
        <div className="my-12 max-w-4xl mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4">
            Trusted Execution Partner for Leading FMCG, Retail & Corporate Brands
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {clientNames.map((name, i) => (
              <span
                key={i}
                className="rounded-lg border border-slate-800 bg-slate-900/60 px-4 py-2 text-xs font-semibold text-slate-300 shadow-sm"
              >
                {name}
              </span>
            ))}
          </div>
        </div>

        {/* Section: Interactive Quick Inquiry Form */}
        <div className="my-14 max-w-2xl mx-auto rounded-2xl border border-slate-800 bg-slate-900/90 p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
          <div className="text-center mb-6">
            <h3 className="text-lg sm:text-xl font-bold text-white">Have a Project or Sales Requirement?</h3>
            <p className="text-xs text-slate-300 mt-1">
              Drop a quick note directly to Olumide Owoeye for outsourcing, team deployment, or advisory inquiries.
            </p>
          </div>

          {submitted ? (
            <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-5 text-center">
              <CheckCircle2 className="h-8 w-8 text-emerald-400 mx-auto mb-2" />
              <h4 className="font-bold text-white text-sm">Your email client has been opened!</h4>
              <p className="text-xs text-slate-300 mt-1">
                If it didn't open automatically, send directly to{' '}
                <a href={`mailto:${contactEmail}`} className="text-emerald-400 underline font-semibold">
                  {contactEmail}
                </a>
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-3 text-xs text-slate-400 hover:text-white underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleQuickInquiry} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-medium text-slate-300 mb-1">Your Full Name</label>
                  <input
                    type="text"
                    required
                    value={inquiryName}
                    onChange={(e) => setInquiryName(e.target.value)}
                    placeholder="e.g. Adebayo Adeleke"
                    className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-white placeholder-slate-500 focus:border-emerald-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-medium text-slate-300 mb-1">Company / Brand Name</label>
                  <input
                    type="text"
                    required
                    value={inquiryCompany}
                    onChange={(e) => setInquiryCompany(e.target.value)}
                    placeholder="e.g. Apex Consumer Foods"
                    className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-white placeholder-slate-500 focus:border-emerald-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-medium text-slate-300 mb-1">Your Work Email</label>
                <input
                  type="email"
                  required
                  value={inquiryEmail}
                  onChange={(e) => setInquiryEmail(e.target.value)}
                  placeholder="e.g. adebayo@company.com"
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-white placeholder-slate-500 focus:border-emerald-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[11px] font-medium text-slate-300 mb-1">Inquiry / Sales Needs</label>
                <textarea
                  rows={3}
                  required
                  value={inquiryMsg}
                  onChange={(e) => setInquiryMsg(e.target.value)}
                  placeholder="Describe your sales outsourcing, van sales, field team recruitment, or market expansion goals..."
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-white placeholder-slate-500 focus:border-emerald-500 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 py-3 text-xs font-bold text-slate-950 shadow-lg shadow-emerald-500/20 transition hover:opacity-95 flex items-center justify-center gap-2"
              >
                <Send className="h-3.5 w-3.5" />
                <span>Submit Inquiry to Olumide@keylinegroup.com.ng</span>
              </button>
            </form>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-slate-800/80 bg-slate-950/80 py-6 text-xs text-slate-400">
        <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="font-semibold text-slate-200">Keyline Growth Partners Limited</span> &bull; &copy; {new Date().getFullYear()} All Rights Reserved.
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span>Domain Verification Active</span>
            <span className="text-slate-600">&bull;</span>
            <a href="/zohoverify/verifyforzoho.html" className="text-emerald-400/80 hover:text-emerald-300 transition">
              Zoho Verify Status
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
