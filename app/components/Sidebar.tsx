"use client";

import type { Dispatch, SetStateAction } from "react";

export const sections = [
  "Home",
  "About",
  "Experience",
  "Projects",
  "Contact",
] as const;

export type Section = (typeof sections)[number];

type SidebarProps = {
  active: Section;
  setActive: Dispatch<SetStateAction<Section>>;
};

export default function Sidebar({ active, setActive }: SidebarProps) {
  return (
    <aside className="sidebar">
      <button className="brand" onClick={() => setActive("Home")}>
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
            aria-current={active === section ? "page" : undefined}
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
  );
}