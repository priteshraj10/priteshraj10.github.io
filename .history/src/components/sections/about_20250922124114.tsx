"use client";

import { motion } from "framer-motion";
import { Timeline } from "@/components/ui/timeline";
import { workExperience } from "@/data/work-experience";
import { education, EducationEntry } from "@/data/education";
import Image from "next/image";
import { getPublicRepos, GitHubRepo } from "@/lib/github";
import { useEffect, useState } from "react";
import { GITHUB_CONFIG } from "@/lib/constants";

export function AboutSection() {
  const timelineData = workExperience.map((exp) => ({
    title: exp.period,
    content: (
      <motion.article
        whileHover={{ scale: 1.025, boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.18)' }}
        transition={{ type: 'spring', stiffness: 220, damping: 18 }}
        className="mb-12 bg-gradient-to-br from-slate-900/90 to-slate-800/80 rounded-2xl shadow-xl border border-blue-700/30 p-10 flex flex-col items-center text-center max-w-3xl mx-auto gap-4 hover:border-blue-400 hover:shadow-blue-500/30 transition-all duration-300"
        aria-label={`Work experience: ${exp.role} at ${exp.description}`}
      >
        <header className="w-full flex flex-col items-center">
          <h3 className="mb-2 text-3xl font-extrabold text-blue-200 leading-tight drop-shadow-lg w-full break-words">{exp.role}</h3>
          <p className="mb-4 text-xl text-white font-semibold opacity-90 w-full break-words">{exp.description}</p>
        </header>
        <ul className="mb-0 list-disc list-inside text-white text-base md:text-lg pl-4 space-y-2 w-full text-left">
          {exp.achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      </motion.article>
    ),
  }));

  const educationTimelineData = education.map((edu: EducationEntry) => ({
    title: edu.period,
    content: (
      <article className="mb-12 flex flex-col md:flex-row items-center md:items-start gap-6" aria-label={`Education: ${edu.institution} - ${edu.program}`}> 
        <div className="flex-shrink-0 flex flex-col items-center md:items-start w-28">
          <Image
            src={edu.image}
            alt={edu.institution + ' logo'}
            width={64}
            height={64}
            className="rounded-xl bg-white p-2 shadow-md border border-slate-300 object-contain mb-2"
          />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-2xl font-bold text-blue-200 mb-2 leading-tight">{edu.institution}</h3>
          <p className="text-lg text-white opacity-90 mb-0 font-medium">{edu.program}</p>
        </div>
      </article>
    ),
  }));

  // GitHub Projects State
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const fetchedRepos = await getPublicRepos(GITHUB_CONFIG.username);
        setRepos(fetchedRepos);
      } catch (err) {
        setError("Failed to load GitHub projects");
        console.error("Error fetching repos:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return (
    <section className="py-20 px-4 flex flex-col items-center max-w-6xl mx-auto" aria-label="About Pritesh Raj">
      <div className="w-full flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 w-full flex flex-col items-center"
        >
          <h2 className="text-5xl font-bold text-white mb-8 text-center w-full">
            Professional Journey
          </h2>
          <div className="relative w-full overflow-clip flex justify-center">
            <div className="w-full max-w-4xl flex flex-col items-center">
              <Timeline data={timelineData} />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-24 w-full flex flex-col items-center"
        >
          <h2 className="text-5xl font-bold text-white mb-8 text-center w-full">
            Education
          </h2>
          <div className="relative w-full overflow-clip flex justify-center">
            <div className="w-full max-w-4xl flex flex-col items-center">
              <Timeline data={educationTimelineData} />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          viewport={{ once: true }}
          className="mt-24 w-full flex flex-col items-center"
        >
          <h2 className="text-5xl font-bold text-white mb-8 text-center w-full">
            GitHub Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl mx-auto">
            {isLoading && (
              <div className="col-span-full text-center text-white/70">
                <div className="inline-flex items-center gap-2">
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-500"></div>
                  Loading projects...
                </div>
              </div>
            )}
            {error && (
              <div className="col-span-full text-center text-red-400">
                <p>{error}</p>
                <button 
                  onClick={() => window.location.reload()} 
                  className="mt-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                >
                  Retry
                </button>
              </div>
            )}
            {!isLoading && !error && repos.length === 0 && (
              <div className="col-span-full text-center text-white/70">
                No projects found
              </div>
            )}
            {!isLoading && !error && repos.map((repo) => (
              <motion.a
                key={repo.html_url}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-br from-slate-800/90 to-slate-900/90 rounded-2xl shadow-xl border border-slate-700/50 p-6 flex flex-col items-center hover:border-blue-400/50 hover:shadow-blue-500/20 transition-all duration-300 backdrop-blur-sm"
                whileHover={{ scale: 1.02, y: -5 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {/* Try to show a preview image or gif if available, else fallback */}
                <div className="relative w-full h-40 mb-4 rounded-xl bg-white/10 border border-slate-200/20 shadow overflow-hidden">
                  <img
                    src={`https://raw.githubusercontent.com/${GITHUB_CONFIG.username}/${repo.name}/main/preview.gif`}
                    alt={repo.name + " preview"}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://raw.githubusercontent.com/${GITHUB_CONFIG.username}/${repo.name}/main/preview.png`;
                      (e.target as HTMLImageElement).onerror = () => {
                        (e.target as HTMLImageElement).src = "/window.svg";
                      };
                    }}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-blue-200 mb-2 text-center group-hover:text-blue-100 transition-colors">{repo.name}</h3>
                <p className="text-white/80 text-sm mb-4 text-center line-clamp-3 min-h-[60px]">{repo.description || "No description available"}</p>
                <div className="flex items-center justify-center gap-4 mt-auto">
                  <span className="px-3 py-1 rounded-full bg-blue-600/80 text-white text-xs font-semibold">
                    {repo.language || "Other"}
                  </span>
                  <span className="flex items-center gap-1 text-yellow-400 text-xs font-semibold">
                    ★ {repo.stargazers_count}
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

  