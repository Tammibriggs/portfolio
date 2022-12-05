import '../styles/article.css'

function Article({direction, image, publishedDate, tags=[], title, description, reduceTop}) {
  return (
    <div 
      className={`article ${direction === 'row' && 'row'}`}
      style={{top: `${reduceTop ? '45px' : '0'}`}}
    >
      {direction !== 'row' 
        ? <>
            <img src={image} alt='article'/>
            <span>{publishedDate}</span>
            <div className='article__tags'>
              {tags.map((tag) => (
                <span key={tag}>#{tag}</span>
              ))}
            </div>
            <h2>{title}</h2>
            <p>
              {description}
            </p>
          </>
        : <>
            <img src={image} alt='article'/>
            <div className='article__desc'>
              <h2>{title}</h2>
              <span>{publishedDate}</span>
              <div className='article__tags'>
                {tags.map((tag) => (
                  <span key={tag}>#{tag}</span>
                ))}
              </div>
              <p>
                {description}
              </p>
            </div>
          </>
      }
      
    </div>
  )
}

export default Article