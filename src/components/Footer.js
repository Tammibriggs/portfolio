import { Link } from 'react-router-dom'
import '../styles/footer.css'

const socials = [
  { name: 'GitHub', href: 'https://github.com/Tammibriggs' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/taminoturoko-briggs-b98251203/' },
]

function Footer() {
  return (
    <footer className='footer wrapper'>
      <div className='footer__brand'>
        <h2>TammiBriggs</h2>
        <p>Technical writer for APIs and developer tools</p>
        <span>© {new Date().getFullYear()} Taminoturoko Briggs</span>
      </div>

      <div className='footer__navs'>
        <div>
          <h3>Site</h3>
          <nav>
            <Link to='/'>Home</Link>
            <Link to='/docs'>Docs</Link>
            <Link to='/blog'>Articles</Link>
            <Link to='/contact'>Contact</Link>
          </nav>
        </div>
        <div>
          <h3>Socials</h3>
          <nav>
            {socials.map(({ name, href }) => (
              <a key={name} href={href} target='_blank' rel='noopener noreferrer'>{name}</a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer
