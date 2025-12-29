"use client";

import { motion } from "framer-motion";
import { workExperience } from "@/data/work-experience";
import { education, EducationEntry } from "@/data/education";
import Image from "next/image";
import { getPublicRepos, GitHubRepo } from "@/lib/github";
import { useEffect, useState } from "react";
import { GITHUB_CONFIG } from "@/lib/constants";
import { ArrowUpRight } from "lucide-react";

export function AboutSection() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const fetchedRepos = await getPublicRepos(GITHUB_CONFIG.username);
        setRepos(fetchedRepos);
      } catch (err) {
        console.error("Error fetching repos:", err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchRepos();
  }, []);

  return (
    <div className="grid md:grid-cols-2 gap-16">
      {/* Left Column - Work */}
      <div>
        <h3 className="text-zinc-400 text-sm uppercase tracking-wider mb-8">Work</h3>
        <div className="space-y-8">
          {workExperience.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-white font-medium">{exp.role}</h4>
                <span className="text-zinc-600 text-sm">{exp.period}</span>
              </div>
              <p className="text-zinc-500 text-sm mb-3">{exp.description}</p>
              <ul className="space-y-1">
                {exp.achievements.slice(0, 2).map((achievement, i) => (
                  <li key={i} className="text-sm text-zinc-600">
                    {achievement}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Right Column - Education + Open Source */}
      <div className="space-y-16">
        {/* Education */}
        <div>
          <h3 className="text-zinc-400 text-sm uppercase tracking-wider mb-8">Education</h3>
          <div className="space-y-6">
            {education.map((edu: EducationEntry, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4"
              >
                <Image
                  src={edu.image}
                  alt={edu.institution}
                  width={40}
                  height={40}
                  className="rounded bg-white p-1 object-contain"
                />
                <div className="flex-1">
                  <div className="flex justify-between">
                    <h4 className="text-white font-medium">{edu.institution}</h4>
                    <span className="text-zinc-600 text-sm">{edu.period}</span>
                  </div>
                  <p className="text-zinc-500 text-sm">{edu.program}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Open Source */}
        <div>
          <h3 className="text-zinc-400 text-sm uppercase tracking-wider mb-8">Open Source</h3>
          <div className="space-y-4">
            {isLoading ? (
              <p className="text-zinc-600 text-sm">Loading...</p>
            ) : (
              repos.slice(0, 3).map((repo, idx) => (
                <motion.a
                  key={repo.html_url}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="group flex items-center justify-between py-3 border-b border-zinc-800 hover:border-zinc-600 transition-colors"
                >
                  <div>
                    <h4 className="text-white group-hover:text-zinc-300 transition-colors">{repo.name}</h4>
                    <p className="text-zinc-600 text-sm">{repo.language} · ★ {repo.stargazers_count}</p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-600 group-hover:text-white transition-colors" />
                </motion.a>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}