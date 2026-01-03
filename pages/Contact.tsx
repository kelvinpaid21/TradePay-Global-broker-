
import React, { useState } from 'react';
import { Mail, MessageCircle, Send, Phone, MapPin, Globe } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("This is a demo contact form. In a real application, your message would be sent to our support team.");
  };

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-amber-500 text-sm font-bold uppercase tracking-[0.2em] mb-4">Get In Touch</h2>
          <h1 className="text-4xl md:text-6xl font-bold font-serif mb-8">Let's Talk <span className="text-gold">Markets</span></h1>
          <p className="text-slate-400 text-xl">Our team of experts is ready to answer your questions and help you find the right path.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Info Side */}
          <div className="lg:col-span-1 space-y-8">
            <div className="p-8 bg-slate-900 border border-slate-800 rounded-[2rem] space-y-6">
              <h3 className="text-xl font-bold mb-4">Contact Channels</h3>
              
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-slate-800 rounded-lg text-amber-500">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Email Support</p>
                  <p className="text-slate-200">support@tradepayglobal.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-slate-800 rounded-lg text-emerald-500">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">WhatsApp / Telegram</p>
                  <p className="text-slate-200">+1 (555) 123-4567</p>
                  <p className="text-[10px] text-slate-500 mt-1">Instant response during market hours</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-slate-800 rounded-lg text-blue-500">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Institutional Desk</p>
                  <p className="text-slate-200">+1 (555) 999-0000</p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-slate-900 border border-slate-800 rounded-[2rem]">
               <h3 className="text-xl font-bold mb-6">Global Presence</h3>
               <div className="space-y-4">
                 <div className="flex items-center space-x-3 text-slate-400 text-sm">
                   <MapPin className="w-4 h-4 text-amber-500" />
                   <span>Canary Wharf, London, UK</span>
                 </div>
                 <div className="flex items-center space-x-3 text-slate-400 text-sm">
                   <MapPin className="w-4 h-4 text-amber-500" />
                   <span>Marina Bay Sands, Singapore</span>
                 </div>
                 <div className="flex items-center space-x-3 text-slate-400 text-sm">
                   <Globe className="w-4 h-4 text-amber-500" />
                   <span>Remote First / Worldwide</span>
                 </div>
               </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-2">
            <div className="p-10 bg-slate-900 border border-slate-800 rounded-[2.5rem]">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest px-1">Full Name</label>
                    <input 
                      type="text" 
                      required
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-5 py-4 focus:outline-none focus:border-amber-500 transition-colors"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest px-1">Email Address</label>
                    <input 
                      type="email" 
                      required
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-5 py-4 focus:outline-none focus:border-amber-500 transition-colors"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest px-1">Inquiry Subject</label>
                  <select 
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-5 py-4 focus:outline-none focus:border-amber-500 transition-colors"
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  >
                    <option>General Inquiry</option>
                    <option>Trading Education</option>
                    <option>Portfolio Management</option>
                    <option>Technical Support</option>
                    <option>Partnerships</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest px-1">Message</label>
                  <textarea 
                    required
                    rows={6}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-5 py-4 focus:outline-none focus:border-amber-500 transition-colors resize-none"
                    placeholder="Tell us about your trading goals..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full py-5 gold-gradient text-slate-950 rounded-xl font-bold text-xl flex items-center justify-center group"
                >
                  Send Message
                  <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
        
        {/* FAQ Preview */}
        <div className="mt-32 max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h3>
          <div className="space-y-4">
            {[
              { q: "Is TradePay Global a regulated broker?", a: "No, TradePay Global is a trading education and analytics firm. We do not hold client funds or execute trades directly. We provide the intelligence and strategy to help you trade with your own chosen regulated broker." },
              { q: "Do you offer guaranteed returns?", a: "Absolutely not. Any platform promising guaranteed returns in the financial markets is likely fraudulent. Trading involves significant risk, and we focus on risk management and consistent strategy rather than promises of profit." },
              { q: "How quickly can I start seeing results?", a: "Education is a process. While some students grasp concepts quickly, we generally recommend a 3-6 month period of study and demo practice before attempting high-volume live market execution." },
            ].map((faq, i) => (
              <div key={i} className="p-6 bg-slate-900 border border-slate-800 rounded-2xl">
                <h4 className="font-bold text-lg mb-3 flex items-center">
                  <span className="text-amber-500 mr-3">Q.</span> {faq.q}
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed pl-7">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
