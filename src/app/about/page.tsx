import type { Metadata } from "next";
import Link from "next/link";
import { socialMetadata } from "@/lib/social-metadata";

const description =
  "Experience, education and technical focus of Le Xuan Hung, PhD, bridge structural engineer and engineering software developer.";

export const metadata: Metadata = {
  title: "About",
  description,
  alternates: { canonical: "/about" },
  ...socialMetadata("About Le Xuan Hung", description, "/about"),
};

const experience = [
  {
    period: "Sep 2024 — Present",
    role: "Deputy Project Manager & Engineering Software Developer",
    company: "ENVICO Co., Ltd.",
    place: "Seoul, South Korea",
    detail:
      "Bridge design and construction engineering, advanced structural analysis, and development of digital engineering workflows.",
  },
  {
    period: "Sep 2018 — Sep 2024",
    role: "Senior Structural and Bridge Engineer",
    company: "Wookyung Construction Co., Ltd.",
    place: "Seoul, South Korea",
    detail:
      "Steel box-girder bridge analysis and design, temporary works, engineering calculations and .NET-based design automation.",
  },
  {
    period: "Aug 2007 — Aug 2010",
    role: "Structural Engineer",
    company: "Hung Nghiep Construction Consulting Co., Ltd.",
    place: "Ho Chi Minh City, Vietnam",
    detail:
      "Bridge structural design and staged-construction analysis for concrete and temporary steel structures.",
  },
];

const education = [
  {
    qualification: "PhD, Civil Engineering",
    school: "Kyung Hee University",
    period: "2012 — 2018",
    detail: "Research on bridge deflection and vibration reliability.",
  },
  {
    qualification: "MEng, Civil Engineering",
    school: "Kyung Hee University",
    period: "2010 — 2012",
  },
  {
    qualification: "BSc, Civil Engineering",
    school: "University of Communications and Transport, Vietnam",
    period: "2002 — 2007",
  },
];

const topics = [
  {
    title: "Bridge engineering",
    detail:
      "Railway and highway bridges, steel and concrete girders, segmental construction and temporary works.",
  },
  {
    title: "Analysis & verification",
    detail:
      "Finite-element modelling, staged construction, seismic and dynamic analysis, nonlinear response and connections.",
  },
  {
    title: "Software & automation",
    detail: "C#, Python, TypeScript, web applications and automated engineering calculations.",
  },
];

export default function AboutPage() {
  return (
    <div className="shell page">
      <header>
        <h1>About</h1>
        <div className="section__body">
          <p>
            I am a bridge structural engineer with a PhD in Civil Engineering and more than ten years
            of experience across bridge design, analysis and verification. I also develop software
            that supports the engineering process itself.
          </p>
          <p>
            My engineering work covers railway and highway bridges, prestressed concrete and steel
            systems, temporary works, staged construction, seismic analysis and structural
            verification. In software, I turn recurring calculations and review steps into tools for
            geometry control, design checking, quantity take-off and project delivery.
          </p>
        </div>
      </header>

      <section className="section" aria-labelledby="experience-title">
        <h2 id="experience-title">Experience</h2>
        <div className="entry-list">
          {experience.map((entry) => (
            <div className="entry" key={entry.company}>
              <span className="entry__period">{entry.period}</span>
              <div>
                <h3>{entry.role}</h3>
                <p className="entry__where">{entry.company} · {entry.place}</p>
                <p className="entry__detail">{entry.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section" aria-labelledby="education-title">
        <h2 id="education-title">Education</h2>
        <div className="entry-list">
          {education.map((entry) => (
            <div className="entry" key={entry.qualification}>
              <span className="entry__period">{entry.period}</span>
              <div>
                <h3>{entry.qualification}</h3>
                <p className="entry__where">{entry.school}</p>
                {entry.detail && <p className="entry__detail">{entry.detail}</p>}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section" aria-labelledby="topics-title">
        <h2 id="topics-title">Technical areas</h2>
        <div className="topic-grid">
          {topics.map((topic) => (
            <div key={topic.title}>
              <h3>{topic.title}</h3>
              <p>{topic.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="link-actions">
        <a href="/Le-Xuan-Hung-resume%20%28bridge-software-2026%29.pdf?v=bef2fca9ee6d" className="link-out" target="_blank" rel="noopener noreferrer">
          Full resume <span aria-hidden="true">↗</span>
        </a>
        <Link href="/work" className="link">Engineering Projects</Link>
        <Link href="/software-projects" className="link">Software Projects</Link>
      </div>
    </div>
  );
}
