"use client";

import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

export function AboutSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="text-center">
            <h2 className={cn(
              "text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl",
              "mb-4"
            )}>
              About Me
            </h2>
            <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <p className="text-lg text-zinc-600 dark:text-zinc-300">
                I&apos;m a passionate software developer with a keen eye for creating elegant solutions in the least amount of time. I specialize in building responsive web applications using modern technologies.
              </p>
              <p className="text-lg text-zinc-600 dark:text-zinc-300">
                With a strong foundation in both frontend and backend development, I strive to create seamless user experiences while maintaining clean and efficient code.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="bg-zinc-50 dark:bg-zinc-800 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100 mb-4">
                  Skills & Expertise
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium text-zinc-700 dark:text-zinc-200">Frontend</h4>
                    <ul className="text-sm text-zinc-600 dark:text-zinc-300 space-y-1">
                      <li>• React / Next.js</li>
                      <li>• TypeScript</li>
                      <li>• Tailwind CSS</li>
                      <li>• Responsive Design</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium text-zinc-700 dark:text-zinc-200">Backend</h4>
                    <ul className="text-sm text-zinc-600 dark:text-zinc-300 space-y-1">
                      <li>• Node.js</li>
                      <li>• Python</li>
                      <li>• REST APIs</li>
                      <li>• Database Design</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center pt-8"
          >
            <a
              href="#contact"
              className={cn(
                "inline-flex items-center justify-center px-6 py-3",
                "text-base font-medium rounded-md text-white",
                "bg-blue-600 hover:bg-blue-700",
                "transition-colors duration-200",
                "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              )}
            >
              Get in Touch
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 