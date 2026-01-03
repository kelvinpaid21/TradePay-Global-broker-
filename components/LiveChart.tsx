
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { time: '09:00', value: 3420 },
  { time: '10:00', value: 3450 },
  { time: '11:00', value: 3410 },
  { time: '12:00', value: 3480 },
  { time: '13:00', value: 3520 },
  { time: '14:00', value: 3590 },
  { time: '15:00', value: 3570 },
  { time: '16:00', value: 3640 },
  { time: '17:00', value: 3710 },
  { time: '18:00', value: 3680 },
  { time: '19:00', value: 3750 },
  { time: '20:00', value: 3820 },
];

const LiveChart: React.FC = () => {
  return (
    <div className="h-[300px] w-full mt-8 glass rounded-2xl p-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-sm font-bold text-slate-400">MARKET MOMENTUM (DEMO)</h3>
        <span className="px-2 py-1 bg-emerald-500/10 text-emerald-400 text-[10px] rounded border border-emerald-500/20 font-bold uppercase">Live Activity</span>
      </div>
      <ResponsiveContainer width="100%" height="80%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#d4af37" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#d4af37" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1e293b" />
          <XAxis dataKey="time" stroke="#475569" fontSize={10} axisLine={false} tickLine={false} />
          <YAxis hide />
          <Tooltip 
            contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #334155', borderRadius: '8px' }}
            itemStyle={{ color: '#f1d592', fontWeight: 'bold' }}
          />
          <Area type="monotone" dataKey="value" stroke="#d4af37" strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LiveChart;
