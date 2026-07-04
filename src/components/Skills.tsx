import { portfolio } from '../data/portfolio'

const categoryLabels = {
  frontend: 'Frontend',
  tools: 'Tools & Workflow',
  other: 'Practices',
} as const

export default function Skills() {
  const categories = ['frontend', 'tools', 'other'] as const

  return (
    <section className="section skills" id="skills">
      <div className="container">
        <div className="section__header">
          <span className="section__label">Skills</span>
          <h2 className="section__title">Technologies I work with</h2>
        </div>

        <div className="skills__grid">
          {categories.map((category) => (
            <div className="skills__group" key={category}>
              <h3 className="skills__group-title">{categoryLabels[category]}</h3>
              <ul className="skills__list">
                {portfolio.skills
                  .filter((s) => s.category === category)
                  .map((skill) => (
                    <li className="skills__item" key={skill.name}>
                      {skill.name}
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
