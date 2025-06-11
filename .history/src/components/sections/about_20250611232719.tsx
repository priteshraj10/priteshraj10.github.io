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
            {/* Removed: Hello World! I&apos;m Pritesh Raj 👋 */}
            {/* Removed: AI Architect &amp; Data Science Innovator 🚀 */}
            {/* Removed: Separator div */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100 mb-2">🚀 About Me</h3>
              <p className="text-lg text-zinc-600 dark:text-zinc-300">
                I&apos;m a passionate Data Scientist and AI Developer from India, on a mission to leverage technology for human advancement. Think of me as an AI architect who builds bridges between complex algorithms and real-world solutions.
              </p>
              <h4 className="font-medium text-zinc-700 dark:text-zinc-200 mt-4">💡 What Drives Me</h4>
              <ul className="list-disc list-inside text-zinc-600 dark:text-zinc-300 text-base space-y-1">
                <li>Building AI solutions that make a real difference</li>
                <li>Designing user-friendly interfaces for complex systems</li>
                <li>Contributing to open-source and community-driven projects</li>
                <li>Turning innovative ideas into scalable solutions</li>
              </ul>
              <h4 className="font-medium text-zinc-700 dark:text-zinc-200 mt-4">🌱 Current Focus</h4>
              <ul className="list-disc list-inside text-zinc-600 dark:text-zinc-300 text-base space-y-1">
                <li>Exploring cutting-edge Large Language Models</li>
                <li>Building scalable AI solutions for real-world impact</li>
                <li>Contributing to open-source AI projects</li>
                <li>Mentoring aspiring data scientists &amp; AI developers</li>
              </ul>
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
                  🛠️ Tech Stack
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-zinc-700 dark:text-zinc-200">AI/ML</h4>
                    <ul className="text-sm text-zinc-600 dark:text-zinc-300 space-y-1">
                      <li>TensorFlow</li>
                      <li>PyTorch</li>
                      <li>Scikit-learn</li>
                      <li>LangChain</li>
                    </ul>
                    <h4 className="font-medium text-zinc-700 dark:text-zinc-200 mt-2">Data Science</h4>
                    <ul className="text-sm text-zinc-600 dark:text-zinc-300 space-y-1">
                      <li>Pandas</li>
                      <li>NumPy</li>
                      <li>SQL</li>
                      <li>R</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-zinc-700 dark:text-zinc-200">Languages</h4>
                    <ul className="text-sm text-zinc-600 dark:text-zinc-300 space-y-1">
                      <li>Python</li>
                      <li>JavaScript</li>
                      <li>TypeScript</li>
                    </ul>
                    <h4 className="font-medium text-zinc-700 dark:text-zinc-200 mt-2">Backend</h4>
                    <ul className="text-sm text-zinc-600 dark:text-zinc-300 space-y-1">
                      <li>FastAPI</li>
                      <li>Flask</li>
                      <li>Django</li>
                      <li>Node.js</li>
                    </ul>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div>
                    <h4 className="font-medium text-zinc-700 dark:text-zinc-200">Frontend &amp; Mobile</h4>
                    <ul className="text-sm text-zinc-600 dark:text-zinc-300 space-y-1">
                      <li>Next.js</li>
                      <li>React</li>
                      <li>React Native</li>
                      <li>Tailwind CSS</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-zinc-700 dark:text-zinc-200">DevOps &amp; Tools</h4>
                    <ul className="text-sm text-zinc-600 dark:text-zinc-300 space-y-1">
                      <li>Docker</li>
                      <li>Git</li>
                      <li>AWS</li>
                    </ul>
                    <h4 className="font-medium text-zinc-700 dark:text-zinc-200 mt-2">Databases &amp; Queues</h4>
                    <ul className="text-sm text-zinc-600 dark:text-zinc-300 space-y-1">
                      <li>MongoDB</li>
                      <li>PostgreSQL</li>
                      <li>Redis</li>
                      <li>Kafka</li>
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
            <h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100 mb-2">💬 Let&apos;s Connect!</h3>
            <p className="text-base text-zinc-600 dark:text-zinc-300 mb-4">
              I&apos;m always interested in collaborating on AI/ML projects, data science innovations, or breakthrough startup ideas. Let&apos;s connect and make something great together!
            </p>
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