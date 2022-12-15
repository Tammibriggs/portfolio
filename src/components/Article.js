import '../styles/article.css'

function Article({direction, link, image, publishedDate, tags=[], title, description, reduceTop}) {
  return (
    <div 
      className={`article ${direction === 'row' && 'row'}`}
      style={{top: `${reduceTop ? '45px' : '0'}`}}
    >
      {direction !== 'row' 
        ? <>
            <div style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundColor: '#16e5ff5e',
              backgroundBlendMode: 'luminosity'
            }} className='article__img'/>
            <span>{publishedDate}</span>
            <div className='article__tags'>
              {tags.map((tag) => (
                <span key={tag}>#{tag}</span>
              ))}
            </div>
            <h2><a href={link}>{title}</a></h2>
            <p>
              {description}
            </p>
          </>
        : <>
            <div style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundColor: '#16e5ff5e',
              backgroundBlendMode: 'luminosity'
              }} 
              className='article__img'
            />
            <div className='article__desc'>
              <h2><a href={link}>{title}</a></h2>
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