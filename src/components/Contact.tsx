import { useState, type FormEvent } from 'react'
import { portfolio } from '../data/portfolio'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <div className="contact__grid">
          <div className="contact__info">
            <span className="section__label">Contact</span>
            <h2 className="section__title">Let&apos;s work together</h2>
            <p className="contact__text">
              Have a project in mind or want to chat about frontend development? Drop me a message — I&apos;d love to hear from you.
            </p>

            <ul className="contact__details">
              <li>
                <MailIcon />
                <a href={`mailto:${portfolio.email}`}>{portfolio.email}</a>
              </li>
              <li>
                <LocationIcon />
                <span>{portfolio.location}</span>
              </li>
            </ul>

            <div className="contact__social">
              <a href={portfolio.social.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href={portfolio.social.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>

          <form className="contact__form" onSubmit={handleSubmit}>
            {submitted ? (
              <div className="contact__success">
                <span className="contact__success-icon">✓</span>
                <h3>Message sent!</h3>
                <p>Thanks for reaching out. I&apos;ll get back to you soon.</p>
                <button type="button" className="btn btn--ghost" onClick={() => setSubmitted(false)}>
                  Send another
                </button>
              </div>
            ) : (
              <>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input id="name" name="name" type="text" required placeholder="Your name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" required placeholder="you@example.com" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows={5} required placeholder="Tell me about your project..." />
                </div>
                <button type="submit" className="btn btn--primary btn--full">
                  Send Message
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

function MailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M22 7l-10 7L2 7" />
    </svg>
  )
}

function LocationIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}
