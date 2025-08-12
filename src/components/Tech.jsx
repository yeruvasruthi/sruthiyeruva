import React from 'react'

const groups = [
  {
    title: "Languages",
    items: ["Java", "Python", "C Programming", "C#", "JavaScript", "TypeScript", "SQL", "Swift", "Scala", "Kotlin", "R", "Go"]
  },
  {
    title: "OS and Databases",
    items: ["Windows", "MacOS", "Linux", "Unix", "MySQL"]
  },
  {
    title: "Infrastructure, Cloud & DevOps",
    items: ["Docker", "Kubernetes", "GitHub Actions", "Prometheus", "Grafana", "Ansible", "Infrastructure-as-Code", "Monitoring", "DevOps", "CI/CD", "AWS", "GCP", "Firebase", "RabbitMQ"]
  },
  {
    title: "Web Technologies",
    items: ["HTML", "CSS", "Angular", "React", "Node.js", "PHP", "MongoDB", "Sass", "Bootstrap"]
  }
]

export default function Tech() {
  return (
    <section id="tech" className="py-16 md:py-24 bg-stone-50">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <h2 className="text-3xl md:text-4xl font-semibold">Tech Stack</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-4">
          {groups.map((g) => (
            <div key={g.title} className="p-5 rounded-2xl bg-white ring-1 ring-stone-200 shadow-soft">
              <p className="font-medium">{g.title}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <span key={item} className="px-3 py-1 text-sm rounded-full bg-brand-50 text-brand-800 ring-1 ring-brand-200">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}