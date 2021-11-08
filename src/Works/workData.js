import github_repo_page from '../images/github_repo_page.png'
import amazon_clone from '../images/amazon_clone.png'
import hulu from '../images/hulu.png'
import instagram from '../images/instagram.png'
import disney_mockup from '../images/disney_mockup.png'
import fabfashion from '../images/fabfashion.png'

const workData = [
  {
    image: amazon_clone,
    name: "Amazon clone",
    tags: ["React", "Express", "Firebase"],
    link: "https://tammibriggs-amz-clone.web.app/",
    description: `In this site, I used Firebase to handle User Registration, 
    Authentication, and sending of Strapi Client-secret from an Express API using Firebase functions.
    I used Strapi to handle payments.
    `
  },
  {
    image: fabfashion,
    name: "FabFashion",
    tags: ["React","Redux tookit", "Redux persist", "Stripe","Node", "Express"],
    link: "https://tammibriggs-fabfashion.firebaseapp.com/",
    description: `This is a fashion base e-commerce site. In this site, I am accessing the user's and products information from a REST API I 
    created with Express and Node, I used Redux for state management, Redux persist for caching data and Stripe for payment.`
  },
  {
    image: instagram,
    name: "Instagram clone",
    tags: ["Next", "NextAuth", "Firebase", "Tailwind"],
    link: "https://tammibriggs-instagram-clone.vercel.app/",
    description: `In this site, I used Next Auth to handle user log-in and Firebase Firestore 
    to handle the creation of a new post, comment, and liking of a post.`
  },
  {
    image: disney_mockup,
    name: "Disney clone",
    tags: ["React", "Redux", "Styled-components", "Firebase", "React Slick"],
    link: "https://tammibriggs-disney-clone.firebaseapp.com/login",
    description: `In this site, I used Google authentication provided by Firebase to log in
    users, Firebase Firestore to store and retrieve movie data, and Redux to manage the user and movie state.`
  },
  {
    image: github_repo_page,
    name: "Github Repo page",
    tags: ["HTML","CSS","JavaScript"],
    link: "https://github-repo-page.netlify.app/",
    description: `In this site, I used GitHub Graphql API to retrieve the 
    repositories and profile information of a GitHub user.`
  },
  {
    image: hulu,
    name: "Hulu clone",
    tags: ["Next", "Tailwind"],
    link: "https://tammibriggs-hulu-clone.vercel.app/",
    description: `In this site, I used the TMDB API to get the information of different genres
    of movies. Then I create a slick responsible design using TailWind css.`
  },
  // {
  //   image: airbnb,
  //   name: "Airbnb clone",
  //   tags: ["React"],
  //   link: "https://tammibriggs-airbnb-clone.netlify.app/",
  //   description: `A responsive clone of Airbnb built with React and React Routers
  //   using static data.`
  // },
  // {
  //   image: whatsapp_clone,
  //   name: "Whatsapp clone",
  //   tags: ["React", "Firebase"],
  //   link: "https://whatsapp-clone-3435d.web.app/",
  //   description: `
  //   A clone of Whatapp build with React and Firebase. In this site,
  //   rather than using contact info, you can use your google account
  //   to sign in and chat with other in thesame group with you.
  //   `
  // },
  // {
  //   image: saiown_mockup,
  //   name: "Saiown",
  //   tags: ["React", "Sass"],
  //   link: "https://hacker-newsapp.netlify.app/",
  //   description: `
  //     In this site, I fetched and displayed the latest Computer science and 
  //     Entrepreneurship news from Hacker news API. I included features like Client-side caching, 
  //     Pagination, Server-side searching and more.
  //   `
  // }

]

export default workData