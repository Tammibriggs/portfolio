import saiown_mockup from '../images/saiown_mockup.png'
import github_repo_page from '../images/github_repo_page.png'


const workData = [
  {
    image: saiown_mockup,
    name: "Saiown",
    tags: ["React", "Sass"],
    link: "https://hacker-newsapp.netlify.app/",
    description: `
      Saiown is a React app that fetches the latest
      Computer science and Entrepreneurship news from 
      Hacker news API. The app has features like Client-side caching, 
      Pagination, Server-side searching.
    `
  },

  {
    image: github_repo_page,
    name: "Github Repo page",
    tags: ["JavaScript"],
    link: "https://github-repo-page.netlify.app/",
    description: `
    A clone of Github's repository page created with HTML, CSS, 
    and JavaScript. In this app, I used Github's Graphql API to fetch 
    the repository and profile data of the supplied Github user.
    `
  }
]

export default workData