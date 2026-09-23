import { experiences } from "../portfolio-data";

export default function Experience() {
  return (
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
  )
}