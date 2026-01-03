
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Twitter, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 gold-gradient rounded flex items-center justify-center">
                <span className="text-slate-950 font-bold text-lg">T</span>
              </div>
              <span className="text-xl font-bold">TradePay Global</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Empowering individuals with high-grade trading education, institutional-level analysis, and robust risk management tools.
            </p>
            <div className="flex space-x-4">
              <Twitter className="w-5 h-5 text-slate-400 hover:text-amber-500 cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-slate-400 hover:text-amber-500 cursor-pointer transition-colors" />
              <Github className="w-5 h-5 text-slate-400 hover:text-amber-500 cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-amber-500 uppercase tracking-widest text-xs">Quick Links</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><Link to="/" className="hover:text-amber-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-amber-400 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-amber-400 transition-colors">Our Services</Link></li>
              <li><Link to="/contact" className="hover:text-amber-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-amber-500 uppercase tracking-widest text-xs">Support</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-center"><Mail className="w-4 h-4 mr-2" /> support@tradepayglobal.com</li>
              <li className="flex items-center"><Phone className="w-4 h-4 mr-2" /> +1 (555) 000-0000</li>
              <li className="flex items-center"><MapPin className="w-4 h-4 mr-2" /> Financial District, London</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-amber-500 uppercase tracking-widest text-xs">Stay Informed</h4>
            <p className="text-sm text-slate-400 mb-4">Join 20k+ traders receiving our weekly market wrap.</p>
            <div className="flex">
              <input type="email" placeholder="Email address" className="bg-slate-900 border border-slate-800 rounded-l-lg px-4 py-2 w-full focus:outline-none focus:border-amber-500 transition-colors" />
              <button className="gold-gradient text-slate-950 px-4 py-2 rounded-r-lg font-bold">Join</button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-8 mt-8">
          <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800 mb-8">
            <h5 className="text-amber-500 text-xs font-bold uppercase mb-2 tracking-widest">Risk Disclosure</h5>
            <p className="text-[10px] sm:text-xs text-slate-500 leading-relaxed text-justify">
              Trading financial instruments, including Foreign Exchange (Forex), Cryptocurrencies, Stocks, and Commodities, carries a high level of risk and may not be suitable for all investors. The high degree of leverage can work against you as well as for you. Before deciding to invest, you should carefully consider your investment objectives, level of experience, and risk appetite. The possibility exists that you could sustain a loss of some or all of your initial investment. TradePay Global does not guarantee profits or provide investment advice. All information provided is for educational purposes only. Past performance is not indicative of future results.
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 space-y-4 md:space-y-0">
            <p>&copy; 2024 TradePay Global. All rights reserved.</p>
            <div className="flex space-x-6">
              <span className="hover:text-slate-300 cursor-pointer">Terms of Service</span>
              <span className="hover:text-slate-300 cursor-pointer">Privacy Policy</span>
              <span className="hover:text-slate-300 cursor-pointer">Cookies Policy</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
