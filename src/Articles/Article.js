import './article.css'
import ArrowRightAltRoundedIcon from '@material-ui/icons/ArrowRightAltRounded';
import Button from '@material-ui/core/Button'

function Article({title, tags, link, publication, icon, children}){
  return (
    <div className="article wrapper">
      <div className="wrapper">
        <h3>{title}</h3>
        <p>{children}</p>
        <span className="article__publication">
          <img src={icon} alt="publication icon"/> {publication}
        </span>
        {tags.map((tag) => 
          <span className="article__tag">{tag}</span>
        )}<br/>
        <span className="article__link">
          <Button 
            variant="outlined"
            id="article__link__button"
            endIcon={<ArrowRightAltRoundedIcon id="article__link__icons"/>}
          >
            <a href={link}>Read</a>
          </Button>
        </span>
      </div>
    </div>
  )
}

export default Article