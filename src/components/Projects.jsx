import React from 'react'
import { Link } from 'react-router-dom'
import TiltCard from './ui/TiltCard'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <h2 className="text-3xl md:text-4xl font-semibold">Projects</h2>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <TiltCard key={p.slug}>
              <article className="group">
                {/* Thumbnail (uses real image when provided) */}
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

                <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-stone-700 leading-relaxed">{p.desc}</p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="px-2 py-1 text-xs rounded-full bg-white ring-1 ring-stone-200">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-4">
                  <Link to={`/project/${p.slug}`} className="text-sm underline text-brand-700">
                    View details
                  </Link>
                </div>
              </article>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  )
}
