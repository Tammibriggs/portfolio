import '../styles/home.css'
import Hero from '../components/Hero';
import About from '../components/About';
import Work from '../components/Work';
import Article from '../components/Article';
import { Link } from 'react-router-dom';
import {useContextValue} from '../context'

function Home() {

  const {isLight} = useContextValue()
  const arr = [2]

  return (
    <div className='home'>
      <Hero 
        text1='👋🏾 Hey there, my name is Taminoturoko Briggs, I’m a'
        text2='Software developer and Technical writer'
      />
      <About />
      <div className='works wrapper'> 
        <h2 className='section-heading'>Things I’ve built</h2>
        <p>Here are some of my featured projects</p>
        <div className='works__list'>
          <Work 
            image='/assets/proj.png'
            name='Halcyon Theme'
            description='
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Ut et massa mi. Aliquam in hendrerit urna. Pellentesque 
              sit amet sapien fringilla, mattis ligula consectetur.
            '
            gitHubLink='/'
            projectLink='/'
            techIcons={{dark: ['/assets/react.png', '/assets/react.png'], light: ['/assets/react-light.png', '/assets/react-light.png']}}
          />
          <Work 
            image='/assets/proj.png'
            name='Halcyon Theme'
            description='
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Ut et massa mi. Aliquam in hendrerit urna. Pellentesque 
              sit amet sapien fringilla, mattis ligula consectetur.
            '
            gitHubLink='/'
            projectLink='/'
            techIcons={{dark: ['/assets/react.png', '/assets/react.png'], light: ['/assets/react-light.png', '/assets/react-light.png']}}
          />
        </div>
        <span className='viewMore'>
          View more 
          <img src='/assets/arrow-up-right.png' alt='arrow' />
        </span>
      </div>
      <div className='articles wrapper'>
        <h2 className='section-heading'>Articles I’ve written</h2>
        <p>Browse through my featured collection of articles</p>
        <div className='articles__list'>
        {[...Array(6).keys()].map((_, i) => {
            let reduceTop = false
            arr.push(arr[i] + 3)
            if(arr.includes(i+1)) reduceTop = true
            else reduceTop = false 
            return (
              <Article 
                key={i}
                image='assets/proj.png'
                reduceTop={reduceTop}
                publishedDate='24th Nov, 2022'
                tags={['react', 'firebase']}
                title='Lorem Ipsum dolar sit amet'
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Ut et massa mi. Aliquam in hendrerit urna.'
              />
            )
          })}          
        </div>
        <Link to='blog' className='viewMore'>
          View more 
          {isLight 
            ? <img src='/assets/arrow-up-right.png' alt='arrow' />
            : <img src='/assets/up-right-arrow-light.png' alt='arrow' />
          }
        </Link>
      </div>
    </div>
  )
}

export default Home
