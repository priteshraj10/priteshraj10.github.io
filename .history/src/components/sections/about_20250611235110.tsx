"use client";

import { motion } from "framer-motion";
import { Timeline } from "@/components/ui/timeline";
import { workExperience } from "@/data/work-experience";

export function AboutSection() {
  const timelineData = workExperience.map((exp) => ({
    title: exp.period,
    content: (
      <div>
        <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          {exp.role} - {exp.description}
        </p>
        <div className="mb-8">
          {exp.achievements.map((achievement, index) => (
            <div key={index} className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ {achievement}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-4">
          {exp.images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          ))}
        </div>
      </div>
    ),
  }));

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-50 dark:bg-zinc-900">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100 mb-2">🚀 About Me</h3>
              <p className="text-lg text-zinc-600 dark:text-zinc-300">
                I&apos;m a Data Scientist and AI Product Builder passionate about leveraging technology to solve real-world problems. With expertise in machine learning, deep learning, and full-stack development, I focus on building scalable AI solutions that make a difference.
              </p>
              <h4 className="font-medium text-zinc-700 dark:text-zinc-200 mt-4">💡 What Drives Me</h4>
              <ul className="list-disc list-inside text-zinc-600 dark:text-zinc-300 text-base space-y-1">
                <li>Building innovative AI solutions for healthcare</li>
                <li>Contributing to open-source ML projects</li>
                <li>Mentoring aspiring data scientists</li>
                <li>Creating scalable, user-friendly products</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100 mb-4">
                  🛠️ Tech Stack
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-zinc-700 dark:text-zinc-200">AI/ML</h4>
                    <ul className="text-sm text-zinc-600 dark:text-zinc-300 space-y-1">
                      <li>PyTorch</li>
                      <li>TensorFlow</li>
                      <li>Scikit-learn</li>
                      <li>LangChain</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-zinc-700 dark:text-zinc-200">Languages</h4>
                    <ul className="text-sm text-zinc-600 dark:text-zinc-300 space-y-1">
                      <li>Python</li>
                      <li>JavaScript</li>
                      <li>SQL</li>
                      <li>MATLAB</li>
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
            className="mt-16"
          >
            <h3 className="text-3xl font-bold text-zinc-800 dark:text-zinc-100 mb-8 text-center">
              Professional Journey
            </h3>
            <div className="relative w-full overflow-clip">
              <Timeline data={timelineData} />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

  