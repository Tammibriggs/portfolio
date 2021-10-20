import saiown_mockup from '../images/saiown_mockup.png'
import github_repo_page from '../images/github_repo_page.png'
import amazon_clone from '../images/amazon_clone.png'
import whatsapp_clone from '../images/whatsapp_clone.png'

const workData = [
  {
    image: amazon_clone,
    name: "Amazon clone",
    tags: ["React", "Express"],
    link: "https://challange-5f99e.web.app/",
    description: `A clone of Amazon built with React and Express. 
    The app includes features like User Registration, User Authentication, 
    Stripe payment functionality, Shopping cart, and more.`
  },
  {
    image: whatsapp_clone,
    name: "Whatsapp clone",
    tags: ["React", "Firebase"],
    link: "https://whatsapp-clone-3435d.web.app/",
    description: `
    A clone of Whatsapp built with React and Firestore. 
    Rather than using contact, you can use your google account
    to sign in and chat with other in thesame group with you.
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
  },
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
  }

]

export default workData