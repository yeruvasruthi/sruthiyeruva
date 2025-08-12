// src/components/ProjectDetail.jsx
import React, { useEffect, useMemo } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { projects } from '../data/projects'

export default function ProjectDetail() {
  const { slug } = useParams()
  const nav = useNavigate()

  const project = useMemo(() => projects.find(p => p.slug === slug), [slug])
  const more = useMemo(() => projects.filter(p => p.slug !== slug), [slug])

  useEffect(() => {
    document.title = project
      ? `${project.title} • Sruthi Yeruva`
      : 'Project not found • Sruthi Yeruva'
  }, [project])

  if (!project) {
    return (
      <div className="min-h-screen bg-rose">
        <div className="max-w-3xl mx-auto px-6 py-20">
          <p className="text-2xl font-semibold">Project not found</p>
          <p className="mt-2 text-stone-600">
            The project you’re looking for doesn’t exist or has been moved.
          </p>
          <button
            onClick={() => nav('/')}
            className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-600 text-white shadow-glow"
          >
            ← Back to home
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-peach">
      {/* Top nav crumb */}
      <div className="max-w-5xl mx-auto px-6 md:px-10 pt-10">
        <Link to="/" className="text-sm underline text-brand-700">← Back to home</Link>
      </div>

      {/* Header */}
      <header className="max-w-5xl mx-auto px-6 md:px-10 py-6">
        <h1 className="text-3xl md:text-5xl font-semibold text-ink">{project.title}</h1>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.tags.map(t => (
            <span key={t} className="px-3 py-1 text-xs rounded-full bg-white ring-1 ring-stone-200">
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        {(project.demo || project.repo) && (
          <div className="mt-4 flex gap-3">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank" rel="noreferrer"
                className="px-4 py-2 rounded-xl bg-brand-600 text-white shadow-glow"
              >
                Live demo
              </a>
            )}
            {project.repo && (
              <a
                href={project.repo}
                target="_blank" rel="noreferrer"
                className="px-4 py-2 rounded-xl glass ring-1 ring-white/30"
              >
                GitHub Repo
              </a>
            )}
          </div>
        )}
      </header>

      {/* Hero media */}
      <section className="max-w-5xl mx-auto px-6 md:px-10">
        <div className="rounded-2xl ring-1 ring-stone-200 overflow-hidden shadow-soft">
          {project.image ? (
            <img
              src={project.image}
              alt={`${project.title} screenshot`}
              className="w-full h-auto block"
              loading="lazy"
            />
          ) : (
            <div className="aspect-video w-full bg-gradient-to-br from-brand-50 to-stone-100" />
          )}
        </div>
      </section>

      {/* Narrative + dynamic sections */}
      <article className="max-w-5xl mx-auto px-6 md:px-10 py-8">
        {project.long && (
          <p className="leading-relaxed text-stone-800">
            {project.long}
          </p>
        )}

        {/* Impact */}
        {project.impact?.length > 0 && (
          <section className="mt-8">
            <h3 className="text-xl font-semibold">Impact</h3>
            <div className="mt-3 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {project.impact.map((i, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="p-4 rounded-xl glass ring-1 ring-white/30"
                >
                  <p className="text-sm text-stone-800">{i}</p>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* Architecture */}
        {project.architecture?.length > 0 && (
          <section className="mt-8">
            <h3 className="text-xl font-semibold">Architecture</h3>
            <ul className="mt-3 list-disc pl-6 text-stone-700 space-y-1">
              {project.architecture.map((i) => <li key={i}>{i}</li>)}
            </ul>
          </section>
        )}

        {/* Key Decisions */}
        {project.decisions?.length > 0 && (
          <section className="mt-8">
            <h3 className="text-xl font-semibold">Key Decisions</h3>
            <ul className="mt-3 list-disc pl-6 text-stone-700 space-y-1">
              {project.decisions.map((i) => <li key={i}>{i}</li>)}
            </ul>
          </section>
        )}

        {/* Sticky CTA */}
        <div className="sticky bottom-4 mt-10 flex justify-end">
          <a
            href="/Sruthi_Yeruva_Resume.pdf"
            className="px-5 py-3 rounded-xl bg-brand-600 text-white shadow-glow"
          >
            Resume
          </a>
        </div>
      </article>

      {/* More projects */}
      {more.length > 0 && (
        <section className="bg-lavender py-12 mt-8">
          <div className="max-w-6xl mx-auto px-6 md:px-10">
            <h2 className="text-2xl md:text-3xl font-semibold">More projects</h2>
            <div className="mt-6 grid md:grid-cols-3 gap-6">
              {more.map(p => (
                <article key={p.slug} className="p-5 rounded-2xl bg-white ring-1 ring-stone-200 hover:shadow-soft transition">
                  <div className="aspect-video rounded-xl overflow-hidden ring-1 ring-stone-200">
                    {p.image ? (
                      <img
                        src={p.image}
                        alt={`${p.title} screenshot`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-brand-50 to-stone-100" />
                    )}
                  </div>
                  <h3 className="mt-3 text-base font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm text-stone-700 line-clamp-3">{p.desc}</p>
                  <div className="mt-3">
                    <Link to={`/project/${p.slug}`} className="text-sm underline text-brand-700">
                      View details
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Footer spacer */}
      <div className="h-8" />
    </div>
  )
}
