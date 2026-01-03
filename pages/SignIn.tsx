
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, LogIn, ShieldCheck, ArrowRight } from 'lucide-react';

const SignIn: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Sign In successful! (Demo Only)");
  };

  return (
    <div className="min-h-screen pt-32 pb-20 flex items-center justify-center relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full -z-10"></div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-md mx-auto">
          <div className="glass p-10 md:p-12 rounded-[2.5rem] border border-slate-800 shadow-2xl relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-amber-500/5 blur-3xl -z-10"></div>
            
            <div className="text-center mb-10">
              <h1 className="text-3xl font-bold mb-3">Welcome Back</h1>
              <p className="text-slate-400">Log in to your TradePay Global account.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                  <input 
                    type="email" 
                    required
                    className="w-full bg-slate-950/50 border border-slate-800 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="example@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-2">
                <div className="flex justify-between items-center px-1">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Password</label>
                  <span className="text-xs text-blue-400 hover:underline cursor-pointer">Forgot?</span>
                </div>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                  <input 
                    type="password" 
                    required
                    className="w-full bg-slate-950/50 border border-slate-800 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                  />
                </div>
              </div>

              {/* Remember Me */}
              <div className="flex items-center space-x-3">
                <input 
                  type="checkbox" 
                  id="remember" 
                  className="w-4 h-4 rounded border-slate-800 bg-slate-950 text-blue-600 focus:ring-blue-500"
                  checked={formData.rememberMe}
                  onChange={(e) => setFormData({...formData, rememberMe: e.target.checked})}
                />
                <label htmlFor="remember" className="text-xs text-slate-400">Remember me on this device</label>
              </div>

              <button 
                type="submit" 
                className="w-full py-5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold text-lg shadow-lg flex items-center justify-center group transition-all"
              >
                Sign In
                <LogIn className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="pt-6 text-center text-sm text-slate-500">
                Don't have an account? <Link to="/signup" className="text-blue-400 font-bold hover:underline">Sign Up</Link>
              </div>
            </form>
            
            <div className="mt-10 pt-8 border-t border-slate-800 flex items-center justify-center space-x-2 text-[10px] text-slate-500 uppercase tracking-widest">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>Identity Verified & Encrypted Session</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
