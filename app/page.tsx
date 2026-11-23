'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  Mail, 
  Phone, 
  MapPin, 
  CheckCircle2, 
  TrendingUp, 
  Users, 
  ShieldCheck, 
  ArrowUpRight, 
  Clock, 
  Copy, 
  Check, 
  BarChart3, 
  Layers, 
  Send,
  Building,
  Target,
  Smartphone,
  Briefcase,
  ChevronRight,
  ExternalLink
} from 'lucide-react';

export default function FramerUnderConstructionPage() {
  const [copied, setCopied] = useState(false);
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryEmail, setInquiryEmail] = useState('');
  const [inquiryCompany, setInquiryCompany] = useState('');
  const [inquiryPhone, setInquiryPhone] = useState('');
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

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Keyline Strategic Enquiry - ${inquiryCompany || 'Prospective Client'} (${inquiryName || 'Inquirer'})`
    );
    const body = encodeURIComponent(
      `Hello Dr. Olumide,\n\nName: ${inquiryName}\nCompany: ${inquiryCompany}\nPhone: ${inquiryPhone}\nEmail: ${inquiryEmail}\n\nProject Scope / Sales Requirement:\n${inquiryMsg}\n\n---\nSent via keylinegroup.com.ng client intake`
    );
    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const paidValues = [
    {
      letter: 'P',
      name: 'Partnership',
      description: 'Building deep alignment with distributor networks and brand owners to drive shared commercial success.'
    },
    {
      letter: 'A',
      name: 'Accountability',
      description: 'Rigorous daily audits for cash, inventory, outlet visits, and team performance.'
    },
    {
      letter: 'I',
      name: 'Integrity',
      description: 'Transparent, auditable sales execution you can trust to represent your brand faithfully.'
    },
    {
      letter: 'D',
      name: 'Discipline',
      description: 'Relentless ground-level execution, consistent outlet coverage, and structured daily routines.'
    },
    {
      letter: 'A',
      name: 'Adaptability',
      description: 'Agile response to regional market shifts, consumer trends, and changing channel dynamics.'
    },
    {
      letter: 'I',
      name: 'Innovation',
      description: 'Leveraging real-time CRM and GPS tracking technology to replace manual guesswork with hard data.'
    }
  ];

  const services = [
    {
      title: 'Field Sales Outsourcing',
      category: 'Ground Execution',
      desc: 'Recruiting, deploying, and managing dedicated field sales executives across open markets, modern trade, and van sales.',
      icon: Users,
      highlight: '6/6 Geopolitical Zones',
    },
    {
      title: 'Telesales Outsourcing',
      category: 'Inside Sales',
      desc: 'Dedicated phone-based sales specialists driving inbound inquiries, outbound distributor re-orders, and account retention.',
      icon: Smartphone,
      highlight: 'Rapid Re-order Rates',
    },
    {
      title: 'Sales Process Outsourcing (SPO)',
      category: 'End-to-End',
      desc: 'Complete workforce management including talent acquisition, background vetting, payroll administration, and KPI supervision.',
      icon: Briefcase,
      highlight: 'Zero Administrative Overhead',
    },
    {
      title: 'Merchandising & Retail Execution',
      category: 'In-Store Impact',
      desc: 'Ensuring maximum brand visibility, shelf share, planogram compliance, and stock replenishment in major trade hubs.',
      icon: Target,
      highlight: 'Auditable Shelf Share',
    },
    {
      title: 'Sales Advisory & Playbooks',
      category: 'Strategy & RTM',
      desc: 'Route-to-market design, distributor framework structuring, and structured commercial playbooks for corporate and MSME brands.',
      icon: TrendingUp,
      highlight: 'Custom RTM Frameworks',
    },
  ];

  const team = [
    {
      name: 'Dr. Olumide Owoeye',
      role: 'Managing Partner',
      title: 'Ph.D. Economics • Commercial Strategy & Sales Outsourcing',
      bio: 'Seasoned commercial strategist with extensive experience across Nigeria, Ghana, Liberia, Kenya, and the Netherlands. Proven track record in route-to-market development, workforce productivity, and high-value strategic partnerships.',
      email: contactEmail,
      phone: internationalPhone,
      image: '/team/olumide.jpg',
      featured: true,
    },
    {
      name: 'Tolulope',
      role: 'Sales Business Partner',
      title: 'Key Account Management & Commercial Growth',
      bio: 'Accomplished sales business partner with deep expertise in strategic customer relationship development, commercial insight, key accounts, and sustainable revenue generation.',
      image: '/team/tolulope.jpg',
      featured: false,
    },
    {
      name: 'Olayemi Tejuoso',
      role: 'Field Sales Supervisor',
      title: 'Field Operations & Performance Management',
      bio: 'Experienced field supervisor skilled in coordinating sales squads, monitoring daily field execution, supporting targets, and driving ground-level revenue performance.',
      image: '/team/olayemi.jpg',
      featured: false,
    },
  ];

  const clientLogos = [
    { name: 'Tolaram', tag: 'FMCG Conglomerate' },
    { name: 'KIVO', tag: 'Packaged Goods' },
    { name: 'RiBe Foods', tag: 'Food & Nutrition' },
    { name: 'Wigo / Cameroon Pepper', tag: 'Food Spices' },
    { name: 'Ebenco Group Limited', tag: 'Diversified Conglomerate' },
    { name: 'Paga', tag: 'Fintech & Agency Banking' },
    { name: 'Vitafoam', tag: 'Home & Industrial' },
    { name: 'Moura', tag: 'Consumer Brands' },
  ];

  const coverageZones = [
    { name: 'Lagos & South-West', hubs: 'Ibadan, Ikeja, Trade Fair, Alaba, Abeokuta, Akure' },
    { name: 'South-South', hubs: 'Port Harcourt, Benin City, Warri, Calabar' },
    { name: 'South-East', hubs: 'Onitsha, Aba, Enugu, Nnewi' },
    { name: 'North-Central', hubs: 'Abuja FCT, Ilorin, Jos, Lokoja' },
    { name: 'North-West', hubs: 'Kano, Kaduna, Sokoto, Katsina' },
    { name: 'North-East', hubs: 'Maiduguri, Bauchi, Gombe, Yola' },
  ];

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1A1E24] selection:bg-[#F56900] selection:text-white flex flex-col justify-between">
      
      {/* Framer Minimalist Sticky Header */}
      <header className="sticky top-0 z-50 border-b border-[#E8E1D3]/80 bg-[#FAF7F2]/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          
          {/* Brand Logo & Identifier */}
          <div className="flex items-center gap-3.5">
            <div className="relative h-10 w-10 flex-shrink-0 rounded-xl bg-[#F56900] flex items-center justify-center text-white font-bold text-lg shadow-sm">
              KG
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold tracking-tight text-[#1A1E24] text-base sm:text-lg">
                  Keyline Growth Partners
                </span>
                <span className="hidden md:inline-flex items-center rounded-full bg-[#F56900]/10 px-2.5 py-0.5 text-[10px] font-semibold text-[#F56900]">
                  Limited
                </span>
              </div>
              <p className="text-[11px] font-medium text-[#687282] tracking-wide">
                Strategy • Partnership • Execution • Growth
              </p>
            </div>
          </div>

          {/* Status Indicator & Quick Contact */}
          <div className="flex items-center gap-3">
            <div className="hidden lg:flex items-center gap-2 rounded-full border border-[#E8E1D3] bg-white/70 px-3.5 py-1.5 text-xs font-medium text-[#4A4F59] shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#F56900] opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#F56900]"></span>
              </span>
              <span>Portal In Development • Accepting Inquiries</span>
            </div>

            <a
              href={`mailto:${contactEmail}`}
              className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-[#E8E1D3] bg-white px-4 py-2 text-xs font-semibold text-[#1A1E24] shadow-sm transition-all hover:border-[#F56900] hover:text-[#F56900]"
            >
              <Mail className="h-3.5 w-3.5 text-[#F56900]" />
              <span>{contactEmail}</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 rounded-full bg-[#F56900] px-4 py-2 text-xs font-semibold text-white shadow-md shadow-[#F56900]/20 transition-all hover:bg-[#DD5C00] hover:shadow-lg hover:shadow-[#F56900]/30 active:scale-[0.98]"
            >
              <span>Contact Olumide</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1">
        
        {/* HERO SECTION */}
        <section className="relative overflow-hidden pt-12 pb-20 sm:pt-20 sm:pb-28">
          <div className="mx-auto max-w-7xl px-6">
            
            {/* Top Pill */}
            <div className="flex justify-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#F56900]/30 bg-[#FFF8F2] px-4 py-1.5 text-xs font-semibold text-[#F56900] shadow-sm">
                <Clock className="h-3.5 w-3.5" />
                <span>OFFICIAL DIGITAL PLATFORM UNDER CONSTRUCTION</span>
              </div>
            </div>

            {/* Headline & Editorial Copy */}
            <div className="mx-auto mt-8 max-w-4xl text-center">
              <h1 className="text-4xl font-extrabold tracking-tight text-[#1A1E24] sm:text-6xl sm:leading-[1.1]">
                Building Strategic Partnerships for{' '}
                <span className="relative whitespace-nowrap text-[#F56900]">
                  <span className="relative">Sustainable Growth</span>
                </span>
              </h1>
              
              <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-[#555C68] leading-relaxed">
                Nigeria’s dedicated sales outsourcing firm. We recruit, deploy, and manage high-performing field sales forces, telesales teams, and merchandisers so brand owners can focus on product innovation while we drive revenue across all six geopolitical zones.
              </p>

              {/* CTAs */}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#F56900] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#F56900]/25 transition hover:bg-[#DD5C00] hover:shadow-xl hover:shadow-[#F56900]/30 active:scale-[0.99]"
                >
                  <span>Initiate Sales Partnership</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>

                <a
                  href={`tel:${contactPhone}`}
                  className="inline-flex items-center gap-2 rounded-xl border border-[#E8E1D3] bg-white px-6 py-3.5 text-sm font-semibold text-[#1A1E24] shadow-sm transition hover:border-[#1A1E24]"
                >
                  <Phone className="h-4 w-4 text-[#F56900]" />
                  <span>Direct Line: {internationalPhone}</span>
                </a>
              </div>
            </div>

            {/* Hero Spotlight Bento: Managing Partner & Instant Access */}
            <div className="mt-14 mx-auto max-w-4xl">
              <div className="rounded-3xl border border-[#E8E1D3] bg-white p-6 sm:p-8 shadow-framer transition-all hover:shadow-framer-hover">
                <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8">
                  
                  {/* Photo */}
                  <div className="relative h-32 w-32 sm:h-36 sm:w-36 flex-shrink-0 overflow-hidden rounded-2xl border-2 border-[#FAF7F2] shadow-md">
                    <Image
                      src="/team/olumide.jpg"
                      alt="Dr. Olumide Owoeye"
                      fill
                      className="object-cover object-top"
                      priority
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 text-center md:text-left">
                    <div className="inline-flex items-center gap-2 rounded-md bg-[#FFF8F2] px-2.5 py-1 text-[11px] font-bold text-[#F56900] uppercase tracking-wider mb-2">
                      Managing Partner Contact
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#1A1E24]">
                      Dr. Olumide Owoeye
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-[#687282] mt-0.5">
                      Ph.D. in Economics • Commercial Strategy & Sales Outsourcing
                    </p>
                    <p className="text-xs text-[#555C68] mt-2 leading-relaxed max-w-xl">
                      Leading commercial operations across Nigeria, Ghana, Liberia, Kenya, and the Netherlands. For direct client onboarding, route-to-market consultations, and field force deployment:
                    </p>

                    {/* Email and Phone actionable row */}
                    <div className="mt-4 flex flex-wrap items-center justify-center md:justify-start gap-3">
                      <a
                        href={`mailto:${contactEmail}?subject=Sales%20Outsourcing%20Inquiry%20-%20Keyline%20Growth%20Partners`}
                        className="inline-flex items-center gap-1.5 rounded-lg bg-[#001773] px-3.5 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-[#001255]"
                      >
                        <Mail className="h-3.5 w-3.5 text-[#F56900]" />
                        <span>Email {contactEmail}</span>
                      </a>

                      <button
                        onClick={copyEmail}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-[#E8E1D3] bg-[#FAF7F2] px-3 py-2 text-xs font-medium text-[#1A1E24] transition hover:bg-[#EFE9DD]"
                      >
                        {copied ? (
                          <>
                            <Check className="h-3.5 w-3.5 text-[#F56900]" />
                            <span className="text-[#F56900] font-semibold">Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="h-3.5 w-3.5 text-[#687282]" />
                            <span>Copy Email</span>
                          </>
                        )}
                      </button>

                      <a
                        href={`tel:${contactPhone}`}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-[#E8E1D3] bg-[#FAF7F2] px-3 py-2 text-xs font-medium text-[#1A1E24] transition hover:bg-[#EFE9DD]"
                      >
                        <Phone className="h-3.5 w-3.5 text-[#687282]" />
                        <span>Call 08035259620</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Metrics Bar */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="rounded-2xl border border-[#E8E1D3] bg-white p-5 text-center shadow-sm">
                <span className="block text-3xl font-extrabold text-[#F56900]">6 of 6</span>
                <span className="text-xs font-semibold text-[#1A1E24] mt-1 block">Geopolitical Zones Covered</span>
                <span className="text-[11px] text-[#687282] mt-0.5 block">Full Nigerian Market Footprint</span>
              </div>

              <div className="rounded-2xl border border-[#E8E1D3] bg-white p-5 text-center shadow-sm">
                <span className="block text-3xl font-extrabold text-[#001773]">100s</span>
                <span className="text-xs font-semibold text-[#1A1E24] mt-1 block">Client Brands Managed</span>
                <span className="text-[11px] text-[#687282] mt-0.5 block">FMCG & Consumer Goods</span>
              </div>

              <div className="rounded-2xl border border-[#E8E1D3] bg-white p-5 text-center shadow-sm">
                <span className="block text-3xl font-extrabold text-[#F56900]">100%</span>
                <span className="text-xs font-semibold text-[#1A1E24] mt-1 block">Real-Time CRM & GPS</span>
                <span className="text-[11px] text-[#687282] mt-0.5 block">Daily Stock & Cash Auditing</span>
              </div>

              <div className="rounded-2xl border border-[#E8E1D3] bg-white p-5 text-center shadow-sm">
                <span className="block text-3xl font-extrabold text-[#001773]">3+ Years</span>
                <span className="text-xs font-semibold text-[#1A1E24] mt-1 block">Proven Track Record</span>
                <span className="text-[11px] text-[#687282] mt-0.5 block">From Local Roots to Scale</span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: PAID-AI OPERATING VALUES */}
        <section className="border-t border-b border-[#E8E1D3] bg-[#F4EFE6] py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-bold uppercase tracking-wider text-[#F56900]">
                Our Guiding Operating System
              </span>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-[#1A1E24] sm:text-4xl">
                The PAID-AI Core Values
              </h2>
              <p className="mt-3 text-sm text-[#555C68]">
                At the core of Keyline’s model is daily discipline. Our field operations are guided by six non-negotiable principles.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
              {paidValues.map((val, idx) => (
                <div
                  key={idx}
                  className="group relative rounded-2xl border border-[#E8E1D3] bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-[#F56900]/40 hover:shadow-md"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFF8F2] text-lg font-black text-[#F56900] border border-[#F56900]/20">
                      {val.letter}
                    </span>
                    <h3 className="font-bold text-base text-[#1A1E24] group-hover:text-[#F56900] transition">
                      {val.name}
                    </h3>
                  </div>
                  <p className="text-xs text-[#555C68] leading-relaxed">
                    {val.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION: FULL-SPECTRUM SERVICES */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-bold uppercase tracking-wider text-[#F56900]">
                Execution Without Overhead
              </span>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-[#1A1E24] sm:text-4xl">
                What We Do
              </h2>
              <p className="mt-3 text-sm text-[#555C68]">
                Tailored sales outsourcing models that eliminate the risk, complexity, and fixed capital expense of building an in-house sales department.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {services.map((svc, i) => {
                const IconComponent = svc.icon;
                return (
                  <div
                    key={i}
                    className="flex flex-col justify-between rounded-3xl border border-[#E8E1D3] bg-white p-7 shadow-framer transition-all hover:shadow-framer-hover hover:border-[#F56900]/40"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-5">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FFF8F2] text-[#F56900] border border-[#F56900]/15">
                          <IconComponent className="h-6 w-6" />
                        </div>
                        <span className="rounded-full bg-[#FAF7F2] px-3 py-1 text-[11px] font-semibold text-[#001773] border border-[#E8E1D3]">
                          {svc.category}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-[#1A1E24]">
                        {svc.title}
                      </h3>

                      <p className="mt-3 text-xs sm:text-sm text-[#555C68] leading-relaxed">
                        {svc.desc}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-[#F0EAE0] flex items-center justify-between text-xs">
                      <span className="font-semibold text-[#F56900]">
                        {svc.highlight}
                      </span>
                      <ArrowUpRight className="h-4 w-4 text-[#A0A6B2]" />
                    </div>
                  </div>
                );
              })}

              {/* Recruitment & Payroll Highlight Card */}
              <div className="flex flex-col justify-between rounded-3xl border border-[#001773] bg-[#001773] p-7 text-white shadow-lg">
                <div>
                  <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold text-[#F56900] mb-4">
                    Complete Turnkey Sales Infrastructure
                  </span>
                  <h3 className="text-lg font-bold text-white">
                    End-to-End Staffing & Administration
                  </h3>
                  <ul className="mt-4 space-y-2 text-xs text-slate-200">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#F56900]" />
                      <span>Sales candidate screening & background checks</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#F56900]" />
                      <span>Rigorous employee onboarding & territory alignment</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#F56900]" />
                      <span>Performance management & KPI monitoring</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#F56900]" />
                      <span>Statutory compliance & payroll administration</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#F56900] hover:text-white transition"
                  >
                    <span>Request Full Capability Document</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: NATIONWIDE COVERAGE & TECH BACKING (DARK EDITORIAL SECTION) */}
        <section className="bg-[#0D1424] text-white py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-6">
                <span className="text-xs font-bold uppercase tracking-wider text-[#F56900]">
                  Unmatched Territorial Presence
                </span>
                <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl text-white">
                  From Local Ibadan Outlets to Nationwide Coverage Across All Six Zones
                </h2>
                <p className="mt-4 text-sm text-slate-300 leading-relaxed">
                  Keyline began on the ground, retailer-to-retailer in Ibadan. That hands-on experience proved how daily discipline moves stock. Today, our field force operates across Nigeria’s main commercial epicenters with real-time CRM and GPS logging.
                </p>

                <div className="mt-8 space-y-4">
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <h4 className="text-xs font-bold text-[#F56900] uppercase tracking-wide">
                      Real-Time CRM & Sales Tracking
                    </h4>
                    <p className="mt-1 text-xs text-slate-300">
                      Activity across field reps, van sales, and telesales is tracked, logged, and audited daily—giving leadership complete visibility over stock movement and revenue realization.
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <h4 className="text-xs font-bold text-[#F56900] uppercase tracking-wide">
                      West Africa Expansion Horizon
                    </h4>
                    <p className="mt-1 text-xs text-slate-300">
                      Having proven the model nationwide across Nigeria, Keyline is now setting its sights on key West African markets for client brand distribution.
                    </p>
                  </div>
                </div>
              </div>

              {/* 6 Zones Bento Cards */}
              <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {coverageZones.map((z, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm"
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <MapPin className="h-4 w-4 text-[#F56900]" />
                      <span className="font-bold text-xs text-white">{z.name}</span>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-snug">
                      {z.hubs}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* SECTION: MEET THE LEADERSHIP */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-bold uppercase tracking-wider text-[#F56900]">
                Commercial Leadership
              </span>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-[#1A1E24] sm:text-4xl">
                Meet the Leadership Team
              </h2>
              <p className="mt-3 text-sm text-[#555C68]">
                Decades of combined expertise in FMCG distribution, strategic account leadership, and frontline sales operations.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {team.map((member, i) => (
                <div
                  key={i}
                  className="rounded-3xl border border-[#E8E1D3] bg-white p-6 shadow-framer flex flex-col justify-between"
                >
                  <div>
                    <div className="relative h-48 w-full overflow-hidden rounded-2xl mb-4 bg-[#FAF7F2]">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover object-top"
                      />
                    </div>

                    <div className="inline-block rounded-md bg-[#FFF8F2] px-2 py-0.5 text-[10px] font-bold text-[#F56900] uppercase mb-1">
                      {member.role}
                    </div>

                    <h3 className="text-lg font-bold text-[#1A1E24]">
                      {member.name}
                    </h3>
                    <p className="text-xs font-medium text-[#687282] mt-0.5">
                      {member.title}
                    </p>

                    <p className="mt-3 text-xs text-[#555C68] leading-relaxed">
                      {member.bio}
                    </p>
                  </div>

                  {member.email && (
                    <div className="mt-5 pt-4 border-t border-[#F0EAE0]">
                      <a
                        href={`mailto:${member.email}`}
                        className="text-xs font-bold text-[#F56900] hover:underline flex items-center gap-1.5"
                      >
                        <Mail className="h-3.5 w-3.5" />
                        <span>{member.email}</span>
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION: CLIENT ROSTER */}
        <section className="border-t border-b border-[#E8E1D3] bg-[#F4EFE6] py-14">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-[#687282]">
              Trusted By Leading Nigerian & Multinational Brands
            </span>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-4xl mx-auto">
              {clientLogos.map((c, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-[#E8E1D3] bg-white px-5 py-3 shadow-sm flex items-center gap-2"
                >
                  <span className="font-extrabold text-sm text-[#1A1E24] tracking-tight">{c.name}</span>
                  <span className="text-[10px] font-medium text-[#A0A6B2]">({c.tag})</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION: FRAMER INTERACTIVE INQUIRY FORM */}
        <section id="contact" className="py-16 sm:py-24">
          <div className="mx-auto max-w-3xl px-6">
            <div className="rounded-3xl border border-[#E8E1D3] bg-white p-8 sm:p-12 shadow-xl">
              
              <div className="text-center max-w-xl mx-auto mb-8">
                <span className="text-xs font-bold uppercase tracking-wider text-[#F56900]">
                  Get In Touch
                </span>
                <h3 className="mt-1 text-2xl sm:text-3xl font-extrabold text-[#1A1E24]">
                  Contact Olumide Owoeye for Enquiries
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-[#555C68]">
                  Whether you require an outsourced field force for an upcoming product launch, van sales deployment, or sales advisory, get in touch directly.
                </p>
              </div>

              {submitted ? (
                <div className="rounded-2xl border border-[#F56900]/30 bg-[#FFF8F2] p-8 text-center">
                  <CheckCircle2 className="h-10 w-10 text-[#F56900] mx-auto mb-3" />
                  <h4 className="text-lg font-bold text-[#1A1E24]">Your Email Client Is Ready</h4>
                  <p className="text-xs sm:text-sm text-[#555C68] mt-1 max-w-md mx-auto">
                    Your inquiry details have been composed. If your email application did not launch automatically, send your message directly to{' '}
                    <a href={`mailto:${contactEmail}`} className="text-[#F56900] font-bold underline">
                      {contactEmail}
                    </a>
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 rounded-lg bg-[#1A1E24] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[#333]"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleInquirySubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#1A1E24] mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={inquiryName}
                        onChange={(e) => setInquiryName(e.target.value)}
                        placeholder="e.g. Samuel Adekunle"
                        className="w-full rounded-xl border border-[#E8E1D3] bg-[#FAF7F2] px-3.5 py-2.5 text-xs text-[#1A1E24] placeholder-[#A0A6B2] focus:border-[#F56900] focus:bg-white focus:outline-none transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#1A1E24] mb-1">
                        Company or Brand *
                      </label>
                      <input
                        type="text"
                        required
                        value={inquiryCompany}
                        onChange={(e) => setInquiryCompany(e.target.value)}
                        placeholder="e.g. Prime Foods Ltd"
                        className="w-full rounded-xl border border-[#E8E1D3] bg-[#FAF7F2] px-3.5 py-2.5 text-xs text-[#1A1E24] placeholder-[#A0A6B2] focus:border-[#F56900] focus:bg-white focus:outline-none transition"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#1A1E24] mb-1">
                        Business Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={inquiryEmail}
                        onChange={(e) => setInquiryEmail(e.target.value)}
                        placeholder="samuel@company.com"
                        className="w-full rounded-xl border border-[#E8E1D3] bg-[#FAF7F2] px-3.5 py-2.5 text-xs text-[#1A1E24] placeholder-[#A0A6B2] focus:border-[#F56900] focus:bg-white focus:outline-none transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#1A1E24] mb-1">
                        Phone Number (Optional)
                      </label>
                      <input
                        type="tel"
                        value={inquiryPhone}
                        onChange={(e) => setInquiryPhone(e.target.value)}
                        placeholder="0803..."
                        className="w-full rounded-xl border border-[#E8E1D3] bg-[#FAF7F2] px-3.5 py-2.5 text-xs text-[#1A1E24] placeholder-[#A0A6B2] focus:border-[#F56900] focus:bg-white focus:outline-none transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#1A1E24] mb-1">
                      Project Requirement / Target Geographies *
                    </label>
                    <textarea
                      rows={3}
                      required
                      value={inquiryMsg}
                      onChange={(e) => setInquiryMsg(e.target.value)}
                      placeholder="Outline your requirements: target territories, sales executive headcount, van sales, telesales, or route-to-market timeline..."
                      className="w-full rounded-xl border border-[#E8E1D3] bg-[#FAF7F2] px-3.5 py-2.5 text-xs text-[#1A1E24] placeholder-[#A0A6B2] focus:border-[#F56900] focus:bg-white focus:outline-none transition"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-xl bg-[#F56900] py-3.5 text-xs font-bold text-white shadow-lg shadow-[#F56900]/25 transition hover:bg-[#DD5C00] hover:shadow-xl hover:shadow-[#F56900]/30 flex items-center justify-center gap-2"
                  >
                    <Send className="h-3.5 w-3.5" />
                    <span>Send Message to Olumide@keylinegroup.com.ng</span>
                  </button>

                  <div className="pt-2 flex items-center justify-between text-[11px] text-[#687282]">
                    <span>Official Response within 24 business hours</span>
                    <a href={`tel:${contactPhone}`} className="hover:text-[#F56900] font-medium underline">
                      Urgent? Call 08035259620
                    </a>
                  </div>
                </form>
              )}

            </div>
          </div>
        </section>

      </main>

      {/* EDITORIAL MINIMAL FOOTER */}
      <footer className="border-t border-[#E8E1D3] bg-white py-10 text-xs text-[#687282]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg bg-[#F56900] flex items-center justify-center text-white font-bold text-sm">
                KG
              </div>
              <div>
                <span className="font-bold text-[#1A1E24] block">Keyline Growth Partners Limited</span>
                <span className="text-[11px] text-[#687282] block">Building strategic partnerships for sustainable growth.</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-xs text-[#555C68]">
              <a href={`mailto:${contactEmail}`} className="hover:text-[#F56900] transition">
                {contactEmail}
              </a>
              <span>&bull;</span>
              <a href={`tel:${contactPhone}`} className="hover:text-[#F56900] transition">
                {internationalPhone}
              </a>
              <span>&bull;</span>
              <a href="/zohoverify/verifyforzoho.html" className="text-[#001773] font-semibold hover:underline">
                Zoho Verification Endpoint
              </a>
            </div>

          </div>

          <div className="mt-8 pt-6 border-t border-[#F0EAE0] flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[#A0A6B2]">
            <p>&copy; {new Date().getFullYear()} Keyline Growth Partners Limited. All rights reserved.</p>
            <p>Six Geopolitical Zones • Nigeria & West Africa</p>
          </div>
        </div>
      </footer>

    </div>
  );
}
