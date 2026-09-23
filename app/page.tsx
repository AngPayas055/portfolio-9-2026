"use client";

import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import About from "./components/About";
import HomeHero from "./components/Home";
import Sidebar from "./components/Sidebar";
import LoadingScreen from "./components/LoadingScreen";

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
        <LoadingScreen onSkip={() => setLoading(false)} />
      )}
      <main
        inert={loading}
        aria-hidden={loading}
        className={`shell theme-${active.toLowerCase()}`}
      >        
        <Sidebar active={active} setActive={setActive} />
        <div className="content">
          <header>
            PORTFOLIO / 2026
            <span>DESIGN × DEVELOPMENT</span>
          </header>
          {active === "Home" && (<HomeHero setActive={setActive} />)}
          {active === "About" && (<About />)}
          {active === "Experience" && (<Experience />)}
          {active === "Projects" && (<Projects />)}
          {active === "Contact" && (<Contact />)}
          <Footer />
        </div>
      </main>
    </>
  );
}