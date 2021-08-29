import './index.css'
import my_picture from '../images/my_picture.jpg'

function About(){
  return(
    <div className="about wrapper">
      <h2>About Me</h2>
      <div className="about__mobile wrapper">
        <img src={my_picture} alt="my pic"/>

        <p>
          I am an enthusiastic software developer, soaking up as much knowledge and practice as I can 
          in an attempt to perfect my craft. I am well-knowledged in UI/UX principles and practices.
          In addition to software development, I am also a technical writer: simplifying topics/concepts on the web.
        </p>

      </div>
       
    </div>
  )

}

export default About