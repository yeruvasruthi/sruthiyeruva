// src/CommandK.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const items = [
  { label: "Home", to: "/" },
  { label: "Projects", to: "/#projects" },
  { label: "Email Sruthi", to: "mailto:yeruvasruthi1@gmail.com" }
];

export default function CommandK() {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const nav = useNavigate();
  const filtered = items.filter(i => i.label.toLowerCase().includes(q.toLowerCase()));

  useEffect(() => {
    function onKey(e) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault(); setOpen(o => !o);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/30 p-4" onClick={() => setOpen(false)}>
      <div className="max-w-lg mx-auto glass rounded-2xl p-4" onClick={(e) => e.stopPropagation()}>
        <input
          autoFocus value={q} onChange={(e)=>setQ(e.target.value)}
          placeholder="Type to jump…"
          className="w-full px-3 py-2 rounded-md ring-1 ring-stone-300 outline-none"
        />
        <div className="mt-3 space-y-1">
          {filtered.map(it => (
            <button
              key={it.to}
              className="w-full text-left px-3 py-2 rounded-md hover:bg-white"
              onClick={() => {
                setOpen(false);
                if (it.to.startsWith("/#")) window.location.href = it.to;
                else if (it.to.startsWith("mailto:")) window.location.href = it.to;
                else nav(it.to);
              }}
            >
              {it.label}
            </button>
          ))}
        </div>
        <div className="mt-2 text-xs text-stone-500">Press Esc to close • Cmd/Ctrl+K</div>
      </div>
    </div>
  );
}
