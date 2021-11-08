import './index.css'
import css from '../images/css3.svg'
import django from '../images/django.svg'
import html from '../images/html.svg'
import javascript from '../images/javascript.svg'
import react from '../images/react.svg'
import sass from '../images/sass.svg'
import next from '../images/next.svg'
import tailwind from '../images/tailwind.svg'
import Skill from './Skill'


function Skills(){
  return(
      <div className="skills wrapper">
        <Skill icon={react} name="React.js"/>
        <Skill icon={next} name="Next.js" width={50}/>
        <Skill icon={django} name="Django"/>
        <Skill icon={javascript} name="JavaScript"/>
        <Skill icon={html} name="HTML"/>
        <Skill icon={css} name="Css" id="cssIcon"/>
        <Skill icon={sass} name="Sass"/>
        <Skill icon={tailwind} name="Tailwind Css"/>
      </div>
  )
}

export default Skills