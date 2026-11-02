import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { LandingLink } from "@/components/landing-link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/data/projects";
import { socialMetadata } from "@/lib/social-metadata";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project not found" };
  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/work/${project.slug}` },
    ...socialMetadata(`${project.title} | Le Xuan Hung`, project.summary, `/work/${project.slug}`),
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const landingSection = project.category === "Bridge engineering" ? "engineering-projects" : "software-projects";
  const related = (project.related ?? [])
    .map((relatedSlug) => getProject(relatedSlug))
    .filter((entry) => entry !== undefined);

  return (
    <article className="shell page">
      <LandingLink section={landingSection} className="link">← All projects</LandingLink>

      <header className="project-hero">
        <p className="label">
          {project.category}
          {project.status ? ` · ${project.status}` : ""}
        </p>
        <h1>{project.title}</h1>
        <p className="project-hero__lead">{project.summary}</p>

        <dl className="detail-list">
          {project.location && (
            <div>
              <dt className="label">Location</dt>
              <dd>{project.location}</dd>
            </div>
          )}
          {project.role && (
            <div>
              <dt className="label">Role</dt>
              <dd>{project.role}</dd>
            </div>
          )}
          <div>
            <dt className="label">Topics</dt>
            <dd>
              <span className="chips">
                {project.tags.map((tag) => <span className="chip" key={tag}>{tag}</span>)}
              </span>
            </dd>
          </div>
        </dl>
      </header>

      {project.image && (
        <figure className="figure">
          {/* Described by the visible caption below, so the image itself is not announced twice. */}
          <Image
            src={project.image}
            alt=""
            width={project.imageWidth ?? 1500}
            height={project.imageHeight ?? 900}
            sizes="(max-width: 1088px) 100vw, 1040px"
            loading="eager"
          />
          <figcaption>{project.imageAlt}</figcaption>
        </figure>
      )}

      <div className="project-body">
        <section aria-labelledby="overview-title">
          <h2 id="overview-title">Overview</h2>
          <p>{project.overview}</p>
        </section>

        {project.outcome && (
          <section aria-labelledby="outcome-title">
            <h2 id="outcome-title">Outcome</h2>
            <p>{project.outcome}</p>
          </section>
        )}
      </div>

      <div className="project-footer">
        {project.links && project.links.length > 0 && (
          <div className="project-footer__group">
            <span className="label">Links</span>
            {project.links.map((link) => (
              <a key={link.href} href={link.href} className="link-out" target="_blank" rel="noopener noreferrer">
                {link.label} <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        )}

        {related.length > 0 && (
          <div className="project-footer__group">
            <span className="label">Related</span>
            {related.map((entry) => (
              <Link href={`/work/${entry.slug}`} className="link" key={entry.slug}>{entry.title}</Link>
            ))}
          </div>
        )}

        <div className="project-footer__group">
          <LandingLink section={landingSection} className="link">All projects</LandingLink>
        </div>
      </div>
    </article>
  );
}
