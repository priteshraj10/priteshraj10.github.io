"use client";

import { motion } from "framer-motion";
import { Timeline } from "@/components/ui/timeline";
import { workExperience } from "@/data/work-experience";
import { education, EducationEntry } from "@/data/education";
import Image from "next/image";

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

  const educationTimelineData = education.map((edu: EducationEntry) => ({
    title: edu.period,
    content: (
      <article className="mb-12" aria-label={`Education: ${edu.institution} - ${edu.program}`}> 
        <header className="flex items-center gap-4 mb-4">
          <Image
            src={edu.image}
            alt={edu.institution + ' logo'}
            width={48}
            height={48}
            className="rounded-full bg-white p-1 shadow-md"
          />
          <div>
            <h3 className="text-2xl font-bold text-blue-200">{edu.institution}</h3>
            <p className="text-lg text-white">{edu.program}</p>
          </div>
        </header>
      </article>
    ),
  }));

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
      </div>
    </section>
  );
}

  