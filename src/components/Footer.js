import { Link } from 'react-router-dom'
import '../styles/footer.css'

function Footer() {
  return (
    <footer className='footer wrapper'>
      <div className='footer__mobile'>
        <h2>Tammibriggs</h2>
        <p>Software Devloper & Technical writer</p>
        <div className='footer__navs'>
          <div>
            <h3>Site</h3>
            <nav>
              <Link to='/'>Home</Link>
              <Link to='/blog'>Articles</Link>
              <Link to='/contact'>Contacts</Link>
            </nav>
          </div>
          <div>
            <h3>Socials</h3>
            <nav>
              <a href='https://github.com/Tammibriggs'>GitHub</a>
              <a href='https://www.linkedin.com/in/taminoturoko-briggs-b98251203/'>LinkedIn</a>
              <a href='https://twitter.com/Tammibr25891504'>Twitter</a>
            </nav>
          </div> 
        </div>
        <span>Designed by Miracle, Bult by Tammibriggs. With 💖</span>
        <span>© 2022, Tammibrigs</span>
      </div>

      <div className='footer__desktop'>
        <div>
          <h2>Tammibriggs</h2>
          <p>Software Devloper & Technical writer</p>
          <span>Designed by Miracle, Bult by Tammibriggs. With 💖</span>
          <span>© 2022, Tammibrigs</span>
        </div>
     
        <div className='footer__navs'>
          <div>
            <h3>Site</h3>
            <nav>
              <Link to='/'>Home</Link>
              <Link to='/blog'>Articles</Link>
              <Link to='/contact'>Contacts</Link>
            </nav> 
          </div>
          <div>
            <h3>Socials</h3>
            <nav>
              <a href='https://github.com/Tammibriggs'>GitHub</a>
              <a href='https://www.linkedin.com/in/taminoturoko-briggs-b98251203/'>LinkedIn</a>
              <a href='https://twitter.com/Tammibr25891504'>Twitter</a>
            </nav>
          </div>
          
        </div>
      </div>
    </footer>
  )
}

export default Footer
