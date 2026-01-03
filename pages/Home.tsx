
import React, { useState, useEffect } from 'react';
import { ChevronRight, Play, CheckCircle2, Award, Zap, Target, Globe, ArrowDown, Monitor, Check, Users, BarChart3, Banknote, ExternalLink, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FEATURES, MARKET_DATA, INVESTMENT_PLANS, HELP_REASONS, COIN_MARKET_DATA } from '../constants';
import LiveChart from '../components/LiveChart';
import { GoogleGenAI } from "@google/genai";

interface LiveCoinData {
  name: string;
  symbol: string;
  price: string;
  mktCap: string;
  change24h: string;
  isPositive: boolean;
  color: string;
}

const Home: React.FC = () => {
  const [liveCoins, setLiveCoins] = useState<LiveCoinData[]>([]);
  const [loading, setLoading] = useState(true);
  const [sources, setSources] = useState<{ web: { uri: string; title: string } }[]>([]);

  const fetchLiveMarketData = async () => {
    setLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const prompt = `Provide the current price, market capitalization, and 24-hour percentage change for these cryptocurrencies: Bitcoin, Ethereum, Tether, XRP, BNB, Solana, TRON, Dogecoin, Cardano, Bitcoin Cash. 
      Format the output clearly as a list where each line is: CoinName | Symbol | Price | MarketCap | Change24h. 
      Example: Bitcoin | BTC | $65,000 | $1.2T | +2.5%`;

      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: prompt,
        config: {
          tools: [{ googleSearch: {} }],
        },
      });

      const text = response.text || "";
      const groundingChunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
      setSources(groundingChunks as any);

      // Parse the text response
      const lines = text.split('\n').filter(line => line.includes('|'));
      if (lines.length > 0) {
        const parsedData: LiveCoinData[] = lines.map(line => {
          const parts = line.split('|').map(p => p.trim());
          const name = parts[0] || "Unknown";
          const symbol = parts[1] || "";
          const price = parts[2] || "N/A";
          const mktCap = parts[3] || "N/A";
          const changeStr = parts[4] || "0%";
          const isPositive = changeStr.includes('+');

          // Find original color from constants if possible
          const original = COIN_MARKET_DATA.find(c => c.name.toLowerCase() === name.toLowerCase() || c.symbol === symbol);
          
          return {
            name,
            symbol,
            price,
            mktCap,
            change24h: changeStr,
            isPositive,
            color: original?.color || '#3b82f6'
          };
        });
        setLiveCoins(parsedData);
      } else {
        // Fallback to static if parsing fails
        setLiveCoins(COIN_MARKET_DATA.map(c => ({
          ...c,
          price: "$---",
          change24h: "0%",
          isPositive: true
        })));
      }
    } catch (error) {
      console.error("Error fetching live data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLiveMarketData();
    const interval = setInterval(fetchLiveMarketData, 300000); // Refresh every 5 mins
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
            alt="Financial Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-950/75 backdrop-blur-[2px]"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-white text-3xl md:text-5xl font-bold uppercase tracking-tight">
              MAKE MONEY QUICKLY AND EASILY
            </h2>
            <h3 className="text-blue-400 text-xl md:text-3xl font-semibold uppercase tracking-widest">
              WITH TRADEPAY GLOBAL
            </h3>
            
            <p className="text-slate-200 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light">
              Providing access to safe and secured investment opportunities in the capital/money market. Trade CFDs on Shares, Indices, Forex, Binary and Cryptocurrencies.
            </p>

            <div className="flex flex-col items-center space-y-6 pt-8">
              <Link 
                to="/signup" 
                className="w-full max-w-xs py-5 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-bold text-2xl uppercase tracking-wider transition-all shadow-xl hover:scale-105 border border-blue-400/30"
              >
                SIGN UP
              </Link>
              <Link 
                to="/signin" 
                className="w-full max-w-xs py-5 bg-transparent hover:bg-white/10 text-white rounded-full font-bold text-2xl uppercase tracking-wider transition-all border-2 border-blue-600 hover:scale-105"
              >
                SIGN IN
              </Link>
            </div>
            
            <div className="pt-16 animate-bounce">
              <ArrowDown className="w-8 h-8 mx-auto text-slate-400" />
            </div>
          </div>
        </div>
      </section>

      {/* Live Coin Market Section */}
      <section className="relative py-24 bg-[#0a0f1e] overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
           <img 
             src="https://images.unsplash.com/photo-1621761191319-c6fb5200c40b?q=80&w=2000&auto=format&fit=crop" 
             className="w-full h-full object-cover" 
             alt="Crypto Background"
           />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-4 text-white uppercase">
              LIVE COIN <span className="text-blue-500">MARKET</span>
            </h2>
            <div className="flex items-center justify-center space-x-2 text-slate-500 text-xs font-bold uppercase tracking-widest">
               <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
               <span>Real-time Data Grounding Active</span>
               {loading && <RefreshCw className="w-3 h-3 animate-spin ml-2" />}
            </div>
          </div>

          <div className="max-w-6xl mx-auto bg-slate-900/50 backdrop-blur-xl rounded-xl border border-slate-800 shadow-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-950/80 text-[10px] md:text-xs text-slate-500 uppercase font-bold tracking-widest">
                    <th className="px-6 py-4 border-b border-slate-800">NAME</th>
                    <th className="px-6 py-4 border-b border-slate-800 text-right">PRICE</th>
                    <th className="px-6 py-4 border-b border-slate-800 text-right">24H CHANGE</th>
                    <th className="px-6 py-4 border-b border-slate-800 text-right border-l border-slate-800 bg-slate-900/40 relative">
                      MKT CAP
                      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500"></div>
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm font-medium">
                  {(liveCoins.length > 0 ? liveCoins : COIN_MARKET_DATA).map((coin, idx) => (
                    <tr key={idx} className="hover:bg-white/5 transition-colors border-b border-slate-800/50 last:border-0">
                      <td className="px-6 py-5 flex items-center space-x-4">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-[10px] font-bold shadow-lg" style={{ backgroundColor: coin.color }}>
                          {coin.symbol?.charAt(0) || '?'}
                        </div>
                        <div className="flex flex-col">
                          <span className="text-blue-400 font-semibold">{coin.name}</span>
                          <span className="text-[10px] text-slate-500 font-mono">{coin.symbol}</span>
                        </div>
                      </td>
                      <td className="px-6 py-5 text-white font-mono text-right font-bold">
                        {/* If it's the static data, we show a dash until live data arrives */}
                        {(coin as any).price || "$---"}
                      </td>
                      <td className={`px-6 py-5 font-mono text-right font-bold ${(coin as any).isPositive ? 'text-emerald-400' : 'text-rose-400'}`}>
                        {(coin as any).change24h || "0.00%"}
                      </td>
                      <td className="px-6 py-5 text-slate-300 border-l border-slate-800/30 text-right font-mono">
                        {coin.mktCap}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-slate-950/60 p-6">
               <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-center space-x-2 text-[10px] text-slate-500 font-bold uppercase tracking-widest">
                    <span>Powered by Gemini Search Grounding</span>
                    <Zap className="w-3 h-3 text-amber-500 fill-amber-500" />
                  </div>
                  
                  {sources.length > 0 && (
                    <div className="flex flex-wrap gap-3">
                      <span className="text-[10px] text-slate-600 font-bold uppercase tracking-widest mr-2">Sources:</span>
                      {sources.map((source, i) => source.web && (
                        <a 
                          key={i} 
                          href={source.web.uri} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="flex items-center space-x-1 text-[10px] text-blue-400/60 hover:text-blue-400 transition-colors"
                        >
                          <span className="max-w-[120px] truncate">{source.web.title}</span>
                          <ExternalLink className="w-2 h-2" />
                        </a>
                      ))}
                    </div>
                  )}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next-Generation Platform Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
            alt="Data Charts Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-sm"></div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-slate-800/50 backdrop-blur-md rounded-2xl border border-slate-700 shadow-lg">
              <Monitor className="w-12 h-12 text-blue-400" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-wider mb-6">NEXT-GENERATION PLATFORM</h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-16 font-light">
            Our ground-breaking platform can be easily customized to fit your precise level of expertise and trading needs.
          </p>

          <div className="relative group max-w-5xl mx-auto">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-amber-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative bg-slate-950 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl">
              <div className="p-2 bg-slate-900 flex items-center space-x-2 border-b border-slate-800">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-500"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                <span className="text-[10px] text-slate-600 font-mono ml-2">https://terminal.tradepayglobal.com</span>
              </div>
              <div className="p-4">
                <LiveChart />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TradePay Global Investment Section */}
      <section className="relative py-24 bg-slate-950 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-amber-500/10 blur-[120px] rounded-full"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-blue-500 text-4xl md:text-5xl font-black tracking-tighter mb-4 uppercase">TRADEPAY <span className="text-white">GLOBAL INVESTMENT</span></h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <h3 className="text-2xl font-light text-slate-200 max-w-3xl mx-auto mb-6 leading-relaxed">
              Whether you want to trade Stocks, CFDs, cryptocurrency on global markets TradePay Global has got them all.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {INVESTMENT_PLANS.map((plan, i) => (
              <div key={i} className={`p-8 rounded-[2rem] border transition-all duration-300 flex flex-col ${plan.popular ? 'bg-blue-600/10 border-blue-500 shadow-[0_0_40px_rgba(37,99,235,0.15)] scale-105 relative' : 'bg-slate-900/50 border-slate-800'}`}>
                {plan.popular && <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-[10px] font-black uppercase px-4 py-1 rounded-full shadow-lg">Recommended</div>}
                <h4 className="text-2xl font-bold text-white mb-2">{plan.name}</h4>
                <div className="flex items-baseline space-x-1 mb-6">
                  <span className="text-3xl font-black text-blue-400">{plan.roi}</span>
                </div>
                <div className="space-y-4 mb-8 text-sm text-slate-400">
                  <div className="flex justify-between border-b border-slate-800 pb-2">
                    <span>Minimum:</span>
                    <span className="text-white font-bold">{plan.min}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-800 pb-2">
                    <span>Maximum:</span>
                    <span className="text-white font-bold">{plan.max}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-800 pb-2">
                    <span>Duration:</span>
                    <span className="text-white font-bold">{plan.duration}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-10 flex-grow">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-center text-xs text-slate-300">
                      <Check className="w-4 h-4 mr-2 text-emerald-400" /> {f}
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/signup" 
                  className={`w-full py-4 rounded-xl font-bold text-center transition-all ${plan.popular ? 'bg-blue-600 hover:bg-blue-500 text-white' : 'bg-slate-800 text-white hover:bg-slate-700'}`}
                >
                  Invest Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why We're Here To Help Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
            alt="Professional Office Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-[2px]"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-white text-5xl font-black uppercase tracking-tight">OUR <span className="text-blue-500">SERVICES</span></h2>
              <div className="w-20 h-1 bg-blue-600"></div>
              <p className="text-xl text-slate-300 leading-relaxed font-light">
                We've got what it takes to take you to the next level: expert trading analysts, account managers, and quality trading tools designed for your growth.
              </p>
              
              <div className="space-y-8 pt-4">
                {HELP_REASONS.map((item, i) => (
                  <div key={i} className="flex items-start space-x-6">
                    <div className="p-3 bg-blue-600/20 backdrop-blur-md rounded-xl border border-blue-500/30 text-blue-500">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                      <p className="text-slate-400 leading-relaxed text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-6">
                 <Link to="/about" className="inline-flex items-center text-blue-400 font-bold hover:text-blue-300 transition-colors">
                   Read more about our info <ChevronRight className="w-5 h-5 ml-1" />
                 </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-blue-600/20 blur-[100px] rounded-full -z-10"></div>
              <div className="rounded-[3rem] overflow-hidden border border-slate-800 shadow-2xl group">
                <img 
                  src="https://images.unsplash.com/photo-1573164060897-425941c30261?q=80&w=2069&auto=format&fit=crop" 
                  alt="Professional Help" 
                  className="w-full h-auto object-cover aspect-[4/5] grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="absolute -top-10 -right-10 bg-slate-900/80 backdrop-blur-lg p-6 rounded-3xl border border-slate-700 shadow-2xl max-w-[180px]">
                 <p className="text-4xl font-black text-blue-400 mb-1">100%</p>
                 <p className="text-xs text-slate-400 uppercase tracking-widest font-bold leading-tight">Committed to your trading success</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT ARE YOU WAITING FOR Section */}
      <section className="relative py-40 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2074&auto=format&fit=crop" 
            alt="Executive Meeting Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-950/85 backdrop-blur-[1px]"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase mb-4 tracking-tight">
            WHAT ARE YOU <span className="text-blue-500">WAITING FOR</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-10"></div>
          <p className="text-slate-200 text-lg mb-20 max-w-2xl mx-auto font-light">
            You have any Question or need help? <Link to="/contact" className="text-blue-400 font-bold hover:text-blue-300 transition-colors">Contact support ?</Link>
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-5xl mx-auto">
            <div className="flex flex-col items-center group">
              <div className="w-28 h-28 flex items-center justify-center mb-8 transition-transform group-hover:scale-110">
                <Users className="w-24 h-24 text-white stroke-[1] drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]" />
              </div>
              <h4 className="text-2xl md:text-3xl font-black text-white uppercase tracking-wider">
                1. REGISTER
              </h4>
            </div>
            
            <div className="flex flex-col items-center group">
              <div className="w-28 h-28 flex items-center justify-center mb-8 transition-transform group-hover:scale-110">
                <BarChart3 className="w-24 h-24 text-white stroke-[1] drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]" />
              </div>
              <h4 className="text-2xl md:text-3xl font-black text-white uppercase tracking-wider">
                2. INVEST
              </h4>
            </div>
            
            <div className="flex flex-col items-center group">
              <div className="w-28 h-28 flex items-center justify-center mb-8 transition-transform group-hover:scale-110">
                <Banknote className="w-24 h-24 text-white stroke-[1] drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]" />
              </div>
              <h4 className="text-2xl md:text-3xl font-black text-white uppercase tracking-wider">
                3. MAKE PROFIT
              </h4>
            </div>
          </div>
        </div>
      </section>

      {/* Instruments Section (Existing) */}
      <section className="py-24 bg-slate-950 border-t border-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-amber-500 text-sm font-bold uppercase tracking-[0.2em] mb-4">Diversified Assets</h2>
            <h3 className="text-3xl md:text-5xl font-bold mb-6">Trade the World’s Major Markets</h3>
            <p className="text-slate-400 text-lg font-light">Whether you are bullish on Bitcoin or focused on Forex, our platforms provide the liquidity and speed you need.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { name: 'Forex', desc: 'Over 60 major, minor, and exotic pairs.', icon: <Globe className="w-6 h-6" /> },
              { name: 'Crypto', desc: 'Trade top digital assets with 0% markup.', icon: <Zap className="w-6 h-6" /> },
              { name: 'Stocks', desc: 'Own a piece of the world’s biggest companies.', icon: <Award className="w-6 h-6" /> },
              { name: 'Commodities', desc: 'Gold, Oil, and Silver spot markets.', icon: <Target className="w-6 h-6" /> },
              { name: 'Indices', desc: 'Exposure to entire sectors and economies.', icon: <CheckCircle2 className="w-6 h-6" /> },
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/50 transition-all group cursor-pointer shadow-lg hover:shadow-blue-500/5">
                <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                   {React.cloneElement(item.icon as React.ReactElement<any>, { className: 'w-6 h-6' })}
                </div>
                <h4 className="text-xl font-bold mb-2">{item.name}</h4>
                <p className="text-slate-400 text-sm font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
