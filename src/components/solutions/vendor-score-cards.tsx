'use client';

import { TrendingUp } from 'lucide-react';

export interface VendorItem {
  vendor: string;
  score: number;
  onTime: string;
  avgDelay: string;
  trend: string;
  reliability: string;
}

export function VendorScoreCards({ data }: { data: VendorItem[] }) {
  return (
    <div className="rounded-xl bg-[#1a3a28] border border-[#51DABA]/20 overflow-hidden shadow-2xl shadow-[#51DABA]/5">
      {/* Header */}
      <div className="px-5 py-3 border-b border-[#51DABA]/10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-[#51DABA] animate-pulse" />
          <span className="text-sm font-semibold text-white">Vendor Performance</span>
        </div>
        <span className="text-xs text-white/40">Last 90 days</span>
      </div>
      {/* Vendor Rows */}
      {data.map((item, i) => (
        <div key={i} className="px-5 py-4 border-b border-white/5 last:border-0">
          <div className="flex items-center justify-between mb-2">
            <div>
              <div className="text-sm font-medium text-white">{item.vendor}</div>
              <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded ${
                item.reliability === 'Excellent' ? 'bg-green-500/15 text-green-400' :
                item.reliability === 'Good' ? 'bg-green-500/10 text-green-300' :
                item.reliability === 'Needs attention' ? 'bg-orange-500/15 text-orange-400' :
                'bg-red-500/15 text-red-400'
              }`}>
                {item.reliability}
              </span>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-1.5">
                <span className={`text-3xl font-bold ${
                  item.score >= 90 ? 'text-green-400' :
                  item.score >= 80 ? 'text-green-300' :
                  item.score >= 70 ? 'text-orange-400' :
                  'text-red-400'
                }`}>
                  {item.score}
                </span>
                <TrendingUp className={`h-4 w-4 ${
                  item.trend === 'up' ? 'text-green-400' :
                  item.trend === 'down' ? 'text-red-400 rotate-180' :
                  'text-orange-400 rotate-90'
                }`} />
              </div>
            </div>
          </div>
          {/* Metrics Bar */}
          <div className="flex gap-4 mt-2">
            <div className="flex-1">
              <div className="text-[10px] text-white/30 uppercase tracking-wide">On-Time</div>
              <div className="text-xs font-medium text-white/70">{item.onTime}</div>
            </div>
            <div className="flex-1">
              <div className="text-[10px] text-white/30 uppercase tracking-wide">Avg Delay</div>
              <div className="text-xs font-medium text-white/70">{item.avgDelay}</div>
            </div>
            {/* Mini score bar */}
            <div className="flex-1">
              <div className="text-[10px] text-white/30 uppercase tracking-wide">Score</div>
              <div className="mt-1 h-1.5 rounded-full bg-white/10 overflow-hidden">
                <div
                  className={`h-full rounded-full ${
                    item.score >= 90 ? 'bg-green-400' :
                    item.score >= 80 ? 'bg-green-300' :
                    item.score >= 70 ? 'bg-orange-400' :
                    'bg-red-400'
                  }`}
                  style={{ width: `${item.score}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
