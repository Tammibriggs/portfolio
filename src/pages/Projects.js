import Hero from '../components/Hero'
import DeployedProj from '../components/DeployedProj'
import UndeployedProj from '../components/UndeployedProject'
import '../styles/projects.css'

function Projects() {

  const arr = [2] 

  return (
    <div className='projects'>
      <Hero 
        text1='Works'
        text2='Take a look at the things I’ve built'
      />
      
      <div className='wrapper'>
        <h2 className='section-heading'>Featured projects</h2>
        <p>
          Here’s a collection of my projects I’ve had the pleasure 
          of working on for or with another group of talented individuals
        </p>
        <div className='projects__deployed'>
          <DeployedProj 
            image='/assets/project-image2.png'
            name='BroadState'
            description='Totally removing the need to crate multiple application 
            with their own CMS for a particular device'
            icons={{dark: ['/assets/react.png', '/assets/react.png'], light: ['/assets/react-light.png']}}
          />
          <DeployedProj 
            image='/assets/project-image1.png'
            name='BroadState'
            description='Totally removing the need to crate multiple application 
            with their own CMS for a particular device'
            icons={{dark: ['/assets/react.png', '/assets/react.png'], light: ['/assets/react-light.png']}}
          />
          <DeployedProj 
            image='/assets/project-image2.png'
            name='BroadState'
            description='Totally removing the need to crate multiple application 
            with their own CMS for a particular device'
            icons={{dark: ['/assets/react.png', '/assets/react.png'], light: ['/assets/react-light.png']}}
          />
          <DeployedProj 
            image='/assets/project-image1.png'
            name='BroadState'
            description='Totally removing the need to crate multiple application 
            with their own CMS for a particular device'
            icons={{dark: ['/assets/react.png', '/assets/react.png'], light: ['/assets/react-light.png']}}
          />
        </div>
        
        <h2 className='section-heading'>Other projects</h2>
        <p>Here’s a collection of my other projects</p>
        <div className='articles__list'>
          {[...Array(6).keys()].map((_, i) => {
            let reduceTop = false
            arr.push(arr[i] + 3)
            if(arr.includes(i+1)) reduceTop = true
            else reduceTop = false 
            return (
              <UndeployedProj
                key={i}
                githubLink = '/' 
                reduceTop={reduceTop}
                articleLink='/' 
                title='Task Manager' 
                description='Totally removing the need to crate multiple application
                with their own CMS for a particular device with their own CMS for a particular device'
                icons={{dark: ['/assets/react.png', '/assets/react.png'], light: ['/assets/react-light.png']}}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Projects
