"use client";

export function ProjectsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-50 dark:bg-zinc-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-zinc-800 dark:text-zinc-100 mb-8">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">AI Resume Parser</h3>
            <p className="text-zinc-600 dark:text-zinc-300 mb-2">Built an AI-powered tool to extract structured data from resumes using NLP and ML.</p>
            <a href="https://github.com/priteshraj10/ai-resume-parser" target="_blank" className="text-blue-600 dark:text-blue-400 underline">View on GitHub</a>
          </div>
          <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Data Science Portfolio</h3>
            <p className="text-zinc-600 dark:text-zinc-300 mb-2">A collection of data science projects, notebooks, and visualizations.</p>
            <a href="https://github.com/priteshraj10/data-science-portfolio" target="_blank" className="text-blue-600 dark:text-blue-400 underline">View on GitHub</a>
          </div>
        </div>
      </div>
    </section>
  );
}
