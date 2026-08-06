import {
  experience,
  interests,
  profile,
  projects,
  skillGroups,
} from './data/content'
import './App.css'

function App() {
  return (
    <div className="page">
      <div className="atmosphere" aria-hidden="true" />

      <header className="nav">
        <a className="nav-brand" href="#top">
          {profile.name.split(' ')[0]}
        </a>
        <nav className="nav-links" aria-label="Primary">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <p className="hero-role reveal reveal-delay-1">{profile.role}</p>
          <h1 className="hero-name reveal reveal-delay-2">{profile.name}</h1>
          <p className="hero-tagline reveal reveal-delay-3">{profile.tagline}</p>
          <div className="hero-actions reveal reveal-delay-4">
            <a className="btn btn-primary" href="#projects">
              View work
            </a>
            <a className="btn btn-ghost" href="#contact">
              Get in touch
            </a>
          </div>
          <div className="hero-scroll reveal reveal-delay-5" aria-hidden="true">
            <span />
          </div>
        </section>

        <section id="about" className="section">
          <div className="section-head">
            <p className="eyebrow">About</p>
            <h2>Reliable systems, clear engineering.</h2>
          </div>
          <div className="about-copy">
            {profile.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section id="skills" className="section">
          <div className="section-head">
            <p className="eyebrow">Skills</p>
            <h2>Tools I work with every day.</h2>
          </div>
          <div className="skills-grid">
            {skillGroups.map((group) => (
              <div key={group.title} className="skill-group">
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <div className="section-head">
            <p className="eyebrow">Projects</p>
            <h2>Selected backend & infrastructure work.</h2>
          </div>
          <div className="projects">
            {projects.map((project, index) => (
              <article key={project.title} className="project">
                <div className="project-index">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div className="project-body">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <ul>
                    {project.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                  <p className="project-stack">{project.stack.join(' · ')}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section">
          <div className="section-head">
            <p className="eyebrow">Experience</p>
            <h2>{experience.title}</h2>
          </div>
          <ul className="experience-list">
            {experience.responsibilities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section id="contact" className="section section-contact">
          <div className="section-head">
            <p className="eyebrow">Contact</p>
            <h2>Let’s build something solid.</h2>
            <p className="section-lead">
              Open to backend and DevOps collaborations, architecture discussions,
              and interesting technical challenges.
            </p>
          </div>
          {/* <div className="contact-actions">
            <a
              className="btn btn-primary"
              href={profile.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div> */}
          <ul className="interests" aria-label="Interests">
            {interests.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="footer">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <a href="#top">Back to top</a>
      </footer>
    </div>
  )
}

export default App
