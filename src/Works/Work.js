import './work.css'

function Work({image, name, tags, link, children}){
  return (
    <div className="work">
      <div>
        <a href={link} target="_blank" rel="noreferrer"><img src={image} alt="work"/></a>
        <div className='wrapper'>
          <h3><a href={link} target="_blank" rel="noreferrer">{name}</a></h3>
          <p>
            {children}
          </p>
        </div>
      </div>
      <div className="wrapper">
        <span className="work__tags">
          {tags.map((tag) => 
            <span>{tag}</span>
          )}
        </span>
      </div>
    </div>
  )
}

export default Work