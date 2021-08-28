import './work.css'

function Work({image, name, tags, link, children}){
  return (
    <div className="work wrapper">
      <a href={link}><img src={image} alt="work"/></a>
      <div className="wrapper">
      <h3><a href={link}>{name}</a></h3>
      <p>
        {children}
      </p>
     
        {tags.map((tag) => 
          <span>{tag}</span>
        )}
     
      </div>
    </div>
  )
}

export default Work