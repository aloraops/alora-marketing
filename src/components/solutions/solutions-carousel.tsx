'use client';

import { useState, useCallback, useRef, useEffect } from 'react';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import {
  ClipboardList,
  Package,
  Users,
  CheckCircle2,
  TrendingUp,
} from 'lucide-react';

// Content import
import { carousel } from '@content/solutions';

// Icon mapping
const icons = {
  ClipboardList,
  Package,
  Users,
} as const;

type IconName = keyof typeof icons;

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
    const totalSlides = carousel.solutions.length;
    // Wrap around: going past the end wraps to start, going before start wraps to end
    const newPage = (page + newDirection + totalSlides) % totalSlides;
    setPage([newPage, newDirection]);
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
        // Always prevent default for horizontal scrolls in the carousel area
        e.preventDefault();
        e.stopPropagation();

        const totalSlides = carousel.solutions.length;
        const newDirection = delta > 0 ? 1 : -1;
        const newPage = (page + newDirection + totalSlides) % totalSlides;

        isScrolling.current = true;
        setPage([newPage, newDirection]);
        // Debounce
        setTimeout(() => {
          isScrolling.current = false;
        }, 500);
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    return () => container.removeEventListener('wheel', handleWheel);
  }, [page]);

  // Handle drag/swipe gestures
  const handleDragEnd = useCallback((e: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold) {
      paginate(1); // Swipe left = go to next (wraps around)
    } else if (info.offset.x > swipeThreshold) {
      paginate(-1); // Swipe right = go to previous (wraps around)
    }
  }, [paginate]);

  const solution = carousel.solutions[page];
  const Icon = icons[solution.icon as IconName];

  return (
    <div className="relative">
      {/* Solution Chip Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {carousel.solutions.map((s, i) => (
          <button
            key={s.id}
            onClick={() => goToSlide(i)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
              i === page
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground'
            }`}
          >
            {s.title}
          </button>
        ))}
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
              x: { type: 'spring', stiffness: 600, damping: 40 },
              opacity: { duration: 0.1 },
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
                      {Icon && <Icon className="h-5 w-5" />}
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
                    {solution.features.map((item: any, i: number) => (
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
                                      ? 'badge-danger'
                                      : item.risk === 'Medium'
                                        ? 'badge-warning'
                                        : 'badge-success'
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
                                      ? 'badge-danger'
                                      : item.status === 'Review'
                                        ? 'badge-warning'
                                        : 'badge-success'
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
                                      ? 'text-success'
                                      : item.trend === 'down'
                                        ? 'text-destructive rotate-180'
                                        : 'text-warning rotate-90'
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

    </div>
  );
}
