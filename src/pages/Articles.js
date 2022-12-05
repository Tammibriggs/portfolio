import '../styles/articles.css'
import Article from '../components/Article'
import Hero from '../components/Hero'
import Search from '../components/Search'
import { useEffect, useState } from 'react'
import Filter from '../components/Filter'
import Testimonial from '../components/Testimonial'

function Articles() {

  const [searchValue, setSearchValue] = useState('')
  const [languages, setLanguagues] = useState([])
  const [frameworks, setFrameworks] = useState([])
  const arr = [2]

  useEffect(() => {
    window.scrollTo({top:0})
  }, [])

  return (
    <div className='articles'>
      <Hero 
        text1='Articles'
        text2='A collection of articles I’ve written'
      >
        <div className='articles__testimonials'>
          <Testimonial 
            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Ut et massa mi. Aliquam in hendrerit urna.'
            author='Elon musk'
            authorImg='/assets/profile.jpg'
            platform='Gmail'
          />
          <Testimonial 
            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Ut et massa mi. Aliquam in hendrerit urna.'
            author='Elon musk'
            authorImg='/assets/profile.jpg'
            platform='Gmail'
          />
          <Testimonial 
            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Ut et massa mi. Aliquam in hendrerit urna.'
            author='Elon musk'
            authorImg='/assets/profile.jpg'
            platform='Gmail'
          />
        </div>
      </Hero>
      <div className='wrapper'>
        <h2 className='section-heading'>Featured articles</h2>
        <p>Here are some of my recently featured articles</p>
        <div className='featured__list'>
          <Article 
            image='assets/proj.png'
            publishedDate='24th Nov, 2022'
            tags={['react', 'firebase']}
            title='Lorem Ipsum dolar sit amet'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Ut et massa mi. Aliquam in hendrerit urna.'
          />
          <div className='featured__listg2'>
            <Article 
              direction='row'
              image='assets/proj.png'
              publishedDate='24th Nov, 2022'
              tags={['react', 'firebase']}
              title='Lorem Ipsum dolar sit amet'
              description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Ut et massa mi. Aliquam in hendrerit urna.'
            />
            <Article 
              direction='row'
              image='assets/proj.png'
              publishedDate='24th Nov, 2022'
              tags={['react', 'firebase']}
              title='Lorem Ipsum dolar sit amet'
              description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Ut et massa mi. Aliquam in hendrerit urna.'
            />
          </div>
        </div>
      </div>

      <div className='wrapper'>
        <h2 className='section-heading'>All articles</h2>
        <p>Browse through all my articles</p>
        <div className='searchNfilter'>
          <Search setState={setSearchValue} value={searchValue}/>
          <Filter 
            languages={languages}
            setLanguagues={setLanguagues}
            frameworks={frameworks}
            setFrameworks={setFrameworks}
          />
        </div>
        <div className='articles__list'>
        {[...Array(6).keys()].map((_, i) => {
            let reduceTop = false
            arr.push(arr[i] + 3)
            if(arr.includes(i+1)) reduceTop = true
            else reduceTop = false 
            return (
              <Article 
                key={i}
                reduceTop={reduceTop}
                image='assets/proj.png'
                publishedDate='24th Nov, 2022'
                tags={['react', 'firebase']}
                title='Lorem Ipsum dolar sit amet'
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Ut et massa mi. Aliquam in hendrerit urna.'
              />
            )
          })}          
        </div>
        <span className='loadMore'>
          Load more 
        </span>
      </div>
    </div>
  )
}

export default Articles
