import '../styles/socials.css'
import {useContextValue} from '../context'

function Socials() {
  
  const {isLight} = useContextValue()

  return (
    <div className="socials">
      {isLight 
        ? <>
            <a href='https://github.com/Tammibriggs'>
            <img src="/assets/github.png" alt="github"/>
            </a>
            <a href='https://www.linkedin.com/in/taminoturoko-briggs-b98251203/'>
              <img src="/assets/linkedin.png" alt="github"/>
            </a>
            <a href='https://twitter.com/Tammibr25891504'>
              <img src="/assets/twitter.png" alt="github"/>
            </a>
          </>
        : <>
            <a href='https://github.com/Tammibriggs'>
            <img src="/assets/github-light.png" alt="github"/>
            </a>
            <a href='https://www.linkedin.com/in/taminoturoko-briggs-b98251203/'>
              <img src="/assets/linkedin-light.png" alt="github"/>
            </a>
            <a href='https://twitter.com/Tammibr25891504'>
              <img src="/assets/twitter-light.png" alt="github"/>
            </a>
          </>
      }
    </div>
  )
}

export default Socials
 