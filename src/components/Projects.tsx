import { portfolio, type Project } from '../data/portfolio'

const projectGradients: Record<string, string> = {
  shipping: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)',
  casino: 'linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)',
  incidents: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
  ecommerce: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
}

export default function Projects() {
  return (
    <section className="section projects" id="projects">
      <div className="container">
        <div className="section__header">
          <span className="section__label">Projects</span>
          <h2 className="section__title">Products I&apos;ve built</h2>
        </div>

        <div className="projects__grid">
          {portfolio.projects.map((project: Project, index) => (
            <article className="project-card" key={project.title} style={{ animationDelay: `${index * 0.1}s` }}>
              <div
                className="project-card__image"
                style={{ background: projectGradients[project.image] ?? projectGradients.ecommerce }}
              >
                {(project.liveUrl || project.repoUrl) && (
                  <div className="project-card__image-overlay">
                    <div className="project-card__links">
                      {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-card__link">
                          Live Demo
                        </a>
                      )}
                      {project.repoUrl && (
                        <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="project-card__link">
                          Source
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>

              <div className="project-card__body">
                <p className="project-card__company">{project.company}</p>
                <h3 className="project-card__title">{project.title}</h3>
                {project.period && <span className="project-card__period">{project.period}</span>}
                <p className="project-card__desc">{project.description}</p>
                <ul className="project-card__tags">
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
