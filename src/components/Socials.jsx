import '../styles/socials.css'
import { useContextValue } from '../context'

const socials = [
  { name: 'GitHub', href: 'https://github.com/Tammibriggs', icon: 'github' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/taminoturoko-briggs-b98251203/', icon: 'linkedin' },
]

function Socials() {

  const { isLight } = useContextValue()

  return (
    <div className="socials">
      {socials.map(({ name, href, icon }) => (
        <a key={name} href={href} target="_blank" rel="noopener noreferrer">
          <img src={`/assets/${icon}${isLight ? '' : '-light'}.png`} alt={name} />
        </a>
      ))}
    </div>
  )
}

export default Socials
