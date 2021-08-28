import medium from '../images/medium.svg'
import loginradius from '../images/loginradius.png'

const articleData = [
  {
    title: "Understanding Hoisting in JavaScript",
    tags: ["JavaScript"],
    intro: `
    Hoisting is a JavaScript behavior where functions 
    and variable declarations are given memory space before 
    code execution.
    `,
    publication: "Medium",
    icon: medium,
    link: "https://tammibriggs.medium.com/understanding-hoisting-in-javascript-3963d913a5b"
  },

  {
    title: "How to implement Registration and Authentication in DJnago",
    tags: ["Django"],
    intro: `
    In this tutorial, you will learn how to implement user 
    registration and authentication in Django using LoginRadius
    `,
    publication: "LoginRadius",
    icon: loginradius,
    link: "https://www.loginradius.com/blog/async/guest-post/implementing-registration-and-authentication-in-django-using-LoginRadius/"
  }
]

export default articleData
