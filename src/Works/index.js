import './index.css'
import Work from './Work.js'
import workData from './workData'

function Works(){
  return(
    <div className="works" id="works">
      <h2>Works</h2>
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
  )
}

export default Works