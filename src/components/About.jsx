import React from 'react'

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-blush">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <h2 className="text-3xl md:text-4xl font-semibold">About</h2>
        <p className="mt-4 text-stone-700 leading-relaxed">
        I am a curious person, not just about tech, but about how things work in general. That curiosity is what brought me from India to Maine, where I’ve graduated with my Master’s degree in Computer Science at Northeastern University.
        Previously, I worked at Optum Global Solutions, where I focused on enhancing application performance using C#, SQL, and DevOps practices. I’ve also had the opportunity to work on a few personal projects during my masters and I enjoyed doing each of those,  one of the team projects was a MERN stack-based cloud expense tracker I deployed on AWS, and another was an AI insights dashboard with Firebase auth and reusable React components. For me, these projects are where learning comes alive.
        Outside the world of code, you’ll often find me journaling, lost in a novel, or hunting down my next favorite cozy café. I dabble in podcasts and audiobooks, and when Formula 1 season is on, I’m all in, every race weekend, no exceptions. That mix of intensity and precision on the track? I carry it into my work, showing up with intention, sincerity, and a dash of fun. Whether in solo projects or team collaborations, I aim to bring calm focus, thoughtful execution, and just enough spark to keep things exciting.
        </p>
        <div className="mt-6 grid sm:grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl ring-1 ring-stone-200 bg-stone-50">
            <p className="font-medium">Previously @ Optum Global Solutions (C#, SQL, DevOps)</p>
            <p className="text-sm text-stone-600 mt-1">Improved failure rates by 70% and cut post‑release defects by 30%.</p>
          </div>
          <div className="p-5 rounded-2xl ring-1 ring-stone-200 bg-stone-50">
            <p className="font-medium">Core strengths</p>
            <p className="text-sm text-stone-600 mt-1">Java, React, TypeScript, Spring Boot, Node.js, AWS, Docker, CI/CD, Firebase</p>
          </div>
        </div>
      </div>
    </section>
  )
}