import { useEffect, useState, type ReactNode } from "react"

type IconName = "arrow" | "briefcase" | "check" | "code" | "download" | "external" | "github" | "graduation" | "linkedin" | "mail" | "map" | "menu" | "spark" | "terminal" | "x"

const paths: Record<IconName, ReactNode> = {
  arrow: (
    <>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </>
  ),
  briefcase: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18M10 12v2h4v-2" />
    </>
  ),
  check: <path d="m5 12 4 4L19 6" />,
  code: (
    <>
      <path d="m8 9-4 3 4 3M16 9l4 3-4 3M14 5l-4 14" />
    </>
  ),
  download: (
    <>
      <path d="M12 3v12m0 0 5-5m-5 5-5-5M5 21h14" />
    </>
  ),
  external: (
    <>
      <path d="M15 3h6v6M10 14 21 3" />
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    </>
  ),
  github: (
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7A5.4 5.4 0 0 0 19.3 4 5 5 0 0 0 19.2.5S18 0 15 2a13.4 13.4 0 0 0-7 0C5-.1 3.8.5 3.8.5A5 5 0 0 0 3.7 4a5.4 5.4 0 0 0-1.5 3.7c0 5.3 3.5 6.5 6.8 7A4.8 4.8 0 0 0 8 18v4m0-3c-3 .9-3-1.5-4-2" />
  ),
  graduation: (
    <>
      <path d="m2 10 10-5 10 5-10 5L2 10Z" />
      <path d="M6 12v5c3 2 9 2 12 0v-5M22 10v6" />
    </>
  ),
  linkedin: (
    <>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4V8h4v2a4 4 0 0 1 2-2ZM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  map: (
    <>
      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  menu: (
    <>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </>
  ),
  spark: (
    <path d="m12 3-1.7 5.3L5 10l5.3 1.7L12 17l1.7-5.3L19 10l-5.3-1.7L12 3ZM5 17l-.7 2.3L2 20l2.3.7L5 23l.7-2.3L8 20l-2.3-.7L5 17Z" />
  ),
  terminal: (
    <>
      <path d="m4 17 6-6-6-6M12 19h8" />
    </>
  ),
  x: <path d="M6 6l12 12M18 6 6 18" />,
}

function Icon({ name, size = 18 }: { name: IconName, size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  )
}

const skills = [
  "Python",
  "Java",
  "C++",
  "Machine Learning",
  "FastAPI",
  "SQL",
  "Git & GitHub",
  "System Design",
  "React",
  "REST APIs",
]

const skillGroups = [
  {
    number: "01",
    title: "Languages",
    items: ["Python", "Java", "C++", "C#", "SQL"],
  },
  {
    number: "02",
    title: "AI & Data",
    items: ["Machine Learning", "NLP", "Scikit-learn", "Pandas"],
  },
  {
    number: "03",
    title: "Development",
    items: ["FastAPI", ".NET", "React", "REST APIs"],
  },
  {
    number: "04",
    title: "Foundations",
    items: ["DSA", "OOP", "System Design", "Cybersecurity"],
  },
]

const projects = [
  {
    index: "01",
    eyebrow: "Machine learning / NLP",
    title: "Duplicate Question Detection",
    description:
      "An intelligent semantic matching system that identifies duplicate question pairs using engineered similarity features and a production-ready prediction API.",
    tags: ["Python", "Random Forest", "FastAPI", "NLP"],
    link: "https://github.com/Arif1412/quora-duplicate-question-detection",
    action: "View repository",
  },
  {
    index: "02",
    eyebrow: "Voice AI / Health tech",
    title: "AarogyaVoice",
    description:
      "A voice-first rural health pre-triage assistant that captures vernacular speech, assesses urgency and returns localized guidance for frontline health workers.",
    tags: ["Voice AI", "STT / TTS", "FastAPI", "Tailwind"],
    link: "https://aarogyavoice.onrender.com",
    action: "Explore live project",
  },
  {
    index: "03",
    eyebrow: "Full stack / Commerce",
    title: "Hutch E-Commerce",
    description:
      "A modern commerce platform with product discovery, secure authentication, dynamic filtering, search suggestions and cloud-backed order workflows.",
    tags: ["Microsoft .NET", "C#", "SQL Cloud", "REST"],
    link: "#contact",
    action: "Request case study",
  },
]

function SectionHeading({
  kicker,
  title,
  copy,
}: {
  kicker: string
  title: string
  copy: string
}) {
  return (
    <div className="section-heading">
      <span className="kicker">{kicker}</span>
      <div>
        <h2>{title}</h2>
        <p>{copy}</p>
      </div>
    </div>
  )
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [resumeOpen, setResumeOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = resumeOpen ? "hidden" : ""
    const onKeyDown = (event: KeyboardEvent) =>
      event.key === "Escape" && setResumeOpen(false)
    window.addEventListener("keydown", onKeyDown)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [resumeOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="topbar">
        <div className="nav-wrap">
          <a
            className="brand"
            href="#home"
            onClick={closeMenu}
            aria-label="Morshed portfolio home"
          >
            <span className="brand-mark">MGM</span>
            <span className="brand-name">Md. Golam Morshed</span>
          </a>
          <nav
            className={menuOpen ? "nav-links open" : "nav-links"}
            aria-label="Main navigation"
          >
            {["About", "Expertise", "Experience", "Work", "Education"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={closeMenu}
                >
                  {item}
                </a>
              ),
            )}
          </nav>
          <div className="nav-actions">
            <button
              className="resume-button"
              onClick={() => setResumeOpen(true)}
            >
              Resume <Icon name="arrow" size={15} />
            </button>
            <button
              className="menu-button"
              aria-label="Toggle navigation"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <Icon name={menuOpen ? "x" : "menu"} size={21} />
            </button>
          </div>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <div className="availability">
              <span /> Available for ambitious projects <b>•</b> Berhampore,
              India
            </div>
            <p className="hero-overline">
              Software Engineer &amp; ML Specialist
            </p>
            <h1>
              Engineering ideas
              <br />
              into <em>intelligent</em>
              <br />
              digital products.
            </h1>
            <p className="hero-intro">
              I’m Md. Golam Morshed, a software engineer crafting scalable
              backends, thoughtful web experiences and practical machine
              learning systems.
            </p>
            <div className="hero-actions">
              <a className="primary-button" href="#work">
                Explore my work <Icon name="arrow" />
              </a>
              <a className="text-link" href="mailto:mdgolam.bhp@gmail.com">
                Let’s talk <Icon name="mail" size={17} />
              </a>
            </div>
            <div className="social-row">
              <span>Find me online</span>
              <a
                href="https://github.com/Arif1412"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <Icon name="github" />
              </a>
              <a
                href="https://www.linkedin.com/in/md-golam-morshed-227183277/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <Icon name="linkedin" />
              </a>
              <a href="mailto:mdgolam.bhp@gmail.com" aria-label="Email">
                <Icon name="mail" />
              </a>
            </div>
          </div>

          <div
            className="hero-visual"
            aria-label="Developer profile code preview"
          >
            <div className="code-window">
              <div className="window-bar">
                <div className="window-dots">
                  <i />
                  <i />
                  <i />
                </div>
                <span>profile.ts</span>
                <b>
                  <i /> active
                </b>
              </div>
              <div className="code-body">
                <span className="line-no">01</span>
                <p>
                  <span className="purple">const</span>{" "}
                  <span className="blue">developer</span> = {"{"}
                </p>
                <span className="line-no">02</span>
                <p className="indent">
                  name: <span className="green">'Md. Golam Morshed'</span>,
                </p>
                <span className="line-no">03</span>
                <p className="indent">
                  role: <span className="green">'Software Engineer'</span>,
                </p>
                <span className="line-no">04</span>
                <p className="indent">focus: [</p>
                <span className="line-no">05</span>
                <p className="indent-two">
                  <span className="green">'Machine Learning'</span>,
                </p>
                <span className="line-no">06</span>
                <p className="indent-two">
                  <span className="green">'Backend Systems'</span>,
                </p>
                <span className="line-no">07</span>
                <p className="indent-two">
                  <span className="green">'Product Engineering'</span>
                </p>
                <span className="line-no">08</span>
                <p className="indent">],</p>
                <span className="line-no">09</span>
                <p className="indent">
                  curious: <span className="purple">true</span>,
                </p>
                <span className="line-no">10</span>
                <p className="indent">
                  status: <span className="green">'ready to build'</span>
                </p>
                <span className="line-no">11</span>
                <p>{"}"};</p>
              </div>
              <div className="terminal-line">
                <Icon name="terminal" size={16} />
                <span>npm run create-impact</span>
                <i className="cursor" />
              </div>
            </div>
            <div className="floating-card stack-card">
              <Icon name="spark" />
              <span>
                AI + Full-stack
                <br />
                <b>Product mindset</b>
              </span>
            </div>
          </div>
        </section>

        <section className="skills-rail" aria-label="Technical skills">
          <div className="marquee">
            {[...skills, ...skills].map((skill, index) => (
              <span key={`${skill}-${index}`}>
                <i />
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section className="section about-section" id="about">
          <SectionHeading
            kicker="01 / About"
            title="Curious by nature. Precise by practice."
            copy="I turn complex technical challenges into products people can understand and trust."
          />
          <div className="about-grid">
            <div className="about-main">
              <p className="large-copy">
                My work lives where{" "}
                <span className="fg-inline-bold">software engineering</span>,
                data and human-centered thinking meet.
              </p>
              <p>
                I enjoy taking products from a rough question to a robust
                solution—mapping requirements, choosing practical architecture,
                writing maintainable code and iterating on what users need.
              </p>
            </div>
            <div className="principles">
              <div>
                <span>01</span>
                <p>
                  <b>Build for clarity</b>Great systems should feel simple, even
                  when the work behind them is not.
                </p>
              </div>
              <div>
                <span>02</span>
                <p>
                  <b>Learn in public</b>Curiosity, collaboration, and feedback
                  make every outcome stronger.
                </p>
              </div>
              <div>
                <span>03</span>
                <p>
                  <b>Own the details</b>Craft is the sum of thousands of
                  thoughtful small decisions.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section expertise-section" id="expertise">
          <SectionHeading
            kicker="02 / Expertise"
            title="A versatile technical toolkit."
            copy="From model development to polished interfaces, I work across the product stack."
          />
          <div className="expertise-grid">
            {skillGroups.map((group) => (
              <article className="expertise-card" key={group.title}>
                <span>{group.number}</span>
                <div className="expertise-icon">
                  <Icon name={group.number === "02" ? "spark" : "code"} />
                </div>
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section experience-section" id="experience">
          <SectionHeading
            kicker="03 / Experience"
            title="Learning by building."
            copy="Hands-on experience turning software requirements into reliable working products."
          />
          <div className="experience-card">
            <div className="experience-date">
              <span>2024</span>
              <p>February — April</p>
            </div>
            <div className="experience-main">
              <div className="experience-title">
                <div>
                  <span>Technical Internship</span>
                  <h3>Software Developer</h3>
                  <p>Ardent Computech Pvt. Ltd.</p>
                </div>
                <div className="company-mark">
                  <Icon name="briefcase" />
                </div>
              </div>
              <p>
                Developed a full-stack commerce platform with responsive product
                pages, secure authentication, cart workflows, and REST APIs for
                products, profiles and order processing.
              </p>
              <ul>
                <li>
                  <Icon name="check" size={15} /> Shipped 20+ responsive product
                  and catalog views
                </li>
                <li>
                  <Icon name="check" size={15} /> Designed robust CRUD flows
                  with validation and error states
                </li>
                <li>
                  <Icon name="check" size={15} /> Collaborated across product
                  requirements and technical delivery
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section projects-section" id="work">
          <SectionHeading
            kicker="04 / Selected work"
            title="Projects with a point of view."
            copy="A selection of practical systems spanning AI, health and commerce."
          />
          <div className="projects-list">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-number">{project.index}</div>
                <div className="project-content">
                  <span>{project.eyebrow}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tag-list">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
                <a
                  href={project.link}
                  target={
                    project.link.startsWith("http") ? "_blank" : undefined
                  }
                  rel="noreferrer"
                  aria-label={`${project.action}: ${project.title}`}
                >
                  <Icon name="external" />
                  <span>{project.action}</span>
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="section education-section" id="education">
          <SectionHeading
            kicker="05 / Education"
            title="Strong foundations, forward motion."
            copy="Formal computer science education paired with continuous independent learning."
          />
          <div className="education-grid">
            <article>
              <Icon name="graduation" />
              <span>2025 — 2027</span>
              <h3>Master of Technology</h3>
              <p>Computer Science &amp; Engineering</p>
              <b>Netaji Subhash Engineering College</b>
            </article>
            <article>
              <Icon name="graduation" />
              <span>2021 — 2025</span>
              <h3>Bachelor of Technology</h3>
              <p>Computer Science &amp; Engineering</p>
              <b>Future Institute of Technology</b>
            </article>
            <article className="cert-card">
              <span>Selected certifications</span>
              <div>
                <Icon name="check" />
                <p>
                  <b>Google Cybersecurity</b>Professional Certificate
                </p>
              </div>
              <div>
                <Icon name="check" />
                <p>
                  <b>AI for Business Professionals</b>HP Certification
                </p>
              </div>
            </article>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <span className="kicker">06 / Contact</span>
          <div>
            <p>Have a challenge in mind?</p>
            <h2>
              Let’s build something
              <br />
              <em>meaningful.</em>
            </h2>
          </div>
          <a href="mailto:mdgolam.bhp@gmail.com">
            Start a conversation <Icon name="arrow" />
          </a>
        </section>
      </main>

      <footer>
        <div>
          <span className="brand-mark">GM</span>
          <p>
            Designing useful things
            <br />
            with code and curiosity.
          </p>
        </div>
        <p>© {new Date().getFullYear()} Md. Golam Morshed</p>
        <div className="footer-links">
          <a
            href="https://github.com/Arif1412"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/md-golam-morshed-227183277/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>

      {resumeOpen && (
        <div
          className="modal-backdrop"
          role="presentation"
          onMouseDown={(event) =>
            event.target === event.currentTarget && setResumeOpen(false)
          }
        >
          <div
            className="resume-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="resume-title"
          >
            <button
              className="modal-close"
              onClick={() => setResumeOpen(false)}
              aria-label="Close resume"
            >
              <Icon name="x" />
            </button>
            <div className="resume-header">
              <span className="brand-mark">GM</span>
              <div>
                <h2 id="resume-title">Md. Golam Morshed</h2>
                <p>Software Engineer &amp; ML Specialist</p>
              </div>
            </div>
            <div className="resume-meta">
              <span>
                <Icon name="mail" size={14} /> mdgolam.bhp@gmail.com
              </span>
              <span>
                <Icon name="map" size={14} /> Berhampore, West Bengal
              </span>
            </div>
            <div className="resume-content">
              <section>
                <span>Profile</span>
                <p>
                  Software engineer with experience building machine learning
                  models, backend APIs, and responsive full-stack applications.
                  Focused on clean systems and practical outcomes.
                </p>
              </section>
              <section>
                <span>Core skills</span>
                <p>
                  Python · Java · C++ · Machine Learning · FastAPI · SQL · .NET
                  · React · System Design
                </p>
              </section>
              <section>
                <span>Experience</span>
                <h3>Technical Intern — Ardent Computech</h3>
                <p>
                  Built full-stack commerce features and REST APIs across
                  catalog, account, and order workflows.
                </p>
              </section>
              <section>
                <span>Education</span>
                <h3>M.Tech, Computer Science &amp; Engineering</h3>
                <p>Netaji Subhash Engineering College · 2025—2027</p>
                <h3>B.Tech, Computer Science &amp; Engineering</h3>
                <p>Future Institute of Technology · 2021—2025</p>
              </section>
            </div>
            <div className="modal-actions flex items-center justify-end gap-3 pt-4 border-t border-zinc-800">
            <button 
              onClick={() => setResumeOpen(false)}
              className="px-4 py-2 rounded-lg text-sm font-medium text-zinc-400 hover:text-white hover:bg-zinc-800/60 transition-all duration-200"
            >
            Close
            </button>
            <a
  href="/resume.pdf"
  download="Md_Golam_Morshed_Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#4ade80] hover:bg-[#22c55e] text-black text-sm"
>
  <Icon name="download" size={16} />
  <span>View / Download PDF</span>
</a>
          </div>
          </div>
        </div>
      )}
    </div>
  )
}
