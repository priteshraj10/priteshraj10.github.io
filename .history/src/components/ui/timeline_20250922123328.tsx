"use client";
import {
  useScroll,
  useTransform,
  motion,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-gradient-to-b from-black via-slate-900/50 to-black font-sans px-0 md:px-8"
      ref={containerRef}
    >
      <div className="mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-4 text-white text-left bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
          My Professional Evolution
        </h2>
        <p className="text-white/80 text-sm md:text-base text-left">
          Discover the key milestones and achievements that have shaped my career in data science and AI.
        </p>
      </div>

      <div ref={ref} className="relative w-full pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-20 self-start md:w-auto">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full dark:bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 border-2 border-white/20 p-2 shadow-lg shadow-blue-500/30" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-16 md:text-4xl font-bold text-blue-200 dark:text-blue-200">
                {item.title}
              </h3>
            </div>

            <div className="relative flex-1 px-4 sm:px-6 lg:px-8 py-4 pl-10 sm:pl-16 md:pl-24 lg:pl-32">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500 pl-16">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
}; 