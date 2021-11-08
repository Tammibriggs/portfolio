import './skill.css'

function Skill({icon, name, id, width}){
  return (
    <span className="skill">
      <img src={icon} alt="Javascript" id={id} style={{width}}/>
      <span>{name}</span>
    </span>
  )
}

export default Skill