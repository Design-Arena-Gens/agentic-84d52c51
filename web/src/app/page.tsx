export default function Home() {
  const features = [
    {
      title: "Build full-stack apps",
      desc: "Scaffold, code, and ship with modern Next.js, API routes, and Prisma/ORMs.",
    },
    {
      title: "Debug & refactor",
      desc: "Find bugs, improve readability, and optimize performance with safe edits.",
    },
    {
      title: "Generate UI & UX",
      desc: "Design responsive components, Tailwind styles, and delightful interactions.",
    },
    {
      title: "Document & explain",
      desc: "Create concise docs, summaries, and code walkthroughs tailored to your stack.",
    },
    {
      title: "Automate deploys",
      desc: "Set up CI, configure Vercel, and verify production health automatically.",
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      <main className="mx-auto max-w-5xl px-6 py-20">
        <header className="mb-12 text-center sm:text-left">
          <h1 className="text-4xl font-semibold tracking-tight text-black dark:text-zinc-50">
            What you can do
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-7 text-zinc-600 dark:text-zinc-400">
            Explore practical things I can build and automate for you ? from code to
            deploy. No guesswork, just results.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              className="inline-flex items-center justify-center rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
              href="https://agentic-84d52c51.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Live Example
            </a>
            <a
              className="inline-flex items-center justify-center rounded-full border border-black/10 px-5 py-3 text-sm font-medium text-black hover:bg-black/5 dark:border-white/20 dark:text-white dark:hover:bg-white/10"
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Next.js Docs
            </a>
          </div>
        </header>

        <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-white/10 dark:bg-zinc-900"
            >
              <h3 className="text-lg font-semibold text-black dark:text-zinc-50">
                {f.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                {f.desc}
              </p>
            </div>
          ))}
        </section>

        <footer className="mt-16 rounded-2xl border border-dashed border-black/10 p-6 text-center text-sm text-zinc-500 dark:border-white/10 dark:text-zinc-400">
          Built with Next.js App Router, TypeScript, and Tailwind.
        </footer>
      </main>
    </div>
  );
}
