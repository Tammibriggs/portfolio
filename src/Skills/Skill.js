import './skill.css'

function Skill({icon, name, id}){
  return (
    <span className="skill">
      <img src={icon} alt="Javascript" id={id}/>
      <span>{name}</span>
    </span>
  )
}

export default Skill