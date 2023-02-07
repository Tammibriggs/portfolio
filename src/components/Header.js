import { useState } from 'react'
import '../styles/header.css'
import { NavLink } from "react-router-dom";
import {useContextValue} from '../context'

function Header() {

  const {isLight, setIsLight} = useContextValue()
  const [isNavOpen, setIsNavOpen] = useState(false)

  return (
    <>
      <header className={isNavOpen ? 'navOpened' : ''} >
        <h2>TammiBriggs</h2>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="blog">Articles</NavLink>
          <NavLink to="contact">Contact</NavLink>
        </nav>
        <div>
          {isLight 
            ? <img 
                src='/assets/theme-toggle.png' 
                alt='theme toggle' 
                className='background-switch'
                onClick={() => setIsLight(!isLight)}/>
            : <img 
                src='/assets/sun-light.png' 
                alt='theme toggle' 
                className='background-switch'
                onClick={() => setIsLight(!isLight)}/>
          }
          <>
            {isLight && 
              <>
                {isNavOpen
                  ? <img 
                      src='/assets/close.png' 
                      alt='menu' 
                      onClick={() => setIsNavOpen(!isNavOpen)}
                    />
                  : <img 
                      src='/assets/menu.png' 
                      alt='menu' 
                      onClick={() => setIsNavOpen(!isNavOpen)}
                    />
                }
              </>
            }
            {!isLight && 
              <>
                {isNavOpen
                  ? <img 
                      src='/assets/close-light.png' 
                      alt='menu' 
                      onClick={() => setIsNavOpen(!isNavOpen)}
                    />
                  : <img 
                      src='/assets/menu-light.png' 
                      alt='menu' 
                      onClick={() => setIsNavOpen(!isNavOpen)}
                    />
                }
              </>
            }
          </>
        </div>
      </header>
      <nav className={`wrapper mobileNav ${isNavOpen && 'mobileNavOpen'}`}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="blog">Articles</NavLink>
        <NavLink to="contact">Contact</NavLink>
      </nav>
    </>
  )
}

export default Header