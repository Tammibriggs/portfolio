import '../styles/home.css'
import Hero from '../components/Hero';
import About from '../components/About';
import Work from '../components/Work';
import Article from '../components/Article';
import { Link } from 'react-router-dom';
import {useContextValue} from '../context'
import { gql, useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import Email from '../components/Email'


const LIST_FEATURED_PROJECTS = gql`
  query ListFeaturedProjects($where: DeployedProjectListWhereInput){
    listDeployedProjects(where: $where, sort:createdOn_ASC) {
      data {
        image
        name
        description
        githubLink
        projectLink
        techIcons {
          dark
          light
        }
      }
    }
  }
`

const LIST__ARTICLES = gql`
  query ListArticles($limit: Int) {
    listFeaturedHomeArticles(limit: $limit, sort:createdOn_DESC) {
      data {
        image
        topic
        publishedDate
        tag
        summary
        link
      }
    }
  }
`

const LIST__ABOUTS = gql`
  {
    listAbouts{
      data {
        profileImage
        technologies {
        darkIcon {
          name
          icon
        }
        lightIcon {
          name
          icon
        }
      }
        description
      }
    }
  }
`

function Home() {

  const {isLight} = useContextValue()
  const [projects, setProjects] = useState(null)
  const [articles, setArticles] = useState(null)
  const [about, setAbout] = useState(null)
  const arr = [2]

  const {data: aboutData} = useQuery(LIST__ABOUTS)

  const {data} = useQuery(LIST_FEATURED_PROJECTS, {
    variables: {
      where: {featured: true}
    }
  })

  const {data: articlesData} = useQuery(LIST__ARTICLES, {
    variables: {
      limit: 6
    }
  })

  useEffect(() => {
    if(data) {
      setProjects(data.listDeployedProjects.data)
    }
    if(articlesData) {
      setArticles(articlesData.listFeaturedHomeArticles.data)
    }
    if(aboutData) {
      setAbout(aboutData.listAbouts.data[0])
    }
  }, [data, articlesData, aboutData])

  return (
    <div className='home'>
      <Hero 
        text1='👋🏾 Hey, my name is Taminoturoko Briggs, I’m a'
        text2='React developer and Technical writer'
      />
      <div className='wrapper home__about'>
        <h2 className='section-heading'>About me</h2>
        {/* <p>Let me introduce myself</p> */}
        {about &&
          <About
            text={about.description}
            image={about.profileImage} 
            technologies={about.technologies}
          />
        } 
      </div>
      <div className='works wrapper'> 
        <h2 className='section-heading'>Things I’ve built</h2>
        <p>Here are some of my featured projects</p>
        <div className='works__list'>
          {projects && projects.map((project, i) => (
            <Work 
              key={i}
              image={project.image}
              name={project.name}
              description={project.description}
              gitHubLink={project.githubLink}
              projectLink={project.projectLink}
              techIcons={project.techIcons}
            />
          ))}
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
        {articles && articles.map((article, i) => {
            let reduceTop = false
            arr.push(arr[i] + 3)
            if(arr.includes(i+1)) reduceTop = true
            else reduceTop = false 
            return (
              <Article 
                key={i}
                image={article.image}
                reduceTop={reduceTop}
                publishedDate={article.publishedDate}
                tags={article.tag}
                title={article.topic}
                description={article.summary}
                link={article.link}
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
      <div className='wrapper' style={{maxWidth: '800px'}}>
        <h2 className='section-heading'>Get in touch</h2>
        <p>
          Feel free to contact me if you want to work on a project, 
          have a content proposal or just to say hi!
        </p>
        <Email />
      </div>
    </div>
  )
}

export default Home
