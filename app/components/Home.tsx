import { ArrowUpRight } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

type Section = "Home" | "About" | "Experience" | "Projects" | "Contact";

type HomeHeroProps = {
  setActive: Dispatch<SetStateAction<Section>>;
};

export default function HomeHero({ setActive }: HomeHeroProps) {
  return (
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
  )
}