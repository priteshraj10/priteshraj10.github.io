"use client";

import { motion } from "framer-motion";
import { Timeline } from "@/components/ui/timeline";
import { workExperience } from "@/data/work-experience";
import { education, EducationEntry } from "@/data/education";
import Image from "next/image";
import { getPublicRepos, GitHubRepo } from "@/lib/github";
import { useEffect, useState } from "react";

export function AboutSection() {
  const timelineData = workExperience.map((exp) => ({
    title: exp.period,
    content: (
      <article className="mb-12" aria-label={`Work experience: ${exp.role} at ${exp.description}`}> 
        <header>
          <h3 className="mb-4 text-2xl font-bold text-blue-200">{exp.role}</h3>
          <p className="mb-4 text-lg text-white">{exp.description}</p>
        </header>
        <ul className="mb-8 list-disc list-inside text-white text-base md:text-lg pl-4">
          {exp.achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
        <div className="grid grid-cols-2 gap-4">
          {exp.images.map((image, index) => (
            <figure key={index} className="flex flex-col items-center">
              <Image
                src={image.src}
                alt={image.alt}
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover shadow-lg md:h-44 lg:h-60"
              />
              <figcaption className="text-xs text-gray-300 mt-2">{image.alt}</figcaption>
            </figure>
          ))}
        </div>
      </article>
    ),
  }));

  const educationTimelineData = education.map((edu: EducationEntry, idx) => ({
    title: edu.period,
    content: (
      <motion.article
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: idx * 0.15 }}
        viewport={{ once: true }}
        className="relative mb-16 bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl shadow-2xl border-2 border-blue-700/60 p-10 flex flex-col md:flex-row items-center gap-10 hover:border-blue-400 hover:shadow-blue-500/40 transition-all duration-300"
        aria-label={`Education: ${edu.institution} - ${edu.program}`}
      >
        {/* Timeline accent */}
        <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-blue-500/80 to-blue-300/30 rounded-full -ml-6 hidden md:block" />
        <div className="flex flex-col items-center min-w-[120px] z-10">
          <span className="inline-block mb-4 px-5 py-2 rounded-full bg-blue-600 text-white text-lg font-bold shadow-lg border-2 border-blue-300 tracking-wide uppercase">
            {edu.period}
          </span>
          <Image
            src={edu.image}
            alt={edu.institution + ' logo'}
            width={100}
            height={100}
            className="rounded-2xl bg-white p-2 shadow-xl border-2 border-slate-300 object-contain"
          />
        </div>
        <div className="flex-1 min-w-0 flex flex-col items-center md:items-start text-center md:text-left z-10">
          <a
            href={edu.website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl md:text-4xl font-extrabold text-blue-200 mb-1 leading-tight drop-shadow-lg hover:underline hover:text-blue-400 transition-colors duration-200"
          >
            {edu.institution}
          </a>
          <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
            <span className="text-lg md:text-xl text-white/80 font-semibold">{edu.degree}</span>
            <span className="hidden md:inline text-blue-400 mx-2">|</span>
            <span className="text-base md:text-lg text-blue-300 font-medium">{edu.location}</span>
          </div>
          <p className="text-xl md:text-2xl text-white opacity-95 mb-2 font-medium">{edu.program}</p>
          {edu.achievements && edu.achievements.length > 0 && (
            <ul className="list-disc list-inside text-white/80 text-base md:text-lg mt-2 space-y-1">
              {edu.achievements.map((ach, i) => (
                <li key={i}>{ach}</li>
              ))}
            </ul>
          )}
        </div>
      </motion.article>
    ),
  }));

  // GitHub Projects State
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  useEffect(() => {
    getPublicRepos("priteshraj10").then(setRepos);
  }, []);

  return (
    <section className="py-20 px-4 flex flex-col items-center max-w-6xl mx-auto" aria-label="About Pritesh Raj">
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h2 className="text-5xl font-bold text-white mb-8 text-center">
            Professional Journey
          </h2>
          <div className="relative w-full overflow-clip flex justify-center">
            <div className="w-full max-w-4xl">
              <Timeline data={timelineData} />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h2 className="text-5xl font-bold text-white mb-8 text-center">
            Education
          </h2>
          <div className="relative w-full overflow-clip flex justify-center">
            <div className="w-full max-w-4xl">
              <Timeline data={educationTimelineData} />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <h2 className="text-5xl font-bold text-white mb-8 text-center">
            GitHub Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {repos.length === 0 && (
              <div className="col-span-full text-center text-white/70">Loading projects...</div>
            )}
            {repos.map((repo) => (
              <a
                key={repo.html_url}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-xl border border-slate-700 p-6 flex flex-col items-center hover:border-blue-400 hover:shadow-blue-500/30 transition-all duration-300"
              >
                {/* Try to show a preview image or gif if available, else fallback */}
                <img
                  src={`https://raw.githubusercontent.com/priteshraj10/${repo.name}/main/preview.gif`}
                  alt={repo.name + " preview"}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://raw.githubusercontent.com/priteshraj10/${repo.name}/main/preview.png`;
                    (e.target as HTMLImageElement).onerror = () => {
                      (e.target as HTMLImageElement).src = "/window.svg";
                    };
                  }}
                  className="w-full h-40 object-contain rounded-xl bg-white mb-4 border border-slate-200 shadow"
                />
                <h3 className="text-xl font-bold text-blue-200 mb-2 text-center group-hover:underline">{repo.name}</h3>
                <p className="text-white/90 text-base mb-2 text-center line-clamp-3 min-h-[60px]">{repo.description}</p>
                <div className="flex items-center justify-center gap-4 mt-auto">
                  <span className="px-3 py-1 rounded-full bg-blue-700/80 text-white text-xs font-semibold">
                    {repo.language || "Other"}
                  </span>
                  <span className="flex items-center gap-1 text-yellow-400 text-xs font-semibold">
                    ★ {repo.stargazers_count}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

  