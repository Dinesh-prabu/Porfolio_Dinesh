import { portfolio } from '../data/portfolio'

export default function Experience() {
  return (
    <section className="section experience" id="experience">
      <div className="container">
        <div className="section__header">
          <span className="section__label">Experience</span>
          <h2 className="section__title">Where I&apos;ve worked</h2>
        </div>

        <div className="timeline">
          {portfolio.experience.map((job, index) => (
            <article className="timeline__item" key={`${job.company}-${index}`}>
              <div className="timeline__marker" aria-hidden="true" />
              <div className="timeline__card">
                <div className="timeline__header">
                  <div>
                    <h3 className="timeline__company">{job.company}</h3>
                    <p className="timeline__role">{job.role}</p>
                    {job.client && (
                      <p className="timeline__client">Client: {job.client}</p>
                    )}
                  </div>
                  <span className="timeline__period">{job.period}</span>
                </div>

                <ul className="timeline__highlights">
                  {job.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                {job.projects.length > 0 && (
                  <div className="timeline__projects">
                    {job.projects.map((project) => (
                      <div className="timeline__project" key={project.name}>
                        <span className="timeline__project-name">{project.name}</span>
                        <p>{project.description}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
