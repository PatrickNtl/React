import React, { useEffect, useState } from 'react';

export default function App() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "dark" : ""}>
      <div className="min-h-screen bg-white text-gray-900 transition-colors duration-300 dark:bg-gray-950 dark:text-gray-100">
        {/* Background */}
        <div className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute left-1/2 top-[-10%] h-[500px] w-[600px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-indigo-500/20 via-fuchsia-500/20 to-rose-500/25 blur-3xl" />
        </div>

        {/* Navbar */}
        <header className="sticky top-0 z-30 backdrop-blur bg-white/70 dark:bg-gray-950/60">
          <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
            <div className="flex items-center gap-2">
              <div className="grid h-8 w-8 place-items-center rounded-xl bg-gradient-to-tr from-indigo-600 to-rose-600 text-white">
                <Sparkles className="h-4 w-4" />
              </div>
              <span className="text-base font-semibold tracking-tight">GlowUI</span>
            </div>

            <div className="hidden items-center gap-1 md:flex">
              <div className="group flex items-center">
                <NavLink>Features</NavLink>
              </div>
              <div className="group flex items-center">
                <NavLink>Showcase</NavLink>
              </div>
              <div className="group flex items-center">
                <NavLink>Pricing</NavLink>
              </div>
              <div className="group flex items-center">
                <NavLink>Contact</NavLink>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                className="rounded-xl border border-gray-300 p-2 transition-colors duration-300 hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-gray-800"
                onClick={() => setDark((d) => !d)}
              >
                {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </button>
              <button
                className="md:hidden rounded-xl border border-gray-300 p-2 transition-colors duration-300 hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-gray-800"
                onClick={() => setOpen((o) => !o)}
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </nav>

          {open && (
            <div className="mx-auto block max-w-7xl px-4 pb-4 md:hidden">
              <div className="grid gap-2 rounded-2xl border border-gray-200 p-3 dark:border-gray-800">
                {["Features", "Showcase", "Pricing", "Contact"].map((x) => (
                  <a
                    key={x}
                    href="#"
                    className="rounded-xl px-3 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                  >
                    {x}
                  </a>
                ))}
              </div>
            </div>
          )}
        </header>

        {/* Hero Section */}
        <section className="mx-auto max-w-7xl px-4 pb-10 pt-14 sm:px-6 sm:pt-16">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <span className="inline-flex items-center rounded-full border border-indigo-200 px-3 py-1 text-xs font-medium text-indigo-700 backdrop-blur dark:border-indigo-900/40 dark:text-indigo-300">
                <span className="mr-2 inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-indigo-500" />
                New: Delightful hover effects
              </span>
              <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
                Build modern UIs with
                <span className="block bg-gradient-to-tr from-indigo-600 via-fuchsia-600 to-rose-600 bg-clip-text text-transparent">
                  Tailwind CSS transitions
                </span>
              </h1>
              <p className="mt-4 max-w-xl text-base leading-7 text-gray-600 dark:text-gray-300">
                A sleek starter that demonstrates buttons, cards, image overlays, and animated nav links.
                Copy-paste components and customize to your brand.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <PrimaryButton>
                  Get Started
                </PrimaryButton>
                <GhostButton>
                  View Docs
                </GhostButton>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}