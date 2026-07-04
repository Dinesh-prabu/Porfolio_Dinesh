import { portfolio } from '../data/portfolio'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>
          &copy; {year} {portfolio.name}. Built with React &amp; Vite.
        </p>
        <a href="#" className="footer__top">
          Back to top ↑
        </a>
      </div>
    </footer>
  )
}
