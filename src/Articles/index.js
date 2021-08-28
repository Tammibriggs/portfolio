import './index.css'
import Article from './Article'
import articleData from './articleData'

function Articles(){
  return (
    <div className="articles">
      <h2>Articles</h2>
      {articleData.map((data) =>
        <Article
        title={data.title}
        tags={data.tags}
        link={data.link}
        publication={data.publication}
        icon={data.icon}
        >
          {data.intro}
        </Article>
      )}
      
    </div>
  )
}

export default Articles