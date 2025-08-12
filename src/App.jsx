// src/App.jsx
import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Tech from "./components/Tech.jsx";
import Projects from "./components/Projects.jsx";
import Footer from "./components/Footer.jsx";
import CommandK from "./CommandK.jsx";


const ProjectDetail = lazy(() => import("./components/ProjectDetail.jsx"));

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Tech />
      <Projects />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <>
      <CommandK />
      <Suspense fallback={<div className="min-h-screen grid place-items-center text-stone-500">Loading…</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:slug" element={<ProjectDetail />} />
        </Routes>
      </Suspense>
    </>
  );
}
