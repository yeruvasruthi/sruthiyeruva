// src/components/Hero.jsx
import React from 'react'

export default function Hero() {
  return (
    <header id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-brand-200 blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-brand-100 blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-24 grid md:grid-cols-[1.2fr,1fr] gap-10 items-center">
        <div>
          <span className="inline-block px-3 py-1 text-xs rounded-full bg-brand-50 text-brand-700 ring-1 ring-brand-200">
            Open to SDE roles
          </span>

          <h1 className="mt-5 text-4xl md:text-6xl font-semibold tracking-tight">
            Hi, I'm <span className="text-brand-700">Sruthi Yeruva</span>
          </h1>

          <p className="mt-4 text-lg md:text-xl text-stone-600 leading-relaxed">
            Software Engineer with a love for clean code, thoughtful UI, and systems that scale. Java • React • Cloud.
          </p>

          {/* CTAs */}
          <div className="mt-6 flex gap-3 flex-wrap">
            <a href="#projects" className="px-5 py-3 rounded-xl bg-brand-600 text-white shadow-soft hover:translate-y-[-1px] transition-transform">
              See projects
            </a>
            <a href="/Sruthi_Yeruva_Resume.pdf" className="px-5 py-3 rounded-xl ring-1 ring-stone-300 hover:bg-stone-100">
              Resume
            </a>
            <a href="mailto:yeruvasruthi1@gmail.com" className="px-5 py-3 rounded-xl ring-1 ring-stone-300 hover:bg-stone-100">
              Email me
            </a>
          </div>

          {/* Social + email */}
          <div className="mt-4 text-sm text-stone-600 flex flex-wrap items-center gap-x-3 gap-y-2">
            <a className="underline" href="https://www.linkedin.com/in/sruthi-yeruva/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <span>•</span>
            <a className="underline" href="https://github.com/yeruvasruthi" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <span>•</span>
            <a href="mailto:yeruvasruthi1@gmail.com" className="rounded-full px-3 py-1 bg-white ring-1 ring-stone-300">
              yeruvasruthi1@gmail.com
            </a>
          </div>
        </div>

        <div className="justify-self-center">
          <img
            src="/profile.jpg"
            alt="Sruthi smiling"
            className="w-64 h-64 md:w-80 md:h-80 rounded-2xl object-cover shadow-soft ring-1 ring-stone-200"
          />
        </div>
      </div>
    </header>
  )
}
