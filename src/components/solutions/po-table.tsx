'use client';

import { TrendingUp } from 'lucide-react';

export interface POItem {
  po: string;
  part: string;
  vendor: string;
  risk: string;
  dueDate: string;
  daysOverdue: number;
  action: string;
}

export function POTable({ data }: { data: POItem[] }) {
  return (
    <div className="rounded-xl bg-[#1a3a28] border border-[#51DABA]/20 overflow-hidden shadow-2xl shadow-[#51DABA]/5">
      {/* Header */}
      <div className="px-5 py-3 border-b border-[#51DABA]/10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-[#51DABA] animate-pulse" />
          <span className="text-sm font-semibold text-white">PO Lines by Risk</span>
        </div>
        <span className="text-xs text-white/40">Updated 2 min ago</span>
      </div>
      {/* Column Headers */}
      <div className="grid grid-cols-[1fr_auto_auto_auto] gap-3 px-5 py-2.5 border-b border-white/5 text-[10px] font-medium text-white/30 uppercase tracking-wider">
        <span>PO / Part</span>
        <span className="text-center w-16">Risk</span>
        <span className="text-center w-16">Due</span>
        <span className="text-right w-20">Action</span>
      </div>
      {/* Rows */}
      {data.map((item, i) => (
        <div
          key={i}
          className="grid grid-cols-[1fr_auto_auto_auto] gap-3 px-5 py-3 border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors"
        >
          <div>
            <div className="text-sm font-medium text-white">{item.po}</div>
            <div className="text-xs text-white/40 mt-0.5">{item.part}</div>
            <div className="text-[10px] text-white/25 mt-0.5">{item.vendor}</div>
          </div>
          <div className="flex items-center justify-center w-16">
            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
              item.risk === 'Critical' ? 'bg-red-500/20 text-red-400' :
              item.risk === 'High' ? 'bg-orange-500/20 text-orange-400' :
              item.risk === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
              'bg-green-500/20 text-green-400'
            }`}>
              {item.risk}
            </span>
          </div>
          <div className="flex flex-col items-center justify-center w-16">
            <span className="text-xs text-white/60">{item.dueDate}</span>
            {item.daysOverdue > 0 && (
              <span className="text-[10px] text-red-400">+{item.daysOverdue}d late</span>
            )}
          </div>
          <div className="flex items-center justify-end w-20">
            <span className={`text-[10px] font-medium px-2 py-1 rounded-md cursor-default ${
              item.action === 'Escalate' ? 'bg-red-500/10 text-red-400 border border-red-500/20' :
              item.action === 'Follow up' ? 'bg-orange-500/10 text-orange-400 border border-orange-500/20' :
              item.action === 'Re-confirm' ? 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20' :
              'bg-white/5 text-white/40 border border-white/10'
            }`}>
              {item.action}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

// Re-export TrendingUp for vendor score cards
export { TrendingUp };
