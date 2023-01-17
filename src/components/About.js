import '../styles/about.css'
import {useContextValue} from '../context'

function About({ technologies={darkIcon: [], lightIcon: []}, text, image}) {

  const {isLight} = useContextValue()
    
  return (
    <div className="about">
      <div>
        <img src={image} alt='profile'/>
        <div className='about__desc'>
          <p>
            {text}
          </p>
          <h3>Favorite technologies</h3>
          <p>Here are a few of my favorite technologies and tools right now</p>
          <div className='about__techs'>
            {isLight &&
              <>  
                {technologies.darkIcon.map((icon, i) => (
                  <div key={i}>
                    <img src={icon.icon} alt='logo'/>
                    <span>{icon.name}</span>
                  </div>
                ))}
              </>
            }
            {!isLight &&
              <>  
                {technologies.lightIcon.map((icon, i) => (
                  <div key={i}>
                    <img src={icon.icon} alt='logo'/>
                    <span>{icon.name}</span>
                  </div>
                ))}
              </>
            }
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default About
