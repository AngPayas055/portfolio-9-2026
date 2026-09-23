"use client";

import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  FileText,
  Mail,
} from "lucide-react";
import { experiences, projects, socialLinks } from "./portfolio-data";

const sections = [
  "Home",
  "About",
  "Experience",
  "Projects",
  "Contact",
] as const;

type Section = (typeof sections)[number];

export default function Home() {
  const [active, setActive] = useState<Section>("Home");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const timer = window.setTimeout(
      () => setLoading(false),
      reduced ? 100 : 2300,
    );

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && (
        <div
          className="loading-screen"
          role="status"
          aria-label="Loading portfolio"
        >
          <div className="loading-grain" aria-hidden="true" />

          <div className="loading-content">
            <span className="loading-overline">
              JHON REY MENDIOLA / PORTFOLIO
            </span>

            <div className="loading-perspective" aria-hidden="true">
              <div className="loading-halo" />

              <div className="loading-cube">
                <div className="loading-face loading-front">
                  JM<span>.</span>
                </div>
                <div className="loading-face loading-back">
                  JM<span>.</span>
                </div>
                <div className="loading-face loading-right">
                  JM<span>.</span>
                </div>
                <div className="loading-face loading-left">
                  JM<span>.</span>
                </div>
                <div className="loading-face loading-top">✳</div>
                <div className="loading-face loading-cube-bottom">✳</div>
              </div>
            </div>

            <div className="loading-bottom">
              <span>INITIALIZING IDEAS</span>
              <span>PLEASE WAIT</span>
            </div>

            <div className="loading-track">
              <span />
            </div>
          </div>

          <button
            className="loading-skip"
            onClick={() => setLoading(false)}
          >
            Skip intro ↗
          </button>
        </div>
      )}

      <main
        inert={loading}
        aria-hidden={loading}
        className={`shell theme-${active.toLowerCase()}`}
      >
        <aside className="sidebar">
          <button
            className="brand"
            onClick={() => setActive("Home")}
          >
            JM<span>.</span>
            <small>
              JHON REY MENDIOLA
              <br />
              FULL-STACK DEVELOPER
            </small>
          </button>

          <nav aria-label="Main navigation">
            {sections.map((section, index) => (
              <button
                key={section}
                className={active === section ? "active" : ""}
                aria-current={
                  active === section ? "page" : undefined
                }
                onClick={() => setActive(section)}
              >
                <small>0{index + 1}</small>
                {section}
                <span>↗</span>
              </button>
            ))}
          </nav>

          <div className="sidefoot">
            <b>● OPEN TO OPPORTUNITIES</b>
            <br />
            BASED IN TACLOBAN, PH
          </div>
        </aside>

        <div className="content">
          <header>
            PORTFOLIO / 2026
            <span>DESIGN × DEVELOPMENT</span>
          </header>

          {active === "Home" && (
            <section className="hero">
              <div className="intro">
                <div className="kicker">
                  — HELLO, I&apos;M JHON REY
                </div>

                <h1>
                  Building digital
                  <br />
                  <em>things that work.</em>
                </h1>

                <p>
                  I&apos;m a full-stack developer from Tacloban City,
                  Philippines. I turn complex ideas into thoughtful,
                  useful web experiences.
                </p>

                <div className="actions">
                  <button
                    className="primary"
                    onClick={() => setActive("Projects")}
                  >
                    Explore my work
                    <ArrowUpRight size={18} />
                  </button>

                  <button
                    className="secondary"
                    onClick={() => setActive("About")}
                  >
                    More about me ↗
                  </button>
                </div>
              </div>

              <div
                className="visual"
                aria-label="Animated three-dimensional monogram"
              >
                <div className="ring" />
                <div className="ring inner" />

                <div className="cube">
                  <div className="front">
                    <span className="star">✳</span>
                    <strong>
                      J<span>.</span>M
                    </strong>
                    <small>
                      CREATIVE
                      <br />
                      DEVELOPER
                    </small>
                  </div>

                  <div className="side" />
                  <div className="top" />
                </div>

                <span className="label one">01 / CREATE</span>
                <span className="label two">CODE + CRAFT</span>
              </div>

              <div className="herofoot">
                5+ YEARS BUILDING FOR THE WEB
                <span>
                  FRONTEND / BACKEND / EVERYTHING BETWEEN
                </span>
              </div>
            </section>
          )}

          {active === "About" && (
            <section className="section">
              <div className="kicker">
                01 / THE PERSON BEHIND THE CODE
              </div>

              <h2>
                A developer who cares about <em>the details.</em>
              </h2>

              <div className="about">
                <div>
                  <p className="lead">
                    I&apos;m Jhon Rey, a full-stack developer based
                    in Tacloban City. Over the past five years,
                    I&apos;ve worked across product teams, agencies
                    and independent projects.
                  </p>

                  <p>
                    I enjoy building interfaces that feel easy to
                    use and systems that are dependable behind the
                    scenes. My work spans React and Next.js on the
                    frontend, with Node.js, Express and databases on
                    the backend.
                  </p>

                  <p>
                    Outside work, you&apos;ll probably find me
                    cycling, playing chess or spending time with my
                    family.
                  </p>
                </div>

                <div className="facts">
                  {[
                    ["LOCATION", "Tacloban City, Philippines"],
                    ["FOCUS", "Full-stack web development"],
                    ["EXPERIENCE", "5+ years"],
                    [
                      "TOOLS",
                      "Next.js, TypeScript, Node.js, MongoDB",
                    ],
                  ].map(([key, value]) => (
                    <div key={key}>
                      <small>{key}</small>
                      <strong>{value}</strong>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {active === "Experience" && (
            <section className="section">
              <div className="kicker">
                02 / THE JOURNEY SO FAR
              </div>

              <h2>
                Experience<em>.</em>
              </h2>

              <div className="timeline">
                {experiences.map((job, index) => (
                  <article key={job.company}>
                    <small>0{index + 1}</small>

                    <div>
                      <h3>{job.role}</h3>
                      <b>{job.company}</b>
                      <p>{job.description}</p>

                      <div
                        className="tech-list"
                        aria-label={`Technologies used at ${job.company}`}
                      >
                        {job.tech.map((tech) => (
                          <span key={tech}>{tech}</span>
                        ))}
                      </div>
                    </div>

                    <small className="period">
                      {job.period}
                    </small>
                  </article>
                ))}
              </div>
            </section>
          )}

          {active === "Projects" && (
            <section className="section">
              <div className="kicker">03 / SELECTED WORK</div>

              <h2>
                Projects<em>.</em>
              </h2>

              <div className="projects">
                {projects.map((project, index) => (
                  <article key={project.title}>
                    <div className="projecttop">
                      <small>
                        0{index + 1} / SELECTED PROJECT
                      </small>

                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open ${project.title}`}
                      >
                        <ArrowUpRight size={22} />
                      </a>
                    </div>

                    <div>
                      <h3>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {project.title}
                        </a>
                      </h3>

                      <p>{project.description}</p>
                    </div>

                    <div
                      className="tech-list"
                      aria-label={`Technologies used for ${project.title}`}
                    >
                      {project.tech.map((tech) => (
                        <span key={tech}>{tech}</span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </section>
          )}

          {active === "Contact" && (
            <section className="section contact">
              <div className="kicker">
                04 / LET&apos;S CONNECT
              </div>

              <h2>
                Have something
                <br />
                <em>in mind?</em>
              </h2>

              <p className="lead">
                I&apos;m always interested in a good conversation
                about products, teams and ideas worth building.
              </p>

              <div className="links">
                <a href="mailto:dev@jmendiola.com">
                  <Mail size={20} />
                  dev@jmendiola.com
                  <ArrowUpRight size={20} />
                </a>

                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Code2 size={20} />
                  GitHub
                  <ArrowUpRight size={20} />
                </a>

                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BriefcaseBusiness size={20} />
                  LinkedIn
                  <ArrowUpRight size={20} />
                </a>

                <a
                  href={socialLinks.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FileText size={20} />
                  Résumé
                  <ArrowUpRight size={20} />
                </a>
              </div>
            </section>
          )}

          <footer>
            © 2026 JHON REY MENDIOLA
            <span>MADE WITH CARE IN TACLOBAN CITY</span>
          </footer>
        </div>
      </main>
    </>
  );
}