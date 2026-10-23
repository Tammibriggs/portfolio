import '../styles/undeployedProj.css'
import TechIcon from './TechIcon'
import {useContextValue} from '../context'

function UndeployedProj({
  githubLink, 
  articleLink, 
  title, 
  description, 
  icons=[{dark: [], light: []}], 
  reduceTop
}) {

  const {isLight} = useContextValue()

  return (
    <div className='undeployedProj' style={{top: `${reduceTop ? '45px' : '0'}`}}>
      <div className='undeployedProj__header'>
        {isLight
          ? <img src='/assets/folder.png' alt='folder'/>
          : <img src='/assets/folder-light.png' alt='folder'/>
         
        }
        <span>
          {isLight
            ? <>
                <a href={githubLink}>
                <img src='/assets/github.png' alt='GitHub'/>
                </a>
                <a href={articleLink}>
                  <img src='/assets/external-link.png' alt='external link'/>
                </a>
              </>
            :  <>
                <a href={githubLink}>
                <img src='/assets/github-light.png' alt='GitHub'/>
                </a>
                <a href={articleLink}>
                  <img src='/assets/external-link-light.png' alt='external link'/>
                </a>
              </>
          }
        </span>
      </div>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className='undeployedProj__techIcons'>
        {isLight 
          ? <>
              {icons.dark.map((icon, i) => (
                <TechIcon
                  key={i} 
                  icon={icon}
                />
              ))}
            </>
          : <>
              {icons.light.map((icon, i) => (
                <TechIcon
                  key={i} 
                  icon={icon}
                />
              ))}
            </>
        }
      </div>
    </div>
  )
}

export default UndeployedProj
