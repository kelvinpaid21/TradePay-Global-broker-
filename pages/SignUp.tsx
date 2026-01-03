
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, Mail, Lock, Phone, Globe, ShieldCheck, ArrowRight } from 'lucide-react';

const SignUp: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Sign Up successful! (Demo Only)");
  };

  return (
    <div className="min-h-screen pt-32 pb-20 flex items-center justify-center relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/10 blur-[120px] rounded-full -z-10"></div>

      <div className="container mx-auto px-6">
        <div className="max-w-xl mx-auto">
          <div className="glass p-10 md:p-12 rounded-[2.5rem] border border-slate-800 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 blur-3xl -z-10"></div>
            
            <div className="text-center mb-10">
              <h1 className="text-3xl font-bold mb-3">Create Your Account</h1>
              <p className="text-slate-400">Join TradePay Global and start your professional journey.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                  <input 
                    type="text" 
                    required
                    className="w-full bg-slate-950/50 border border-slate-800 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
              </div>

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

              {/* Phone & Country Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                    <input 
                      type="tel" 
                      required
                      className="w-full bg-slate-950/50 border border-slate-800 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="+1 (555) 000-000"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Country</label>
                  <div className="relative">
                    <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                    <input 
                      type="text" 
                      required
                      className="w-full bg-slate-950/50 border border-slate-800 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="Your Country"
                      value={formData.country}
                      onChange={(e) => setFormData({...formData, country: e.target.value})}
                    />
                  </div>
                </div>
              </div>

              {/* Password */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Password</label>
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

              {/* Agree Terms */}
              <div className="flex items-center space-x-3 pt-2">
                <input 
                  type="checkbox" 
                  id="agree" 
                  required
                  className="w-5 h-5 rounded border-slate-800 bg-slate-950 text-blue-600 focus:ring-blue-500 focus:ring-offset-slate-950"
                  checked={formData.agreeTerms}
                  onChange={(e) => setFormData({...formData, agreeTerms: e.target.checked})}
                />
                <label htmlFor="agree" className="text-xs text-slate-400">
                  I agree to the <span className="text-blue-400 cursor-pointer">Terms of Service</span> and <span className="text-blue-400 cursor-pointer">Privacy Policy</span>.
                </label>
              </div>

              <button 
                type="submit" 
                className="w-full py-5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold text-lg shadow-lg flex items-center justify-center group transition-all"
              >
                Create Account
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="pt-6 text-center text-sm text-slate-500">
                Already have an account? <Link to="/signin" className="text-blue-400 font-bold hover:underline">Sign In</Link>
              </div>
            </form>
            
            <div className="mt-10 pt-8 border-t border-slate-800 flex items-center justify-center space-x-2 text-[10px] text-slate-500 uppercase tracking-widest">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>SSL Secured & Encrypted Connection</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
