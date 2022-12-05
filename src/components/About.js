import '../styles/about.css'
import TechIcon from './TechIcon'
import {useContextValue} from '../context'

function About() {

  const {isLight} = useContextValue()
    
  return (
    <div className="about wrapper">
      <h2>About me</h2>
      <p>Let me introduce myself</p>
      <div>
        <img src='/assets/profile.jpg' alt='profile'/>
        <div className='about__desc'>
          <p>
            My name is Taminoturoko Briggs. 
            I’m a Software developer and Technical writer. Lorem ipsum dolor 
            sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
            Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. 
            Maecenas vitae mattis tellus.
          </p>

          <h3>Favorite technologies</h3>
          <p>Here are a few of my favorite technologies right now</p>
          <div className='about__techs'>
            {isLight &&
              <>
                <TechIcon icon={'/assets/react.png'} />
                <TechIcon icon={'/assets/react.png'} />
                <TechIcon icon={'/assets/react.png'} /> 
              </>
            }
            {!isLight &&
              <>
                <TechIcon icon={'/assets/react-light.png'} />
                <TechIcon icon={'/assets/react-light.png'} />
                <TechIcon icon={'/assets/react-light.png'} /> 
              </>
            }
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default About
