'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeIn } from '@/components/ui/motion';
import { ChevronDown } from 'lucide-react';

// Content imports
import { faq } from '@content/home';

export default function FaqPage() {
  const [openFaqItems, setOpenFaqItems] = useState<Record<string, boolean>>({});
  const [activeFaqGroup, setActiveFaqGroup] = useState(0);

  const toggleFaq = (groupIndex: number, itemIndex: number) => {
    const key = `${groupIndex}-${itemIndex}`;
    setOpenFaqItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-muted/30 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                Frequently Asked Questions
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Everything you need to know about Alora and how it works.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Category Tabs */}
          <div className="mx-auto max-w-4xl">
            <div className="flex flex-wrap justify-center gap-2">
              {faq.groups.map((group, index) => (
                <button
                  key={group.title}
                  onClick={() => setActiveFaqGroup(index)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                    activeFaqGroup === index
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground'
                  }`}
                >
                  {group.title}
                </button>
              ))}
            </div>
          </div>

          {/* FAQ Accordion */}
          <div className="mx-auto mt-10 max-w-3xl relative animate-height overflow-hidden">
            <AnimatePresence initial={false}>
              <motion.div
                key={activeFaqGroup}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, position: 'absolute', top: 0, left: 0, right: 0 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="space-y-3"
              >
                {faq.groups[activeFaqGroup]?.items.map((item, itemIndex) => {
                  const key = `${activeFaqGroup}-${itemIndex}`;
                  const isOpen = openFaqItems[key];
                  return (
                    <div
                      key={itemIndex}
                      className={`rounded-lg border overflow-hidden transition-all duration-300 ease-out ${
                        isOpen
                          ? 'border-border bg-card shadow-sm'
                          : 'border-border/50 bg-card/50 hover:border-border/80 hover:bg-card/80'
                      }`}
                    >
                      <button
                        onClick={() => toggleFaq(activeFaqGroup, itemIndex)}
                        className="flex w-full items-center justify-between p-5 text-left group"
                      >
                        <span className={`font-medium pr-4 transition-colors duration-200 ${
                          isOpen ? 'text-foreground' : 'text-foreground/80 group-hover:text-foreground'
                        }`}>
                          {item.question}
                        </span>
                        <div className={`rounded-full p-1 transition-all duration-300 ease-out ${
                          isOpen ? 'bg-primary/10' : 'bg-transparent'
                        }`}>
                          <ChevronDown
                            className={`h-4 w-4 shrink-0 transition-all duration-300 ease-out ${
                              isOpen ? 'rotate-180 text-primary' : 'text-muted-foreground'
                            }`}
                          />
                        </div>
                      </button>
                      <div
                        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                          isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                        }`}
                      >
                        <div className="overflow-hidden">
                          <div className={`transition-opacity duration-300 ease-out ${
                            isOpen ? 'opacity-100' : 'opacity-0'
                          }`}>
                            <p className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">
                              {item.answer}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>
    </>
  );
}
