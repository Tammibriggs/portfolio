import './index.css'
import Work from './Work.js'
import workData from './workData'

function Works(){
  return(
    <div className="works" id="works">
      <h2>Resent Works</h2>
      <p>Responsive and Scalable Web builds</p>
      <div className="wrapper">
        <div className="works__flex">
          { workData.map((data) => 
            <Work 
            image={data.image}
            name={data.name}
            tags={data.tags}
            link={data.link}
            >
              {data.description}
            </Work>
          )}
        </div>
      </div>
    </div>
  )
}

export default Works