// src/components/Hero.jsx
import React from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <header id="home" className="relative overflow-hidden mesh">
      {/* Floating blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          initial={{ y: 20, opacity: .4 }} animate={{ y: 0, opacity: .8 }}
          transition={{ duration: 6, repeat: Infinity, repeatType: 'reverse' }}
          className="absolute -top-24 -right-20 w-[28rem] h-[28rem] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(closest-side, #b7bff7, transparent)' }}
        />
        <motion.div
          initial={{ y: -20, opacity: .3 }} animate={{ y: 0, opacity: .7 }}
          transition={{ duration: 7, repeat: Infinity, repeatType: 'reverse' }}
          className="absolute -bottom-28 -left-16 w-[26rem] h-[26rem] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(closest-side, #ffd6e7, transparent)' }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-10 py-20 grid md:grid-cols-[1.2fr,1fr] gap-10 items-center">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
            className="inline-block px-3 py-1 text-xs rounded-full bg-white/70 ring-1 ring-stone-200"
          >
            Open to SDE roles
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .05 }}
            className="mt-5 text-5xl md:text-7xl font-semibold tracking-tight"
          >
            Hi, I’m <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-600 to-purple-500">Sruthi</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .1 }}
            className="mt-4 text-lg md:text-xl text-stone-700 max-w-xl"
          >
            I transform ideas into elegant, high-performing software, from concept to cloud. 
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .15 }}
            className="mt-6 flex gap-3"
          >
            <a href="#projects" className="px-5 py-3 rounded-xl bg-brand-600 text-white shadow-glow hover:translate-y-[-1px] transition">See projects</a>
            <a href="/Sruthi_Yeruva_Resume.pdf" className="px-5 py-3 rounded-xl glass ring-1 ring-white/30">Resume</a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: .95 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: .2 }}
          className="justify-self-center"
        >
          <motion.img
            src="/profile.jpg" alt="Sruthi"
            className="w-72 h-72 md:w-80 md:h-80 rounded-2xl object-cover shadow-soft ring-1 ring-stone-200"
            animate={{ y: [0, -6, 0] }} transition={{ duration: 6, repeat: Infinity }}
          />
        </motion.div>
      </div>
    </header>
  )
}
