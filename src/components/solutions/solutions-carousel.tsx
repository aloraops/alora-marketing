'use client';

import { useState, useCallback, useRef, useEffect } from 'react';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  ChevronLeft,
  ChevronRight,
  ClipboardList,
  Package,
  Users,
  CheckCircle2,
  TrendingUp,
} from 'lucide-react';

const solutions = [
  {
    id: 'po-risk',
    number: 1,
    icon: ClipboardList,
    title: 'PO Risk & Tracking',
    subtitle: 'Turn open POs into a ranked TODO list, not a static report.',
    features: [
      'See all PO lines ordered by risk and business impact',
      'Understand which builds and customers each line affects',
      'Get suggested next moves for risky lines (follow-up, escalate, re-confirm, split)',
      'Track confirmation gaps, date slips, and mismatched lines',
    ],
    mockData: [
      { po: 'PO-4521', part: 'Motor Assembly', risk: 'High', action: 'Follow up' },
      { po: 'PO-4518', part: 'Control Board', risk: 'Medium', action: 'Re-confirm' },
      { po: 'PO-4515', part: 'Housing Unit', risk: 'Low', action: 'Monitor' },
    ],
    cardTitle: 'PO Lines by Risk',
    cardSubtitle: 'Updated 2 min ago',
  },
  {
    id: 'build-readiness',
    number: 2,
    icon: Package,
    title: 'CTB & Build Readiness',
    subtitle: 'Know if you can really build — before the line is exposed.',
    features: [
      'Connect part availability and risk to upcoming builds and projects',
      'Highlight shortages and bottlenecks at the BOM level',
      'Show which orders and customers are at risk if nothing changes',
      'See revenue exposure before it becomes a crisis',
    ],
    mockData: [
      { build: 'Project Alpha', customer: 'MedTech Inc', status: 'At Risk', parts: '3 parts missing' },
      { build: 'Project Beta', customer: 'RoboCorp', status: 'On Track', parts: 'All parts confirmed' },
      { build: 'Project Gamma', customer: 'DefenseCo', status: 'Review', parts: '1 part delayed' },
    ],
    cardTitle: 'Build Readiness',
    cardSubtitle: 'Next 30 days',
  },
  {
    id: 'vendor-scoring',
    number: 3,
    icon: Users,
    title: 'Vendor Behavior & Scoring',
    subtitle: "See how suppliers actually behave, not just what's written on the PO.",
    features: [
      'Track real lead times vs. quoted, confirmation patterns, and slips',
      'Score suppliers at the part level based on behavior and risk',
      'Feed vendor scores into prioritization so risky suppliers surface first',
      'Identify patterns before they become problems',
    ],
    mockData: [
      { vendor: 'Precision Parts Co', score: 92, trend: 'up', metric: '+3 days avg' },
      { vendor: 'Global Electronics', score: 78, trend: 'down', metric: '-5 days avg' },
      { vendor: 'Industrial Supply', score: 85, trend: 'stable', metric: 'On target' },
    ],
    cardTitle: 'Vendor Performance',
    cardSubtitle: 'Last 90 days',
  },
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
};

export function SolutionsCarousel() {
  const [[page, direction], setPage] = useState([0, 0]);
  const containerRef = useRef<HTMLDivElement>(null);
  const isScrolling = useRef(false);

  const paginate = useCallback((newDirection: number) => {
    const newPage = page + newDirection;
    if (newPage >= 0 && newPage < solutions.length) {
      setPage([newPage, newDirection]);
    }
  }, [page]);

  const goToSlide = useCallback((index: number) => {
    const direction = index > page ? 1 : -1;
    setPage([index, direction]);
  }, [page]);

  // Handle mouse wheel (horizontal scroll) - using native event for preventDefault
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      // Use deltaX for horizontal scroll, or deltaY for vertical
      const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      const isHorizontalScroll = Math.abs(e.deltaX) > Math.abs(e.deltaY);

      // Only handle if it's a horizontal scroll gesture
      if (!isHorizontalScroll && Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        // Let vertical scrolls pass through
        return;
      }

      // Prevent rapid-fire scrolling
      if (isScrolling.current) {
        e.preventDefault();
        return;
      }

      if (Math.abs(delta) > 20) {
        const canGoNext = delta > 0 && page < solutions.length - 1;
        const canGoPrev = delta < 0 && page > 0;

        // Always prevent default for horizontal scrolls in the carousel area
        e.preventDefault();
        e.stopPropagation();

        if (canGoNext || canGoPrev) {
          isScrolling.current = true;
          setPage([page + (canGoNext ? 1 : -1), canGoNext ? 1 : -1]);
          // Debounce
          setTimeout(() => {
            isScrolling.current = false;
          }, 500);
        }
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    return () => container.removeEventListener('wheel', handleWheel);
  }, [page]);

  // Handle drag/swipe gestures
  const handleDragEnd = useCallback((e: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold && page < solutions.length - 1) {
      paginate(1);
    } else if (info.offset.x > swipeThreshold && page > 0) {
      paginate(-1);
    }
  }, [page, paginate]);

  const solution = solutions[page];
  const Icon = solution.icon;

  return (
    <div className="relative">
      {/* Navigation Arrows */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10 -translate-x-4 lg:-translate-x-12">
        <Button
          variant="outline"
          size="icon"
          className="h-12 w-12 rounded-full shadow-lg bg-background disabled:opacity-30"
          onClick={() => paginate(-1)}
          disabled={page === 0}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
      </div>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10 translate-x-4 lg:translate-x-12">
        <Button
          variant="outline"
          size="icon"
          className="h-12 w-12 rounded-full shadow-lg bg-background disabled:opacity-30"
          onClick={() => paginate(1)}
          disabled={page === solutions.length - 1}
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>

      {/* Carousel Content */}
      <div
        ref={containerRef}
        className="overflow-hidden px-4 cursor-grab active:cursor-grabbing h-[420px]"
      >
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={page}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={handleDragEnd}
          >
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-start h-auto">
              {/* Content Side */}
              <div className={page === 1 ? 'order-2' : ''}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-sm font-semibold uppercase tracking-wide text-primary">
                      Solution {solution.number}
                    </span>
                  </div>
                  <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                    {solution.title}
                  </h2>
                  <p className="mt-4 text-lg text-muted-foreground">
                    {solution.subtitle}
                  </p>
                  <ul className="mt-8 space-y-4">
                    {solution.features.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + i * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle2 className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                        <span className="text-foreground">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              {/* Card Side */}
              <div className={`flex items-start ${page === 1 ? 'order-1' : ''}`}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="w-full"
                >
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between border-b pb-4">
                          <span className="text-sm font-semibold text-foreground">
                            {solution.cardTitle}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {solution.cardSubtitle}
                          </span>
                        </div>
                        {solution.id === 'po-risk' &&
                          solution.mockData.map((item: any, i: number) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.3 + i * 0.1 }}
                              className="flex items-center justify-between py-3 border-b last:border-0"
                            >
                              <div>
                                <div className="font-medium text-sm text-foreground">{item.po}</div>
                                <div className="text-xs text-muted-foreground">{item.part}</div>
                              </div>
                              <div className="flex items-center gap-3">
                                <span
                                  className={`text-xs font-medium px-2 py-1 rounded ${
                                    item.risk === 'High'
                                      ? 'bg-red-100 text-red-700'
                                      : item.risk === 'Medium'
                                        ? 'bg-yellow-100 text-yellow-700'
                                        : 'bg-green-100 text-green-700'
                                  }`}
                                >
                                  {item.risk}
                                </span>
                                <span className="text-xs text-primary font-medium">{item.action}</span>
                              </div>
                            </motion.div>
                          ))}
                        {solution.id === 'build-readiness' &&
                          solution.mockData.map((item: any, i: number) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.3 + i * 0.1 }}
                              className="flex items-center justify-between py-3 border-b last:border-0"
                            >
                              <div>
                                <div className="font-medium text-sm text-foreground">{item.build}</div>
                                <div className="text-xs text-muted-foreground">{item.customer}</div>
                              </div>
                              <div className="text-right">
                                <span
                                  className={`text-xs font-medium px-2 py-1 rounded ${
                                    item.status === 'At Risk'
                                      ? 'bg-red-100 text-red-700'
                                      : item.status === 'Review'
                                        ? 'bg-yellow-100 text-yellow-700'
                                        : 'bg-green-100 text-green-700'
                                  }`}
                                >
                                  {item.status}
                                </span>
                                <div className="text-xs text-muted-foreground mt-1">{item.parts}</div>
                              </div>
                            </motion.div>
                          ))}
                        {solution.id === 'vendor-scoring' &&
                          solution.mockData.map((item: any, i: number) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.3 + i * 0.1 }}
                              className="flex items-center justify-between py-3 border-b last:border-0"
                            >
                              <div>
                                <div className="font-medium text-sm text-foreground">{item.vendor}</div>
                                <div className="text-xs text-muted-foreground">{item.metric}</div>
                              </div>
                              <div className="flex items-center gap-2">
                                <TrendingUp
                                  className={`h-4 w-4 ${
                                    item.trend === 'up'
                                      ? 'text-green-600'
                                      : item.trend === 'down'
                                        ? 'text-red-600 rotate-180'
                                        : 'text-yellow-600 rotate-90'
                                  }`}
                                />
                                <span className="text-lg font-bold text-foreground">{item.score}</span>
                              </div>
                            </motion.div>
                          ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dot Indicators */}
      <div className="flex justify-center gap-2 mt-8">
        {solutions.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`h-2 rounded-full transition-all ${
              i === page ? 'w-8 bg-primary' : 'w-2 bg-border hover:bg-muted-foreground'
            }`}
            aria-label={`Go to solution ${i + 1}`}
          />
        ))}
      </div>

      {/* Solution Labels */}
      <div className="flex justify-center gap-4 mt-4">
        {solutions.map((s, i) => (
          <button
            key={s.id}
            onClick={() => goToSlide(i)}
            className={`text-sm font-medium transition-colors ${
              i === page ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            {s.title}
          </button>
        ))}
      </div>
    </div>
  );
}
