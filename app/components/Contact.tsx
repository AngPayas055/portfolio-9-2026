import { ArrowUpRight, BriefcaseBusiness, Code2, FileText, Mail } from "lucide-react";
import { socialLinks } from "../portfolio-data";
export default function Contact() {
  return (
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
  )
}