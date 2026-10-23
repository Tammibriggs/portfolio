import TechIcon from './TechIcon'
import '../styles/deployedProj.css'
import {useContextValue} from '../context'

function DeployedProj({name, description, image, icons={dark: [], light: []}}) {

  const {isLight} = useContextValue()

  return (
    <div className='deployedProj' style={{backgroundImage: `url(${image})`}}>
      <div className='deployedProj__details'>
        <div>
          <h2>{name}</h2>
          <a href='/'>
            {isLight
              ? <img src='/assets/external-link.png' alt='external link'/>
              : <img src='/assets/external-link-light.png' alt='external link'/>
            }
          </a>
        </div>
        <p>{description}</p>
        <div className='deployedProj__techIcons'>
          {isLight
            ? <>
                {icons.dark.map((icon, i) => (
                  <TechIcon key={i} icon={icon}/>
                ))}
              </>
            : <>
                {icons.light.map((icon, i) => (
                  <TechIcon key={i} icon={icon}/>
                ))}
              </>
          }
        </div>
      </div> 
    </div>
  )
}

export default DeployedProj
