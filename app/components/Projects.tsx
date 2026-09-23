import { ArrowUpRight } from "lucide-react";
import { projects } from "../portfolio-data";

export default function Projects() {
  return (
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
  )
}