
import React, { useState, useMemo, useEffect } from 'react';
import { STATIC_RECIPES } from './data/recipes';
import { TRANSLATIONS } from './data/locales';
import { translateItem } from './data/itemTranslations';
import { Recipe, CalculationResult, CraftType, Language } from './types';
import { MaterialList } from './components/MaterialList';
import { 
  getSupabase, 
  submitPlayerStats, 
  fetchGlobalLeaderboard 
} from './services/supabase';

// --- ICONS ---

const ArdenLogo = ({ className = "w-24 h-24" }: { className?: string }) => (
  <img 
    src="https://cdn.ltg.com/lif/images/arden/logo-arden.png" 
    alt="Arden Feudal Logo"
    className={`${className} object-contain drop-shadow-md`}
  />
);

const HammerIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m15 12-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L12 9"></path>
    <path d="M17.64 15 22 10.64"></path>
    <path d="m20.91 11.7-1.25-1.25c-.6-.6-.93-1.4-.93-2.25V3.36M14.38 13.4 3.63 2.65"></path>
  </svg>
);

const AnvilIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 10H2c-1.1 0-2 .9-2 2v3h2v7h3v-7h13v7h3v-7h2v-3c0-1.1-.9-2-2-2H7z"></path>
    <path d="M7 10V4c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2v6"></path>
  </svg>
);

const SwordIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="14.5 17.5 3 6 3 3 6 3 17.5 14.5"></polyline>
    <line x1="13" y1="19" x2="19" y2="13"></line>
    <line x1="16" y1="16" x2="20" y2="20"></line>
    <line x1="19" y1="21" x2="21" y2="19"></line>
  </svg>
);

const FireIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.1.2-2.2.5-3.3.3-1.1 1-1.65 2.5-3.2.5 1.6.5 2.6 0 3.5z"></path>
  </svg>
);

const ShirtIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.38 3.4a2 2 0 0 0-1.24-1.22l-6.9-2a2 2 0 0 0-1.2 0l-6.9 2a2 2 0 0 0-1.24 1.22L2 11.94a2 2 0 0 0 .69 1.73l1.54 1.2a2 2 0 0 0 1.54.37h12.46a2 2 0 0 0 1.54-.37l1.54-1.2a2 2 0 0 0 .69-1.73l-1.62-8.54z"></path>
    <path d="M9 5v2"></path>
    <path d="M15 5v2"></path>
  </svg>
);

const ShieldIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
  </svg>
);

const ChevronLeftIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m15 18-6-6 6-6"/>
  </svg>
);

const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

const CalculatorIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="16" height="20" x="4" y="2" rx="2" />
      <line x1="8" x2="16" y1="6" y2="6" />
      <line x1="16" x2="16" y1="14" y2="18" />
      <path d="M16 10h.01" />
      <path d="M12 10h.01" />
      <path d="M8 10h.01" />
      <path d="M12 14h.01" />
      <path d="M8 14h.01" />
      <path d="M12 18h.01" />
      <path d="M8 18h.01" />
    </svg>
);

const LockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
  </svg>
);

// -- NEW ICONS FOR DAMAGE METER --
const ActivityIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
);

const BarChartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
);

const FileTextIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
);

const GlobeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
);

const TrophyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path><path d="M18 2H6v7a6 6 0 0 0 12 0V2z"></path></svg>
);

const UploadCloudIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
);

const FileCheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="m9 15 2 2 4-4"/></svg>
);

const SkullIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="12" r="1"/><circle cx="15" cy="12" r="1"/><path d="M8 20v2h8v-2"/><path d="m12.5 17-.5-1-.5 1h1z"/><path d="M16 20a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20"/></svg>
);

const CrosshairIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="22" y1="12" x2="18" y2="12"/><line x1="6" y1="12" x2="2" y2="12"/><line x1="12" y1="6" x2="12" y2="2"/><line x1="12" y1="22" x2="12" y2="18"/></svg>
);

const HeartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
);

const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
);

const ZapIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
);

const TargetIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
);

const USFlag = () => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" width="24" height="12"><clipPath id="s"><path d="M0,0 v30 h60 v-30 z"/></clipPath><g clipPath="url(#s)"><path d="M0,0 v30 h60 v-30 z" fill="#012169"/><path d="M0,0 v30 h60 v-30 z" fill="#fff"/><path d="M0,0 v30 h60 v-30 z" fill="#be0b31"/><path d="M0,0 v30 h60 v-30 z" fill="#fff"/><rect width="60" height="30" fill="#bf0a30"/><path d="M0,4.6h60M0,10.8h60M0,16.9h60M0,23.1h60" stroke="#fff" strokeWidth="2.3"/><rect width="24" height="16" fill="#002868"/><path d="M3,2h2M9,2h2M15,2h2M21,2h2 M6,5h2M12,5h2M18,5h2 M3,8h2M9,8h2M15,8h2M21,8h2 M6,11h2M12,11h2M18,11h2 M3,14h2M9,14h2M15,14h2M21,14h2" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/></g></svg>);
const UKFlag = () => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" width="24" height="12"><clipPath id="t"><path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/></clipPath><path d="M0,0 v30 h60 v-30 z" fill="#00247d"/><path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/><path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t)" stroke="#cf142b" strokeWidth="4"/><path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10"/><path d="M30,0 v30 M0,15 h60" stroke="#cf142b" strokeWidth="6"/></svg>);
const SpainFlag = () => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 750 500" width="24" height="16"><rect width="750" height="500" fill="#c60b1e"/><rect y="125" width="750" height="250" fill="#ffc400"/></svg>);
const GermanFlag = () => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5 3" width="24" height="14.4"><rect width="5" height="3" y="0" x="0" fill="#000"/><rect width="5" height="2" y="1" x="0" fill="#D00"/><rect width="5" height="1" y="2" x="0" fill="#FFCE00"/></svg>);
const RussianFlag = () => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 6" width="24" height="16"><rect fill="#fff" width="9" height="3" /><rect fill="#d52b1e" y="3" width="9" height="3" /><rect fill="#0039a6" y="2" width="9" height="2" /></svg>);
const TurkishFlag = () => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" width="24" height="16"><rect width="1200" height="800" fill="#E30A17"/><circle cx="444" cy="400" r="200" fill="#ffffff"/><circle cx="477" cy="400" r="160" fill="#E30A17"/><polygon points="583.334,400 754.543,455.653 648.727,310.041 648.727,489.959 754.543,344.347" fill="#ffffff" transform="rotate(-30 615 400)"/></svg>);

const SKILL_LEVELS = [0, 30, 60, 90, 100];
type View = 'landing' | 'profession-select' | 'crafting' | 'quality';
type DamageTab = 'overview' | 'charts' | 'damage_log' | 'combat_log' | 'ranking';
type TimeFilter = 'all' | 'daily' | 'weekly' | 'monthly';
type RankingType = 'dealt' | 'taken';

// --- PROFESSION DATA ---
interface Profession {
  id: string;
  name: string;
  active: boolean;
  craftType?: CraftType;
  group?: 'metal' | 'textile' | 'nature' | 'construction' | 'other'; 
  icon?: React.ReactNode;
}

const PROFESSIONS: Profession[] = [
  { id: 'artisan', name: 'Artisan', active: true, craftType: CraftType.ARTISAN, group: 'construction', icon: <HammerIcon /> },
  { id: 'construction', name: 'Construction', active: false, group: 'construction' },
  { id: 'masonry', name: 'Masonry', active: false, group: 'construction' },
  { id: 'architecture', name: 'Architecture', active: false, group: 'construction' },
  { id: 'mining', name: 'Mining', active: false, group: 'metal' },
  { id: 'material_processing', name: 'Material Processing', active: false, group: 'construction' },
  { id: 'precious_prospecting', name: 'Precious Prospecting', active: false, group: 'metal' },
  { id: 'jewelry', name: 'Jewelry', active: false, group: 'metal' },
  { id: 'forestry', name: 'Forestry', active: false, group: 'nature' },
  { id: 'carpentry', name: 'Carpentry', active: false, group: 'construction' },
  { id: 'bowcraft', name: 'Bowcraft', active: false, group: 'construction' },
  { id: 'warfare_engineering', name: 'Warfare Engineering', active: false, group: 'construction' },
  { id: 'kilning', name: 'Kilning', active: false, craftType: CraftType.KILNING, group: 'metal' },
  { id: 'forging', name: 'Forging', active: false, craftType: CraftType.FORGING, group: 'metal' },
  { id: 'weaponsmithing', name: 'Weaponsmithing', active: false, craftType: CraftType.WEAPONSMITHING, group: 'metal' },
  { id: 'armorsmithing', name: 'Armorsmithing', active: true, craftType: CraftType.ARMORSMITHING, group: 'metal', icon: <ShieldIcon /> },
  { id: 'household', name: 'Household', active: false, group: 'nature' },
  { id: 'farming', name: 'Farming', active: false, group: 'nature' },
  { id: 'cooking', name: 'Cooking', active: false, group: 'nature' },
  { id: 'tailoring', name: 'Tailoring', active: true, craftType: CraftType.TAILORING, group: 'textile', icon: <ShirtIcon /> },
  { id: 'gathering', name: 'Gathering', active: false, group: 'nature' },
  { id: 'herbalism', name: 'Herbalism', active: false, group: 'nature' },
  { id: 'healing', name: 'Healing', active: false, group: 'nature' },
  { id: 'alchemy', name: 'Alchemy', active: false, group: 'nature' },
  { id: 'hunting', name: 'Hunting', active: false, group: 'textile' },
  { id: 'procuration', name: 'Procuration', active: false, group: 'textile' },
  { id: 'animal_lore', name: 'Animal Lore', active: false, group: 'textile' },
  { id: 'warhorse_training', name: 'Warhorse Training', active: false, group: 'textile' },
];

// --- SUB-COMPONENTS ---

const LanguageSwitcher = ({ language, setLanguage }: { language: Language, setLanguage: (l: Language) => void }) => (
    <div className="flex items-center gap-2 p-1 bg-stone-900/80 rounded-lg border border-stone-800 backdrop-blur">
      <button onClick={() => setLanguage('en')} className={`p-1 rounded hover:bg-stone-800 transition-colors ${language === 'en' ? 'bg-stone-800 ring-1 ring-amber-900/50' : 'opacity-50 hover:opacity-100'}`} title="English"><UKFlag /></button>
      <button onClick={() => setLanguage('es')} className={`p-1 rounded hover:bg-stone-800 transition-colors ${language === 'es' ? 'bg-stone-800 ring-1 ring-amber-900/50' : 'opacity-50 hover:opacity-100'}`} title="Español"><SpainFlag /></button>
      <button onClick={() => setLanguage('de')} className={`p-1 rounded hover:bg-stone-800 transition-colors ${language === 'de' ? 'bg-stone-800 ring-1 ring-amber-900/50' : 'opacity-50 hover:opacity-100'}`} title="Deutsch"><GermanFlag /></button>
      <button onClick={() => setLanguage('ru')} className={`p-1 rounded hover:bg-stone-800 transition-colors ${language === 'ru' ? 'bg-stone-800 ring-1 ring-amber-900/50' : 'opacity-50 hover:opacity-100'}`} title="Русский"><RussianFlag /></button>
      <button onClick={() => setLanguage('tr')} className={`p-1 rounded hover:bg-stone-800 transition-colors ${language === 'tr' ? 'bg-stone-800 ring-1 ring-amber-900/50' : 'opacity-50 hover:opacity-100'}`} title="Türkçe"><TurkishFlag /></button>
    </div>
);

const LandingPage = ({ onNavigate, language, setLanguage }: { onNavigate: (view: View) => void, language: Language, setLanguage: (l: Language) => void }) => {
  const t = TRANSLATIONS[language];
  
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-stone-900">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ 
          backgroundImage: "url('https://cdn.ltg.com/lif/images/arden/lif-arden-bg-hero1.jpg')",
        }}
      ></div>
      
      {/* Overlay Gradient */}
      <div className="absolute inset-0 z-0 bg-stone-950/30"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 w-full max-w-4xl animate-fade-in">
        
        {/* Logo Area */}
        <div className="mb-12 flex flex-col items-center group cursor-default">
          <div className="drop-shadow-[0_0_40px_rgba(245,158,11,0.3)] transition-transform duration-500 group-hover:scale-105">
             <ArdenLogo className="w-32 h-32 sm:w-40 sm:h-40" />
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif font-bold text-stone-100 tracking-tight drop-shadow-2xl mb-2 mt-6">
             ARDEN<span className="text-amber-500">FEUDAL</span>
          </h1>
          <p className="text-sm sm:text-base font-medium text-stone-400 uppercase tracking-[0.3em] drop-shadow-md">
            Life is Feudal: MMO Tools
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-2xl mb-12">
          <button 
            onClick={() => onNavigate('profession-select')}
            className="group relative overflow-hidden bg-stone-900/60 backdrop-blur-md border border-amber-700/50 rounded-xl p-8 transition-all duration-300 hover:bg-stone-800/80 hover:border-amber-500 hover:shadow-[0_0_20px_rgba(245,158,11,0.2)]"
          >
            <div className="flex flex-col items-center gap-4 relative z-10">
               <div className="p-4 rounded-full bg-stone-800 text-amber-500 group-hover:scale-110 transition-transform duration-300">
                 <CalculatorIcon />
               </div>
               <div className="text-center">
                 <h2 className="text-xl font-bold text-stone-200 group-hover:text-amber-400 uppercase tracking-wide">{t.crafting_tools}</h2>
                 <p className="text-xs text-stone-500 mt-2">{t.crafting_desc}</p>
               </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>

          <button 
            onClick={() => onNavigate('quality')}
            className="group relative overflow-hidden bg-stone-900/60 backdrop-blur-md border border-stone-700/50 rounded-xl p-8 transition-all duration-300 hover:bg-stone-800/80 hover:border-stone-500"
          >
            <div className="flex flex-col items-center gap-4 relative z-10">
               <div className="p-4 rounded-full bg-stone-800 text-amber-500 group-hover:text-amber-400 group-hover:scale-110 transition-transform duration-300">
                 <SwordIcon />
               </div>
               <div className="text-center">
                 <h2 className="text-xl font-bold text-stone-200 group-hover:text-white uppercase tracking-wide">{t.quality_calc}</h2>
                 <p className="text-xs text-stone-500 mt-2">{t.dm_combat_log}</p>
               </div>
            </div>
          </button>
        </div>

        {/* Footer / Language */}
        <div className="flex flex-col items-center gap-4">
           <LanguageSwitcher language={language} setLanguage={setLanguage} />
           <p className="text-xs text-stone-600 mt-4">&copy; 2024 Arden Feudal. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

const ProfessionSelection = ({ onSelect, onBack, t }: { onSelect: (type: CraftType, group: string) => void, onBack: () => void, t: any }) => {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-200 flex flex-col items-center p-6 relative overflow-hidden">
       {/* Background Image */}
       <div className="absolute inset-0 bg-[url('https://cdn.ltg.com/lif/images/arden/lif-arden-bg-hero1.jpg')] bg-cover bg-center bg-fixed opacity-20"></div>
       <div className="absolute inset-0 bg-gradient-to-b from-stone-950/90 via-stone-950/80 to-stone-950/95"></div>

       <div className="relative z-10 w-full max-w-5xl flex flex-col h-full justify-center">
         <div className="flex items-center justify-between mb-6 mt-4">
            <button 
              onClick={onBack}
              className="flex items-center gap-2 text-stone-500 hover:text-amber-500 transition-colors p-2 rounded hover:bg-stone-900"
            >
              <ChevronLeftIcon />
              <span className="uppercase font-bold text-xs tracking-widest">{t.back_to_menu}</span>
            </button>
            <h1 className="text-2xl md:text-3xl font-serif font-bold text-amber-500">{t.select_profession}</h1>
            <div className="w-8"></div> {/* Spacer */}
         </div>

         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 animate-fade-in">
            {PROFESSIONS.map(prof => (
              <button
                key={prof.id}
                onClick={() => prof.active && prof.craftType && prof.group ? onSelect(prof.craftType, prof.group) : null}
                disabled={!prof.active}
                className={`relative group flex flex-col items-center justify-center p-3 rounded-lg border transition-all duration-300 min-h-[90px]
                  ${prof.active 
                    ? 'bg-stone-900/60 border-amber-700/50 hover:bg-stone-800 hover:border-amber-500 hover:scale-105 cursor-pointer shadow-lg' 
                    : 'bg-stone-950/40 border-stone-800/50 opacity-60 cursor-not-allowed grayscale'
                  }`}
              >
                <div className={`mb-1 ${prof.active ? 'text-amber-500' : 'text-stone-600'}`}>
                   {prof.icon ? prof.icon : <div className="w-5 h-5 rounded-full bg-stone-800/50 flex items-center justify-center text-[9px] font-bold border border-stone-700">{prof.name.substring(0,2)}</div>}
                </div>
                <span className={`text-xs text-center font-medium leading-tight ${prof.active ? 'text-stone-200' : 'text-stone-600'}`}>
                  {prof.name}
                </span>
                {!prof.active && (
                  <div className="absolute top-2 right-2 text-stone-700">
                    <LockIcon />
                  </div>
                )}
              </button>
            ))}
         </div>
         
         <p className="text-center text-xs text-stone-500 mt-6 italic mb-4">
           {t.locked_professions_desc}
         </p>
       </div>
    </div>
  );
};

interface CombatLogEntry {
  id: number;
  timestamp: number;
  source: string;
  target: string;
  isIncoming: boolean;
  location: string;
  damage: number;
  damageType: string;
  speedBonus: number;
  isDeath?: boolean;
  isKill?: boolean;
  isHeal?: boolean;
}

// Helper to calculate stats outside of hook for reusability
const calculateStats = (logs: CombatLogEntry[]) => {
    let totalDealt = 0;
    let totalTaken = 0;
    let damageTypesMap: Record<string, number> = {};
    let targetsMap: Record<string, number> = {};
    let minTime = Infinity;
    let maxTime = 0;
    let hitCount = 0;
    let takenCount = 0;
    let deaths = 0;
    let kills = 0;
    let healed = 0;

    if (logs.length === 0) {
        return {
            dealt: 0, taken: 0, healed: 0, kills: 0, deaths: 0,
            duration: '00:00:00', avgDmg: 0, avgTaken: 0, efficiency: 100,
            damageTypes: [], targets: []
        };
    }

    logs.forEach(log => {
        if (log.timestamp > 0) {
            if (log.timestamp < minTime) minTime = log.timestamp;
            if (log.timestamp > maxTime) maxTime = log.timestamp;
        }

        if (log.isDeath) { deaths++; return; }
        if (log.isKill) { kills++; return; }
        if (log.isHeal) { healed++; return; }

        if (log.isIncoming) {
            totalTaken += log.damage;
            takenCount++;
        } else {
            totalDealt += log.damage;
            hitCount++;
            damageTypesMap[log.damageType] = (damageTypesMap[log.damageType] || 0) + log.damage;
            targetsMap[log.target] = (targetsMap[log.target] || 0) + log.damage;
        }
    });

    let durationStr = '00:00:00';
    if (minTime !== Infinity && maxTime !== 0 && maxTime >= minTime) {
        const diffMs = maxTime - minTime;
        const diffSecs = Math.floor(diffMs / 1000);
        const h = Math.floor(diffSecs / 3600);
        const m = Math.floor((diffSecs % 3600) / 60);
        const s = diffSecs % 60;
        durationStr = `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    }

    const damageTypes = Object.entries(damageTypesMap)
        .map(([type, value]) => ({ type, value: (value / totalDealt) * 100 }))
        .sort((a, b) => b.value - a.value);

    const targets = Object.entries(targetsMap)
        .map(([name, value]) => ({ name, value }))
        .sort((a, b) => b.value - a.value);

    const totalCombat = totalDealt + totalTaken;
    const efficiency = totalCombat > 0 ? Math.round((totalDealt / totalCombat) * 100) : 100;

    return {
        dealt: totalDealt,
        taken: totalTaken,
        healed: healed,
        kills: kills,
        deaths: deaths,
        enslaves: 0,
        duration: durationStr,
        avgDmg: hitCount > 0 ? Math.round((totalDealt / hitCount) * 100) / 100 : 0,
        avgTaken: takenCount > 0 ? Math.round((totalTaken / takenCount) * 100) / 100 : 0,
        efficiency: efficiency,
        damageTypes,
        targets
    };
};


const DamageMeter = ({ onBack, t }: { onBack: () => void, t: any }) => {
  const [activeTab, setActiveTab] = useState<DamageTab>('overview');
  const [logFile, setLogFile] = useState<File | null>(null);
  const [parsedLogs, setParsedLogs] = useState<CombatLogEntry[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [playerName, setPlayerName] = useState<string>('');
  
  // Filters
  const [timeFilter, setTimeFilter] = useState<TimeFilter>('all');
  const [rankingMode, setRankingMode] = useState<RankingType>('dealt');
  const [showGlobalRank, setShowGlobalRank] = useState(false);
  const [globalRankData, setGlobalRankData] = useState<any[]>([]);
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [supabaseInitialized, setSupabaseInitialized] = useState(false);

  useEffect(() => {
     const client = getSupabase();
     setSupabaseInitialized(!!client);
  }, []);

  useEffect(() => {
    if (showGlobalRank && supabaseInitialized) {
       // Fetch global
       fetchGlobalLeaderboard('damage').then(data => setGlobalRankData(data));
    }
  }, [showGlobalRank, supabaseInitialized]);

  const filteredLogs = useMemo(() => {
    if (timeFilter === 'all' || parsedLogs.length === 0) return parsedLogs;
    const maxTime = Math.max(...parsedLogs.map(l => l.timestamp));
    let cutoffTime = 0;
    const ONE_DAY_MS = 24 * 60 * 60 * 1000;

    switch (timeFilter) {
        case 'daily': cutoffTime = maxTime - ONE_DAY_MS; break;
        case 'weekly': cutoffTime = maxTime - (7 * ONE_DAY_MS); break;
        case 'monthly': cutoffTime = maxTime - (30 * ONE_DAY_MS); break;
        default: return parsedLogs;
    }
    return parsedLogs.filter(log => log.timestamp >= cutoffTime);
  }, [parsedLogs, timeFilter]);

  // Use the helper function inside the hook
  const stats = useMemo(() => calculateStats(parsedLogs), [parsedLogs]);

  const handleSubmitScore = async () => {
     if (!playerName || playerName === "Unknown" || !supabaseInitialized) return;
     setSubmissionStatus('loading');
     const res = await submitPlayerStats({
        player_name: playerName,
        damage: stats.dealt,
        kills: stats.kills,
        deaths: stats.deaths
     });
     if (res.success) {
        setSubmissionStatus('success');
        if (showGlobalRank) fetchGlobalLeaderboard('damage').then(setGlobalRankData);
     } else {
        console.error(res.message);
        setSubmissionStatus('error');
     }
     setTimeout(() => setSubmissionStatus('idle'), 3000);
  };

  // Ranking Data filtered (Local)
  const rankingData = useMemo(() => {
      const map: Record<string, number> = {};
      filteredLogs.forEach(log => {
          if (log.isDeath || log.isKill || log.isHeal) return;
          if (rankingMode === 'dealt') {
             if (!log.isIncoming && log.source === 'You') map[log.target] = (map[log.target] || 0) + log.damage;
          } else {
             if (log.isIncoming && log.target === 'You') map[log.source] = (map[log.source] || 0) + log.damage;
          }
      });
      return Object.entries(map)
         .map(([name, value]) => ({ name, value }))
         .sort((a, b) => b.value - a.value);
  }, [filteredLogs, rankingMode]);


  // Chart Logic for Net Damage Over Time
  const chartPoints = useMemo(() => {
     if (filteredLogs.length === 0) return [];
     const sorted = [...filteredLogs].sort((a, b) => a.timestamp - b.timestamp);
     let currentNet = 0;
     const points: { time: number, value: number }[] = [];
     if(sorted.length > 0) points.push({ time: sorted[0].timestamp, value: 0 });

     sorted.forEach(log => {
        if(log.isDeath || log.isKill || log.isHeal || log.damage === 0) return;
        if (log.isIncoming) currentNet -= log.damage;
        else currentNet += log.damage;
        points.push({ time: log.timestamp, value: currentNet });
     });
     return points;
  }, [filteredLogs]);

  const renderChart = () => {
     if (chartPoints.length < 2) {
        return <div className="text-center text-stone-500 py-12 italic">{t.dm_no_data}</div>;
     }
     const width = 800;
     const height = 300;
     const padding = 40;
     const startTime = chartPoints[0].time;
     const endTime = chartPoints[chartPoints.length - 1].time;
     const timeRange = endTime - startTime || 1;
     const values = chartPoints.map(p => p.value);
     const minVal = Math.min(...values, 0);
     const maxVal = Math.max(...values, 0);
     const yBuffer = (maxVal - minVal) * 0.1 || 100;
     const yMin = minVal - yBuffer;
     const yMax = maxVal + yBuffer;
     const yRange = yMax - yMin || 1;

     const getX = (t: number) => padding + ((t - startTime) / timeRange) * (width - 2 * padding);
     const getY = (v: number) => height - padding - ((v - yMin) / yRange) * (height - 2 * padding);
     const zeroY = getY(0);

     let pathD = `M ${getX(chartPoints[0].time)} ${getY(chartPoints[0].value)}`;
     chartPoints.forEach((p) => { pathD += ` L ${getX(p.time)} ${getY(p.value)}`; });

     return (
        <div className="w-full overflow-x-auto">
           <div className="min-w-[600px]">
              <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto font-mono text-[10px]">
                  <line x1={padding} y1={zeroY} x2={width - padding} y2={zeroY} stroke="#44403c" strokeWidth="1" strokeDasharray="4 4" />
                  <line x1={padding} y1={padding} x2={padding} y2={height - padding} stroke="#44403c" strokeWidth="1" />
                  <text x={padding - 5} y={getY(maxVal)} textAnchor="end" fill="#78716c" dy="4">{Math.round(maxVal)}</text>
                  <text x={padding - 5} y={zeroY} textAnchor="end" fill="#78716c" dy="4">0</text>
                  <text x={padding - 5} y={getY(minVal)} textAnchor="end" fill="#78716c" dy="4">{Math.round(minVal)}</text>
                  <path d={pathD} fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <text x={padding} y={height - padding + 15} textAnchor="middle" fill="#78716c">{new Date(startTime).toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'})}</text>
                  <text x={width - padding} y={height - padding + 15} textAnchor="middle" fill="#78716c">{new Date(endTime).toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'})}</text>
                  <text x={width/2} y={padding/2} textAnchor="middle" fill="#a8a29e" className="text-xs uppercase tracking-widest">Net Damage (Dealt - Taken)</text>
              </svg>
           </div>
         </div>
     );
  };

  const tabs: { id: DamageTab, label: string, icon: React.ReactNode }[] = [
    { id: 'overview', label: t.dm_overview, icon: <ActivityIcon /> },
    { id: 'charts', label: t.dm_charts, icon: <BarChartIcon /> },
    { id: 'damage_log', label: t.dm_damage_log, icon: <FileTextIcon /> },
    { id: 'ranking', label: t.dm_ranking, icon: <TrophyIcon /> },
  ];

  const parseLogFile = (text: string) => {
     const lines = text.split('\n');
     const newLogs: CombatLogEntry[] = [];
     let idCounter = 0;
     let lastAttacker = "Unknown"; 
     let pendingDeathWindow = false; 
     let foundName = "";

     lines.forEach(line => {
        const timeMatch = line.match(/^(?:INFO|ECHO) (\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}\.\d{3})/);
        let timestamp = 0;
        if (timeMatch) timestamp = new Date(timeMatch[1]).getTime();

        if (line.includes("InventoryPath =")) {
            const nameMatch = line.match(/InventoryPath\s*=\s*data\/inventory\/([^\/]+)\//);
            if (nameMatch) foundName = nameMatch[1].replace(/_/g, ' ');
        }

        if (line.includes("You have killed")) {
           const killMatch = line.match(/You have killed (.+)/);
           if (killMatch) {
               newLogs.push({
                   id: idCounter++, timestamp, source: 'You', target: killMatch[1].trim(),
                   isIncoming: false, location: 'N/A', damage: 0, damageType: 'Execution', speedBonus: 0, isKill: true
               });
               return;
           }
        }

        if (line.includes('GuiControl("DeathWindow"')) {
            pendingDeathWindow = true;
            return;
        }

        const msgPrefix = "System Chat Message: ";
        const msgIndex = line.indexOf(msgPrefix);
        if (msgIndex === -1) return; 

        let content = line.substring(msgIndex + msgPrefix.length);
        let cleanLine = content.replace(/<[^>]+>/g, '').replace(/color:[A-Fa-f0-9]{6}/g, '').replace(/\s+/g, ' ').trim();

        if (cleanLine.includes("You have successfully cured the patient")) {
           newLogs.push({
               id: idCounter++, timestamp, source: 'You', target: 'Patient', isIncoming: false,
               location: 'N/A', damage: 1, damageType: 'Heal', speedBonus: 0, isHeal: true
           });
           return;
        }

        const dealtMatch = cleanLine.match(/^You have hit (.+?) in (.+?) for ([\d\.]+) of (.+?) damage\. Speed bonus: ([\d\.]+)\.?/);
        if (dealtMatch) {
           newLogs.push({
             id: idCounter++, timestamp, source: 'You', target: dealtMatch[1].trim(), isIncoming: false,
             location: dealtMatch[2].trim(), damage: parseFloat(dealtMatch[3]), damageType: dealtMatch[4].trim(), speedBonus: parseFloat(dealtMatch[5])
           });
           return; 
        }

        const takenMatch = cleanLine.match(/^(.+?) has hit you in (.+?) for ([\d\.]+) of (.+?) damage\. Speed bonus: ([\d\.]+)\.?/);
        if (takenMatch) {
           const source = takenMatch[1].trim();
           lastAttacker = source; 
           newLogs.push({
             id: idCounter++, timestamp, source: source, target: 'You', isIncoming: true,
             location: takenMatch[2].trim(), damage: parseFloat(takenMatch[3]), damageType: takenMatch[4].trim(), speedBonus: parseFloat(takenMatch[5])
           });

           if (pendingDeathWindow) {
                newLogs.push({
                    id: idCounter++, timestamp, source: source, target: 'You', isIncoming: true,
                    location: 'N/A', damage: 0, damageType: 'Death', speedBonus: 0, isDeath: true
                });
                pendingDeathWindow = false; 
                lastAttacker = "Unknown"; 
           }
           return;
        }
     });

     if (foundName) setPlayerName(foundName);
     setParsedLogs(newLogs);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setLogFile(file);
      setIsProcessing(true);
      const reader = new FileReader();
      reader.onload = (e) => {
        const text = e.target?.result;
        if (typeof text === 'string') {
           parseLogFile(text);
        }
        setIsProcessing(false);
      };
      reader.readAsText(file);
    }
  };

  const TimeFilterButtons = () => (
    <div className="flex items-center bg-stone-950/50 rounded-lg p-1 border border-stone-800">
        {(['all', 'daily', 'weekly', 'monthly'] as TimeFilter[]).map((tf) => (
            <button
                key={tf}
                onClick={() => setTimeFilter(tf)}
                className={`px-3 py-1 rounded text-xs font-bold uppercase transition-colors ${timeFilter === tf ? 'bg-amber-700 text-stone-100 shadow-sm' : 'text-stone-500 hover:text-amber-500 hover:bg-stone-800'}`}
            >
                {tf === 'all' ? 'All Time' : tf.charAt(0).toUpperCase() + tf.slice(1)}
            </button>
        ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-stone-950 text-stone-200 flex flex-col relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-900 to-transparent"></div>
      <div className="absolute inset-0 bg-[url('https://cdn.ltg.com/lif/images/arden/lif-arden-bg-hero1.jpg')] bg-cover bg-center bg-fixed opacity-10 pointer-events-none"></div>
      
      {/* Header */}
      <header className="bg-stone-950/90 backdrop-blur-lg border-b border-stone-800 sticky top-0 z-50 px-4 h-16 flex items-center justify-between">
         <div className="flex items-center gap-4">
            <button onClick={onBack} className="flex items-center gap-2 text-stone-500 hover:text-amber-500 transition-colors p-2 rounded hover:bg-stone-900"><ChevronLeftIcon /></button>
            <div className="flex items-center gap-3">
                <div className="text-amber-500"><SwordIcon /></div>
                <h1 className="text-xl font-serif font-bold text-stone-200">
                    {t.quality_calc} {playerName ? <span className="text-amber-500 ml-2">- {playerName}</span> : ''}
                </h1>
            </div>
         </div>
      </header>

      {/* Tab Navigation & Upload */}
      <div className="bg-stone-900/60 border-b border-stone-800">
         <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-between gap-4">
            <div className="flex space-x-4 overflow-x-auto no-scrollbar flex-1">
               {tabs.map((tab) => (
                 <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`flex items-center gap-2 py-4 px-2 border-b-2 transition-colors whitespace-nowrap ${activeTab === tab.id ? 'border-amber-500 text-amber-500' : 'border-transparent text-stone-500 hover:text-stone-300 hover:border-stone-700'}`}>
                    {tab.icon}<span className="text-sm font-bold uppercase tracking-wide">{tab.label}</span>
                 </button>
               ))}
            </div>
            <div className="relative group py-2">
               <input type="file" accept=".log,.txt" id="log-upload" className="hidden" onChange={handleFileUpload} />
               <label htmlFor="log-upload" className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all cursor-pointer text-xs font-bold uppercase tracking-wider ${logFile ? 'bg-green-900/30 border-green-700 text-green-400 hover:bg-green-900/50' : 'bg-stone-800 border-stone-700 text-stone-400 hover:bg-stone-700 hover:text-stone-200 hover:border-amber-500/50'}`}>
                 {isProcessing ? <span className="animate-pulse">Processing...</span> : <>{logFile ? <FileCheckIcon /> : <UploadCloudIcon />}<span className="truncate max-w-[150px]">{logFile ? logFile.name : t.load_log_file}</span></>}
               </label>
               <div className="absolute right-0 top-full mt-2 w-72 p-3 bg-stone-950 border border-stone-800 text-stone-400 text-[10px] rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
                  <div className="mb-1 font-bold text-stone-300">{t.log_path_hint}</div>
                  <div className="text-amber-500/80 break-all font-mono bg-stone-900 p-1 rounded border border-stone-800">\Life is Feudal Arden\default\game\game\eu2\logs\</div>
               </div>
            </div>
         </div>
      </div>

      {/* Content Area */}
      <main className="flex-1 p-4 sm:p-6 max-w-7xl mx-auto w-full">
         
         {activeTab === 'overview' && (
           <div className="space-y-6 animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                 <div className="bg-stone-900/60 border border-stone-800 p-6 rounded-xl flex items-center gap-4 hover:border-amber-800/50 transition-colors">
                    <div className="p-4 bg-red-900/20 text-red-500 rounded-lg"><SwordIcon /></div>
                    <div>
                       <h3 className="text-xs font-bold text-stone-500 uppercase tracking-wider">{t.total_damage_dealt}</h3>
                       <p className="text-3xl font-serif font-bold text-stone-200">{stats.dealt.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 2 })}</p>
                    </div>
                 </div>
                 <div className="bg-stone-900/60 border border-stone-800 p-6 rounded-xl flex items-center gap-4 hover:border-amber-800/50 transition-colors">
                    <div className="p-4 bg-blue-900/20 text-blue-500 rounded-lg"><ShieldIcon /></div>
                    <div>
                       <h3 className="text-xs font-bold text-stone-500 uppercase tracking-wider">{t.total_damage_taken}</h3>
                       <p className="text-3xl font-serif font-bold text-stone-200">{stats.taken.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 2 })}</p>
                    </div>
                 </div>
                 <div className="bg-stone-900/60 border border-stone-800 p-6 rounded-xl flex items-center gap-4 hover:border-amber-800/50 transition-colors opacity-80">
                    <div className="p-4 bg-green-900/20 text-green-500 rounded-lg"><HeartIcon /></div>
                    <div>
                       <h3 className="text-xs font-bold text-stone-500 uppercase tracking-wider">{t.total_healing_done}</h3>
                       <p className="text-3xl font-serif font-bold text-stone-200">{stats.healed.toLocaleString()}</p>
                    </div>
                 </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                 <div className="bg-stone-900/40 border border-stone-800 p-4 rounded-lg flex flex-col items-center justify-center hover:bg-stone-900 transition-colors">
                    <div className={`mb-1 ${stats.kills > 0 ? 'text-amber-500' : 'text-stone-500'}`}><SkullIcon /></div>
                    <span className="text-2xl font-bold text-stone-200">{stats.kills}</span>
                    <span className="text-[10px] text-stone-500 uppercase">{t.kills}</span>
                 </div>
                 <div className="bg-stone-900/40 border border-stone-800 p-4 rounded-lg flex flex-col items-center justify-center hover:bg-stone-900 transition-colors">
                    <div className={`mb-1 ${stats.deaths > 0 ? 'text-red-600' : 'text-stone-500'}`}><SkullIcon /></div>
                    <span className="text-2xl font-bold text-stone-200">{stats.deaths}</span>
                    <span className="text-[10px] text-stone-500 uppercase">{t.deaths}</span>
                 </div>
                 <div className="bg-stone-900/40 border border-stone-800 p-4 rounded-lg flex flex-col items-center justify-center hover:bg-stone-900 transition-colors opacity-50">
                    <div className="text-amber-500 mb-1"><CrosshairIcon /></div>
                    <span className="text-2xl font-bold text-stone-200">{stats.enslaves}</span>
                    <span className="text-[10px] text-stone-500 uppercase">{t.enslaves}</span>
                 </div>
                 <div className="bg-stone-900/40 border border-stone-800 p-4 rounded-lg flex flex-col items-center justify-center hover:bg-stone-900 transition-colors">
                    <div className="text-blue-400 mb-1"><ClockIcon /></div>
                    <span className="text-2xl font-bold text-stone-200 font-mono">{stats.duration}</span>
                    <span className="text-[10px] text-stone-500 uppercase">{t.combat_duration}</span>
                 </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                 <div className="bg-stone-900/60 border border-stone-800 rounded-xl p-6">
                    <h3 className="text-lg font-serif font-bold text-amber-500 mb-6 flex items-center gap-2"><TargetIcon /> {t.combat_efficiency}</h3>
                    <div className="space-y-6">
                       <div className="flex justify-between items-center border-b border-stone-800 pb-3"><span className="text-sm text-stone-400">{t.avg_dmg_hit}</span><span className="text-xl font-bold text-stone-200">{stats.avgDmg}</span></div>
                       <div className="flex justify-between items-center border-b border-stone-800 pb-3"><span className="text-sm text-stone-400">{t.avg_taken_hit}</span><span className="text-xl font-bold text-stone-200">{stats.avgTaken}</span></div>
                       <div className="flex justify-between items-center pt-2"><span className="text-sm text-stone-400">{t.efficiency_ratio}</span><span className={`text-2xl font-bold ${stats.efficiency >= 50 ? 'text-green-500' : 'text-red-500'}`}>{stats.efficiency}%</span></div>
                       <div className="w-full h-2 bg-stone-800 rounded-full overflow-hidden flex"><div className="h-full bg-green-600" style={{ width: `${stats.efficiency}%` }}></div><div className="h-full bg-red-900/50 flex-1"></div></div>
                    </div>
                 </div>
                 <div className="bg-stone-900/60 border border-stone-800 rounded-xl p-6">
                    <h3 className="text-lg font-serif font-bold text-amber-500 mb-6 flex items-center gap-2"><ZapIcon /> {t.damage_type_used}</h3>
                    <div className="space-y-4">
                      {stats.damageTypes.length > 0 ? stats.damageTypes.map((dt, idx) => (
                        <div key={idx}>
                          <div className="flex justify-between text-xs mb-1"><span className="text-stone-300 capitalize">{dt.type}</span><span className="text-stone-500">{dt.value.toFixed(1)}%</span></div>
                          <div className="w-full h-2 bg-stone-800 rounded-full overflow-hidden"><div className="h-full bg-amber-600/80" style={{ width: `${dt.value}%` }}></div></div>
                        </div>
                      )) : <p className="text-sm text-stone-500 italic">No outgoing damage dealt yet.</p>}
                    </div>
                 </div>
              </div>
           </div>
         )}

         {activeTab === 'charts' && (
            <div className="bg-stone-900/60 border border-stone-800 rounded-xl p-6 animate-fade-in">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-2xl font-serif font-bold text-stone-200">Net Damage Flow</h3>
                    <TimeFilterButtons />
                </div>
                <div className="w-full bg-stone-950/50 rounded-lg p-4 border border-stone-800 overflow-hidden">{renderChart()}</div>
            </div>
         )}

         {activeTab === 'ranking' && (
            <div className="bg-stone-900/60 border border-stone-800 rounded-xl overflow-hidden animate-fade-in">
                <div className="bg-stone-950/50 p-4 border-b border-stone-800 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-2">
                         <div className="flex bg-stone-900 rounded-lg p-1 border border-stone-800">
                            <button 
                                onClick={() => setShowGlobalRank(false)}
                                className={`px-4 py-1.5 rounded-md text-xs font-bold uppercase transition-all ${!showGlobalRank ? 'bg-amber-600 text-white shadow' : 'text-stone-500 hover:text-stone-300'}`}
                            >
                                {t.local_ranking}
                            </button>
                            <button 
                                onClick={() => setShowGlobalRank(true)}
                                className={`px-4 py-1.5 rounded-md text-xs font-bold uppercase transition-all flex items-center gap-2 ${showGlobalRank ? 'bg-amber-600 text-white shadow' : 'text-stone-500 hover:text-stone-300'}`}
                            >
                                <GlobeIcon /> {t.global_ranking}
                            </button>
                         </div>
                    </div>

                    {!showGlobalRank && (
                        <div className="flex items-center gap-2">
                             <button 
                                 onClick={() => setRankingMode('dealt')}
                                 className={`px-3 py-1 rounded-l-lg border border-r-0 text-sm font-bold uppercase ${rankingMode === 'dealt' ? 'bg-amber-600 border-amber-600 text-white' : 'border-stone-700 text-stone-500 hover:text-stone-300'}`}
                             >
                                 {t.ranking_dealt}
                             </button>
                             <button 
                                 onClick={() => setRankingMode('taken')}
                                 className={`px-3 py-1 rounded-r-lg border text-sm font-bold uppercase ${rankingMode === 'taken' ? 'bg-red-700 border-red-700 text-white' : 'border-stone-700 text-stone-500 hover:text-stone-300'}`}
                             >
                                 {t.ranking_taken}
                             </button>
                        </div>
                    )}
                    
                    {!showGlobalRank && <TimeFilterButtons />}

                    {/* Submit Score Button (Visible even in Global view if player has data) */}
                    {playerName && stats.dealt > 0 && supabaseInitialized && (
                        <div className="flex items-center gap-2">
                            <button 
                                onClick={handleSubmitScore}
                                disabled={submissionStatus === 'loading' || submissionStatus === 'success'}
                                className={`px-4 py-1.5 rounded-lg border text-xs font-bold uppercase flex items-center gap-2 transition-all ${
                                    submissionStatus === 'success' ? 'bg-green-600 border-green-600 text-white' :
                                    submissionStatus === 'error' ? 'bg-red-600 border-red-600 text-white' :
                                    'bg-stone-800 border-stone-600 text-stone-300 hover:bg-stone-700 hover:border-amber-500'
                                }`}
                                title={t.submit_best_score}
                            >
                                {submissionStatus === 'loading' ? '...' : 
                                 submissionStatus === 'success' ? t.score_submitted :
                                 submissionStatus === 'error' ? t.submit_fail :
                                 t.submit_score}
                            </button>
                        </div>
                    )}
                </div>
                
                {/* Rankings Render */}
                {!showGlobalRank ? (
                    // LOCAL
                    <>
                        {rankingData.length > 0 ? (
                        <div className="divide-y divide-stone-800">
                            {rankingData.map((item, idx) => (
                                <div key={idx} className="p-4 flex items-center justify-between hover:bg-stone-800/30 transition-colors">
                                    <div className="flex items-center gap-4">
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-stone-200 shadow-inner ${idx < 3 ? 'bg-amber-600/50 text-amber-200 border border-amber-500/50' : 'bg-stone-800 text-stone-500'}`}>
                                        {idx + 1}
                                        </div>
                                        <span className="text-stone-200 font-bold">{item.name}</span>
                                    </div>
                                    <span className={`font-mono font-bold ${rankingMode === 'dealt' ? 'text-amber-500' : 'text-red-500'}`}>{item.value.toFixed(2)}</span>
                                </div>
                            ))}
                        </div>
                        ) : <div className="text-center text-stone-500 py-12">{t.dm_no_data}</div>}
                    </>
                ) : (
                    // GLOBAL
                    <>
                         {!supabaseInitialized ? (
                             <div className="text-center py-12 flex flex-col items-center gap-4">
                                <h3 className="text-lg font-bold text-stone-300">{t.db_disconnected}</h3>
                                <p className="text-sm text-stone-500 max-w-md">{t.config_help}</p>
                             </div>
                         ) : (
                             globalRankData.length > 0 ? (
                                <div className="divide-y divide-stone-800">
                                    <div className="bg-stone-950/30 px-4 py-2 flex justify-between text-[10px] uppercase text-stone-500 font-bold tracking-widest">
                                        <span>Player</span>
                                        <div className="flex gap-8">
                                            <span className="w-20 text-right">Kills</span>
                                            <span className="w-24 text-right">Damage</span>
                                        </div>
                                    </div>
                                    {globalRankData.map((item, idx) => (
                                        <div key={idx} className={`p-4 flex items-center justify-between hover:bg-stone-800/30 transition-colors ${item.player_name === playerName ? 'bg-amber-900/10 border-l-2 border-amber-500' : ''}`}>
                                            <div className="flex items-center gap-4">
                                                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-stone-200 shadow-inner ${idx < 3 ? 'bg-amber-600/50 text-amber-200 border border-amber-500/50' : 'bg-stone-800 text-stone-500'}`}>
                                                {idx + 1}
                                                </div>
                                                <span className="text-stone-200 font-bold">{item.player_name}</span>
                                            </div>
                                            <div className="flex gap-8 font-mono">
                                                <span className="w-20 text-right text-stone-400">{item.kills}</span>
                                                <span className="w-24 text-right text-amber-500 font-bold">{Number(item.damage).toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                             ) : <div className="text-center text-stone-500 py-12 flex items-center justify-center gap-2"><span className="animate-spin text-amber-500">O</span> Loading...</div>
                         )}
                    </>
                )}
            </div>
         )}
         
         {(activeTab === 'damage_log' || activeTab === 'combat_log') && (
           <div className="bg-stone-900/40 border border-stone-800 rounded-xl min-h-[400px] animate-fade-in flex flex-col">
               <div className="overflow-x-auto custom-scrollbar">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-stone-950/80 text-stone-400 uppercase tracking-wider text-xs font-medium">
                       <tr><th className="px-4 py-3">Time</th><th className="px-4 py-3">Source</th><th className="px-4 py-3">Target</th><th className="px-4 py-3">Location</th><th className="px-4 py-3 text-right">Damage</th><th className="px-4 py-3">Type</th><th className="px-4 py-3 text-right">Bonus</th></tr>
                    </thead>
                    <tbody className="divide-y divide-stone-800">
                      {parsedLogs.length > 0 ? parsedLogs.map((log) => (
                        <tr key={log.id} className={`hover:bg-stone-800/50 transition-colors group ${log.isDeath ? 'bg-red-950/40 border-l-4 border-red-600' : log.isKill ? 'bg-amber-950/40 border-l-4 border-amber-500' : log.isHeal ? 'bg-green-950/40 border-l-4 border-green-500' : log.isIncoming ? 'bg-red-950/10' : ''}`}>
                           <td className="px-4 py-3 text-stone-500 font-mono whitespace-nowrap text-xs">{log.timestamp ? new Date(log.timestamp).toLocaleString() : '-'}</td>
                           <td className={`px-4 py-3 font-bold ${log.isDeath ? 'text-stone-200' : log.isKill ? 'text-amber-500' : log.isHeal ? 'text-green-500' : log.isIncoming ? 'text-red-400' : 'text-green-400'}`}>{log.isDeath && <span className="inline-block mr-2 text-red-500"><SkullIcon /></span>}{log.isKill && <span className="inline-block mr-2 text-amber-500"><TrophyIcon /></span>}{log.isHeal && <span className="inline-block mr-2 text-green-500"><HeartIcon /></span>}{log.source}</td>
                           <td className="px-4 py-3 text-stone-300">{log.target}</td>
                           <td className="px-4 py-3 text-stone-400 capitalize">{log.location}</td>
                           <td className={`px-4 py-3 text-right font-bold font-mono ${log.isIncoming || log.isDeath ? 'text-red-500' : log.isKill ? 'text-amber-500' : log.isHeal ? 'text-green-500' : 'text-amber-500 group-hover:text-amber-400'}`}>{log.isDeath ? 'DIED' : log.isKill ? 'KILL' : log.isHeal ? 'HEAL' : log.damage}</td>
                           <td className="px-4 py-3 text-stone-400 capitalize">{log.damageType}</td>
                           <td className="px-4 py-3 text-right text-stone-500 font-mono">{log.speedBonus}</td>
                        </tr>
                      )) : <tr><td colSpan={7} className="px-4 py-12 text-center text-stone-500 italic">{t.dm_no_data}</td></tr>}
                    </tbody>
                  </table>
               </div>
           </div>
         )}
      </main>
    </div>
  );
};

const App = () => {
  const [language, setLanguage] = useState<Language>('en');
  const [view, setView] = useState<View>('landing');
  const [selectedCraftType, setSelectedCraftType] = useState<CraftType | null>(null);
  const [selectedProfessionGroup, setSelectedProfessionGroup] = useState<string | null>(null);
  const [skillLevel, setSkillLevel] = useState<0 | 30 | 60 | 90 | 100>(0);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  const t = TRANSLATIONS[language];

  const handleProfessionSelect = (type: CraftType, group: string) => {
    setSelectedCraftType(type);
    setSelectedProfessionGroup(group);
    setSkillLevel(0);
    setSelectedRecipe(null);
    setQuantity(1);
    setSearchQuery('');
    setView('crafting');
  };

  const filteredRecipes = useMemo(() => {
    if (!selectedCraftType) return [];
    let recipes = STATIC_RECIPES.filter(r => r.type === selectedCraftType && r.skillLevel === skillLevel);
    if (searchQuery) {
       const lowerQ = searchQuery.toLowerCase();
       recipes = STATIC_RECIPES.filter(r => r.type === selectedCraftType && (r.name.toLowerCase().includes(lowerQ) || translateItem(r.name, language).toLowerCase().includes(lowerQ)));
    }
    return recipes;
  }, [selectedCraftType, skillLevel, searchQuery, language]);

  const calculationResult = useMemo<CalculationResult | null>(() => {
    if (!selectedRecipe) return null;
    return {
      itemName: selectedRecipe.name,
      quantity: quantity,
      totalIngredients: selectedRecipe.ingredients.map(ing => ({ name: ing.name, amount: ing.amount * quantity, unit: ing.unit }))
    };
  }, [selectedRecipe, quantity]);

  return (
    <div className="min-h-screen bg-stone-950 text-stone-300 font-sans selection:bg-amber-500/30">
      {view === 'landing' && <LandingPage onNavigate={setView} language={language} setLanguage={setLanguage} />}
      {view === 'profession-select' && <ProfessionSelection onSelect={handleProfessionSelect} onBack={() => setView('landing')} t={t} />}
      {view === 'quality' && <DamageMeter onBack={() => setView('landing')} t={t} />}
      {view === 'crafting' && (
        <div className="flex flex-col h-screen overflow-hidden animate-fade-in">
           <header className="bg-stone-950/80 backdrop-blur border-b border-stone-800 p-4 flex items-center justify-between z-10">
              <div className="flex items-center gap-4">
                 <button onClick={() => setView('profession-select')} className="p-2 hover:bg-stone-900 rounded text-stone-500 hover:text-amber-500 transition-colors"><ChevronLeftIcon /></button>
                 <div><h1 className="text-xl font-serif font-bold text-amber-500 leading-none">{selectedCraftType ? t[selectedCraftType.toLowerCase() as keyof typeof t] || selectedCraftType : ''}</h1><p className="text-[10px] text-stone-500 uppercase tracking-widest">{t.crafting_tools}</p></div>
              </div>
              <div className="flex items-center gap-4">
                 <div className="relative">
                    <input type="text" placeholder={t.search_placeholder} value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="bg-stone-900 border border-stone-800 rounded-full py-1.5 px-4 pl-10 text-sm focus:outline-none focus:border-amber-600 w-40 sm:w-64 transition-all" />
                    <div className="absolute left-3 top-2 text-stone-600"><SearchIcon /></div>
                 </div>
              </div>
           </header>
           <div className="flex flex-1 overflow-hidden">
              <aside className="w-80 bg-stone-900/30 border-r border-stone-800 flex flex-col hidden md:flex">
                 <div className="flex border-b border-stone-800">{SKILL_LEVELS.map(lvl => (<button key={lvl} onClick={() => { setSkillLevel(lvl as any); setSearchQuery(''); }} className={`flex-1 py-3 text-center text-xs font-bold transition-colors border-b-2 ${skillLevel === lvl ? 'border-amber-500 text-amber-500 bg-stone-800/50' : 'border-transparent text-stone-500 hover:text-stone-300 hover:bg-stone-800/30'}`}>{lvl}</button>))}</div>
                 <div className="flex-1 overflow-y-auto custom-scrollbar p-2 space-y-1">
                    {filteredRecipes.length > 0 ? filteredRecipes.map(recipe => (
                       <button key={recipe.id} onClick={() => setSelectedRecipe(recipe)} className={`w-full text-left p-3 rounded-lg transition-all border ${selectedRecipe?.id === recipe.id ? 'bg-stone-800 border-amber-600/50 shadow-md' : 'bg-transparent border-transparent hover:bg-stone-800/50 text-stone-400 hover:text-stone-200'}`}>
                          <div className="flex items-center justify-between"><span className={`text-sm font-medium ${selectedRecipe?.id === recipe.id ? 'text-amber-500' : ''}`}>{translateItem(recipe.name, language)}</span></div>
                       </button>
                    )) : <div className="p-8 text-center text-stone-500 text-sm italic">{searchQuery ? 'No recipes found' : t.no_recipe_level}</div>}
                 </div>
              </aside>
              <main className="flex-1 bg-stone-950 p-4 sm:p-6 overflow-y-auto">
                 <div className="max-w-3xl mx-auto flex flex-col h-full">
                    {selectedRecipe && (
                       <div className="mb-6 bg-stone-900/60 border border-stone-800 rounded-xl p-4 flex items-center justify-between backdrop-blur-sm animate-slide-up">
                          <span className="text-stone-400 font-medium text-sm uppercase tracking-wide">{t.craft_count}</span>
                          <div className="flex items-center gap-4 bg-stone-950 rounded-lg p-1 border border-stone-800">
                             <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-8 h-8 flex items-center justify-center text-stone-500 hover:text-amber-500 hover:bg-stone-800 rounded transition-colors">-</button>
                             <span className="w-12 text-center font-mono font-bold text-lg text-stone-200">{quantity}</span>
                             <button onClick={() => setQuantity(quantity + 1)} className="w-8 h-8 flex items-center justify-center text-stone-500 hover:text-amber-500 hover:bg-stone-800 rounded transition-colors">+</button>
                          </div>
                       </div>
                    )}
                    <div className="flex-1"><MaterialList result={calculationResult} t={t} language={language} /></div>
                 </div>
              </main>
           </div>
        </div>
      )}
    </div>
  );
};

export default App;
