
import React from 'react';
import { MARKET_DATA } from '../constants';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

const MarketTicker: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 h-12 bg-slate-900 border-b border-slate-800 overflow-hidden flex items-center">
      <div className="animate-ticker">
        {[...MARKET_DATA, ...MARKET_DATA].map((item, idx) => (
          <div key={idx} className="flex items-center space-x-6 px-8 border-r border-slate-800 h-full">
            <span className="text-xs font-bold text-slate-400 whitespace-nowrap">{item.symbol}</span>
            <span className="text-sm font-semibold whitespace-nowrap">${item.price}</span>
            <span className={`text-xs font-bold flex items-center whitespace-nowrap ${item.isPositive ? 'text-emerald-400' : 'text-rose-400'}`}>
              {item.isPositive ? <ArrowUpRight className="w-3 h-3 mr-0.5" /> : <ArrowDownRight className="w-3 h-3 mr-0.5" />}
              {item.change}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketTicker;
