
import React from 'react';
import { UserPlus, BookOpen, LineChart, TrendingUp } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      title: 'Initialize Your Account',
      description: 'Create your professional profile on TradePay Global. Our onboarding process ensures we understand your current experience level and risk tolerance.',
      icon: <UserPlus className="w-12 h-12" />
    },
    {
      title: 'Strategic Education',
      description: 'Access our core curriculum. Whether you are learning about pips or complex algorithmic hedging, we provide the theoretical foundation first.',
      icon: <BookOpen className="w-12 h-12" />
    },
    {
      title: 'Analyze & Apply',
      description: 'Utilize our market signals and real-time analysis tools to identify high-probability setups across multiple asset classes.',
      icon: <LineChart className="w-12 h-12" />
    },
    {
      title: 'Iterate & Scale',
      description: 'Use our portfolio management tools to review your performance. Refine your edge, manage your risk, and scale your capital over time.',
      icon: <TrendingUp className="w-12 h-12" />
    }
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-amber-500 text-sm font-bold uppercase tracking-[0.2em] mb-4">Our Process</h2>
          <h1 className="text-4xl md:text-6xl font-bold font-serif mb-8">From Onboarding <br /> To <span className="text-gold">Execution</span></h1>
          <p className="text-slate-400 text-xl leading-relaxed">
            We follow a structured 4-step framework designed to turn market noise into actionable intelligence.
          </p>
        </div>

        <div className="relative">
          {/* Vertical line for desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-800 -translate-x-1/2"></div>
          
          <div className="space-y-24">
            {steps.map((step, i) => (
              <div key={i} className={`flex flex-col lg:flex-row items-center ${i % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
                <div className="w-full lg:w-1/2 p-8 lg:p-12">
                  <div className={`flex flex-col ${i % 2 === 0 ? 'lg:items-end lg:text-right' : 'lg:items-start lg:text-left'} items-center text-center`}>
                    <div className="w-16 h-16 rounded-full gold-gradient text-slate-950 flex items-center justify-center font-black text-2xl mb-8 shadow-xl">
                      0{i + 1}
                    </div>
                    <h3 className="text-3xl font-bold mb-4">{step.title}</h3>
                    <p className="text-slate-400 text-lg leading-relaxed max-w-md">
                      {step.description}
                    </p>
                  </div>
                </div>
                <div className="w-full lg:w-1/2 flex justify-center p-8">
                  <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-3xl bg-slate-900 border border-slate-800 flex items-center justify-center text-amber-500 transform hover:rotate-3 hover:scale-105 transition-all duration-500">
                    {/* Fixed type error in cloneElement by casting to React.ReactElement<any> */}
                    {React.cloneElement(step.icon as React.ReactElement<any>, { className: 'w-24 h-24 lg:w-32 lg:h-32 opacity-20 absolute' })}
                    <div className="relative z-10 text-amber-500">
                      {step.icon}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-32 p-12 bg-slate-900/50 rounded-[3rem] border border-slate-800 text-center">
          <h3 className="text-3xl font-bold mb-6">Ready to take the first step?</h3>
          <p className="text-slate-400 mb-10 max-w-2xl mx-auto italic">"The best time to start learning the markets was 10 years ago. The second best time is today."</p>
          <button className="px-12 py-5 gold-gradient text-slate-950 rounded-full font-bold text-xl shadow-xl hover:scale-105 transition-transform">
            Create Free Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
