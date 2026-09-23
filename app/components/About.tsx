export default function About() {
  return (
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
  )
}