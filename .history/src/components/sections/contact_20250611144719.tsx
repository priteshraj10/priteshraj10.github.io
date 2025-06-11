"use client";

export function ContactSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-zinc-800 dark:text-zinc-100 mb-4">Contact</h2>
        <p className="text-lg text-zinc-600 dark:text-zinc-300 mb-6">
          Interested in collaborating or want to get in touch? Reach out!
        </p>
        <a href="mailto:priteshraj10@gmail.com" className="inline-block px-6 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition">
          Email Me
        </a>
        <div className="mt-6 flex justify-center gap-4">
          <a href="https://github.com/priteshraj10" target="_blank" className="text-zinc-600 dark:text-zinc-300 hover:text-blue-600">GitHub</a>
          <a href="https://linkedin.com/in/priteshraj10" target="_blank" className="text-zinc-600 dark:text-zinc-300 hover:text-blue-600">LinkedIn</a>
        </div>
      </div>
    </section>
  );
}
