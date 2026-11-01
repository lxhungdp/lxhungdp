import Image from "next/image";
import Link from "next/link";
import { LandingLink, LandingScrollRestorer } from "@/components/landing-link";
import { BlogList } from "@/components/blog-list";
import { SoftwareProjectList } from "@/components/software-project-list";
import { blogPosts } from "@/data/blogs";
import { bridgeEngineeringProjects, softwareProjects } from "@/data/projects";

export default function HomePage() {
  return (
    <>
      <LandingScrollRestorer />
      <section id="about" className="shell section section--about" aria-labelledby="about-title">
        <div className="about-layout">
          <div className="about-content">
            <h1 id="about-title" className="about-lead">I design bridge structures and build engineering software.</h1>
            <div className="about-story">
              <div className="section__body">
                <p>I have been interested in physics since I was young. I like to understand how things work, especially large structures. This curiosity led me to structural engineering.</p>
                <p>Bridges fascinated me, so I chose bridge engineering at university. A triangle with fixed side lengths cannot change shape. From this simple principle, people can connect small members to build bridges that span hundreds of metres, even kilometres. These large structures can be so safe and reliable that people cross them without thinking about the bridge, as if they were walking on the ground. To me, bridges are masterpieces of engineering.</p>
                <p>After several years in bridge design, I pursued a PhD at Kyung Hee University&apos;s Bridge Lab. I studied the theory behind the empirical formulas and calculation methods I had used in practice. This gave me time to study these subjects in depth and learn how to research and solve technical problems independently.</p>
                <p>In my work, I always look for ways to improve accuracy and speed in structural engineering. This led me to programming while I was at university. I used Visual Basic and Mathcad as a student, Excel VBA and AutoLISP in design work, Python and MATLAB during my PhD, then C#/.NET and AutoCAD .NET to develop tools for calculations and workflows.</p>
                <p>Structural engineering and software development support each other. To develop engineering software, I need to understand structural principles in depth. I also need to understand programming well enough to choose a suitable software design and implement it efficiently.</p>
                <p>I enjoy both structural engineering and software development, and I always look for ways to improve in both fields. <strong>That is how I became a structural engineer who also develops engineering software.</strong></p>
              </div>
              <div className="about-photos" aria-label="Photos from bridge engineering work">
                <figure className="about-photo about-photo--site">
                  <div className="about-photo__frame">
                    <Image src="/images/le-xuan-hung-bridge-construction-site.jpg" alt="Le Xuan Hung at a bridge construction site beneath a red gantry" fill sizes="(max-width: 760px) 45vw, 280px" loading="eager" />
                  </div>
                </figure>
                <figure className="about-photo about-photo--girders">
                  <div className="about-photo__frame">
                    <Image src="/images/le-xuan-hung-steel-girders.jpg" alt="Le Xuan Hung standing beneath large steel girders" fill sizes="(max-width: 760px) 45vw, 280px" />
                  </div>
                </figure>
              </div>
            </div>
            <div className="link-actions section__actions">
              <a href="/Le-Xuan-Hung-resume%20%28bridge-software-2026%29.pdf?v=bef2fca9ee6d" className="link link--button link--button-secondary" target="_blank" rel="noopener noreferrer">View resume</a>
              <LandingLink section="engineering-projects" className="link link--button link--button-scroll">Explore engineering projects</LandingLink>
            </div>
          </div>
        </div>
      </section>

      <section id="software-projects" className="shell section" aria-labelledby="software-title">
        <div className="section__head">
          <h2 id="software-title">Selected Software Projects</h2>
        </div>
        <SoftwareProjectList projects={softwareProjects} />
      </section>

      <section id="engineering-projects" className="shell section" aria-labelledby="engineering-title">
        <div className="section__head">
          <h2 id="engineering-title">Selected Bridge Engineering Projects</h2>
          <Link href="/work" className="link">View all work</Link>
        </div>
        <p className="section__intro">Structural design, analysis and construction engineering for concrete and steel bridges.</p>
        <SoftwareProjectList projects={bridgeEngineeringProjects} />
      </section>

      <section id="blogs" className="shell section" aria-labelledby="blogs-title">
        <div className="section__head"><h2 id="blogs-title">Blogs</h2></div>
        <BlogList posts={blogPosts} />
      </section>

      <section id="contacts" className="shell section section--contact" aria-labelledby="contact-title">
        <h2 id="contact-title">Contacts</h2>
        <div className="link-actions">
          <a href="mailto:lxhungdp@gmail.com" className="link">lxhungdp@gmail.com</a>
          <a href="https://www.linkedin.com/in/lxhungdp/" className="link-out" target="_blank" rel="noopener noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
        </div>
      </section>
    </>
  );
}
