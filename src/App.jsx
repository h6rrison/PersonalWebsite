import React, { useState, useEffect, useRef, useCallback } from "react";
import { Mail, ArrowUpRight, Terminal } from "lucide-react";

function Github(props) {
  return (
    <svg viewBox="0 0 24 24" width={props.size || 18} height={props.size || 18} fill="currentColor">
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.58.24 2.75.12 3.04.74.8 1.19 1.83 1.19 3.09 0 4.41-2.7 5.38-5.27 5.67.42.36.78 1.06.78 2.15 0 1.55-.02 2.8-.02 3.18 0 .3.21.66.79.55A10.52 10.52 0 0 0 23.5 12c0-6.27-5.23-11.5-11.5-11.5Z" />
    </svg>
  );
}

function Linkedin(props) {
  return (
    <svg viewBox="0 0 24 24" width={props.size || 18} height={props.size || 18} fill="currentColor">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.03-1.85-3.03-1.86 0-2.14 1.45-2.14 2.94v5.66H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  );
}
/* ---------------------------------------------------------------------
   DATA — pulled directly from Harrison Mendoza's resume
--------------------------------------------------------------------- */

const CONTACT = {
  email: "harriam1@uci.edu",
  linkedin: "https://www.linkedin.com/in/harrison-alan-mendoza-aa8841294/",
  github: "https://github.com/h6rrison",
  githubProject1: "https://github.com/h6rrison/spotifyCreatePlaylist",
  githubProject2:"https://github.com/h6rrison/Minesweeper-AI",
  githubProject3:"https://github.com/h6rrison/TinyCompiler",
  githubProject4: "https://github.com/h6rrison/SearchEngine",
  site: "h6rrison.github.io/PersonalWebsite/",
};

const QUERIES = [
  "SELECT * FROM engineers WHERE name = 'Harrison Mendoza';",
  "SELECT focus FROM career WHERE specialization = 'systems';",
  "UPDATE students SET skill_level = skill_level + 1;",
  "INSERT INTO projects (built_with) VALUES ('python', 'sql', 'c#');",
];

const EXPERIENCE = [
  {
    range: "Jul 2025 — Present",
    role: "Software Implementation Consultant",
    org: "FAST Enterprises",
    place: "Nashville, TN",
    bullets: [
      "Designed and maintained backend software integrations in C# and SQL for REST-based data workflows supporting B2B use cases with government agencies.",
      "Worked extensively with relational databases to validate configurations, optimize queries, and support data-driven configuration decisions.",
      "Delivered 5 end-to-end software implementations for government agencies, managing the full project life cycle from requirements-gathering to production support.",
      "Acted as the primary liaison between business users and technical teams, ensuring solutions met operational, architectural, and scalability requirements.",
    ],
  },
  {
    range: "Aug 2024 — Jul 2025",
    role: "Programming Instructor",
    org: "Coding Minds",
    place: "Irvine, CA",
    bullets: [
      "Instructed 27 K-12 students in Python, C++, Java, and web development (HTML, CSS, JavaScript), plus USACO and LeetCode preparation.",
      "Guided students through the end-to-end development of complete coding projects.",
    ],
  },
];

const EDUCATION = {
  school: "University of California, Irvine",
  range: "Sep 2021 — Sep 2025",
  degree: "B.S. Computer Science, Specialization in Systems and Software",
  coursework: [
    "Operating Systems",
    "Compiler Construction",
    "Design and Analysis of Algorithms",
    "Database Management",
    "Machine Learning / Data Mining",
    "Project in Artificial Intelligence",
    "Systems Design",
  ],
};

const SKILLS = [
  {
    label: "languages_and_frameworks",
    items: ["Python", "C++", "C#", "SQL", "Java", "JavaScript", "HTML", "CSS", "React", "R", "MATLAB"],
  },
  {
    label: "tools",
    items: ["Claude Code", "GitHub Copilot", "GitHub Actions (CI/CD)"],
  },
];

const PROJECTS = [
  {
    name: "Search Engine",
    stack: "Python",
    rows: "56,000",
    description:
      "An inverted-index search engine that indexes 56,000 documents. Memory-efficient indexing keeps query response times under 300ms.",
    href: CONTACT.githubProject4,
  },
  {
    name: "Compiler & Interpreter",
    stack: "Python",
    rows: "3 stages",
    description:
      "A compiler and interpreter for the low-level language Tiny, complete with a lexer, parser, and semantic analyzer.",
    href: CONTACT.githubProject3,
  },
  {
    name: "Minesweeper AI Agent",
    stack: "Python",
    rows: "37% solved",
    description:
      "An AI agent that plays Minesweeper using pattern recognition and probabilistic analysis, clearing 37% of expert-level boards.",
    href: CONTACT.githubProject2,
  },
  {
    name: "Spotify Playlist Creator",
    stack: "Python · Tkinter · Spotipy",
    rows: "1 UI",
    description:
      "A Tkinter desktop app built on Spotipy, a Python wrapper for Spotify's Web API, for filtering tracks and building playlists quickly.",
    href: CONTACT.githubProject1,
  },
];

const NAV = [
  { id: "about", label: "about" },
  { id: "experience", label: "experience" },
  { id: "education", label: "education" },
  { id: "projects", label: "projects" },
  { id: "contact", label: "contact" },
];

/* ---------------------------------------------------------------------
   HOOKS
--------------------------------------------------------------------- */

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = (e) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return reduced;
}

function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (reducedMotion) {
      setVisible(true);
      return;
    }
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [reducedMotion]);

  return [ref, visible];
}

function useTypewriter(queries) {
  const reducedMotion = usePrefersReducedMotion();
  const [text, setText] = useState(reducedMotion ? queries[0] : "");
  const indexRef = useRef(0);
  const charRef = useRef(0);
  const deletingRef = useRef(false);

  useEffect(() => {
    if (reducedMotion) {
      setText(queries[0]);
      return;
    }
    let timeoutId;

    const tick = () => {
      const current = queries[indexRef.current];
      if (!deletingRef.current) {
        charRef.current += 1;
        setText(current.slice(0, charRef.current));
        if (charRef.current === current.length) {
          deletingRef.current = true;
          timeoutId = setTimeout(tick, 1600);
          return;
        }
        timeoutId = setTimeout(tick, 32);
      } else {
        charRef.current -= 1;
        setText(current.slice(0, charRef.current));
        if (charRef.current === 0) {
          deletingRef.current = false;
          indexRef.current = (indexRef.current + 1) % queries.length;
          timeoutId = setTimeout(tick, 400);
          return;
        }
        timeoutId = setTimeout(tick, 16);
      }
    };

    timeoutId = setTimeout(tick, 500);
    return () => clearTimeout(timeoutId);
  }, [queries, reducedMotion]);

  return text;
}

/* ---------------------------------------------------------------------
   SMALL COMPONENTS
--------------------------------------------------------------------- */

function Reveal({ children, className = "", as: Tag = "div", delay = 0 }) {
  const [ref, visible] = useReveal();
  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "reveal-visible" : ""} ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </Tag>
  );
}

function SectionLabel({ index, total, title }) {
  return (
    <div className="section-label">
      <span className="section-label-tag">
        row {index} / {total}
      </span>
      <h2 className="section-label-title">{title}</h2>
    </div>
  );
}

/* ---------------------------------------------------------------------
   MAIN APP
--------------------------------------------------------------------- */

export default function App() {
  const typed = useTypewriter(QUERIES);
  const [activeSection, setActiveSection] = useState("about");
  const [menuOpen, setMenuOpen] = useState(false);
  const sectionRefs = useRef({});

  const scrollTo = useCallback((id) => {
    setMenuOpen(false);
    const node = document.getElementById(id);
    if (node) node.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    NAV.forEach(({ id }) => {
      const node = document.getElementById(id);
      if (node) observer.observe(node);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="hm-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=IBM+Plex+Sans:wght@400;500;600;700&display=swap');

        .hm-root {
          --bg: #f5f1e7;
          --bg-raised: #ece5d3;
          --ink: #1c1c1e;
          --ink-soft: #5a5a52;
          --ink-faint: #8b8a7c;
          --accent: #2c3e8c;
          --accent-soft: #4a5aa8;
          --gold: #b8860f;
          --line: #d8d0ba;
          --mono: 'IBM Plex Mono', 'SFMono-Regular', monospace;
          --sans: 'IBM Plex Sans', -apple-system, sans-serif;

          background: var(--bg);
          color: var(--ink);
          font-family: var(--sans);
          min-height: 100%;
          width: 100%;
          line-height: 1.5;
          -webkit-font-smoothing: antialiased;
        }

        .hm-root * { box-sizing: border-box; }
        .hm-root a { color: inherit; text-decoration: none; }

        .hm-root ::selection { background: var(--accent); color: var(--bg); }

        /* ---------- layout shells ---------- */
        .shell {
          max-width: 980px;
          margin: 0 auto;
          padding: 0 28px;
        }

        /* ---------- nav ---------- */
        .navbar {
          position: sticky;
          top: 0;
          z-index: 40;
          background: rgba(245, 241, 231, 0.88);
          backdrop-filter: blur(8px);
          border-bottom: 1px solid var(--line);
        }
        .nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 0;
        }
        .nav-mark {
          font-family: var(--mono);
          font-weight: 600;
          font-size: 14px;
          letter-spacing: 0.02em;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .nav-mark .dot { width: 7px; height: 7px; border-radius: 50%; background: var(--gold); }
        .nav-links {
          display: flex;
          gap: 26px;
          font-family: var(--mono);
          font-size: 12.5px;
          letter-spacing: 0.03em;
        }
        .nav-links button {
          background: none;
          border: none;
          cursor: pointer;
          color: var(--ink-soft);
          font-family: inherit;
          font-size: inherit;
          padding: 4px 0;
          border-bottom: 2px solid transparent;
          transition: color 0.15s ease, border-color 0.15s ease;
        }
        .nav-links button::before { content: "· "; color: var(--ink-faint); }
        .nav-links button.active,
        .nav-links button:hover { color: var(--accent); border-color: var(--accent); }
        .nav-icon-link { color: var(--ink-soft); transition: color 0.15s ease; }
        .nav-icon-link:hover { color: var(--accent); }
        .nav-right { display: flex; align-items: center; gap: 16px; }

        @media (max-width: 640px) {
          .nav-links { display: none; }
        }

        /* ---------- hero ---------- */
        .hero {
          padding: 96px 0 72px;
          border-bottom: 1px solid var(--line);
        }
        .hero-eyebrow {
          font-family: var(--mono);
          font-size: 12.5px;
          color: var(--accent);
          letter-spacing: 0.06em;
          margin-bottom: 22px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .hero-name {
          font-family: var(--mono);
          font-weight: 600;
          font-size: clamp(36px, 6.4vw, 62px);
          line-height: 1.05;
          letter-spacing: -0.01em;
          margin: 0 0 18px;
        }
        .hero-name .accent-word { color: var(--accent); }
        .hero-role {
          font-size: 18px;
          color: var(--ink-soft);
          max-width: 560px;
          margin: 0 0 36px;
        }
        .query-console {
          background: var(--ink);
          color: #ece5d3;
          border-radius: 10px;
          padding: 18px 22px;
          font-family: var(--mono);
          font-size: 14px;
          max-width: 620px;
          box-shadow: 0 18px 40px -22px rgba(28, 28, 30, 0.55);
        }
        .query-console-head {
          display: flex;
          gap: 6px;
          margin-bottom: 14px;
        }
        .query-console-head span {
          width: 9px; height: 9px; border-radius: 50%;
          background: #6b6a5f;
        }
        .query-console-body { display: flex; gap: 10px; }
        .query-console-body .prompt { color: var(--gold); flex-shrink: 0; }
        .query-console-body .caret {
          display: inline-block;
          width: 8px; height: 16px;
          background: #ece5d3;
          margin-left: 2px;
          animation: blink 1s steps(1) infinite;
          vertical-align: -3px;
        }
        @keyframes blink { 50% { opacity: 0; } }

        .hero-actions {
          display: flex;
          gap: 14px;
          margin-top: 32px;
          flex-wrap: wrap;
        }
        .btn {
          font-family: var(--mono);
          font-size: 13px;
          padding: 11px 18px;
          border-radius: 7px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: transform 0.15s ease, background 0.15s ease, border-color 0.15s ease;
          border: 1px solid var(--line);
        }
        .btn-primary { background: var(--accent); color: var(--bg); border-color: var(--accent); }
        .btn-primary:hover { transform: translateY(-1px); background: var(--accent-soft); }
        .btn-ghost { background: transparent; color: var(--ink); }
        .btn-ghost:hover { border-color: var(--accent); color: var(--accent); transform: translateY(-1px); }

        /* ---------- reveal ---------- */
        .reveal { opacity: 0; transform: translateY(14px); transition: opacity 0.55s ease, transform 0.55s ease; }
        .reveal-visible { opacity: 1; transform: translateY(0); }

        /* ---------- section framing ---------- */
        section.block { padding: 72px 0; border-bottom: 1px solid var(--line); }
        section.block:last-of-type { border-bottom: none; }
        .section-label { display: flex; align-items: baseline; gap: 14px; margin-bottom: 40px; }
        .section-label-tag {
          font-family: var(--mono);
          font-size: 12px;
          color: var(--ink-faint);
          white-space: nowrap;
        }
        .section-label-title {
          font-family: var(--mono);
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--accent);
          margin: 0;
          flex-shrink: 0;
        }
        .section-label::after { content: ""; flex: 1; height: 1px; background: var(--line); }

        /* ---------- about ---------- */
        .about-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          gap: 48px;
        }
        .about-copy p { font-size: 16px; color: var(--ink-soft); margin: 0 0 16px; max-width: 52ch; }
        .about-copy strong { color: var(--ink); font-weight: 600; }
        .stat-table {
          font-family: var(--mono);
          font-size: 13px;
          border: 1px solid var(--line);
          border-radius: 10px;
          overflow: hidden;
          background: var(--bg-raised);
        }
        .stat-row {
          display: flex;
          justify-content: space-between;
          padding: 13px 16px;
          border-bottom: 1px solid var(--line);
        }
        .stat-row:last-child { border-bottom: none; }
        .stat-row .k { color: var(--ink-soft); }
        .stat-row .v { color: var(--accent); font-weight: 600; }

        @media (max-width: 720px) {
          .about-grid { grid-template-columns: 1fr; }
        }

        /* ---------- experience ---------- */
        .exp-item { display: grid; grid-template-columns: 160px 1fr; gap: 28px; padding: 28px 0; border-top: 1px solid var(--line); }
        .exp-item:first-child { border-top: none; }
        .exp-range { font-family: var(--mono); font-size: 12.5px; color: var(--ink-faint); padding-top: 4px; }
        .exp-role { font-size: 18px; font-weight: 600; margin: 0 0 4px; }
        .exp-org { font-family: var(--mono); font-size: 13px; color: var(--accent); margin: 0 0 14px; }
        .exp-org span { color: var(--ink-faint); }
        .exp-bullets { margin: 0; padding-left: 18px; color: var(--ink-soft); }
        .exp-bullets li { margin-bottom: 8px; font-size: 15px; }

        @media (max-width: 640px) {
          .exp-item { grid-template-columns: 1fr; gap: 8px; }
        }

        /* ---------- education ---------- */
        .edu-card {
          border: 1px solid var(--line);
          border-radius: 12px;
          padding: 28px;
          background: var(--bg-raised);
        }
        .edu-top { display: flex; justify-content: space-between; align-items: baseline; flex-wrap: wrap; gap: 10px; margin-bottom: 6px; }
        .edu-school { font-size: 18px; font-weight: 600; }
        .edu-range { font-family: var(--mono); font-size: 12.5px; color: var(--ink-faint); }
        .edu-degree { color: var(--ink-soft); margin: 0 0 18px; }
        .course-tags { display: flex; flex-wrap: wrap; gap: 8px; }
        .course-tag {
          font-family: var(--mono);
          font-size: 12px;
          padding: 6px 10px;
          border: 1px solid var(--line);
          border-radius: 6px;
          color: var(--ink-soft);
          background: var(--bg);
        }

        /* ---------- skills ---------- */
        .skills-group { margin-bottom: 26px; }
        .skills-group:last-child { margin-bottom: 0; }
        .skills-group-label {
          font-family: var(--mono);
          font-size: 12px;
          color: var(--ink-faint);
          margin-bottom: 12px;
        }
        .skill-tags { display: flex; flex-wrap: wrap; gap: 9px; }
        .skill-tag {
          font-family: var(--mono);
          font-size: 13px;
          padding: 8px 13px;
          border-radius: 6px;
          background: var(--ink);
          color: #ece5d3;
        }

        /* ---------- projects ---------- */
        .project-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        .project-card {
          border: 1px solid var(--line);
          border-radius: 12px;
          padding: 24px;
          background: var(--bg-raised);
          display: flex;
          flex-direction: column;
          transition: border-color 0.15s ease, transform 0.15s ease;
        }
        .project-card:hover { border-color: var(--accent); transform: translateY(-2px); }
        .project-top { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 10px; }
        .project-name { font-size: 17px; font-weight: 600; margin: 0; }
        .project-link { color: var(--ink-faint); flex-shrink: 0; transition: color 0.15s ease; }
        .project-card:hover .project-link { color: var(--accent); }
        .project-meta { font-family: var(--mono); font-size: 12px; color: var(--gold); margin-bottom: 12px; }
        .project-desc { color: var(--ink-soft); font-size: 14.5px; margin: 0 0 16px; flex-grow: 1; }
        .project-rows { font-family: var(--mono); font-size: 11.5px; color: var(--ink-faint); border-top: 1px dashed var(--line); padding-top: 10px; }

        @media (max-width: 640px) {
          .project-grid { grid-template-columns: 1fr; }
        }

        /* ---------- contact / footer ---------- */
        .contact-block { padding: 80px 0 40px; text-align: left; }
        .contact-title {
          font-family: var(--mono);
          font-size: clamp(28px, 5vw, 42px);
          font-weight: 600;
          margin: 0 0 18px;
          max-width: 14ch;
        }
        .contact-sub { color: var(--ink-soft); max-width: 48ch; margin: 0 0 32px; }
        .contact-links { display: flex; flex-wrap: wrap; gap: 14px; margin-bottom: 56px; }
        .footer-bar {
          border-top: 1px solid var(--line);
          padding: 20px 0 40px;
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 10px;
          font-family: var(--mono);
          font-size: 12px;
          color: var(--ink-faint);
        }

        a:focus-visible, button:focus-visible {
          outline: 2px solid var(--accent);
          outline-offset: 3px;
          border-radius: 4px;
        }

        @media (prefers-reduced-motion: reduce) {
          .reveal { transition: none; opacity: 1; transform: none; }
          .caret { animation: none !important; }
        }
      `}</style>

      {/* NAV */}
      <nav className="navbar">
        <div className="shell nav-inner">
          <div className="nav-mark">
            <span className="dot" />
            HM<span style={{ color: "var(--ink-faint)" }}>.sql</span>
          </div>
          <div className="nav-links">
            {NAV.map(({ id, label }) => (
              <button
                key={id}
                className={activeSection === id ? "active" : ""}
                onClick={() => scrollTo(id)}
              >
                {label}
              </button>
            ))}
          </div>
          <div className="nav-right">
            <a
              className="nav-icon-link"
              href={CONTACT.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <header className="hero">
        <div className="shell">
          <div className="hero-eyebrow">
            <Terminal size={14} />
            software implementation consultant · nashville, tn
          </div>
          <h1 className="hero-name">
            Harrison <span className="accent-word">Mendoza</span>
          </h1>
          <p className="hero-role">
            Backend and systems-minded engineer. I build the integrations, queries, and
            infrastructure that government software runs on, and the compilers, search
            engines, and small tools I build for fun.
          </p>

          <div className="query-console" aria-hidden="true">
            <div className="query-console-head">
              <span />
              <span />
              <span />
            </div>
            <div className="query-console-body">
              <span className="prompt">postgres=#</span>
              <span>
                {typed}
                <span className="caret" />
              </span>
            </div>
          </div>

          <div className="hero-actions">
            <a className="btn btn-primary" href={CONTACT.github} target="_blank" rel="noreferrer">
              View GitHub <ArrowUpRight size={14} />
            </a>
            <button className="btn btn-ghost" onClick={() => scrollTo("contact")}>
              Get in touch
            </button>
          </div>
        </div>
      </header>

      {/* ABOUT */}
      <section className="block" id="about">
        <div className="shell">
          <Reveal>
            <SectionLabel index="01" total="05" title="About" />
          </Reveal>
          <div className="about-grid">
            <Reveal className="about-copy">
              <p>
                I'm a <strong>Computer Science graduate from UC Irvine</strong>, specialized in
                systems and software, currently working as a{" "}
                <strong>Software Implementation Consultant at FAST Enterprises</strong>. Most of
                my day-to-day lives in C#, SQL, and REST APIs, building the backend integrations
                that let government agencies run on modern software.
              </p>
              <p>
                Before that, I spent a year teaching 27 K-12 students how to code, everything
                from their first Python script to USACO and LeetCode prep. I like problems that
                sit close to the machine: compilers, search indexes, query optimization, the kind
                of work where you can feel the difference between a good design and a slow one.
              </p>
            </Reveal>
            <Reveal delay={80}>
              <div className="stat-table">
                <div className="stat-row">
                  <span className="k">implementations_delivered</span>
                  <span className="v">20+</span>
                </div>
                <div className="stat-row">
                  <span className="k">students_instructed</span>
                  <span className="v">27</span>
                </div>
                <div className="stat-row">
                  <span className="k">docs_indexed</span>
                  <span className="v">56,000</span>
                </div>
                <div className="stat-row">
                  <span className="k">expert_boards_cleared</span>
                  <span className="v">37%</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="block" id="experience">
        <div className="shell">
          <Reveal>
            <SectionLabel index="02" total="05" title="Experience" />
          </Reveal>
          {EXPERIENCE.map((job, i) => (
            <Reveal key={job.role} delay={i * 60}>
              <div className="exp-item">
                <div className="exp-range">{job.range}</div>
                <div>
                  <h3 className="exp-role">{job.role}</h3>
                  <p className="exp-org">
                    {job.org} <span>— {job.place}</span>
                  </p>
                  <ul className="exp-bullets">
                    {job.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* EDUCATION */}
      <section className="block" id="education">
        <div className="shell">
          <Reveal>
            <SectionLabel index="03" total="05" title="Education" />
          </Reveal>
          <Reveal>
            <div className="edu-card">
              <div className="edu-top">
                <span className="edu-school">{EDUCATION.school}</span>
                <span className="edu-range">{EDUCATION.range}</span>
              </div>
              <p className="edu-degree">{EDUCATION.degree}</p>
              <div className="course-tags">
                {EDUCATION.coursework.map((c) => (
                  <span className="course-tag" key={c}>
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div style={{ marginTop: 40 }}>
              {SKILLS.map((group) => (
                <div className="skills-group" key={group.label}>
                  <div className="skills-group-label">{group.label}</div>
                  <div className="skill-tags">
                    {group.items.map((s) => (
                      <span className="skill-tag" key={s}>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="block" id="projects">
        <div className="shell">
          <Reveal>
            <SectionLabel index="04" total="05" title="Projects" />
          </Reveal>
          <div className="project-grid">
            {PROJECTS.map((p, i) => (
              <Reveal key={p.name} delay={i * 50}>
                <a
                  className="project-card"
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  style={{ display: "flex" }}
                >
                  <div className="project-top">
                    <h3 className="project-name">{p.name}</h3>
                    <ArrowUpRight className="project-link" size={17} />
                  </div>
                  <div className="project-meta">{p.stack}</div>
                  <p className="project-desc">{p.description}</p>
                  <div className="project-rows">result: {p.rows}</div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="block" id="contact" style={{ borderBottom: "none" }}>
        <div className="shell contact-block">
          <Reveal>
            <SectionLabel index="05" total="05" title="Contact" />
          </Reveal>
          <Reveal delay={60}>
            <h2 className="contact-title">Let's build something that runs well.</h2>
            <p className="contact-sub">
              Open to backend, systems, and full-stack roles. The fastest way to reach me is
              email, the fastest way to see my work is GitHub.
            </p>
            <div className="contact-links">
              <a className="btn btn-primary" href={`mailto:${CONTACT.email}`}>
                <Mail size={14} /> {CONTACT.email}
              </a>
              <a className="btn btn-ghost" href={CONTACT.linkedin} target="_blank" rel="noreferrer">
                <Linkedin size={14} /> LinkedIn
              </a>
              <a className="btn btn-ghost" href={CONTACT.github} target="_blank" rel="noreferrer">
                <Github size={14} /> GitHub
              </a>
            </div>
          </Reveal>
          <div className="footer-bar">
            <span>© {new Date().getFullYear()} Harrison Mendoza</span>
          </div>
        </div>
      </section>
    </div>
  );
}