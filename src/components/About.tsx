import { portfolio } from '../data/portfolio'

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="container">
        <div className="section__header">
          <span className="section__label">About Me</span>
          <h2 className="section__title">Building the web, one component at a time</h2>
        </div>

        <div className="about__grid">
          <div className="about__text">
            {portfolio.about.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          <div className="about__stats">
            {portfolio.stats.map((stat) => (
              <div className="about__stat" key={stat.label}>
                <span className="about__stat-value">{stat.value}</span>
                <span className="about__stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
