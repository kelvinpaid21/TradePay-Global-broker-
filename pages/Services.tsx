
import React from 'react';
import { SERVICES_LIST } from '../constants';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-amber-500 text-sm font-bold uppercase tracking-[0.2em] mb-4">Solutions for Success</h2>
          <h1 className="text-4xl md:text-6xl font-bold font-serif mb-8">Professional <span className="text-gold">Services</span></h1>
          <p className="text-slate-400 text-xl">We provide the bridge between amateur interest and professional execution through our specialized service tiers.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {SERVICES_LIST.map((service, i) => (
            <div key={i} className="group p-10 bg-slate-900 rounded-[2.5rem] border border-slate-800 hover:border-amber-500/50 transition-all flex flex-col justify-between overflow-hidden relative">
              <div className="absolute top-0 right-0 w-40 h-40 bg-amber-500/5 blur-[60px] group-hover:bg-amber-500/10 transition-colors"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-slate-800 flex items-center justify-center text-amber-500 mb-8 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-slate-400 text-lg leading-relaxed mb-8">{service.description}</p>
                <ul className="space-y-3 mb-10 text-slate-300">
                   <li className="flex items-center text-sm"><ChevronRight className="w-4 h-4 mr-2 text-amber-500" /> Professional Grade Content</li>
                   <li className="flex items-center text-sm"><ChevronRight className="w-4 h-4 mr-2 text-amber-500" /> One-on-One Interaction</li>
                   <li className="flex items-center text-sm"><ChevronRight className="w-4 h-4 mr-2 text-amber-500" /> Real-world Application Cases</li>
                </ul>
              </div>
              <Link to="/contact" className="relative z-10 flex items-center font-bold text-amber-500 group-hover:translate-x-2 transition-transform">
                Learn More <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          ))}
        </div>

        {/* Comparison/Plan Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Choose Your Path</h2>
          <p className="text-slate-400">Select the level of engagement that fits your current trading journey.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: 'Apprentice', price: 'FREE', features: ['Daily Market Wrap', 'Educational Blog', 'Basic Risk Tools', 'Community Chat'], cta: 'Join Community' },
            { name: 'Elite', price: '$99/mo', features: ['Real-time Signals', 'Weekly Webinar', 'Priority Support', 'Portfolio Analysis', 'Advanced Toolset'], popular: true, cta: 'Get Started' },
            { name: 'Institutional', price: 'Custom', features: ['1-on-1 Mentorship', 'Proprietary Algos', 'Dedicated Analyst', 'Risk Infrastructure', 'Custom Integration'], cta: 'Inquire Now' },
          ].map((plan, i) => (
            <div key={i} className={`p-10 rounded-[2.5rem] border ${plan.popular ? 'bg-slate-900 border-amber-500 shadow-[0_0_40px_rgba(212,175,55,0.1)]' : 'bg-slate-900/50 border-slate-800'} relative`}>
              {plan.popular && <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-500 text-slate-950 text-[10px] font-black uppercase px-4 py-1 rounded-full">Most Selected</div>}
              <h4 className="text-2xl font-bold mb-2">{plan.name}</h4>
              <div className="text-4xl font-black mb-8">{plan.price}</div>
              <ul className="space-y-4 mb-10 text-sm text-slate-400">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-3 text-amber-500" /> {f}</li>
                ))}
              </ul>
              <button className={`w-full py-4 rounded-xl font-bold transition-all ${plan.popular ? 'gold-gradient text-slate-950 shadow-xl' : 'bg-slate-800 text-white hover:bg-slate-700'}`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

import { CheckCircle2 } from 'lucide-react';
export default Services;
