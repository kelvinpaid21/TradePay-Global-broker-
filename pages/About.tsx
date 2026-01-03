
import React from 'react';
/* Added Award to the lucide-react imports */
import { Target, Eye, ShieldCheck, Users, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold font-serif mb-8">Redefining Trading <span className="text-gold">Standards</span></h1>
          <p className="text-slate-400 text-xl leading-relaxed">
            TradePay Global was founded on the principle that transparency and elite education should be accessible to all dedicated market participants.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold border-l-4 border-amber-500 pl-6">Our Mission</h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              To empower a global community of traders with the psychological fortitude, strategic knowledge, and technical tools required to achieve long-term portfolio growth in ever-changing market conditions.
            </p>
            <div className="flex items-center space-x-4 text-amber-500">
              <Target className="w-8 h-8" />
              <span className="font-bold tracking-widest text-sm uppercase">Precision Execution</span>
            </div>
          </div>
          <div className="space-y-8">
            <h2 className="text-3xl font-bold border-l-4 border-blue-500 pl-6">Our Vision</h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              To become the world's most trusted ecosystem for trading education, where data-driven analysis and ethical practices form the foundation of every trade.
            </p>
            <div className="flex items-center space-x-4 text-blue-500">
              <Eye className="w-8 h-8" />
              <span className="font-bold tracking-widest text-sm uppercase">Forward Momentum</span>
            </div>
          </div>
        </div>

        <div className="bg-slate-900/50 rounded-[2rem] p-12 border border-slate-800 mb-24">
          <h3 className="text-center text-2xl font-bold mb-12">The Pillars of TradePay Global</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: 'Transparency', desc: 'We believe in showing the math. Our signals and analysis are backed by verifiable data and logical frameworks.', icon: <ShieldCheck className="w-10 h-10 text-emerald-500" /> },
              { title: 'Education First', desc: 'No shortcuts. We focus on building a deep understanding of market mechanics and order flow.', icon: <Users className="w-10 h-10 text-amber-500" /> },
              { title: 'Longevity', desc: 'Trading is a marathon. We prioritize capital preservation and consistent, sustainable strategies.', icon: <Award className="w-10 h-10 text-blue-500" /> },
            ].map((p, i) => (
              <div key={i} className="text-center space-y-4">
                <div className="mx-auto flex justify-center mb-6">{p.icon}</div>
                <h4 className="text-xl font-bold">{p.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-12">Our Core Expertise</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {['Quantitative Analysis', 'Macroeconomic Research', 'Algorithmic Strategy', 'Risk Assessment', 'Market Psychology', 'Capital Allocation'].map((skill, i) => (
              <span key={i} className="px-6 py-3 bg-slate-900 border border-slate-800 rounded-full text-slate-300 text-sm font-medium">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
