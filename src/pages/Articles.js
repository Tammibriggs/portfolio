import '../styles/articles.css'
import Article from '../components/Article'
import Hero from '../components/Hero'
import Search from '../components/Search'
import { useEffect, useState } from 'react'
import Filter from '../components/Filter'
import Testimonial from '../components/Testimonial'
import { gql, useQuery } from '@apollo/client'

const LIST__FEATURED__ARTICLES = gql`
  {
    listFeaturedArticles {
      data {
        image
        topic
        summary
        publishedDate
        tags
        link
      }
    }
  }
`

const LIST__ARTICLES = gql`
 query ListArticles($limit: Int){
    listArticles(limit: $limit, sort:createdOn_ASC) {
      data {
        image
        topic
        publishedDate
        language
        tags
        summary
        link
      }
      meta {
        cursor
        hasMoreItems
      }
    }
  }
`

const LIST__TESTIMONIALS = gql`
  {
    listTestimonials(sort:createdOn_ASC) {
      data {
        text
        name
        image
        position
      }
    }
  }
`

function Articles() {

  const [limit, setLimit] = useState(6)
  const {data: testimonialsData} = useQuery(LIST__TESTIMONIALS)
  const {data: featured} = useQuery(LIST__FEATURED__ARTICLES)
  const {data} = useQuery(LIST__ARTICLES, {
    variables: {
      limit: limit,
    }
  })

  const [windowWidth, setWindowWidth] = useState(0)
  const [articles, setArticles] = useState([])
  const [testimonials, setTestimonials] = useState([])
  const [filteredArticles, setFilteredArticles] = useState([])
  const [featuredArticles, setFeaturedArticles] = useState(null)

  const [searchValue, setSearchValue] = useState('')
  const [languages, setLanguagues] = useState([])
  const [frameworks, setFrameworks] = useState([])
  const arr = [2]

  const windowWidthSetter = () => {
    setWindowWidth(document.body.clientWidth)
  }

  // function that runs when the "All" filter option is clicked
  const displayAll = () => {
    setSearchValue('')
    setLanguagues([])
    setFrameworks([])
  }

  useEffect(() => {
    if(testimonialsData) {  
      setTestimonials(testimonialsData.listTestimonials.data)
    }
  }, [testimonialsData])

  // filter by language and frameworks
  useEffect(() => {
    if(articles) {
      let filtered = articles
      // for language select
      if(languages.length) {
        filtered = filtered.filter((article) => {
          const languageFiltered = article.language.filter(articleLanguage => (
            languages.includes(articleLanguage)
          ))
          if(languageFiltered.length) return true
          else return false
        })
      }
      // for framework select
      if(frameworks.length) {
        filtered = filtered.filter((article) => {
          const tagsFiltered = article.tags.filter(articleTag => (
            frameworks.includes(articleTag)
          ))
          if(tagsFiltered.length) return true
          else return false
        })
      }
      setFilteredArticles(filtered)
    }
  },[languages, frameworks, articles])

  useEffect(() => {
    if(data) {
      setArticles(data.listArticles.data)
    }
    if(featured) {
      setFeaturedArticles(featured.listFeaturedArticles.data)
    }
  }, [data, featured])

  // filtering articles when the seach value changes
  useEffect(() => {
    if(data?.listArticles?.data) {
      const filtered = data?.listArticles?.data.filter((article) => (
        article.topic.trim().toLowerCase().includes(searchValue.trim().toLowerCase())
      ))
      setArticles(filtered)
    }

  }, [searchValue, data?.listArticles?.data])

  // scrolling page to the top when it loads and tracking the width of the browse window
  useEffect(() => {
    window.scrollTo({top:0})
    setWindowWidth(document.body.clientWidth)
    window.addEventListener('resize', windowWidthSetter)
    // unsubscribe listeners
    return () => {
      window.removeEventListener('resize', windowWidthSetter)
    }
  }, [])

  return (
    <div className='articles'>
      <Hero 
        text1='Articles'
        text2='A collection of articles I’ve written'
      >
        <div className='articles__testimonials'>
          {testimonials.map((testimonial, i) => (
            <Testimonial 
              key={i}
              text={testimonial.text}
              author={testimonial.name}
              authorImg={testimonial.image}
              position={testimonial.position}
            />
          ))}
        </div>
      </Hero>
      <div className='wrapper'>
        <h2 className='section-heading'>Featured articles</h2>
        <p>Here are some of my recently featured articles</p>
        <div className='featured__list'>
          {featuredArticles &&
            <>
              <Article 
                link={featuredArticles[0].link}
                image={featuredArticles[0].image}
                publishedDate={featuredArticles[0].publishedDate}
                tags={featuredArticles[0].tags}
                title={featuredArticles[0].topic}
                description={featuredArticles[0].summary}
              />
              <div className='featured__listg2'>
                <Article 
                  link={featuredArticles[1].link}
                  direction={windowWidth >= 560 ? 'row' : ''}
                  image={featuredArticles[1].image}
                  publishedDate={featuredArticles[1].publishedDate}
                  tags={featuredArticles[1].tags}
                  title={featuredArticles[1].topic}
                  description={featuredArticles[1].summary}
                />
                <Article 
                  link={featuredArticles[2].link}
                  direction={windowWidth >= 560 ? 'row' : ''}
                  image={featuredArticles[2].image}
                  publishedDate={featuredArticles[2].publishedDate}
                  tags={featuredArticles[2].tags}
                  title={featuredArticles[2].topic}
                  description={featuredArticles[2].summary}
                />
              </div>
            </>
          }
        </div>
      </div>

      <div className='wrapper'>
        <h2 className='section-heading'>All articles</h2>
        <p>Browse through all my articles</p>
        <div className='searchNfilter'>
          <Search value={searchValue} setState={setSearchValue} />
          <Filter 
            displayAll={displayAll}
            languages={languages}
            setLanguagues={setLanguagues}
            frameworks={frameworks}
            setFrameworks={setFrameworks}
          />
        </div>
        <div className='articles__list'>
          {filteredArticles && filteredArticles.map((article, i) => {
            let reduceTop = false
            arr.push(arr[i] + 3)
            if(arr.includes(i+1)) reduceTop = true
            else reduceTop = false 
            return (
              <Article 
                key={i}
                reduceTop={reduceTop}
                image={article.image}
                publishedDate={article.publishedDate}
                tags={article.tags}
                title={article.topic}
                description={article.summary}
                link={article.link}
              />
            )
          })}          
        </div>
        <button
          className='loadMore'
          disabled={!data?.listArticles.meta?.hasMoreItems && true}
          style={{
            cursor: `${data?.listArticles.meta?.hasMoreItems ? 'pointer' : 'unset'}`, 
          }}
          onClick={() => {setLimit(limit + 6)}}>
          Load more
        </button>
      </div>
    </div>
  )
}

export default Articles
