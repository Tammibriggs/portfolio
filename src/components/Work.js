import '../styles/work.css'
import TechIcon from './TechIcon'
import {useContextValue} from '../context'

function Work({
  image,
  name,
  description,
  gitHubLink,
  projectLink,
  techIcons={dark: [], light: []}
}) {

  const {isLight} = useContextValue()

  return (
    <div className='work'>
      <div 
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }} 
      className='work__img'></div>
      <div>
        <h3>{name}</h3>
        <div className='work__description'>
          <p>{description}</p>
        </div>
        <h4>Technologies used</h4>
        <div className='work__techs'>
          {isLight &&
            <>
              {techIcons.dark.map((icon, i) => (
                <TechIcon key={i} icon={icon} />
              ))}
            </>
          }
          {!isLight &&
            <>
              {techIcons.light.map((icon, i) => (
                <TechIcon key={i} icon={icon} />
              ))}
            </>
          }
        </div>
        <div className='works__externalLinks'>
          {isLight &&
            <>
              <a href={gitHubLink} target='_blank' rel="noreferrer">
                <img src='/assets/github.png' alt='GitHub'/>
              </a>
              <a href={projectLink} target='_blank' rel="noreferrer">
                <img src='/assets/external-link.png' alt='external link'/>
              </a>
            </>
          }
          {!isLight &&
            <>
              <a href={gitHubLink}>
                <img src='/assets/github-light.png' alt='GitHub'/>
              </a>
              <a href={projectLink}>
                <img src='/assets/external-link-light.png' alt='external link'/>
              </a>
            </>
          }
        </div>
      </div>
    </div>
  )
}

export default Work
