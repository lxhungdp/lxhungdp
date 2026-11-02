import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { LandingLink } from "@/components/landing-link";
import { getProject, type Project } from "@/data/projects";

function ProjectSection({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section className="project-section" aria-labelledby={id}>
      <h2 id={id}>{title}</h2>
      <div className="project-section__content">{children}</div>
    </section>
  );
}

export function ProjectDetail({ project }: { project: Project }) {
  const related = (project.related ?? []).map(getProject).filter((entry) => entry !== undefined);
  const pending = !project.overview;

  return (
    <article className="shell page project-page">
      <LandingLink section="software-projects" className="link">← Software Projects</LandingLink>
      <header className="project-hero">
        {!project.hideHeroMetadata && project.status && <p className="label">{project.status}</p>}
        <h1>{project.title}</h1>
        <p className="project-hero__lead">{project.summary}</p>
        {!project.hideHeroMetadata && (project.location || project.role || project.tags.length > 0) && <dl className="detail-list">
          {project.location && <div><dt className="label">Location</dt><dd>{project.location}</dd></div>}
          {project.role && <div><dt className="label">Role</dt><dd>{project.role}</dd></div>}
          {project.tags.length > 0 && <div><dt className="label">Topics</dt><dd><span className="chips">{project.tags.map((tag) => <span className="chip" key={tag}>{tag}</span>)}</span></dd></div>}
        </dl>}
      </header>

      {project.video ? (
        <figure className="figure">
          <iframe
            className="project-video"
            src={`https://www.youtube-nocookie.com/embed/${project.video.youtubeId}`}
            title={project.video.title}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
          <figcaption>{project.video.title}</figcaption>
        </figure>
      ) : project.image && <figure className="figure"><Image src={project.image} alt="" width={project.imageWidth ?? 1500} height={project.imageHeight ?? 900} sizes="(max-width: 1088px) 100vw, 1040px" loading="eager" /><figcaption>{project.imageAlt}</figcaption></figure>}

      {pending ? <div className="project-pending"><span className="label">Project profile</span><p>Details will be added soon.</p></div> : <div className="project-body">
        {project.overview && <ProjectSection id="overview-title" title="Overview">
          {project.introLink && <p><a href={project.introLink.href} className="link-out" target="_blank" rel="noopener noreferrer">{project.introLink.label} <span aria-hidden="true">↗</span></a></p>}
          {project.demoNote && <p className="project-demo-note">
            {project.demoNote}{" "}
            <Link href="/contact" className="link">Contact me for further information <span aria-hidden="true">→</span></Link>
          </p>}
          <p>{project.overview}</p>
        </ProjectSection>}
        {project.registration && <ProjectSection id="registration-title" title="Registration">
          <p>{project.registration.statement}</p>
          <p><a href={project.registration.href} className="link-out" target="_blank" rel="noopener noreferrer">{project.registration.label} <span aria-hidden="true">↗</span></a></p>
        </ProjectSection>}
        {project.technicalCapabilities && <ProjectSection id="capabilities-title" title="Technical capabilities">
          <p>{project.technicalCapabilities.problem}</p>
          <h3>Technical scope</h3>
          <ul>{project.technicalCapabilities.scope.map((item) => {
            const capability = typeof item === "string" ? { text: item } : item;
            return (
              <li key={capability.text}>
                {capability.text}
                {capability.link ? (
                  <>
                    <br />
                    <Link href={capability.link.href} className="link">{capability.link.label} <span aria-hidden="true">→</span></Link>
                  </>
                ) : null}
              </li>
            );
          })}</ul>
        </ProjectSection>}
        {Boolean(project.gallery?.length || project.mediaNote) && <ProjectSection id="media-title" title={project.video ? "Images & videos" : "Images"}>
          {Boolean(project.gallery?.length) && <div className="project-gallery">{project.gallery?.map((item) =>
            <figure className="project-gallery__item" key={item.src}>
              <a href={item.src} target="_blank" rel="noopener noreferrer" aria-label={`Open full-size image: ${item.caption}`}>
                <Image src={item.src} alt={item.alt} width={item.width} height={item.height} sizes="(max-width: 1088px) 100vw, 800px" />
              </a>
              <figcaption>{item.caption}</figcaption>
            </figure>
          )}</div>}
          {project.mediaNote && <p className="project-media-note">{project.mediaNote}</p>}
        </ProjectSection>}
        {project.inPractice && <ProjectSection id="practice-title" title="In practice"><p>{project.inPractice}</p></ProjectSection>}
        {project.outcome && <ProjectSection id="outcome-title" title="Outcome"><p>{project.outcome}</p></ProjectSection>}
      </div>}

      {(project.links?.length || related.length > 0 || !project.technicalCapabilities) && <div className="project-footer">
        {project.links && project.links.length > 0 && <div className="project-footer__group"><span className="label">Links</span>{project.links.map((link) => <a key={link.href} href={link.href} className="link-out" target="_blank" rel="noopener noreferrer">{link.label} <span aria-hidden="true">↗</span></a>)}</div>}
        {related.length > 0 && <div className="project-footer__group"><span className="label">Related</span>{related.map((entry) => <Link href={entry.path ?? `/work/${entry.slug}`} className="link" key={entry.slug}>{entry.title}</Link>)}</div>}
        {!project.technicalCapabilities && <div className="project-footer__group"><LandingLink section="software-projects" className="link">All software projects</LandingLink></div>}
      </div>}
    </article>
  );
}
