import './index.css'
import css from '../images/css3.svg'
import django from '../images/django.svg'
import html from '../images/html.svg'
import javascript from '../images/javascript.svg'
import react from '../images/react.svg'
import sass from '../images/sass.svg'
import Skill from './Skill'


function Skills(){
  return(
      <div className="skills wrapper">
        <Skill icon={javascript} name="JavaScript"/>
        <Skill icon={react} name="React"/>
        <Skill icon={django} name="Django"/>
        <Skill icon={html} name="HTML"/>
        <Skill icon={css} name="Css" id="cssIcon"/>
        <Skill icon={sass} name="Sass"/>
      </div>
  )
}

export default Skills