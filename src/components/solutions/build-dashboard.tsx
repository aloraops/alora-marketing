'use client';

export interface BuildItem {
  project: string;
  customer: string;
  status: string;
  partsReady: number;
  partsTotal: number;
  revenue: string;
  missing: string;
}

export interface BuildData {
  summary: { atRisk: number; onTrack: number; review: number };
  builds: BuildItem[];
}

export function BuildDashboard({ data }: { data: BuildData }) {
  return (
    <div className="rounded-xl bg-white border border-border/60 overflow-hidden shadow-xl">
      {/* Header */}
      <div className="px-5 py-3 border-b border-border/40 flex items-center justify-between bg-muted/30">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm font-semibold text-foreground">Build Readiness</span>
        </div>
        <span className="text-xs text-muted-foreground">This quarter</span>
      </div>
      {/* Summary Bar */}
      <div className="flex gap-3 px-5 py-4 border-b border-border/30">
        <div className="flex-1 rounded-lg bg-red-50 border border-red-200 p-3 text-center">
          <div className="text-2xl font-bold text-red-600">{data.summary.atRisk}</div>
          <div className="text-[10px] uppercase text-red-500/70 font-medium tracking-wide">At Risk</div>
        </div>
        <div className="flex-1 rounded-lg bg-green-50 border border-green-200 p-3 text-center">
          <div className="text-2xl font-bold text-green-600">{data.summary.onTrack}</div>
          <div className="text-[10px] uppercase text-green-500/70 font-medium tracking-wide">On Track</div>
        </div>
        <div className="flex-1 rounded-lg bg-yellow-50 border border-yellow-200 p-3 text-center">
          <div className="text-2xl font-bold text-yellow-600">{data.summary.review}</div>
          <div className="text-[10px] uppercase text-yellow-500/70 font-medium tracking-wide">Review</div>
        </div>
      </div>
      {/* Build Cards */}
      <div className="px-5 py-2">
        {data.builds.map((build, i) => (
          <div key={i} className="py-3.5 border-b border-border/30 last:border-0">
            <div className="flex items-start justify-between mb-3">
              <div>
                <div className="text-sm font-semibold text-foreground">{build.project}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{build.customer}</div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium text-muted-foreground">{build.revenue}</span>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                  build.status === 'At Risk' ? 'bg-red-100 text-red-700' :
                  build.status === 'Review' ? 'bg-yellow-100 text-yellow-700' :
                  'bg-green-100 text-green-700'
                }`}>
                  {build.status}
                </span>
              </div>
            </div>
            {/* Progress Bar */}
            <div className="relative h-1.5 rounded-full bg-muted overflow-hidden">
              <div
                className={`absolute left-0 top-0 h-full rounded-full transition-all ${
                  build.partsReady === build.partsTotal ? 'bg-green-500' :
                  build.partsReady / build.partsTotal > 0.8 ? 'bg-yellow-500' :
                  'bg-red-500'
                }`}
                style={{ width: `${(build.partsReady / build.partsTotal) * 100}%` }}
              />
            </div>
            <div className="flex justify-between mt-1.5">
              <span className="text-[10px] text-muted-foreground">
                {build.partsReady}/{build.partsTotal} parts ready
              </span>
              {build.missing && (
                <span className="text-[10px] text-red-600">{build.missing}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
