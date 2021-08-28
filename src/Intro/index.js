import './index.css'
import Button from '@material-ui/core/Button'
import ArrowRightAltRoundedIcon from '@material-ui/icons/ArrowRightAltRounded';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function Intro(){
  return(
    <div className="intro">
      <div className="intro__intro wrapper">
        <span>i'm </span>
        <span>
          Taminoturoko Briggs 
        </span>
        <span>Software developer</span>

        <Button 
          variant="outlined"
          id="intro__intro__button"
          endIcon={ <ArrowRightAltRoundedIcon/>}
        >
          <a href="#works">Works</a>
        </Button>

        <span className="intro__intro__socialIcons">
          <a 
            href="https://twitter.com/Tammibr25891504" 
            target="_blank"
            rel="noreferrer"
          >
              <TwitterIcon />
          </a>
          <a 
            href="https://www.linkedin.com/in/taminoturoko-briggs-b98251203/" 
            target="_blank"
            rel="noreferrer"
          >
              <LinkedInIcon/>
          </a>
        </span>
      </div>
    </div>
  )
}

export default Intro